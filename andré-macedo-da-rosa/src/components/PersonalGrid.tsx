import React, { useState } from 'react';
import { Heart, Maximize2, X, Coffee, Disc3, Laptop, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { PersonalArchiveItem } from '../types/portfolio';
import { soundEngine } from '../utils/audio';
import { loadPetClicks, savePetClicks } from '../utils/storage';
import { useLanguage } from '../context/LanguageContext';

interface PersonalGridProps {
  initials: string;
  items: PersonalArchiveItem[];
}

export const PersonalGrid: React.FC<PersonalGridProps> = ({ initials, items }) => {
  const { t } = useLanguage();
  const [petClicks, setPetClicks] = useState<number>(() => loadPetClicks());
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [activeModalItem, setActiveModalItem] = useState<{
    badge: string;
    title: string;
    meta: string;
    description: string;
    details: string;
    image: string;
    chips?: string[];
  } | null>(null);

  const petItem = items.find((i) => i.category === 'pet') || items[0];
  const coopItem = items.find((i) => i.category === 'coop' || i.category === 'family') || items[1];
  const gamesItem = items.find((i) => i.category === 'games') || items[2];
  const setupItem = items.find((i) => i.category === 'setup' || i.category === 'craft') || items[3];
  const studyItem = items.find((i) => i.category === 'study' || i.category === 'media') || items[4];

  const handlePetAffection = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundEngine.playHeartSound();
    const newCount = petClicks + 1;
    setPetClicks(newCount);
    savePetClicks(newCount);

    const rect = e.currentTarget.getBoundingClientRect();
    const heart = {
      id: Date.now() + Math.random(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setFloatingHearts((prev) => [...prev, heart]);
    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== heart.id));
    }, 1200);
  };

  return (
    <section id="pessoal" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ff5733] tracking-widest uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#ff5733]" />
            <span>{t.personal.sectionTag} // {initials}</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            {t.personal.title} <span className="text-[#ff5733]">{t.personal.highlight}</span>
            <span>.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            {t.personal.subtitle}
          </p>
        </div>
        <div className="text-xs font-mono font-bold tracking-widest text-slate-500 dark:text-slate-400 hidden md:flex items-center gap-2 bg-slate-100 dark:bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>VIDA OFFLINE & CONEXÕES REAIS</span>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="space-y-6">
        {/* Top Row: Apolo (Col 5) & Flávia, Manuela & Helena (Col 7) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 01: Apolo (15 Aninhos) */}
          <div
            onClick={() =>
              setActiveModalItem({
                badge: `01 // ${t.personal.petBadge}`,
                title: t.personal.petTitle,
                meta: t.personal.petMeta,
                description: t.personal.petDesc,
                details: t.personal.petDetails,
                image: petItem?.image || 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=80',
                chips: [
                  'Mistura Pinscher Alemão & Pequinês Imperial (Pequi-Pin)',
                  '15 Aninhos de Companheirismo Fiel',
                  'Vigilância & Focinho Achatado Característico',
                  'Fiscal Oficial da Bancada de Testes e Deploys',
                  'Presença Constante no Home Office',
                ],
              })
            }
            className="md:col-span-5 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
          >
            <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
              <span className="text-[#ff5733]">01 // {t.personal.petBadge}</span>
              <Maximize2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
            </div>

            <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
              <img
                src={petItem?.image || 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=80'}
                alt={t.personal.petTitle}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-slate-950/85 text-white font-mono text-xs rounded-lg backdrop-blur-xs flex items-center gap-1.5 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>{t.personal.petTitle}</span>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-1.5">
                  {t.personal.petTitle}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {t.personal.petDesc}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <span>{t.personal.petMeta}</span>
                  <span className="text-emerald-500 font-bold group-hover:underline">VER DETALHES →</span>
                </div>

                <div className="relative inline-block">
                  <button
                    type="button"
                    onClick={handlePetAffection}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 text-xs font-semibold tracking-wide transition-transform active:scale-95 cursor-pointer shadow-xs"
                    title={t.personal.petBtn}
                  >
                    <Heart className="w-4 h-4 fill-current animate-pulse text-rose-500" />
                    <span>{petClicks} {t.personal.petCounter}</span>
                  </button>

                  {floatingHearts.map((h) => (
                    <span
                      key={h.id}
                      className="absolute text-sm text-[#ff5733] pointer-events-none transition-all duration-1000 -translate-y-10 opacity-0"
                      style={{ left: `${h.x}px`, top: `${h.y}px` }}
                    >
                      ❤️
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 02: Flávia, Manuela & Helena (Col 7) */}
          <div
            onClick={() =>
              setActiveModalItem({
                badge: `02 // ${t.personal.coopBadge}`,
                title: t.personal.coopTitle,
                meta: t.personal.coopMeta,
                description: t.personal.coopDesc,
                details: t.personal.coopDetails,
                image: coopItem?.image || 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80',
                chips: [
                  '17 Anos de Parceria e Cumplicidade com a Flávia',
                  'Manuela & Helena: Tesouros e Motivação Diária',
                  'Equilíbrio entre Engenharia Crítica e Família',
                  'Valores Sólidos, Serenidade e Propósito de Vida',
                ],
              })
            }
            className="md:col-span-7 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
          >
            <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
              <span className="text-[#ff5733]">02 // {t.personal.coopBadge}</span>
              <Maximize2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 flex-1">
              <div className="sm:col-span-6 relative aspect-4/3 sm:aspect-auto overflow-hidden bg-slate-900 min-h-[220px]">
                <img
                  src={coopItem?.image || 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80'}
                  alt={t.personal.coopTitle}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-slate-950/85 text-white font-mono text-xs rounded-lg backdrop-blur-xs flex items-center gap-1.5 border border-white/10">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>A Base de Tudo</span>
                </div>
              </div>

              <div className="sm:col-span-6 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-2">
                    {t.personal.coopTitle}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {t.personal.coopDesc}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5733]" />
                      <span><strong>Flávia:</strong> Parceira de vida há 17 anos</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span><strong>Manuela & Helena:</strong> Tesouros e alicerce diário</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <span>{t.personal.coopMeta}</span>
                  <span className="text-emerald-500 font-bold group-hover:underline">VER DETALHES →</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: 3 Cards Across (Música/Games, Home Office Otimizado, Estudos) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 03: Música, Café & Games */}
          <div
            onClick={() =>
              setActiveModalItem({
                badge: `03 // ${t.personal.hobbiesBadge}`,
                title: t.personal.hobbiesTitle,
                meta: t.personal.hobbiesMeta,
                description: t.personal.hobbiesDesc,
                details: t.personal.hobbiesDetails,
                image: gamesItem?.image || 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80',
                chips: [
                  'Café Especial Filtrado (V60 & Aeropress)',
                  'Precisão de Moagem e Temperatura da Água',
                  'Vinil & Lo-Fi para Hiperfoco no Flow State',
                  'Cyberpunk 2077, Elden Ring, Sekiro & Hollow Knight',
                  'Leitura Rápida de Padrões & Resiliência Analítica',
                ],
              })
            }
            className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden group cursor-pointer hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col"
          >
            <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
              <span className="text-[#ff5733]">03 // {t.personal.hobbiesBadge}</span>
              <Disc3 className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
            </div>

            <div className="relative h-44 overflow-hidden bg-slate-900">
              <img
                src={gamesItem?.image || 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80'}
                alt={t.personal.hobbiesTitle}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 px-2.5 py-1 bg-slate-950/80 rounded-md text-[10px] font-mono text-slate-300 border border-white/10">
                FLOW STATE
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-1.5">
                  {t.personal.hobbiesTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-3">
                  {t.personal.hobbiesDesc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <span>{t.personal.hobbiesMeta}</span>
                <span className="text-emerald-500 font-bold group-hover:underline">VER DETALHES →</span>
              </div>
            </div>
          </div>

          {/* Card 04: Bancada do Home Office Otimizado */}
          <div
            onClick={() =>
              setActiveModalItem({
                badge: `04 // ${t.personal.setupBadge}`,
                title: t.personal.setupTitle,
                meta: t.personal.setupMeta,
                description: t.personal.setupDesc,
                details: t.personal.setupDetails,
                image: setupItem?.image || 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80',
                chips: [
                  'Monitor Ultrawide (Código + Suítes E2E + APIs)',
                  'Cadeira Ergonômica com Suporte Lombar Ativo',
                  'Teclado Mecânico Tátil de Alta Precisão',
                  'Headset ANC para Reuniões e Isolamento Acústico',
                  'Link Redundante de Fibra Óptica + No-break',
                  '100% Remoto de Alto Desempenho',
                ],
              })
            }
            className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden group cursor-pointer hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col"
          >
            <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
              <span className="text-[#ff5733]">04 // {t.personal.setupBadge}</span>
              <Laptop className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
            </div>

            <div className="relative h-44 overflow-hidden bg-slate-900">
              <img
                src={setupItem?.image || 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80'}
                alt={t.personal.setupTitle}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 px-2.5 py-1 bg-slate-950/80 rounded-md text-[10px] font-mono text-emerald-400 border border-white/10 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                100% REMOTO
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-1.5">
                  {t.personal.setupTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-3">
                  {t.personal.setupDesc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <span>{t.personal.setupMeta}</span>
                <span className="text-emerald-500 font-bold group-hover:underline">VER DETALHES →</span>
              </div>
            </div>
          </div>

          {/* Card 05: Estudos & Atualização de Conhecimento */}
          <div
            onClick={() =>
              setActiveModalItem({
                badge: `05 // ${t.personal.studyBadge}`,
                title: t.personal.studyTitle,
                meta: t.personal.studyMeta,
                description: t.personal.studyDesc,
                details: t.personal.studyDetails,
                image: studyItem?.image || 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80',
                chips: [
                  'FASUL Educacional: Análise e Desenvolvimento de Sistemas',
                  'Graduação em Andamento (2025–2027)',
                  'Playwright & Cypress Modernos (Cross-Browser & Mobile)',
                  'Arquiteto e Criador do Pano-QA (+70% de Produtividade)',
                  'Testes de Contrato REST (OpenAPI / Pact)',
                  'Shift-Left, CI/CD GitHub Actions & Observabilidade',
                ],
              })
            }
            className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden group cursor-pointer hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col"
          >
            <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
              <span className="text-[#ff5733]">05 // {t.personal.studyBadge}</span>
              <BookOpen className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
            </div>

            <div className="relative h-44 overflow-hidden bg-slate-900">
              <img
                src={studyItem?.image || 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80'}
                alt={t.personal.studyTitle}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 px-2.5 py-1 bg-slate-950/80 rounded-md text-[10px] font-mono text-amber-400 border border-white/10 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                LIFELONG LEARNING
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-1.5">
                  {t.personal.studyTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-3">
                  {t.personal.studyDesc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <span>{t.personal.studyMeta}</span>
                <span className="text-emerald-500 font-bold group-hover:underline">VER DETALHES →</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative max-h-[88vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Banner: fixed compact height to prevent viewport overflow */}
            <div className="relative h-44 sm:h-52 w-full shrink-0 overflow-hidden bg-slate-950">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
              
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#ff5733] font-mono text-xs font-bold border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5733] animate-pulse" />
                <span>{activeModalItem.badge}</span>
              </div>

              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black text-white hover:text-[#ff5733] transition-colors cursor-pointer border border-white/10 shadow-lg"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-3 left-6 right-6">
                <span className="font-mono text-[11px] text-slate-300 uppercase tracking-wider font-semibold drop-shadow-sm">
                  {activeModalItem.meta}
                </span>
              </div>
            </div>

            {/* Modal Scrollable Body: flex-1 min-h-0 guarantees scrollability & zero cutoff */}
            <div className="flex-1 min-h-0 overflow-y-auto p-6 sm:p-7 space-y-4">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
                {activeModalItem.title}
              </h3>

              {/* Main intro / highlight */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                {activeModalItem.description}
              </div>

              {/* Detailed narrative */}
              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                <p>
                  {activeModalItem.details || activeModalItem.description}
                </p>
              </div>

              {/* Technical Specifications / Chips */}
              {activeModalItem.chips && activeModalItem.chips.length > 0 && (
                <div className="pt-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Destaques & Especificações Técnicas:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeModalItem.chips.map((chip, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 shadow-xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{chip}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer action button */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-end">
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-emerald-600 dark:hover:bg-emerald-500 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                >
                  Fechar Detalhes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
