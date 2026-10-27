import React, { useState } from 'react';
import { WorkExperience } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';
import { Plus, Minus, Briefcase, Calendar, MapPin, CheckCircle2, AlertOctagon } from 'lucide-react';

interface ExperienceSectionProps {
  experiences: WorkExperience[];
  onTriggerBugBait?: (id: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  onTriggerBugBait,
}) => {
  const { language, t } = useLanguage();
  const [openIds, setOpenIds] = useState<string[]>([experiences[0]?.id || 'exp-1']);

  const toggleOpen = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Map translated experiences if available, otherwise fallback
  const translatedExps = t.experience.experiences;

  return (
    <section id="experiencia" className="bg-[#0b101b] text-white py-24 px-4 sm:px-6 lg:px-8 relative mt-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-slate-800 mb-8 gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#ff5733]/15 text-[#ff5733] border border-[#ff5733]/30 mb-3">
              {t.experience.sectionTag}
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
              {t.experience.title} <span className="text-emerald-400">{t.experience.highlight}</span>
              <span className="text-[#ff5733]">.</span>
            </h2>
          </div>
          <div className="text-xs sm:text-sm font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.experience.subtitle}</span>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {experiences.map((exp, index) => {
            const isOpen = openIds.includes(exp.id);
            const tr = translatedExps[index] || {
              company: exp.company,
              role: exp.role,
              period: exp.period,
              location: exp.workType,
              bulletPoints: exp.achievements,
              tags: exp.tags,
            };

            return (
              <div
                key={exp.id}
                className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/60 hover:bg-slate-900/90 transition-colors"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleOpen(exp.id)}
                  type="button"
                  className="w-full p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
                    <div className="md:col-span-4">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                          {tr.company}
                        </h3>
                        {index === 0 && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            ATUAL
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 flex items-center gap-1.5 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-[#ff5733]" />
                        <span>{tr.period}</span>
                      </p>
                    </div>

                    <div className="md:col-span-8 flex flex-wrap items-center justify-between gap-2">
                      <div className="text-base sm:text-lg font-semibold text-slate-200">
                        {tr.role}
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        <MapPin className="w-3 h-3 text-[#ff5733]" />
                        <span>{tr.location}</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white shrink-0 mt-1 sm:mt-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-800 animate-fadeIn">
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Skill Tags + Bug Bait #2 */}
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      {tr.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}

                      {/* Bug 2: Anomalia sutil em parâmetro de contrato REST */}
                      {index === 0 && (
                        <button
                          type="button"
                          onClick={() => onTriggerBugBait?.('race-condition')}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-colors cursor-pointer inline-flex items-center gap-1.5"
                          title="retry_limit: 3/2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                          <span>retry_limit: 3/2</span>
                        </button>
                      )}
                    </div>

                    {/* Achievements bullets */}
                    <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
                      <h4 className="text-xs font-mono font-bold uppercase text-[#ff5733] tracking-widest mb-3 flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>
                          {language === 'en'
                            ? 'Key Achievements & Production Impact:'
                            : language === 'es'
                            ? 'Principales Logros e Impacto en Producción:'
                            : 'Principais Conquistas & Impacto em Produção:'}
                        </span>
                      </h4>

                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                        {tr.bulletPoints.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
