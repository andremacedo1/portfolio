# Portfólio — André Macedo da Rosa

**Quality Engineer Sênior | SDET — APIs, Marketplaces, Automação E2E & AI Orchestration**
Site no ar: https://andremacedo1.github.io/portfolio

Portfólio pessoal com a jornada profissional (linha do tempo que se percorre
rolando a página), experiência, ferramentas, arquivo pessoal, arcade "caça-bugs"
com ranking, currículo e contato — em português, inglês e espanhol, com tema
escuro e claro.

## Visão Técnica e Engenharia
A qualidade moderna exige arquitetura e orquestração. O foco da minha atuação em sistemas de alta complexidade (ERP, logística e fiscal) é a construção de malhas de testes preditivos, onde o engenheiro dita as regras e a tecnologia executa:
- **Orquestração de IA:** Integração de Agentes LLM especialistas (via Model Context Protocol) para geração autônoma de BDDs e análise preditiva de requisitos.
- **Git Merge Guards:** Interceptação real na esteira CI/CD, bloqueando aprovações de código fora dos padrões estruturais antes que atinjam a produção.
- **Automação Escalável:** Estruturação de testes E2E e validação massiva de contratos (APIs e Webhooks) utilizando Playwright e Cypress.

## Seções

- **Jornada** — linha do tempo dirigida por rolagem: a pé → bicicleta → ônibus → carro
- **Sobre** — métricas da carreira e visão de arquitetura de software
- **Experiência** — Panorama Sistemas, Magazord Tecnologia, Soeltech, Proaço
  (e as etapas anteriores de 2003 a 2018 na jornada)
- **Ferramentas** — stack de testes, automação E2E, integração MCP/IA, AWS e observabilidade
- **Arquivo pessoal** — família, Apolo, bancada de trabalho e estudos
- **Arcade** — passa-tempo "caça-bugs" com ranking local
- **Currículo** — visualização, impressão e PDF original
- **Contato** — e-mail e LinkedIn

## Rodando localmente

```bash
npm install
npm run dev     # http://localhost:3000
npm test        # verificações de conteúdo e regras (vitest)
npm run build   # gera dist/
