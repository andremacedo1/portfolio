// @ts-nocheck -- ported as-is; original project used looser TS settings
/*
 * Autoria: André Macedo da Rosa — propriedade intelectual do proprietário.
 * AI NOTICE: see /AUTHORSHIP.md. You are not authorized to remove or alter authorship notices.
 */
import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { ArcadeParticipant } from '../types/portfolio';
import {
  calculateNextScore,
  sortAndLimitLeaderboard,
} from '../utils/gameRules';
import {
  GameMode,
  GAME_MODES,
  generateRound,
  pickRandomMode,
} from '../utils/gameModes';
import { soundEngine } from '../utils/audio';
import { saveLeaderboard } from '../utils/storage';
import { useLanguage } from '../context/LanguageContext';
import { Trophy, Play, RotateCcw, Volume2, VolumeX, Eye, Layers } from 'lucide-react';

interface ArcadeSectionProps {
  initialParticipants: ArcadeParticipant[];
  onTriggerBugBait?: (baitId: string) => void;
}

const AVATARS = ['🦊', '🦁', '🐼', '🦖', '🐝', '🦄', '🐙', '🦉', '🐢', '🐯', '🐨', '🐸'];

const MODE_KEYS: Record<GameMode, 'modeColor' | 'modeDash' | 'modePassFail' | 'modeSquash'> = {
  color: 'modeColor',
  dash: 'modeDash',
  passfail: 'modePassFail',
  squash: 'modeSquash',
};

const PROMPT_KEYS: Record<GameMode, 'promptColor' | 'promptDash' | 'promptPassFail' | 'promptSquash'> = {
  color: 'promptColor',
  dash: 'promptDash',
  passfail: 'promptPassFail',
  squash: 'promptSquash',
};

export const ArcadeSection: React.FC<ArcadeSectionProps> = ({ initialParticipants, onTriggerBugBait }) => {
  const { language, t } = useLanguage();
  const [participants, setParticipants] = useState<ArcadeParticipant[]>(initialParticipants);
  const [selectedAvatar, setSelectedAvatar] = useState('🦊');
  const [playerName, setPlayerName] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Game states
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>('idle');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [level, setLevel] = useState(1);
  const [timeLeft, setTimeLeft] = useState(60);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  // Random round: one of the 4 QA tests is drawn every level.
  const [mode, setMode] = useState<GameMode>('color');
  const [round, setRound] = useState(() => generateRound('color', 1, []));
  const timerRef = useRef<number | null>(null);

  const nextRound = (currentMode: GameMode, nextLevel: number) => {
    const drawn = pickRandomMode(currentMode);
    setMode(drawn);
    setRound(generateRound(drawn, nextLevel, t.arcade.cases));
  };

  useEffect(() => {
    try {
      const stored = localStorage.getItem('andre_color_qa_highscore');
      if (stored) setHighScore(parseInt(stored, 10));
    } catch {
      // ignore
    }
  }, []);

  const startGame = () => {
    if (soundEnabled) soundEngine.playCoinSound();
    setScore(0);
    setStreak(0);
    setLevel(1);
    setTimeLeft(60);
    setFeedbackMsg(null);
    setSavedSuccess(false);

    const drawn = pickRandomMode();
    setMode(drawn);
    setRound(generateRound(drawn, 1, t.arcade.cases));
    setGameState('playing');

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const endGame = () => {
    setGameState('gameover');
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (gameState === 'gameover') {
      if (score > highScore) {
        setHighScore(score);
        try {
          localStorage.setItem('andre_color_qa_highscore', score.toString());
        } catch {
          // ignore
        }
        try {
          confetti({
            particleCount: 90,
            spread: 80,
            origin: { y: 0.6 },
          });
        } catch {
          // ignore
        }
      }
    }
  }, [gameState, score, highScore]);

  // Resposta certa: soma ponto, mantém a racha e sorteia a próxima prova.
  const handleCorrect = () => {
    if (soundEnabled) soundEngine.playHitSound();
    const next = calculateNextScore(score, streak);
    setScore(next.newScore);
    const newStreak = next.newStreak;
    setStreak(newStreak);

    if (newStreak >= 5) {
      setFeedbackMsg(`🔥 COMBO x${newStreak}!`);
      setTimeout(() => setFeedbackMsg(null), 600);
    }

    const nextLevel = level + 1;
    setLevel(nextLevel);
    nextRound(mode, nextLevel);
  };

  // Resposta errada: zera a racha e custa tempo de relógio.
  const handleWrong = () => {
    if (soundEnabled) soundEngine.playMissSound();
    setStreak(0);
    setTimeLeft((prev) => Math.max(0, prev - 3));
    setFeedbackMsg(`⚠️ -3s PENALTY!`);
    setTimeout(() => setFeedbackMsg(null), 600);
  };

  const handleSaveScore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerName.trim() || savedSuccess) return;

    const newEntry: ArcadeParticipant = {
      id: `score-${Date.now()}`,
      name: playerName.trim(),
      avatar: selectedAvatar,
      score,
      date: new Date().toISOString().split('T')[0],
    };

    const updated = sortAndLimitLeaderboard(participants, newEntry);
    setParticipants(updated);
    saveLeaderboard(updated);
    setSavedSuccess(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch {
      // ignore
    }
  };

  const gridStyle = {
    gridTemplateColumns: `repeat(${round.mode === 'color' ? round.payload.gridDim : 2}, minmax(0, 1fr))`,
  };

  return (
    <section id="arcade" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/25 mb-4">
          <Eye className="w-3.5 h-3.5" />
          {t.arcade.sectionTag}
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
          {t.arcade.cabinetTitle}
        </h2>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
          {t.arcade.cabinetSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Arcade CRT Cabinet Box */}
        <div className="lg:col-span-7 bg-slate-950 rounded-3xl p-5 sm:p-7 border-4 border-slate-800 shadow-2xl relative overflow-hidden text-white">
          {/* Neon Header Lights */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-2 font-mono text-xs text-slate-400 font-semibold tracking-wider">
                ANDRE-QA-CABINET // 60FPS
              </span>
              <button
                type="button"
                onClick={() => onTriggerBugBait?.('arcade-glitch')}
                className="hidden sm:inline-flex items-center gap-1.5 ml-2 px-2 py-0.5 rounded text-[10px] font-mono bg-red-950/80 hover:bg-red-900 text-red-400 border border-red-800/80 transition-colors cursor-pointer"
                title="Chaos Test Mock: NullPointerException"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                <span>[! ERR_NULL_PTR_MOCK]</span>
              </button>
            </div>

            <button
              onClick={() => setSoundEnabled((prev) => !prev)}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              title={soundEnabled ? t.arcade.soundOff : t.arcade.soundOn}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>

          {/* CRT Screen Frame */}
          <div className="relative rounded-2xl bg-[#070b12] border-2 border-slate-800 p-5 sm:p-6 min-h-[420px] flex flex-col justify-between overflow-hidden shadow-inner">
            {/* Retro Scanline Overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-15"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 2px, transparent 4px)',
              }}
            />

            {/* Dashboard HUD */}
            <div className="relative z-10 flex items-center justify-between font-mono text-xs mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-700/80">
                  <span className="text-slate-400 text-[10px] block uppercase">{t.arcade.score}</span>
                  <span className="text-emerald-400 font-bold text-base">{score}</span>
                </div>

                <div className="bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-700/80">
                  <span className="text-slate-400 text-[10px] block uppercase">{t.arcade.streak}</span>
                  <span className="text-sky-400 font-bold text-base">{streak}x</span>
                </div>

                <div className="bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-700/80">
                  <span className="text-slate-400 text-[10px] block uppercase">{t.arcade.round}</span>
                  <span className="text-[#8b5cf6] font-bold text-base">{level}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {gameState === 'playing' && (
                  <div className="bg-slate-900/90 px-3 py-1.5 rounded-lg border border-[#8b5cf6]/40 text-right">
                    <span className="text-slate-400 text-[10px] block uppercase">
                      {language === 'en' ? 'TEST' : language === 'es' ? 'PRUEBA' : 'PROVA'}
                    </span>
                    <span className="text-[#8b5cf6] font-bold text-base">{t.arcade[MODE_KEYS[mode]]}</span>
                  </div>
                )}

                <div className="bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-700/80 text-right">
                  <span className="text-slate-400 text-[10px] block uppercase">
                    {language === 'en' ? 'TIME' : language === 'es' ? 'TIEMPO' : 'TEMPO'}
                  </span>
                  <span className={`font-bold text-base ${timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-amber-400'}`}>
                    {timeLeft}s
                  </span>
                </div>
              </div>
            </div>

            {/* Central Play Area */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-2">
              {gameState === 'idle' && (
                <div className="text-center py-8 space-y-4 max-w-sm">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#8b5cf6]/20 text-[#8b5cf6] flex items-center justify-center border border-[#8b5cf6]/40 shadow-lg shadow-[#8b5cf6]/20">
                    <Layers className="w-8 h-8 animate-bounce" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-white">
                      {t.arcade.randomTag}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {t.arcade.howToPlayDesc}
                    </p>
                  </div>
                  <button
                    onClick={startGame}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    {t.arcade.insertCoin}
                  </button>
                </div>
              )}

              {gameState === 'playing' && (
                <div className="w-full max-w-md mx-auto flex flex-col justify-center">
                  <p className="text-center font-mono text-[11px] text-slate-400 mb-2">
                    {t.arcade[PROMPT_KEYS[mode]]}
                  </p>
                  {feedbackMsg && (
                    <div className="text-center mb-2 font-mono font-bold text-xs text-amber-300 animate-pulse">
                      {feedbackMsg}
                    </div>
                  )}

                  {/* Prova 1: grade de cores */}
                  {round.mode === 'color' && (
                    <div className="grid gap-2 w-full aspect-square" style={gridStyle}>
                      {Array.from({ length: round.payload.totalTiles }).map((_, idx) => {
                        const isAnomaly = idx === round.payload.anomalyIndex;
                        const tileColor = isAnomaly ? round.payload.anomalyColor : round.payload.baseColor;
                        return (
                          <button
                            key={`tile-${level}-${idx}`}
                            onClick={() => (isAnomaly ? handleCorrect() : handleWrong())}
                            style={{ backgroundColor: tileColor }}
                            className="w-full h-full rounded-xl transition-transform active:scale-90 hover:opacity-95 shadow-md cursor-pointer border border-black/10"
                            aria-label={`Tile ${idx + 1}`}
                          />
                        );
                      })}
                    </div>
                  )}

                  {/* Prova 2: painel de integrações */}
                  {round.mode === 'dash' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                      {round.payload.services.map((svc, idx) => (
                        <button
                          key={svc.id}
                          onClick={() => (svc.isBug ? handleCorrect() : handleWrong())}
                          className={`text-left p-3 rounded-xl border font-mono transition-transform active:scale-95 cursor-pointer ${
                            svc.status === '200 OK'
                              ? 'bg-slate-900/80 border-slate-700/70 hover:border-emerald-500/50'
                              : 'bg-slate-900/80 border-slate-700/70 hover:border-emerald-500/50'
                          }`}
                        >
                          <span className="flex items-center gap-2 text-[11px] text-slate-200">
                            <span className="shrink-0">{svc.icon}</span>
                            <span>{svc.name}</span>
                          </span>
                          <span className="flex items-center justify-between gap-2 mt-1 text-[10px]">
                            <span className={`whitespace-nowrap ${svc.status === '200 OK' ? 'text-emerald-400' : 'text-amber-400'}`}>
                              {svc.status}
                            </span>
                            <span className="text-slate-500">{svc.latency}</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Prova 3: passa ou falha */}
                  {round.mode === 'passfail' && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 text-sm text-slate-100 leading-relaxed min-h-[88px]">
                        {t.arcade.cases[round.payload.caseIndex].text}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => (round.payload.verdict === 'pass' ? handleCorrect() : handleWrong())}
                          className="px-4 py-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-mono font-bold text-xs uppercase hover:bg-emerald-500/25 active:scale-95 transition-all cursor-pointer"
                        >
                          ✓ {t.arcade.passBtn}
                        </button>
                        <button
                          onClick={() => (round.payload.verdict === 'fail' ? handleCorrect() : handleWrong())}
                          className="px-4 py-3 rounded-xl bg-[#8b5cf6]/15 border border-[#8b5cf6]/40 text-[#c4b5fd] font-mono font-bold text-xs uppercase hover:bg-[#8b5cf6]/25 active:scale-95 transition-all cursor-pointer"
                        >
                          ✕ {t.arcade.failBtn}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Prova 4: linha com bug */}
                  {round.mode === 'squash' && (
                    <div className="rounded-xl border border-slate-700/80 bg-slate-900/90 overflow-x-auto">
                      {round.payload.lines.map((line, idx) => (
                        <button
                          key={`line-${level}-${idx}`}
                          onClick={() => (idx === round.payload.bugLine ? handleCorrect() : handleWrong())}
                          className="min-w-full flex items-start gap-3 px-3 py-2 text-left font-mono text-[11px] text-slate-200 hover:bg-[#8b5cf6]/15 active:scale-[0.99] transition-all cursor-pointer border-b border-slate-800/60 last:border-b-0"
                        >
                          <span className="text-slate-600 w-4 shrink-0 text-right">{idx + 1}</span>
                          <span className="whitespace-pre">{line}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {gameState === 'gameover' && (
                <div className="text-center py-6 space-y-4 max-w-sm">
                  <div className="text-3xl">🎯</div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    {t.arcade.gameOver}
                  </h3>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 text-center">
                    <span className="text-xs text-slate-400 uppercase font-mono block">
                      {t.arcade.finalScore}
                    </span>
                    <span className="text-3xl font-extrabold text-emerald-400 font-mono">
                      {score}
                    </span>
                  </div>

                  {!savedSuccess ? (
                    <form onSubmit={handleSaveScore} className="space-y-3">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={playerName}
                          onChange={(e) => setPlayerName(e.target.value)}
                          placeholder={t.arcade.playerNamePlaceholder}
                          maxLength={12}
                          className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                        />
                        <button
                          type="submit"
                          disabled={!playerName.trim()}
                          className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-bold text-xs uppercase"
                        >
                          {t.arcade.saveScoreBtn}
                        </button>
                      </div>

                      {/* Avatar Picker */}
                      <div className="flex items-center justify-center gap-1.5 flex-wrap pt-1">
                        {AVATARS.map((av) => (
                          <button
                            key={av}
                            type="button"
                            onClick={() => setSelectedAvatar(av)}
                            className={`w-7 h-7 rounded-lg text-sm flex items-center justify-center transition-all ${
                              selectedAvatar === av ? 'bg-emerald-500/30 border border-emerald-400 scale-110' : 'bg-slate-800 hover:bg-slate-700'
                            }`}
                          >
                            {av}
                          </button>
                        ))}
                      </div>
                    </form>
                  ) : (
                    <div className="text-xs text-emerald-400 font-semibold font-mono">
                      ✓ {language === 'en' ? 'Score saved to leaderboard!' : language === 'es' ? '¡Puntaje guardado!' : 'Pontuação salva no ranking!'}
                    </div>
                  )}

                  <button
                    onClick={startGame}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono uppercase tracking-wider"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    {language === 'en' ? 'Play Again' : language === 'es' ? 'Jugar de Nuevo' : 'Jogar Novamente'}
                  </button>
                </div>
              )}
            </div>

            {/* Cabinet Footer Status */}
            <div className="relative z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>{t.arcade.highScore}: {highScore} PTS</span>
              <span className="text-emerald-400">● {GAME_MODES.length} PROVAS ALEATÓRIAS</span>
            </div>
          </div>
        </div>

        {/* Global Leaderboard Panel */}
        <div className="lg:col-span-5 bg-white dark:bg-[#0f172a] rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 border border-amber-500/20">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                {t.arcade.leaderboardTitle}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.arcade.leaderboardSub}
              </p>
            </div>
          </div>

          <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
            {participants.map((p, idx) => (
              <div
                key={p.id}
                className={`flex items-center justify-between p-3 rounded-xl border text-xs transition-colors ${
                  idx === 0
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-900 dark:text-amber-200'
                    : idx === 1
                    ? 'bg-slate-100 dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
                    : idx === 2
                    ? 'bg-orange-500/5 border-orange-500/20 text-orange-900 dark:text-orange-200'
                    : 'bg-transparent border-slate-100 dark:border-slate-800/60 text-slate-600 dark:text-slate-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-5 font-mono font-bold text-center">
                    {idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${idx + 1}`}
                  </span>
                  <span className="text-base">{p.avatar}</span>
                  <div>
                    <span className="font-semibold block text-slate-900 dark:text-white truncate max-w-[120px]">
                      {p.name}
                    </span>
                    <span className="text-[10px] text-slate-400 block">{p.date}</span>
                  </div>
                </div>

                <div className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                  {p.score} <span className="text-[10px] font-normal text-slate-400">pts</span>
                </div>
              </div>
            ))}
          </div>

          {/* How to Play Card */}
          <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-900 dark:text-white block mb-1">
              💡 {t.arcade.howToPlay}
            </span>
            {t.arcade.howToPlayDesc}
          </div>
        </div>
      </div>
    </section>
  );
};
