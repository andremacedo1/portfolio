import React from 'react';
import { ExternalLink, ArrowDown, FileText, FolderDown, ShieldCheck, Zap, Layers, Award } from 'lucide-react';
import { PersonalInfo } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';
import { publicUrl } from '../utils/publicUrl';

interface HeroProps {
  info: PersonalInfo;
  onOpenResume: () => void;
  onTriggerBugBait?: (baitId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ info, onOpenResume, onTriggerBugBait }) => {
  const { t } = useLanguage();

  const metrics = [
    {
      icon: Award,
      value: t.hero.yearsExp,
      label: t.metrics.expLabel,
      sub: t.metrics.expSub,
      color: 'text-emerald-500',
      border: 'border-emerald-500/20',
      bg: 'bg-emerald-500/5',
    },
    {
      icon: Layers,
      value: t.hero.marketplaces,
      label: t.metrics.marketplacesLabel,
      sub: t.metrics.marketplacesSub,
      color: 'text-sky-500',
      border: 'border-sky-500/20',
      bg: 'bg-sky-500/5',
    },
    {
      icon: ShieldCheck,
      value: t.hero.slasProtected,
      label: t.metrics.slaLabel,
      sub: t.metrics.slaSub,
      color: 'text-[#8b5cf6]',
      border: 'border-[#8b5cf6]/20',
      bg: 'bg-[#8b5cf6]/5',
    },
    {
      icon: Zap,
      value: t.hero.aiGain,
      label: t.metrics.aiLabel,
      sub: t.metrics.aiSub,
      color: 'text-amber-500',
      border: 'border-amber-500/20',
      bg: 'bg-amber-500/5',
    },
  ];

  return (
    <section className="pt-28 pb-14 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* DOM INSPECTOR EASTER EGG FOR CURIOUS RECRUITERS & ENGINEERS */}
      {/* <!-- 🕵️ [INVESTIGATIVE MODE]: Encontrou esta linha inspecionando o DOM? Parabéns pelo olhar atento! Mas aqui no código do André Macedo nada sobe sem validação rigorosa. Digite window.investigarBug() no console ou clique no elemento abaixo! --> */}
      
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Role Tag Pill + DOM Honeypot Tag */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs md:text-sm font-semibold tracking-wide shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t.hero.badge}</span>
          </div>

          <button
            type="button"
            data-qa-honeypot="QA-DOM-02"
            onClick={() => onTriggerBugBait?.('dom-inspector')}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-dashed border-amber-500/40 transition-colors cursor-pointer"
            title="Inspect Element: data-qa-honeypot='QA-DOM-02'"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>[data-qa-honeypot]</span>
          </button>
        </div>

        {/* Hero Giant Name */}
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-8xl tracking-tight text-slate-900 dark:text-white leading-[0.95] mb-5 flex flex-wrap items-baseline justify-center">
          <span>{info.name}</span>
          <span className="inline-block w-3.5 h-3.5 md:w-5 md:h-5 bg-[#8b5cf6] ml-1 mb-1 md:mb-2 align-baseline rounded-xs" />
        </h1>

        {/* Subtitle with accent */}
        <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-medium max-w-3xl leading-snug mb-5">
          {t.hero.headline}{' '}
          <span className="text-emerald-600 dark:text-emerald-400 font-bold underline decoration-[#8b5cf6]/60 decoration-2 underline-offset-4">
            {t.hero.highlight}
          </span>
        </h2>

        {/* Bio description */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-8">
          {t.hero.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-14">
          <a
            href={info.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-semibold text-sm sm:text-base tracking-wide transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{t.hero.ctaLinkedin}</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={publicUrl('andre_macedo_portfolio.zip')}
            download="andre_macedo_portfolio.zip"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold text-sm sm:text-base tracking-wide transition-all shadow-sm hover:-translate-y-0.5 active:translate-y-0"
            title="Download ZIP"
          >
            <FolderDown className="w-4 h-4" />
            <span>{t.hero.ctaZip}</span>
          </a>

          <button
            onClick={onOpenResume}
            type="button"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base tracking-wide transition-all hover:-translate-y-0.5 cursor-pointer shadow-xs"
          >
            <FileText className="w-4 h-4 text-[#8b5cf6]" />
            <span>{t.hero.ctaResume}</span>
          </button>

          <a
            href="#contato"
            className="flex items-center gap-1.5 px-4 py-3 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm sm:text-base transition-colors"
          >
            <span>{t.nav.contact}</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Impact Key Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full text-left">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0f172a] border ${m.border} shadow-sm transition-all hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-2xl sm:text-3xl font-extrabold font-display ${m.color}`}>
                    {m.value}
                  </span>
                  <div className={`w-8 h-8 rounded-xl ${m.bg} flex items-center justify-center ${m.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight">
                  {m.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  {m.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
