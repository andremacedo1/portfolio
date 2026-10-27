import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight, Compass, Plane } from 'lucide-react';

export const JourneyTimeline: React.FC = () => {
  const { t } = useLanguage();
  const milestones = t.timeline.milestones;
  const [activeIndex, setActiveIndex] = useState(milestones.length - 1); // default to latest milestone
  const activeMilestone = milestones[activeIndex] || milestones[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < milestones.length - 1 ? prev + 1 : prev));
  };

  const progressPercent = (activeIndex / Math.max(1, milestones.length - 1)) * 80 + 10;

  return (
    <section id="jornada" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="mb-8">
        <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase block mb-1">
          {t.timeline.sectionTag}
        </span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
          {t.timeline.title} <span className="text-emerald-600 dark:text-emerald-400">{t.timeline.highlight}</span>
          <span className="text-[#ff5733]">.</span>
        </h2>
        <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
          <span>{t.timeline.subtitle}</span>
          <span>↓</span>
        </p>
      </div>

      {/* Flight Canvas Stage */}
      <div className="relative bg-gradient-to-b from-sky-50 to-slate-100 dark:from-slate-900 dark:to-[#0a0f1d] border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl pt-10 pb-0 transition-colors">
        {/* Sky Background Atmosphere */}
        <div className="absolute right-12 top-10 w-52 h-52 rounded-full bg-gradient-to-tr from-[#ff5733]/20 to-sky-400/20 blur-2xl pointer-events-none" />

        {/* Ambient Clouds */}
        <div className="absolute top-6 left-10 w-32 h-10 bg-white/70 dark:bg-white/5 rounded-full blur-xs pointer-events-none" />
        <div className="absolute top-12 left-24 w-20 h-8 bg-white/80 dark:bg-white/10 rounded-full pointer-events-none" />
        <div className="absolute top-16 right-48 w-48 h-12 bg-white/60 dark:bg-white/5 rounded-full blur-xs pointer-events-none" />

        {/* Dynamic Milestone Card Content */}
        <div className="relative z-10 px-6 sm:px-10 max-w-3xl min-h-[170px]">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#ff5733] font-display font-black text-5xl sm:text-6xl tracking-tight drop-shadow-xs">
              {activeMilestone.year}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              {activeMilestone.badge}
            </span>
          </div>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white leading-snug mb-3">
            {activeMilestone.title}
          </h3>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            {activeMilestone.description}
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300">
            <span className="text-[#ff5733] font-bold">⚡ Impacto:</span>
            <span>{activeMilestone.impact}</span>
          </div>
        </div>

        {/* Flight Track & Interactive Airplane Stage */}
        <div className="relative h-44 sm:h-52 w-full mt-4">
          <div className="absolute top-20 left-0 right-0 border-b-2 border-dashed border-[#ff5733]/50 pointer-events-none" />
          <div className="absolute top-28 left-0 right-0 border-b border-dotted border-slate-300 dark:border-slate-700 pointer-events-none" />

          {/* Animated Airplane */}
          <div
            className="absolute top-12 z-20 transition-all duration-700 ease-out -translate-x-1/2 cursor-pointer"
            style={{ left: `${progressPercent}%` }}
            title={`Voo em ${activeMilestone.year}`}
          >
            <div className="animate-plane-float relative">
              <svg
                width="72"
                height="48"
                viewBox="0 0 100 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-lg"
              >
                <path
                  d="M10 32C10 32 30 24 65 24C82 24 92 28 92 32C92 36 82 40 65 40C30 40 10 32 10 32Z"
                  fill="#E2E8F0"
                  stroke="#0F172A"
                  strokeWidth="3"
                />
                <path
                  d="M74 27C78 27 84 29 84 32C84 33 78 33 74 33Z"
                  fill="#0F172A"
                />
                <path
                  d="M44 26L32 6C30 3 34 2 37 4L58 26Z"
                  fill="#0284C7"
                  stroke="#0F172A"
                  strokeWidth="2.5"
                />
                <path
                  d="M44 38L32 58C30 61 34 62 37 60L58 38Z"
                  fill="#0284C7"
                  stroke="#0F172A"
                  strokeWidth="2.5"
                />
                <path
                  d="M14 31L4 14C3 12 7 11 9 13L24 31Z"
                  fill="#FF5733"
                  stroke="#0F172A"
                  strokeWidth="2.5"
                />
                <rect
                  x="42"
                  y="29"
                  width="16"
                  height="7"
                  rx="3.5"
                  fill="#0F172A"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Milestone Buttons Bottom Rail */}
        <div className="relative z-10 bg-white/90 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-30 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-1.5 sm:gap-3 overflow-x-auto px-2">
            {milestones.map((m, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={m.year}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#ff5733] text-white shadow-md scale-105'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {m.year}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            disabled={activeIndex === milestones.length - 1}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-30 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
