import React, { useState } from 'react';
import { DEFAULT_METRICS } from '../data/defaultProfile';
import { MetricPillar } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Bot, CheckCircle, TrendingUp, Layers } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedMetric, setSelectedMetric] = useState<MetricPillar>(DEFAULT_METRICS[0]);

  const pillarIcons = [ShieldCheck, Bot, CheckCircle, Layers];

  const pillarsData = [
    {
      num: '01',
      title: t.about.pillars.p1Title,
      desc: t.about.pillars.p1Desc,
      icon: ShieldCheck,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
    },
    {
      num: '02',
      title: t.about.pillars.p2Title,
      desc: t.about.pillars.p2Desc,
      icon: Bot,
      color: 'text-sky-500',
      bg: 'bg-sky-500/10',
    },
    {
      num: '03',
      title: t.about.pillars.p3Title,
      desc: t.about.pillars.p3Desc,
      icon: CheckCircle,
      color: 'text-[#ff5733]',
      bg: 'bg-[#ff5733]/10',
    },
    {
      num: '04',
      title: t.about.pillars.p4Title,
      desc: t.about.pillars.p4Desc,
      icon: Layers,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
    },
  ];

  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
      {/* Top Section Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
        <div className="lg:col-span-4">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            {t.about.sectionTag}
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            {t.about.title}
            <span className="text-emerald-600 dark:text-emerald-400"> {t.about.highlight}</span>
            <span className="text-[#ff5733]">.</span>
          </h2>
        </div>

        <div className="lg:col-span-8 space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          <p className="font-medium text-slate-900 dark:text-white text-lg sm:text-xl">
            {t.about.paragraph1}
          </p>

          <p>{t.about.paragraph2}</p>

          <p>{t.about.paragraph3}</p>
        </div>
      </div>

      {/* 4 Pillars Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
        {pillarsData.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.num}
              className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#ff5733]">{p.num}</span>
                <div className={`w-9 h-9 rounded-xl ${p.bg} ${p.color} flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {p.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Interactive Metrics Sandbox */}
      <div className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 gap-4 mb-6">
          <div>
            <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
              {t.about.pillarsTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {DEFAULT_METRICS[0].name ? 'Explore as métricas que consolidam a confiabilidade da operação.' : ''}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>telemetria interativa</span>
          </div>
        </div>

        {/* Metric Switcher Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {DEFAULT_METRICS.map((m) => {
            const isSelected = selectedMetric.id === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setSelectedMetric(m)}
                type="button"
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 dark:bg-emerald-500/15 text-white dark:text-emerald-300 border-slate-900 dark:border-emerald-500/50 shadow-md transform -translate-y-0.5'
                    : 'bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#ff5733]' : 'text-slate-500'}`}>
                    {m.shortKey}
                  </span>
                  <span className={`text-[10px] font-mono uppercase ${isSelected ? 'text-slate-300 dark:text-emerald-400' : 'text-slate-400'}`}>
                    {m.badge}
                  </span>
                </div>
                <div className="font-display font-bold text-sm truncate">{m.name}</div>
                <div className={`text-base font-extrabold mt-1 ${isSelected ? 'text-emerald-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
                  {m.value}
                </div>
              </button>
            );
          })}
        </div>

        {/* Metric Visualization Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 dark:bg-slate-900/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
          {/* Animated Bar Chart */}
          <div className="lg:col-span-6">
            <div className="flex items-end gap-3 h-36 px-2 pt-6 pb-2 border-b-2 border-slate-300 dark:border-slate-700">
              {selectedMetric.bars.map((val, idx) => {
                const maxVal = Math.max(...selectedMetric.bars, 1);
                const heightPercent = Math.min(100, Math.max(15, (val / maxVal) * 100));
                const isLatest = idx === selectedMetric.bars.length - 1;

                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                    <span className="text-[10px] font-mono text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      {val}
                    </span>
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className={`w-full rounded-t-sm transition-all duration-700 ${
                        isLatest ? 'bg-[#ff5733]' : 'bg-slate-400 dark:bg-slate-600 group-hover:bg-emerald-500'
                      }`}
                    />
                    <span className="text-[10px] font-mono text-slate-500">Q{idx + 1}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 mt-2">
              <span>ESTABILIDADE TRIMESTRAL</span>
              <span className="text-[#ff5733] font-bold">● TARGET ATINGIDO</span>
            </div>
          </div>

          {/* Metric Details */}
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>IMPACTO VERIFICADO</span>
            </div>
            <h4 className="text-xl font-bold font-display text-slate-900 dark:text-white">
              {selectedMetric.name}: <span className="text-emerald-600 dark:text-emerald-400">{selectedMetric.value}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedMetric.howIAct}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
