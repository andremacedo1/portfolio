// @ts-nocheck -- ported as-is; original project used looser TS settings
import React from 'react';
import { X, Printer, Download, Mail, MapPin, Linkedin, FileDown, CheckCircle2 } from 'lucide-react';
import { PersonalInfo, WorkExperience } from '../types/portfolio';
import { publicUrl } from '../utils/publicUrl';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  info: PersonalInfo;
  experiences: WorkExperience[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  info,
  experiences,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const pdfAttachmentUrl = publicUrl('assets/aistudio/Curr_culo_-_Andr__Macedo_da_Rosa__Conquest_One__932b3149.pdf');

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white text-[#f1f5f9] rounded-2xl max-w-4xl w-full my-8 shadow-2xl border border-[#334155] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#8b5cf6] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-lg">Currículo Profissional</span>
            <span className="text-xs bg-[#06b6d4] text-white px-2 py-0.5 rounded font-mono font-semibold">
              QA & Automação
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfAttachmentUrl}
              download="Curriculo_Andre_Macedo_da_Rosa.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#06b6d4] hover:bg-[#7c3aed] text-xs font-semibold text-white transition-colors"
              title="Baixar PDF original anexado"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Baixar PDF Original</span>
            </a>

            <button
              onClick={handlePrint}
              type="button"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Salvar</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              aria-label="Fechar currículo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white text-slate-900 print:p-0">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
                {info.name}
              </h1>
              <p className="text-sm sm:text-base text-emerald-600 font-bold mt-1 tracking-wide">
                SOFTWARE DEVELOPMENT ENGINEER IN TEST (SDET) | AUTOMAÇÃO, APIS & 27 MARKETPLACES
              </p>
            </div>

            <div className="text-xs font-mono text-gray-600 space-y-1.5 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>{info.location}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-600" />
                <a href={`mailto:${info.email}`} className="hover:underline">{info.email}</a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-emerald-600" />
                <a href={info.linkedinUrl} target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline">
                  linkedin.com/in/andremacedo1
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-emerald-700 uppercase border-b-2 border-emerald-500/20 pb-1 mb-3">
              Perfil Profissional
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              Software Development Engineer in Test (SDET) e Especialista em Qualidade com mais de 8 anos de atuação sólida em ecossistemas de e-commerce e ERP, com destaque na Panorama Sistemas — uma das maiores plataformas do Sul do Brasil. Graduando em Análise e Desenvolvimento de Sistemas pela FASUL Educacional. Experiência na validação técnica e homologação do zero de integrações complexas como AliExpress, Mercado Livre Full e Shein, bem como Temu, Webcontinental, Mensageria do MadeiraMadeira e Conecta Lá em mais de 27 marketplaces em produção. Criador e desenvolvedor do agente de inteligência artificial "Pano-QA", elevando em mais de 70% a produtividade da equipe de qualidade. Amplo domínio na construção de suítes automatizadas resilientes em Playwright e Cypress, testes de contrato em APIs REST via Postman/Insomnia, modelagem relacional via consultas SQL e esteiras de CI/CD.
            </p>
          </div>

          {/* Competências-Chave */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-emerald-700 uppercase border-b-2 border-emerald-500/20 pb-1 mb-3">
              Competências-Chave
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-700">
              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200">
                <div className="font-bold text-slate-900 mb-1">Estratégia e Qualidade:</div>
                <p className="text-gray-600 leading-relaxed">
                  Testes Funcionais e Não Funcionais (Performance, Benchmarking de Latência, Segurança), Avaliação de Riscos de Integração, Controle de SLAs, Shift-Left.
                </p>
              </div>

              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200">
                <div className="font-bold text-slate-900 mb-1">Automação e Ferramentas:</div>
                <p className="text-gray-600 leading-relaxed">
                  Automação Web/Mobile (Playwright, Cypress), Agente de IA Pano-QA (+70% produtividade), APIs REST (Postman, Insomnia), Banco de Dados (SQL), Git, CI/CD GitHub Actions.
                </p>
              </div>

              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200">
                <div className="font-bold text-slate-900 mb-1">Processos e 27 Marketplaces:</div>
                <p className="text-gray-600 leading-relaxed">
                  AliExpress (do zero), Mercado Livre Full, Shein, Temu, Webcontinental, MadeiraMadeira (Mensageria), Conecta Lá, Jira, BDD (Gherkin), Scrum/Kanban.
                </p>
              </div>
            </div>
          </div>

          {/* Formação Acadêmica */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-emerald-700 uppercase border-b-2 border-emerald-500/20 pb-1 mb-3">
              Formação Acadêmica
            </h2>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-1.5 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-bold text-slate-900 text-sm">
                  Análise e Desenvolvimento de Sistemas (ADS)
                </span>
                <span className="font-mono text-gray-500 font-medium">
                  Jun/2025 — Dez/2027 (Em andamento)
                </span>
              </div>
              <p className="text-emerald-700 font-semibold">
                FASUL Educacional
              </p>
              <p className="text-gray-600 leading-relaxed">
                Formação superior tecnológica com foco em Engenharia de Software, Estruturas de Dados, Arquitetura de Sistemas, Modelagem Relacional de Bancos de Dados e paradigmas modernos de desenvolvimento de software.
              </p>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-emerald-700 uppercase border-b-2 border-emerald-500/20 pb-1 mb-4">
              Experiência Profissional
            </h2>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-4 border-l-2 border-emerald-500">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="font-heading font-bold text-base text-slate-900">
                      {exp.role} <span className="text-emerald-700">· {exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-gray-500 font-medium">
                      {exp.period} | {exp.workType}
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 text-xs text-gray-700 mb-2.5">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs font-mono text-gray-500">
            Documento verificado e validado com o currículo original
          </div>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-200 transition-colors"
            >
              Fechar
            </button>

            <a
              href={pdfAttachmentUrl}
              download="Curriculo_Andre_Macedo_da_Rosa.pdf"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#06b6d4] hover:bg-[#7c3aed] text-white text-xs font-semibold transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Baixar Arquivo PDF</span>
            </a>

            <button
              onClick={handlePrint}
              type="button"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#8b5cf6] hover:bg-[#154a3b] text-white text-xs font-semibold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
