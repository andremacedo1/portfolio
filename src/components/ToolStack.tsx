import React, { useState } from 'react';
import { DEFAULT_TECH_STACK } from '../data/defaultProfile';
import { TechTool } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';
import { Wrench, Bug, Code2 } from 'lucide-react';

interface ToolStackProps {
  tools?: TechTool[];
  onTriggerBugBait?: (id: string) => void;
}

export const ToolStack: React.FC<ToolStackProps> = ({
  tools = DEFAULT_TECH_STACK,
  onTriggerBugBait,
}) => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterLabels: Record<string, string> = {
    all: language === 'en' ? 'All' : language === 'es' ? 'Todos' : 'Todos',
    api: t.stack.categories.api,
    automation: t.stack.categories.automation,
    performance: t.stack.categories.performance,
    ai: t.stack.categories.ai,
    management: t.stack.categories.management,
  };

  const filteredTools = tools.filter((tool) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'api') return tool.category.includes('APIs') || tool.category.includes('Bancos');
    if (activeFilter === 'automation') return tool.category.includes('Automação') || tool.category.includes('Plataformas') || tool.category.includes('E-commerce');
    if (activeFilter === 'performance') return tool.category.includes('Performance') || tool.category.includes('k6') || tool.category.includes('ERPs');
    if (activeFilter === 'ai') return tool.category.includes('IA') || tool.category.includes('Prompt') || tool.category.includes('Pano');
    if (activeFilter === 'management') return tool.category.includes('Gestão') || tool.category.includes('Estratégia') || tool.category.includes('Metodologias');
    return true;
  });

  return (
    <section id="stack" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-3">
            {t.stack.sectionTag} // {tools.length} FERRAMENTAS & DOMÍNIOS
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            {t.stack.title} <span className="text-sky-600 dark:text-sky-400">{t.stack.highlight}</span>
            <span className="text-[#ff5733]">.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
            {t.stack.subtitle}
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-1.5">
          {Object.entries(filterLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              type="button"
              className={`px-3 py-1 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                activeFilter === key
                  ? 'bg-slate-900 dark:bg-sky-500 text-white dark:text-slate-950 shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Tools Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredTools.map((tool) => (
          <div
            key={tool.id}
            className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex items-center gap-3.5 hover:shadow-md transition-all hover:-translate-y-0.5 group"
          >
            {/* Square Monogram Badge */}
            <div className="w-11 h-11 rounded-xl bg-slate-900 dark:bg-slate-800 text-white dark:text-sky-400 flex items-center justify-center font-mono font-bold text-sm shrink-0 group-hover:bg-[#ff5733] dark:group-hover:bg-[#ff5733] dark:group-hover:text-white transition-colors shadow-2xs">
              {tool.abbr}
            </div>

            <div className="min-w-0 flex-1">
              <div className="font-display font-bold text-sm text-slate-900 dark:text-white truncate">
                {tool.name}
              </div>
              <div className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 tracking-wider truncate">
                {tool.category}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                {tool.description}
              </div>
            </div>
          </div>
        ))}

        {/* Bug 3: Ferramenta perfeitamente integrada no stack */}
        <div
          onClick={() => onTriggerBugBait?.('undefined-leak')}
          className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex items-center gap-3.5 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all group cursor-pointer text-left"
          title="Newman & Postman CLI"
        >
          <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-mono font-bold text-sm text-slate-800 dark:text-slate-200 shrink-0 group-hover:bg-[#ff5733] group-hover:text-white transition-colors">
            NWM
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-1 mb-0.5">
              <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white truncate">
                Newman & Postman CLI
              </h4>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.2 rounded shrink-0 group-hover:text-[#ff5733] transition-colors">
                CLI
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
              Execução headless de coleções de APIs em pipelines CI/CD
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700">
          <Wrench className="w-3.5 h-3.5 text-[#ff5733]" />
          <span>Blindando pipelines com testes automatizados, contratos e inteligência artificial</span>
        </span>
      </div>
    </section>
  );
};
