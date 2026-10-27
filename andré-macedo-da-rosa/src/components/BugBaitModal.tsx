import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { soundEngine } from '../utils/audio';
import { X, ShieldCheck, CheckCircle2, RotateCcw, AlertTriangle, Sparkles } from 'lucide-react';

interface BugBaitModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentBaitId: string | null;
  foundBaits: string[];
  onReset: () => void;
}

interface BaitInfo {
  id: string;
  code: string;
  titlePt: string;
  titleEn: string;
  titleEs: string;
  trapPt: string;
  trapEn: string;
  trapEs: string;
  solutionPt: string;
  solutionEn: string;
  solutionEs: string;
}

const ALL_BAITS: BaitInfo[] = [
  {
    id: 'f12-console-trap',
    code: 'QA-DEVTOOLS-01',
    titlePt: 'Falso Memory Leak no Console (F12)',
    titleEn: 'Mock Exception & Leak in F12 DevTools',
    titleEs: 'Falsa Excepción y Fuga en Consola (F12)',
    trapPt: 'Você abriu o DevTools (F12), encontrou o erro simulado de TypeError no console e executou o comando investigativo.',
    trapEn: 'You pressed F12, found the simulated TypeError stack trace in console, and executed the investigative probe.',
    trapEs: 'Abriste DevTools (F12), encontraste el stack trace simulado de TypeError en consola y ejecutaste el comando investigativo.',
    solutionPt: 'Zero falhas não tratadas em produção! Arquitetura SDET com observabilidade contínua (Datadog/Grafana), testes de regressão no CI/CD e tratamento defensivo com circuit breakers.',
    solutionEn: 'Zero unhandled exceptions in production! SDET architecture with continuous observability (Datadog/Grafana), regression tests in CI/CD, and circuit breaker patterns.',
    solutionEs: '¡Cero fallos no controlados en producción! Arquitectura SDET con observabilidad (Datadog/Grafana), pruebas de regresión en CI/CD y circuit breakers.',
  },
  {
    id: 'dom-inspector',
    code: 'QA-DOM-02',
    titlePt: 'Armadilha Secreta no Element Inspector (DOM)',
    titleEn: 'Secret Honeypot in Element Inspector (DOM)',
    titleEs: 'Trampa Secreta en Inspector de Elementos (DOM)',
    trapPt: 'Você inspecionou o código-fonte HTML procurando tags órfãs ou atributos suspeitos e encontrou o elemento com data-qa-honeypot.',
    trapEn: 'You inspected the DOM markup probing for broken elements and triggered the secret data-qa-honeypot element.',
    trapEs: 'Inspeccionaste el código HTML buscando etiquetas rotas y activaste el elemento secreto con data-qa-honeypot.',
    solutionPt: 'Automação moderna e acessibilidade: seletores E2E resilientes orientados a data-testid, conformidade semântica WCAG e markup 100% validado.',
    solutionEn: 'Modern test automation & accessibility: resilient E2E selectors powered by data-testid, WCAG compliance, and verified DOM markup.',
    solutionEs: 'Automatización moderna y accesibilidad: selectores E2E con data-testid, cumplimiento WCAG y markup 100% validado.',
  },
  {
    id: 'race-condition',
    code: 'QA-RACE-03',
    titlePt: 'Parâmetro Suspeito "retry_limit: 3/2" na Panorama',
    titleEn: 'Suspicious Parameter "retry_limit: 3/2" at Panorama',
    titleEs: 'Parámetro Sospechoso "retry_limit: 3/2" en Panorama',
    trapPt: 'Você notou a tag "retry_limit: 3/2" na Panorama Sistemas — um clássico overflow de reprocessamento assíncrono.',
    trapEn: 'You spotted the "retry_limit: 3/2" tag at Panorama Sistemas — a classic asynchronous retry overflow edge case.',
    trapEs: 'Notaste la etiqueta "retry_limit: 3/2" en Panorama Sistemas — un clásico desbordamiento de reintentos asíncronos.',
    solutionPt: 'Nas integrações com 27 marketplaces (Mercado Livre Full, AliExpress, Temu), mitigamos condições de corrida com locks distribuídos no Redis, idempotência estrita via UUID e Dead Letter Queues.',
    solutionEn: 'Across 27 marketplace integrations (Mercado Libre Full, AliExpress, Temu), we prevent race conditions with Redis locks, strict UUID idempotency, and DLQs.',
    solutionEs: 'En 27 marketplaces (Mercado Libre Full, AliExpress, Temu), mitigamos condiciones de carrera con bloqueos en Redis, idempotencia con UUID y Dead Letter Queues.',
  },
  {
    id: 'navbar-error',
    code: 'QA-METRIC-04',
    titlePt: 'Telemetria de API Gateway com Jitter',
    titleEn: 'API Gateway Telemetry with Jitter',
    titleEs: 'Telemetría de API Gateway con Jitter',
    trapPt: 'Você inspecionou o indicador "API Gateway · 24ms (200 OK)" desconfiando de um jitter de latência no header.',
    trapEn: 'You checked the "API Gateway · 24ms (200 OK)" telemetry tag probing for a header latency glitch.',
    trapEs: 'Inspeccionaste el indicador "API Gateway · 24ms (200 OK)" sospechando de un retraso de latencia en el encabezado.',
    solutionPt: 'Em produção real, monitoramos a saúde de microsserviços via Datadog, Prometheus e Grafana com circuit breakers e alertas preditivos de degradação.',
    solutionEn: 'In real production, microservices are monitored via Datadog, Prometheus, and Grafana with circuit breakers and predictive degradation alerts.',
    solutionEs: 'En producción real, monitoreamos microservicios con Datadog, Prometheus y Grafana con circuit breakers y alertas predictivas de degradación.',
  },
  {
    id: 'arcade-glitch',
    code: 'QA-CHAOS-05',
    titlePt: 'Injeção de Falhas (Chaos Test) no Arcade',
    titleEn: 'Chaos Fault Injection in Arcade Terminal',
    titleEs: 'Inyección de Fallos (Chaos Test) en Arcade',
    trapPt: 'Você clicou no botão "ERR_NULL_POINTER_MOCK" no terminal do Arcade tentando corromper o estado do placar.',
    trapEn: 'You clicked the "ERR_NULL_POINTER_MOCK" glitch button in the Arcade terminal attempting to corrupt leaderboard state.',
    trapEs: 'Hiciste clic en el botón "ERR_NULL_POINTER_MOCK" en la terminal del Arcade intentando corromper el ranking.',
    solutionPt: 'Resiliência por design: imutabilidade de estado, isolamento de escopo e testes de caos garantem que o sistema continue de pé mesmo sob injeção de falhas.',
    solutionEn: 'Resilience by design: state immutability, scope isolation, and chaos tests guarantee systems stay operational under fault injections.',
    solutionEs: 'Resiliencia por diseño: inmutabilidad de estado, aislamiento de fallas y pruebas de caos garantizan alta disponibilidad.',
  },
  {
    id: 'version-overflow',
    code: 'QA-SECURITY-06',
    titlePt: 'Hash de Debug & Token Expirado no Rodapé',
    titleEn: 'Debug Hash & Expired Token in Footer',
    titleEs: 'Hash de Debug y Token Expirado en Pie de Página',
    trapPt: 'Você inspecionou a tag "rev: 868ef7c · TOKEN_DEBUG?" no rodapé investigando um possível vazamento de credencial.',
    trapEn: 'You inspected the "rev: 868ef7c · TOKEN_DEBUG?" footer tag investigating potential secret leaks.',
    trapEs: 'Inspeccionaste "rev: 868ef7c · TOKEN_DEBUG?" en el pie de página investigando una posible fuga de secretos.',
    solutionPt: 'Segurança Shift-Left: varredura estrita de secrets via GitGuardian em pipelines CI/CD, variáveis de ambiente seguras e zero vazamento de credenciais.',
    solutionEn: 'Shift-Left security: automated secret detection via GitGuardian in CI/CD, secure environment variables, and zero credential exposure.',
    solutionEs: 'Seguridad Shift-Left: escaneo automatizado de secretos con GitGuardian en CI/CD, variables de entorno seguras y cero fuga de credenciales.',
  },
];

export const BugBaitModal: React.FC<BugBaitModalProps> = ({
  isOpen,
  onClose,
  currentBaitId,
  foundBaits,
  onReset,
}) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      soundEngine.playHeartSound();
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10b981', '#38bdf8', '#ff5733', '#fbbf24'],
        });
      } catch {
        // ignore
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const activeBait = ALL_BAITS.find((b) => b.id === currentBaitId) || ALL_BAITS[0];
  const foundCount = foundBaits.length;
  const isAllFound = foundCount >= ALL_BAITS.length;

  const getBaitTitle = (b: BaitInfo) =>
    language === 'en' ? b.titleEn : language === 'es' ? b.titleEs : b.titlePt;
  const getBaitTrap = (b: BaitInfo) =>
    language === 'en' ? b.trapEn : language === 'es' ? b.trapEs : b.trapPt;
  const getBaitSolution = (b: BaitInfo) =>
    language === 'en' ? b.solutionEn : language === 'es' ? b.solutionEs : b.solutionPt;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-[#0f172a] rounded-2xl border-2 border-emerald-500/80 dark:border-emerald-500/60 shadow-2xl overflow-hidden p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Glow Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-sky-400 to-[#ff5733]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h5" />
        </button>

        {/* Header Icon + Catch Phrase */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold uppercase bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              {activeBait.code} // QA EASTER EGG
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
              {t.bugBait.catchPhrase}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
              {t.bugBait.modalSubtitle.replace('{count}', `${foundCount}`).replace('{total}', `${ALL_BAITS.length}`)}
            </p>
          </div>
        </div>

        {/* The Triggered Trap Card */}
        <div className="my-5 p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>{getBaitTitle(activeBait)}</span>
          </div>
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
            "{getBaitTrap(activeBait)}"
          </p>
          <div className="pt-2 border-t border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              {language === 'en' ? 'Senior QA Reality: ' : language === 'es' ? 'Realidad Senior QA: ' : 'Realidade Senior QA: '}
            </span>
            {getBaitSolution(activeBait)}
          </div>
        </div>

        {/* Discovery Tracker Grid */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
            <span>
              {language === 'en'
                ? 'QA Traps Discovered'
                : language === 'es'
                ? 'Trampas QA Descubiertas'
                : 'Armadilhas de QA Descobertas'}
            </span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400">
              {foundCount} / {ALL_BAITS.length}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {ALL_BAITS.map((b) => {
              const isFound = foundBaits.includes(b.id);
              return (
                <div
                  key={b.id}
                  className={`p-2.5 rounded-lg border text-xs font-mono transition-all ${
                    isFound
                      ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-700 dark:text-emerald-300'
                      : 'bg-slate-100 dark:bg-slate-800/40 border-dashed border-slate-300 dark:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold">{b.code}</span>
                    {isFound ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <span className="text-[10px]">?</span>
                    )}
                  </div>
                  <div className="truncate font-sans font-medium text-[11px]">
                    {isFound ? getBaitTitle(b) : '???'}
                  </div>
                </div>
              );
            })}
          </div>

          {isAllFound && (
            <div className="mt-3 p-2.5 rounded-lg bg-gradient-to-r from-emerald-500/20 to-sky-500/20 border border-emerald-500/40 text-center text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              🎉 {language === 'en'
                ? 'Master QA! You found all 6 investigative traps. Your edge-case eye is world-class!'
                : language === 'es'
                ? '¡Master QA! Encontraste las 6 trampas investigativas. ¡Tu mirada para edge cases es de élite!'
                : 'Master QA! Você desvendou todas as 6 armadilhas investigativas. Seu olhar para edge cases e testes é cirúrgico!'}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          {foundCount > 0 ? (
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {t.bugBait.resetBaits}
            </button>
          ) : <div />}

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 font-semibold text-sm transition-transform active:scale-95 shadow-md"
          >
            {t.bugBait.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
