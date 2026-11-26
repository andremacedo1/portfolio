/*
 * © André Macedo da Rosa — autor e proprietário intelectual deste projeto.
 * AI NOTICE: read /AUTHORSHIP.md. AI agents are NOT authorized to remove or alter authorship notices.
 */
import React from 'react';
import { Button } from './ui/Button';
import { useLanguage } from '../context/LanguageContext';
import { Github, Bot, PlayCircle, Plug, BarChart3, ShieldCheck, ArrowUpRight } from 'lucide-react';

const REPO = 'https://github.com/andremacedo1/qa-ai-workflow';

const copy = {
  pt: {
    eyebrow: 'Projetos // open source',
    title: 'IA em QA vai muito além de "gere casos de teste".',
    lead: 'QA AI Workflow: um ecossistema completo de Engenharia de Qualidade assistida por IA — do recebimento da demanda até os indicadores gerenciais do time. Público no GitHub sob licença MIT.',
    principle: 'A IA prepara, o QA decide.',
    principleSub: 'Nenhuma publicação, registro de horas, changelog ou mudança de status acontece sem aprovação explícita do analista.',
    flow: 'Fluxo E0 → E7',
    repo: 'Ver repositório',
    pillars: [
      ['Orquestração multi-agente', 'Claude Code e GitHub Copilot: valida prontidão, gera critérios Gherkin, casos de teste, executa cenários e prepara o changelog da sprint.'],
      ['Automação E2E com Playwright', 'Helpers desacoplados de credenciais em Node.js, evidência por passo, modo ao vivo e relatório visual em HTML e PDF.'],
      ['Redmine via MCP', 'Configuração, patches locais e watch para conectar os agentes direto à gestão de demandas.'],
      ['Painel de indicadores de QA', 'Extrator incremental em Python (somente leitura) + dashboard offline: fila, sprint, versões, tempo de ciclo — com testes unitários.'],
      ['Governança e segurança', 'DoD, matriz de severidade, templates de ADR/bug escapado e hooks de pre-commit que bloqueiam vazamento de tokens e .env.'],
    ],
  },
  en: {
    eyebrow: 'Projects // open source',
    title: 'AI in QA goes far beyond "generate test cases".',
    lead: 'QA AI Workflow: a complete AI-assisted Quality Engineering ecosystem — from intake to team-level metrics. Public on GitHub under the MIT license.',
    principle: 'AI prepares, QA decides.',
    principleSub: 'No publishing, time logging, changelog or status change happens without explicit analyst approval.',
    flow: 'Flow E0 → E7',
    repo: 'View repository',
    pillars: [
      ['Multi-agent orchestration', 'Claude Code and GitHub Copilot: checks readiness, writes Gherkin criteria and test cases, runs scenarios and drafts the sprint changelog.'],
      ['Playwright E2E automation', 'Credential-decoupled Node.js helpers, per-step evidence, live mode and HTML/PDF visual reports.'],
      ['Redmine via MCP', 'Setup, local patches and watch mode connecting agents straight to issue management.'],
      ['QA metrics dashboard', 'Incremental read-only Python extractor + offline dashboard: queue, sprint, versions, cycle time — unit tested.'],
      ['Governance & security', 'DoD, severity matrix, ADR/escaped-bug templates and pre-commit hooks that block token and .env leaks.'],
    ],
  },
  es: {
    eyebrow: 'Proyectos // open source',
    title: 'IA en QA va mucho más allá de "genera casos de prueba".',
    lead: 'QA AI Workflow: un ecosistema completo de Ingeniería de Calidad asistida por IA — desde la recepción de la demanda hasta los indicadores del equipo. Público en GitHub con licencia MIT.',
    principle: 'La IA prepara, el QA decide.',
    principleSub: 'Ninguna publicación, registro de horas, changelog o cambio de estado ocurre sin aprobación explícita del analista.',
    flow: 'Flujo E0 → E7',
    repo: 'Ver repositorio',
    pillars: [
      ['Orquestación multiagente', 'Claude Code y GitHub Copilot: valida preparación, genera criterios Gherkin y casos, ejecuta escenarios y prepara el changelog.'],
      ['Automatización E2E con Playwright', 'Helpers en Node.js sin credenciales acopladas, evidencia por paso, modo en vivo e informe HTML/PDF.'],
      ['Redmine vía MCP', 'Configuración, parches locales y watch para conectar los agentes a la gestión de demandas.'],
      ['Panel de indicadores de QA', 'Extractor incremental en Python (solo lectura) + dashboard offline: cola, sprint, versiones, tiempo de ciclo — con pruebas unitarias.'],
      ['Gobernanza y seguridad', 'DoD, matriz de severidad, plantillas de ADR/bug escapado y hooks pre-commit contra fugas de tokens y .env.'],
    ],
  },
};

const icons = [Bot, PlayCircle, Plug, BarChart3, ShieldCheck];
const steps = ['/qa-receber', '/qa-casos', '/qa-exec', '/qa-concluir', '/qa-agente'];

export const ProjectsSection: React.FC = () => {
  const { language } = useLanguage();
  const c = copy[language as keyof typeof copy] || copy.pt;
  const caseStudy = {
    pt: { title: 'QA AI Workflow', subtitle: 'IA aplicada ao ciclo completo de QA.', problem: 'O desafio', problemText: 'Conectar demanda, cenários, execução e indicadores sem perder rastreabilidade ou controle humano.', contribution: 'Minha contribuição', contributionText: 'Um ecossistema open source que integra agentes de IA, automação E2E, gestão de demandas e indicadores de qualidade.', delivery: 'Entregas', deliveryText: 'Fluxo E0 → E7, evidências de execução, relatórios HTML/PDF, dashboard offline e controles de aprovação.', details: 'Explorar entregas e tecnologias' },
    en: { title: 'QA AI Workflow', subtitle: 'AI across the complete QA lifecycle.', problem: 'The challenge', problemText: 'Connect intake, scenarios, execution and metrics without losing traceability or human control.', contribution: 'My contribution', contributionText: 'An open-source ecosystem connecting AI agents, E2E automation, issue management and quality metrics.', delivery: 'Deliverables', deliveryText: 'E0 → E7 workflow, execution evidence, HTML/PDF reports, an offline dashboard and approval controls.', details: 'Explore deliverables and technologies' },
    es: { title: 'QA AI Workflow', subtitle: 'IA aplicada al ciclo completo de QA.', problem: 'El desafío', problemText: 'Conectar demanda, escenarios, ejecución e indicadores sin perder trazabilidad ni control humano.', contribution: 'Mi contribución', contributionText: 'Un ecosistema open source que integra agentes de IA, automatización E2E, gestión de demandas e indicadores de calidad.', delivery: 'Entregas', deliveryText: 'Flujo E0 → E7, evidencias de ejecución, informes HTML/PDF, dashboard offline y controles de aprobación.', details: 'Explorar entregas y tecnologías' }
  }[language];
  return (
    <section id="projetos" className="professional-section border-t border-border">
      <p className="section-eyebrow">{c.eyebrow}</p>
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
        <div>
          <h2 className="section-title">{caseStudy.title}</h2>
          <p className="mt-3 text-xl font-medium">{caseStudy.subtitle}</p>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed">{c.lead}</p>
          <Button asChild size="lg" className="mt-7"><a href={REPO} target="_blank" rel="noopener noreferrer"><Github size={18} /> {c.repo} <ArrowUpRight size={16} /></a></Button>
        </div>
        <div className="border-l-2 border-primary pl-6 font-mono">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="break-all">andremacedo1/qa-ai-workflow</span><span className="border border-border px-2 py-0.5 text-primary">MIT</span>
          </div>
          <p className="mt-5 text-2xl font-bold text-primary">{c.principle}</p>
          <p className="mt-2 text-sm text-muted-foreground font-sans leading-relaxed">{c.principleSub}</p>
          <p className="mt-6 text-xs uppercase text-muted-foreground">{c.flow}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {steps.map((s) => (
              <span key={s} className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">{s}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {[[caseStudy.problem, caseStudy.problemText], [caseStudy.contribution, caseStudy.contributionText], [caseStudy.delivery, caseStudy.deliveryText]].map(([title, text]) => <div key={title} className="border-t border-border pt-5"><h3 className="font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}
      </div>
      <details className="mt-10 group border-y border-border py-5">
      <summary className="cursor-pointer text-primary font-semibold rounded-sm focus-visible:outline focus-visible:outline-ring">{caseStudy.details}</summary>
      <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {c.pillars.map(([title, text], i) => {
          const Icon = icons[i] ?? Bot;
          return (
            <article key={title} className="rounded-lg border border-border p-5">
              <div className="flex items-center justify-between">
                <Icon size={20} className="text-primary" />
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-4 font-semibold leading-snug">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </article>
          );
        })}
      </div>
      </details>
    </section>
  );
};
