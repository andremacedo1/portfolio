import React from 'react';

const ITEMS = [
  'Consultor de Qualidade',
  'Automação Web & Mobile',
  'Cypress & Playwright',
  'Agente Pano-QA (IA)',
  'Testes de APIs & Postman',
  'Shift-Left Testing',
  'Controle de SLAs',
  '27 Marketplaces Integrados',
  'BDD & Rastreabilidade',
  'SQL & Banco de Dados',
  'Scrum & Metodologias Ágeis',
  'Mitigação de Incidentes',
];

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="w-full bg-[#06b6d4] text-white py-3.5 border-y-2 border-[#0f172a] overflow-hidden select-none my-8 shadow-xs">
      <div className="flex animate-marquee whitespace-nowrap text-base md:text-lg font-heading font-extrabold tracking-wide uppercase">
        {/* Double the list to create a seamless infinite loop */}
        {[...ITEMS, ...ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center mx-4">
            <span className="text-[#ede9fe] mr-4 text-xs">✦</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
