/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, Terminal, Search, ChevronUp, ChevronDown, Sparkles, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface InvestigativeRadarProps {
  foundCount: number;
  totalCount: number;
  onOpenModal: () => void;
  onTriggerBait: (id: string) => void;
}

export const InvestigativeRadar: React.FC<InvestigativeRadarProps> = ({
  foundCount,
  totalCount,
  onOpenModal,
}) => {
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const isAllFound = foundCount >= totalCount;

  return (
    <aside
      aria-label="Radar Investigativo QA"
      className="fixed bottom-4 right-4 z-40 flex flex-col items-end font-sans select-none"
    >
      {/* Expanded Clues Panel */}
      {isExpanded && (
        <div className="mb-3 w-80 sm:w-96 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md rounded-2xl border-2 border-emerald-500/50 shadow-2xl p-4 text-xs animate-fadeIn text-slate-800 dark:text-slate-200">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 font-mono font-bold text-emerald-600 dark:text-emerald-400">
              <Terminal className="w-4 h-4" />
              <span>RADAR QA // MODO INVESTIGATIVO</span>
            </div>
            <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              {foundCount}/{totalCount}
            </span>
          </div>

          <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            {language === 'en'
              ? 'Find all 6 disguised bug baits across the UI, the DOM inspector, and DevTools (F12) console:'
              : language === 'es'
              ? 'Encuentra las 6 trampas de QA ocultas en la interfaz, el DOM y la consola DevTools (F12):'
              : 'Encontre as 6 armadilhas "pega-curioso" de QA espalhadas na tela, no DOM e no console DevTools (F12):'}
          </p>

          <ul className="space-y-2 font-mono text-[11px] mb-3">
            <li className="flex items-center gap-2 p-1.5 rounded bg-slate-100 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
              <span className="text-emerald-500 font-bold">1. F12</span>
              <span className="text-slate-600 dark:text-slate-300">
                {language === 'en'
                  ? 'DevTools Console: type window.investigarBug()'
                  : language === 'es'
                  ? 'Consola DevTools: escribe window.investigarBug()'
                  : 'Console DevTools: digite window.investigarBug()'}
              </span>
            </li>
            <li className="flex items-center gap-2 p-1.5 rounded bg-slate-100 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
              <span className="text-amber-500 font-bold">2. DOM</span>
              <span className="text-slate-600 dark:text-slate-300">
                {language === 'en'
                  ? 'Inspect HTML tags: [data-qa-honeypot]'
                  : language === 'es'
                  ? 'Inspeccionar HTML: [data-qa-honeypot]'
                  : 'Inspecione o HTML no Hero: [data-qa-honeypot]'}
              </span>
            </li>
            <li className="flex items-center gap-2 p-1.5 rounded bg-slate-100 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
              <span className="text-sky-500 font-bold">3. TAG</span>
              <span className="text-slate-600 dark:text-slate-300">
                {language === 'en'
                  ? 'Panorama card: "retry_limit: 3/2" tag'
                  : language === 'es'
                  ? 'Tarjeta Panorama: etiqueta "retry_limit: 3/2"'
                  : 'Card Panorama: tag "retry_limit: 3/2"'}
              </span>
            </li>
            <li className="flex items-center gap-2 p-1.5 rounded bg-slate-100 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
              <span className="text-purple-500 font-bold">4. TOP</span>
              <span className="text-slate-600 dark:text-slate-300">
                {language === 'en'
                  ? 'Navbar: API Gateway telemetry latency pill'
                  : language === 'es'
                  ? 'Navbar: telemetría de latencia API Gateway'
                  : 'Navbar: indicador de telemetria API Gateway'}
              </span>
            </li>
            <li className="flex items-center gap-2 p-1.5 rounded bg-slate-100 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
              <span className="text-red-500 font-bold">5. CRT</span>
              <span className="text-slate-600 dark:text-slate-300">
                {language === 'en'
                  ? 'Arcade cabinet: [! ERR_NULL_PTR_MOCK] fault injector'
                  : language === 'es'
                  ? 'Gabinete Arcade: inyector [! ERR_NULL_PTR_MOCK]'
                  : 'Gabinete Arcade: botão [! ERR_NULL_PTR_MOCK]'}
              </span>
            </li>
            <li className="flex items-center gap-2 p-1.5 rounded bg-slate-100 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
              <span className="text-[#ff5733] font-bold">6. GIT</span>
              <span className="text-slate-600 dark:text-slate-300">
                {language === 'en'
                  ? 'Footer: build hash & mock token tag'
                  : language === 'es'
                  ? 'Pie de página: hash de release y mock token'
                  : 'Rodapé: hash de release & token de debug'}
              </span>
            </li>
          </ul>

          <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={onOpenModal}
              className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {language === 'en' ? 'View Trophy Modal' : language === 'es' ? 'Ver Modal de Trofeos' : 'Ver Painel de Troféus'}
              </span>
            </button>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer"
            >
              {language === 'en' ? 'Close' : language === 'es' ? 'Cerrar' : 'Fechar'}
            </button>
          </div>
        </div>
      )}

      {/* Main Trigger Pill */}
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        type="button"
        className={`group flex items-center gap-2.5 px-3.5 py-2 rounded-full font-mono text-xs font-bold shadow-lg transition-all cursor-pointer border ${
          isAllFound
            ? 'bg-emerald-500 text-slate-950 border-emerald-400 hover:bg-emerald-400'
            : 'bg-slate-900/90 text-white dark:bg-[#0f172a]/95 dark:text-emerald-400 border-emerald-500/40 hover:border-emerald-400 hover:scale-105'
        }`}
        title="Radar de Bugs Pega-Curioso // Modo Investigativo"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>

        <span className="flex items-center gap-1.5">
          <Search className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-12 transition-transform" />
          <span>RADAR QA</span>
          <span className="px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px]">
            {foundCount}/{totalCount}
          </span>
        </span>

        {isExpanded ? (
          <ChevronDown className="w-3.5 h-3.5 opacity-60" />
        ) : (
          <ChevronUp className="w-3.5 h-3.5 opacity-60" />
        )}
      </button>
    </aside>
  );
};
