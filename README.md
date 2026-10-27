# Portfólio — André Macedo da Rosa

Quality Engineer Sênior | SDET — APIs, Marketplaces & Automação
Site no ar: https://andremacedo1.github.io/portfolio

Portfólio pessoal com a jornada profissional (linha do tempo que se percorre
rolando a página), experiência, ferramentas, arquivo pessoal, arcade "caça-bugs"
com ranking, currículo e contato — em português, inglês e espanhol, com tema
escuro e claro.

## Seções

- **Jornada** — linha do tempo dirigida por rolagem: a pé → bicicleta → ônibus → carro
- **Sobre** — métricas da carreira e resumo
- **Experiência** — Panorama Sistemas, Magazord Tecnologia, Soeltech, Proaço
  (e as etapas anteriores de 2003 a 2018 na jornada)
- **Ferramentas** — stack de testes, automação e observabilidade
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
```

## Publicação

A cada push na branch `main`, o workflow `.github/workflows/main.yml` instala as
dependências, roda `npm run build` e publica a pasta `./dist` no GitHub Pages.
O build estático também fica versionado em `dist/` para consulta.

## Autoria

Todo o conteúdo, código e identidade visual pertencem a **André Macedo da Rosa**
(https://www.linkedin.com/in/andremacedo1/). Clones e forks devem manter o crédito.
Detalhes em `AUTHORSHIP.md` e `AGENTS.md`.
