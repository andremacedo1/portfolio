export type Language = 'pt' | 'en' | 'es';

export interface Translations {
  nav: {
    about: string;
    arcade: string;
    experience: string;
    stack: string;
    personal: string;
    contact: string;
    viewResume: string;
    downloadZip: string;
    easterEggFound: string;
  };
  hero: {
    badge: string;
    name: string;
    headline: string;
    highlight: string;
    bio: string;
    ctaLinkedin: string;
    ctaZip: string;
    ctaResume: string;
    yearsExp: string;
    marketplaces: string;
    slasProtected: string;
    aiGain: string;
  };
  metrics: {
    expLabel: string;
    expSub: string;
    marketplacesLabel: string;
    marketplacesSub: string;
    slaLabel: string;
    slaSub: string;
    aiLabel: string;
    aiSub: string;
  };
  bugBait: {
    modalTitle: string;
    modalSubtitle: string;
    catchPhrase: string;
    explanation: string;
    badgeFound: string;
    closeBtn: string;
    resetBaits: string;
    bait1Tooltip: string;
    bait2Tooltip: string;
    bait3Tooltip: string;
    bait4Tooltip: string;
  };
  arcade: {
    sectionTag: string;
    cabinetTitle: string;
    cabinetSubtitle: string;
    startBtn: string;
    insertCoin: string;
    score: string;
    highScore: string;
    round: string;
    streak: string;
    watchSequence: string;
    yourTurn: string;
    gameOver: string;
    finalScore: string;
    saveScoreBtn: string;
    playerNamePlaceholder: string;
    leaderboardTitle: string;
    leaderboardSub: string;
    rank: string;
    player: string;
    points: string;
    soundOn: string;
    soundOff: string;
    howToPlay: string;
    howToPlayDesc: string;
    randomTag: string;
    modeColor: string;
    modeDash: string;
    modePassFail: string;
    modeSquash: string;
    promptColor: string;
    promptDash: string;
    promptPassFail: string;
    promptSquash: string;
    passBtn: string;
    failBtn: string;
    cases: { text: string; verdict: 'pass' | 'fail' }[];
  };
  about: {
    sectionTag: string;
    title: string;
    highlight: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    pillarsTitle: string;
    pillars: {
      p1Title: string;
      p1Desc: string;
      p2Title: string;
      p2Desc: string;
      p3Title: string;
      p3Desc: string;
      p4Title: string;
      p4Desc: string;
    };
  };
  timeline: {
    sectionTag: string;
    title: string;
    highlight: string;
    subtitle: string;
    flightLegend: string;
    milestones: {
      year: string;
      badge: string;
      title: string;
      description: string;
      impact: string;
    }[];
  };
  experience: {
    sectionTag: string;
    title: string;
    highlight: string;
    subtitle: string;
    experiences: {
      company: string;
      role: string;
      period: string;
      location: string;
      highlightBadge?: string;
      bulletPoints: string[];
      tags: string[];
    }[];
  };
  stack: {
    sectionTag: string;
    title: string;
    highlight: string;
    subtitle: string;
    categories: {
      automation: string;
      api: string;
      performance: string;
      ai: string;
      management: string;
    };
  };
  personal: {
    sectionTag: string;
    title: string;
    highlight: string;
    subtitle: string;
    petBadge: string;
    petTitle: string;
    petDesc: string;
    petMeta: string;
    petDetails: string;
    petBtn: string;
    petCounter: string;
    coopBadge: string;
    coopTitle: string;
    coopDesc: string;
    coopMeta: string;
    coopDetails: string;
    hobbiesBadge: string;
    hobbiesTitle: string;
    hobbiesDesc: string;
    hobbiesMeta: string;
    hobbiesDetails: string;
    setupBadge: string;
    setupTitle: string;
    setupDesc: string;
    setupMeta: string;
    setupDetails: string;
    studyBadge: string;
    studyTitle: string;
    studyDesc: string;
    studyMeta: string;
    studyDetails: string;
  };
  contact: {
    sectionTag: string;
    title: string;
    highlight: string;
    subtitle: string;
    copyEmail: string;
    copied: string;
    chatWhatsapp: string;
    viewLinkedin: string;
    downloadCv: string;
    footerRights: string;
  };
  resumeModal: {
    title: string;
    subtitle: string;
    downloadPdf: string;
    close: string;
    tabOverview: string;
    tabOriginalPdf: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      about: 'Sobre',
      arcade: 'Arcade QA',
      experience: 'Experiência',
      stack: 'Ferramentas',
      personal: 'Vida Pessoal',
      contact: 'Contato',
      viewResume: 'Ver Currículo',
      downloadZip: 'Baixar ZIP',
      easterEggFound: 'Iscas de Bug:',
    },
    hero: {
      badge: 'QA Sênior • Analista de Testes de Software • SDET',
      name: 'André Macedo',
      headline: 'Especialista em Testes de Software (QA):',
      highlight: 'APIs, Integrações, Marketplaces e IA aplicada a QA',
      bio: 'Analista de QA com mais de 8 anos testando sistemas de e-commerce e ERP: testes manuais e automatizados, testes de API (REST/Postman), integrações com marketplaces e uso de IA para acelerar o trabalho de QA. Na Panorama Sistemas, validei do zero as integrações com AliExpress, Mercado Livre Full, Shein, Temu, Webcontinental, MadeiraMadeira e Conecta Lá — mais de 27 marketplaces em produção. Criei o Pano-QA, agente de IA para QA (+70% de produtividade), e suítes E2E com Playwright e Cypress. Graduando em Análise e Desenvolvimento de Sistemas (FASUL).',
      ctaLinkedin: 'LinkedIn Conectar',
      ctaZip: 'Baixar Projeto (ZIP)',
      ctaResume: 'Abrir Currículo',
      yearsExp: '+8 Anos',
      marketplaces: '27+',
      slasProtected: '99.9%',
      aiGain: '+70%',
    },
    metrics: {
      expLabel: '+8 Anos',
      expSub: 'SDET & Engenharia de Qualidade Web & Mobile',
      marketplacesLabel: '27+ Marketplaces',
      marketplacesSub: 'Integrações Críticas de E-commerce',
      slaLabel: '99.9% SLA',
      slaSub: 'Zero Incidentes Silenciosos em APIs',
      aiLabel: '+70% Eficiência',
      aiSub: 'Automação com Pano-QA & Playwright',
    },
    bugBait: {
      modalTitle: '🚨 Alerta de Qualidade — Teste de Atenção!',
      modalSubtitle: 'Você encontrou uma inconsistência sutil no sistema.',
      catchPhrase: 'Você achou mesmo que eu sou tão amador assim? 😉',
      explanation: 'Essa anomalia foi inserida intencionalmente para testar sua percepção analítica de QA! Em produção na Panorama Sistemas, prevenindo falhas em 27 marketplaces e microsserviços de alto volume, nossos testes de contrato, linter estrito e pipelines de CI/CD bloqueiam qualquer erro antes do deploy.',
      badgeFound: 'Anomalias sutis descobertas:',
      closeBtn: 'Entendido! Fechar Alerta',
      resetBaits: 'Reiniciar Iscas',
      bait1Tooltip: 'Status da API: 200 OK (Latência 24ms)',
      bait2Tooltip: 'Parâmetro de integração REST',
      bait3Tooltip: 'Métrica de telemetria do componente',
      bait4Tooltip: 'Build commit hash',
    },
    arcade: {
      sectionTag: 'ARCADE VINTAGE // DESAFIO DE PRECISÃO & DETECÇÃO VISUAL DO QA',
      cabinetTitle: 'QA PRECISION ARCADE',
      cabinetSubtitle: 'Encontre a menor anomalia visual ou desincronização de pixels antes do deploy!',
      startBtn: 'INICIAR PARTIDA',
      insertCoin: 'INICIAR TESTE',
      score: 'Pontos',
      highScore: 'Recorde',
      round: 'Nível',
      streak: 'Sequência',
      watchSequence: 'Inspecione a grade de pixels...',
      yourTurn: 'Sua vez! Encontre a anomalia.',
      gameOver: 'TEMPO ESGOTADO! FIM DE JOGO',
      finalScore: 'Pontuação Final:',
      saveScoreBtn: 'Salvar no Ranking',
      playerNamePlaceholder: 'Seu apelido de QA (ex: BugHunter)',
      leaderboardTitle: 'HALL DA FAMA DOS QAs',
      leaderboardSub: 'Os melhores estrategistas de teste registrados',
      rank: 'Pos',
      player: 'Player',
      points: 'Pontos',
      soundOn: 'Áudio ON',
      soundOff: 'Áudio MUDO',
      howToPlay: 'Como Funciona:',
      howToPlayDesc: 'Cada nível sorteia uma de 4 provas de QA: achar a tonalidade diferente na grade de pixels, clicar no serviço com defeito no painel de integrações, decidir se um cenário de teste passa ou falha, ou encontrar a linha com bug no código. Responda rápido: erro custa 3 segundos do relógio.',
      randomTag: 'RODADA ALEATÓRIA // 4 PROVAS DE QA',
      modeColor: 'COR',
      modeDash: 'PAINEL',
      modePassFail: 'PASSA/FALHA',
      modeSquash: 'CÓDIGO',
      promptColor: 'Ache o bloco com tonalidade diferente.',
      promptDash: 'Clique no serviço com defeito no painel.',
      promptPassFail: 'Esse cenário de teste passa ou falha?',
      promptSquash: 'Clique na linha que contém o bug.',
      passBtn: 'PASSA',
      failBtn: 'FALHA',
      cases: [
        { text: 'A API respondeu 200, mas o campo obrigatório order_id veio vazio.', verdict: 'fail' },
        { text: 'Os 12 testes automatizados passaram no CI e a cobertura subiu 3%.', verdict: 'pass' },
        { text: "O botão 'Finalizar compra' funciona, mas o rótulo aparece como 'undefined'.", verdict: 'fail' },
        { text: 'O tempo médio de resposta caiu de 180ms para 120ms após a otimização.', verdict: 'pass' },
        { text: 'O mesmo pedido foi faturado duas vezes no mesmo carrinho.', verdict: 'fail' },
        { text: 'O hotfix passou por revisão, testes e deploy na janela aprovada.', verdict: 'pass' },
        { text: 'O estoque sincronizou com o marketplace, mas a contagem ficou negativa.', verdict: 'fail' },
        { text: 'O relatório mensal bateu com o fechamento anterior, sem diferenças.', verdict: 'pass' },
      ],
    },
    about: {
      sectionTag: 'FILOSOFIA DE TRABALHO // SHIFT-LEFT TESTING',
      title: 'Engenharia de Qualidade',
      highlight: 'Confiabilidade em Escala para APIs e Marketplaces',
      paragraph1: 'Atuo com testes de software em e-commerce e ERP, conectando regras de negócio, APIs e dados. Na Panorama Sistemas, valido integrações com mais de 27 marketplaces, com foco em identificar riscos e reduzir falhas em fluxos críticos de pedidos e estoque.',
      paragraph2: 'Minha trajetória inclui análise de negócios, suporte, implantação e migração de ERP. Essa visão consultiva orienta a análise de requisitos, os critérios de aceite em BDD e os planos de teste, junto à automação com Cypress e Playwright e à validação de APIs e bancos de dados.',
      paragraph3: 'Sou o idealizador e desenvolvedor do agente de inteligência artificial "Pano-QA" na Panorama Sistemas, ferramenta que automatiza a geração de casos de teste e cenários de cobertura, acelerando em mais de 70% a produtividade da equipe com altíssima precisão técnica.',
      pillarsTitle: '4 PILARES DA MINHA ATUAÇÃO',
      pillars: {
        p1Title: 'Estratégia de Testes & Negócio',
        p1Desc: 'Análise de requisitos e riscos, planos de teste e critérios de aceite em BDD. A experiência com ERP, suporte e implantação ajuda a traduzir regras de negócio em cenários relevantes.',
        p2Title: 'Automação Web & Mobile',
        p2Desc: 'Testes manuais e automatizados com Cypress e Playwright, validação de aplicações responsivas e PWAs e uso de Git e CI/CD no ciclo de qualidade.',
        p3Title: 'APIs, Dados & Marketplaces',
        p3Desc: 'Validação de APIs REST com Postman e Insomnia e de dados com SQL. Experiência com mais de 27 marketplaces, incluindo AliExpress, Mercado Livre Full e Shein.',
        p4Title: 'IA Aplicada a QA (Pano-QA)',
        p4Desc: 'Criação do Pano-QA para apoiar a geração de cenários e casos de teste, com ganho de produtividade superior a 70% relatado no currículo.',
      },
    },
    timeline: {
      sectionTag: 'JORNADA PROFISSIONAL // LINHA DO TEMPO (2003 - 2026)',
      title: 'Construção Contínua',
      highlight: 'uma Trajetória de Excelência Técnica e Resultados',
      subtitle: 'Role a página e acompanhe a estrada que moldou a minha maturidade em engenharia e qualidade de software:',
      flightLegend: 'Estrada da carreira em tempo real',
      milestones: [
        {
          year: '2003 - 2007',
          badge: 'PRIMEIRO PASSO',
          title: 'Lear Corporation // Operador de Produção',
          description: 'Linha de montagem do Celta e Prisma, onde nasceu meu olhar para controle de qualidade.',
          impact: 'Primeiro contato com qualidade na prática.',
        },
        {
          year: '2007 - 2011',
          badge: 'IMPLANTAÇÃO',
          title: 'Dueto Tecnologia // Assessor Técnico de Software',
          description: 'Implantação de sistemas de gestão pública, treinamento de usuários e suporte.',
          impact: 'Base em sistemas empresariais e atendimento.',
        },
        {
          year: '2011 - 2012',
          badge: 'ANÁLISE DE NEGÓCIOS',
          title: 'IPM Sistemas // Business Analyst',
          description: 'Requisitos e casos de teste do Atende.Net; projeto piloto da certificação MPS.Br nível G.',
          impact: 'Primeiros planos de teste formais.',
        },
        {
          year: '2012 - 2018',
          badge: 'SUPORTE & PROCESSOS',
          title: 'Delsoft Sistemas // Analista de Suporte Pleno',
          description: 'Programação, documentação do ERP, CSC e implantação do 0800net e Scrum.',
          impact: 'Visão completa do ciclo de software.',
        },
        {
          year: '2019 - 2020',
          badge: 'MIGRAÇÃO DE ERP',
          title: 'Proaço // Analista de TI',
          description: 'Planejamento e execução de migração de ERP corporativo com integridade total de dados e validações robustas em banco relacional via consultas SQL.',
          impact: 'Rigor analítico e integridade de dados em ambiente corporativo.',
        },
        {
          year: '2020 - 2021',
          badge: 'CONSULTORIA ERP',
          title: 'Soeltech // Consultor de Implantação ERP Sênior',
          description: 'Atuação consultiva em análise de demandas de clientes, validação de regras de negócio entre o ERP e operações fabris/comerciais, testes de integração e documentação técnica.',
          impact: 'Visão consultiva holística e mapeamento de processos complexos.',
        },
        {
          year: '2021 - 2025',
          badge: 'ALTA ESCALA (3a 9m)',
          title: 'Magazord Tecnologia // Analista de QA',
          description: 'Garantia de qualidade em plataforma multicanal de e-commerce. Vencedor do Prêmio Black Zorder, gestão rigorosa de SLAs e redução expressiva de inconformidades no Jira, critérios BDD e testes Web/Mobile (PWAs).',
          impact: 'Redução de incidentes em produção e conformidade em milhares de transações diárias.',
        },
        {
          year: '2025 - ATUAL',
          badge: 'ATUAL // PANORAMA SISTEMAS',
          title: 'Panorama Sistemas // Analista de QA Sênior / SDET',
          description: 'Na Panorama Sistemas (uma das maiores do Sul do Brasil), criação do agente de IA "Pano-QA" (+70% produtividade). Homologação do zero de AliExpress, Mercado Livre Full e Shein, além de Temu, Webcontinental, MadeiraMadeira e Conecta Lá em 27 marketplaces.',
          impact: 'Inovação com IA proprietária e referência técnica em arquitetura de testes e contratos de APIs.',
        },
      ],
    },
    experience: {
      sectionTag: 'EXPERIÊNCIA COMPROVADA // EMPRESAS & RESULTADOS',
      title: 'Onde Deixei',
      highlight: 'Minha Marca de Excelência e Confiança',
      subtitle: 'Histórico de entregas e impacto em empresas de tecnologia de alta performance:',
      experiences: [
        {
          company: 'Panorama Sistemas',
          role: 'Analista de QA Sênior / SDET',
          period: 'jun/2025 — atual',
          location: 'Ibirama, SC (Híbrido)',
          highlightBadge: '🚀 Criador do Agente Pano-QA (+70%)',
          bulletPoints: [
            'Arquiteto e criador do agente de Inteligência Artificial "Pano-QA", elevando em mais de 70% a produtividade do time de qualidade da Panorama Sistemas na elaboração de cenários e roteiros de teste.',
            'Homologação e validação técnica de integrações complexas desenvolvidas do zero: AliExpress (fluxos cross-border, precificação e moedas internacionais), Mercado Livre Full (sincronização de fulfillment, estoque em lote e separação) e Shein (mapeamento dinâmico de catálogo e callbacks).',
            'Validação de contratos, conciliação e webhooks de novos marketplaces na Panorama: Temu, Webcontinental, Mensageria do MadeiraMadeira (protocolos assíncronos de SAC e SLA), Conecta Lá (hub agregador) e todos os demais 27 players ativos em produção.',
            'Construção de suítes de automação de testes E2E com Cypress e Playwright, validando cenários Web e interfaces Mobile responsivas (viewports e layouts fluidos).',
            'Planejamento e execução de testes funcionais e não funcionais em APIs REST via Postman (contratos de payload, segurança e benchmarking de tempo de resposta).',
            'Elaboração de planos de teste e acompanhamento sistemático de defeitos no Jira, antecipando falhas em fases de refinamento e pré-produção.',
          ],
          tags: ['IA Pano-QA', 'Cypress', 'Playwright', 'Postman', 'APIs REST', '27 Marketplaces', 'Jira'],
        },
        {
          company: 'Magazord Tecnologia',
          role: 'Analista de QA',
          period: 'ago/2021 — abr/2025 (3 anos e 9 meses)',
          location: 'Rio do Sul, SC',
          highlightBadge: '🏆 Prêmio Black Zorder',
          bulletPoints: [
            'Ganhador do Prêmio Black Zorder pelo comprometimento exemplar com a qualidade e estabilidade de entregas em checkout e painéis de e-commerce.',
            'Garantia da qualidade de aplicações Web e Mobile (PWAs e responsividade), elaborando roteiros e cenários de testes em ambiente multicanal de alta criticidade.',
            'Acompanhamento rigoroso de SLAs e indicadores de defeitos no Jira, reduzindo expressivamente o número de inconformidades reportadas em ambiente de produção.',
            'Elaboração de documentação técnica detalhada, critérios de aceite em BDD e compartilhamento de conhecimento funcional junto ao time Scrum.',
          ],
          tags: ['PWAs', 'Testes Mobile', 'Jira', 'BDD', 'SLAs', 'Prêmio Black Zorder', 'Scrum'],
        },
        {
          company: 'Soeltech',
          role: 'Consultor de Implantação ERP Sênior',
          period: 'nov/2020 — jun/2021 (8 meses)',
          location: 'Rio do Sul, SC',
          bulletPoints: [
            'Atuação sênior focada em análise de demandas, mapeamento de processos e validação de requisitos de negócio entre o ERP e clientes.',
            'Execução de testes de integração, elaboração de manuais de sistemas e treinamento funcional de usuários.',
          ],
          tags: ['Consultoria ERP', 'Mapeamento de Processos', 'Testes de Integração', 'Treinamento'],
        },
        {
          company: 'Proaço',
          role: 'Analista de TI',
          period: 'jan/2019 — out/2020 (1 ano e 10 meses)',
          location: 'Ituporanga, SC',
          bulletPoints: [
            'Planejamento e execução da migração de ERP corporativo com integridade total de dados e zero perda de informações.',
            'Acompanhamento sistemático de defeitos e avaliações de risco em produção.',
            'Execução de validações robustas em banco de dados relacional via consultas SQL.',
          ],
          tags: ['Migração de ERP', 'SQL', 'Análise de Risco', 'Acompanhamento de Defeitos'],
        },
      ],
    },
    stack: {
      sectionTag: 'ECOSSISTEMA TÉCNICO // ARSENAL DO QUALITY ENGINEER',
      title: 'Ferramentas de Alto Calibre',
      highlight: 'para Garantir Estabilidade e Velocidade',
      subtitle: 'Tecnologias dominadas na prática para cobrir todas as camadas da pirâmide de testes:',
      categories: {
        automation: 'Automação E2E & Mobile',
        api: 'Testes de API & Contratos',
        performance: 'Performance & Carga',
        ai: 'Inteligência Artificial & Produtividade',
        management: 'Gestão, CI/CD & Métricas',
      },
    },
    personal: {
      sectionTag: 'ALÉM DO CÓDIGO // ARQUIVO PESSOAL',
      title: 'Quem é o André',
      highlight: 'Fora do Terminal e das Suítes de Teste',
      subtitle: 'Qualidade de vida, conexões genuínas e as paixões que recarregam a energia para entregar o melhor software:',
      petBadge: 'GUARDIÃO DO HOME OFFICE',
      petTitle: 'Apolo (15 Aninhos) // Mistura Pinscher & Pequinês',
      petDesc: 'Companheiro leal de 15 aninhos, o Apolo sintetiza a agilidade vigilante do Pinscher com a doçura aristocrática do Pequinês. O verdadeiro fiscal oficial da bancada de testes.',
      petMeta: 'PINSCHER & PEQUINÊS (PEQUI-PIN) // 15 ANOS DE LEALDADE',
      petDetails: 'Com seus 15 aninhos de vida e sabedoria, o Apolo é uma mistura autêntica de Pinscher Alemão e Pequinês Imperial (Pequi-Pin). Do Pinscher herdou a atenção implacável, a audição ultrassensível para qualquer barulho na casa e a coragem de um guardião incansável. Do Pequinês carrega a calma senhorial, o focinho charmoso e expressivo, a dignidade tranquila e o amor incondicional pelo aconchego no colo. Há 15 anos é a presença fixa aos pés da bancada de testes, acompanhando madrugadas de homologação, inspecionando cada deploy e nos lembrando diariamente sobre o valor da lealdade, paciência e afeto inabalável.',
      petBtn: 'Fazer Carinho no Apolo',
      petCounter: 'carinhos recebidos pelo Apolo',
      coopBadge: 'PARCERIA DE VIDA & BASE DE TUDO',
      coopTitle: 'Flávia, Manuela & Helena',
      coopDesc: 'Minha parceira de vida Flávia (juntos há 17 anos) e meus maiores tesouros Manuela e Helena — o alicerce absoluto, afeto e a verdadeira motivação diária.',
      coopMeta: '17 ANOS COM A FLÁVIA // MANUELA & HELENA: A BASE DE TUDO',
      coopDetails: 'A Flávia é minha companheira de jornada há 17 anos — quase duas décadas de cumplicidade genuína, compartilhando planos, mudanças, desafios superados e todas as vitórias profissionais e pessoais. A Manuela e a Helena são as minhas filhas e os maiores tesouros da minha existência: são o alicerce de tudo o que sou e a motivação por trás de cada linha de código, cenário de teste ou decisão de carreira. O aconchego familiar e o equilíbrio no lar são os pilares que me dão clareza e solidez para atuar com alto nível de exigência na engenharia de software.',
      hobbiesBadge: 'DESCONEXÃO & FOCO CRIATIVO',
      hobbiesTitle: 'Café, Games, Música e Lazer',
      hobbiesDesc: 'Café especial, música e games para relaxar. Fora das telas: caminhadas no parque em família, academia, viagens e gastronomia.',
      hobbiesMeta: 'CAFÉ & MÚSICA // GAMES // LAZER EM FAMÍLIA',
      hobbiesDetails: 'Gosto do ritual do café especial, preparado na máquina de espresso ou na prensa francesa, e de ouvir música para acompanhar o dia. Nos games, alterno entre COD Mobile, ação e corrida, além de Minecraft e Roblox com a Manuela e a Helena. O lazer também acontece longe das telas: caminhadas no parque em família, academia, viagens e novas experiências gastronômicas. São momentos de descanso, convivência e equilíbrio.',
      setupBadge: 'ESTAÇÃO DE ENGENHARIA // 100% REMOTO',
      setupTitle: 'Bancada do Home Office Otimizado',
      setupDesc: 'Ambiente ergonômico projetado para alta produtividade técnica: notebook de alta performance com monitor extra para inspeção paralela de código e automação, periféricos táteis e link redundante.',
      setupMeta: 'PRODUTIVIDADE MÁXIMA // ERGONOMIA // CONEXÃO REDUNDANTE',
      setupDetails: 'Bancada planejada nos mínimos detalhes para suportar longas sessões de testes automatizados e análise aprofundada de microsserviços: notebook de alta performance com monitor externo de alta resolução permitindo abrir lado a lado o Playwright Trace Viewer, Cypress runner, coleções Postman, terminais Linux e logs de CI/CD; cadeira ergonômica com suporte lombar dinâmico; teclado mecânico com switches táteis precisos para velocidade na escrita de testes; headset com Cancelamento Ativo de Ruído (ANC) para reuniões técnicas e isolamento sonoro; e link de fibra óptica redundante com roteamento automático garantindo zero interrupções.',
      studyBadge: 'FORMAÇÃO ACADÊMICA & EVOLUÇÃO SDET',
      studyTitle: 'Formação & Aprendizado Contínuo',
      studyDesc: 'ADS na FASUL (em andamento), formação em QA pela CESAR School e certificação Scrum Foundation. Aprendizado conectado à prática em testes e integrações.',
      studyMeta: 'FASUL // CESAR SCHOOL // SCRUM FOUNDATION',
      studyDetails: 'Curso Análise e Desenvolvimento de Sistemas na FASUL Educacional (2025–2027, em andamento). Concluí a Aceleração de Carreira em Engenharia de Qualidade de Software da CESAR School: 80 horas, com BDD, automação Web e API, testes de performance, QA em DevOps, IA aplicada a testes e soft skills. Tenho a certificação Scrum Foundation Professional Certification (SFPC™) e formações em gerenciamento de testes e resolução de problemas e conflitos no atendimento ao cliente. Na prática, conecto essa base à automação com Cypress e Playwright, validação de APIs e dados com Postman e SQL e ao desenvolvimento do Pano-QA. Os temas estudados representam formação complementar, não uma declaração de especialização em todos eles.',
    },
    contact: {
      sectionTag: 'CONEXÃO DIRETA // VAMOS CONVERSAR?',
      title: 'Pronto para Blindar',
      highlight: 'a Qualidade do seu Próximo Grande Produto',
      subtitle: 'Estou disponível para novas oportunidades estratégicas de Quality Engineering e alta senioridade técnica:',
      copyEmail: 'Copiar E-mail',
      copied: 'E-mail Copiado!',
      chatWhatsapp: 'Falar no WhatsApp',
      viewLinkedin: 'Ver Perfil no LinkedIn',
      downloadCv: 'Baixar Currículo (PDF)',
      footerRights: 'Todos os direitos reservados. Feito com rigor de qualidade e testes automatizados.',
    },
    resumeModal: {
      title: 'Currículo Profissional de André Macedo',
      subtitle: 'Quality Engineer Sênior | Especialista em E-commerce & Marketplaces',
      downloadPdf: 'Baixar PDF Oficial',
      close: 'Fechar',
      tabOverview: 'Visão Geral Formatada',
      tabOriginalPdf: 'Visualizar PDF Original',
    },
  },
  en: {
    nav: {
      about: 'About',
      arcade: 'QA Arcade',
      experience: 'Experience',
      stack: 'Tools',
      personal: 'Life & Behind Scenes',
      contact: 'Contact',
      viewResume: 'View Resume',
      downloadZip: 'Download ZIP',
      easterEggFound: 'Bug Baits:',
    },
    hero: {
      badge: 'Senior QA • Software Test Analyst • SDET',
      name: 'André Macedo',
      headline: 'Software Testing Specialist (QA):',
      highlight: 'APIs, Integrations, Marketplaces & AI for QA',
      bio: 'QA Analyst with 8+ years testing e-commerce and ERP systems: manual and automated testing, API testing (REST/Postman), marketplace integrations and AI to speed up QA work. At Panorama Sistemas I validated from scratch the integrations with AliExpress, Mercado Livre Full, Shein, Temu, Webcontinental, MadeiraMadeira and Conecta Lá — 27+ marketplaces in production. Creator of Pano-QA, an AI agent for QA (+70% productivity), and E2E suites with Playwright and Cypress. Studying Systems Analysis and Development (FASUL).',
      ctaLinkedin: 'Connect on LinkedIn',
      ctaZip: 'Download Project (ZIP)',
      ctaResume: 'Open Resume',
      yearsExp: '+8 Years',
      marketplaces: '27+',
      slasProtected: '99.9%',
      aiGain: '+70%',
    },
    metrics: {
      expLabel: '+8 Years',
      expSub: 'SDET & Web/Mobile Quality Engineering',
      marketplacesLabel: '27+ Marketplaces',
      marketplacesSub: 'Critical E-commerce Integrations',
      slaLabel: '99.9% SLA',
      slaSub: 'Zero Silent API Failures in Production',
      aiLabel: '+70% Efficiency',
      aiSub: 'Pano-QA & Playwright Automation',
    },
    bugBait: {
      modalTitle: '🚨 QA Quality Alert — Attention Test!',
      modalSubtitle: 'You discovered a subtle system inconsistency.',
      catchPhrase: 'Did you really think I was that amateur? 😉',
      explanation: 'This subtle anomaly was intentionally inserted to test your analytical QA eye! In production at Panorama Sistemas, preventing critical defects across 27 marketplaces and microservices, our contract tests, strict linter, and CI/CD pipelines block any error prior to deployment.',
      badgeFound: 'Subtle anomalies spotted:',
      closeBtn: 'Got it! Close Alert',
      resetBaits: 'Reset Baits',
      bait1Tooltip: 'API Gateway Status: 200 OK (Latency: 24ms)',
      bait2Tooltip: 'REST Integration Parameter',
      bait3Tooltip: 'Component telemetry metric',
      bait4Tooltip: 'Build commit hash',
    },
    arcade: {
      sectionTag: 'VINTAGE ARCADE // VISUAL QA ANOMALY & PRECISION CHALLENGE',
      cabinetTitle: 'QA PRECISION ARCADE',
      cabinetSubtitle: 'Spot the microscopic visual defect or pixel desync before deploying to production!',
      startBtn: 'START GAME',
      insertCoin: 'START TEST',
      score: 'Score',
      highScore: 'High Score',
      round: 'Level',
      streak: 'Streak',
      watchSequence: 'Inspect the pixel grid...',
      yourTurn: 'Your turn! Spot the anomaly.',
      gameOver: 'TIME OUT! GAME OVER',
      finalScore: 'Final Score:',
      saveScoreBtn: 'Save to Leaderboard',
      playerNamePlaceholder: 'Your QA handle (e.g. BugHunter)',
      leaderboardTitle: 'QA HALL OF FAME',
      leaderboardSub: 'Top test strategists on the leaderboard',
      rank: 'Rank',
      player: 'Player',
      points: 'Points',
      soundOn: 'Audio ON',
      soundOff: 'Audio MUTED',
      howToPlay: 'How to Play:',
      howToPlayDesc: 'Each level draws one of 4 QA tests at random: spot the odd tile in the pixel grid, click the failing service on the integrations dashboard, decide whether a test scenario passes or fails, or find the buggy line of code. Answer fast: a wrong call costs 3 seconds off the clock.',
      randomTag: 'RANDOM ROUND // 4 QA TESTS',
      modeColor: 'COLOR',
      modeDash: 'DASHBOARD',
      modePassFail: 'PASS/FAIL',
      modeSquash: 'CODE',
      promptColor: 'Find the tile with a different shade.',
      promptDash: 'Click the failing service on the dashboard.',
      promptPassFail: 'Does this test scenario pass or fail?',
      promptSquash: 'Click the line that contains the bug.',
      passBtn: 'PASS',
      failBtn: 'FAIL',
      cases: [
        { text: 'The API returned 200, but the required order_id field came back empty.', verdict: 'fail' },
        { text: 'All 12 automated tests passed in CI and coverage rose by 3%.', verdict: 'pass' },
        { text: "The 'Checkout' button works, but its label renders as 'undefined'.", verdict: 'fail' },
        { text: 'Average response time dropped from 180ms to 120ms after the optimization.', verdict: 'pass' },
        { text: 'The same order was billed twice in the same cart.', verdict: 'fail' },
        { text: 'The hotfix went through review, tests and a deployed approved window.', verdict: 'pass' },
        { text: 'Stock synced with the marketplace, but the count ended up negative.', verdict: 'fail' },
        { text: 'The monthly report matched the previous closing, with no differences.', verdict: 'pass' },
      ],
    },
    about: {
      sectionTag: 'CORE PHILOSOPHY // SHIFT-LEFT TESTING',
      title: 'Quality Engineering',
      highlight: 'Scale & Reliability for APIs and 27 Marketplaces',
      paragraph1: 'I test e-commerce and ERP software, connecting business rules, APIs and data. At Panorama Sistemas, I validate integrations with 27+ marketplaces, focusing on identifying risks and reducing failures in critical order and inventory flows.',
      paragraph2: 'My background includes business analysis, support, ERP implementation and migration. This consultative perspective informs requirements analysis, BDD acceptance criteria and test plans, alongside Cypress and Playwright automation and API and database validation.',
      paragraph3: 'I conceived and developed the proprietary "Pano-QA" AI agent at Panorama Sistemas, automating test scenario generation and acceptance criteria drafting, which elevated quality team productivity by over 70% with rigorous technical accuracy.',
      pillarsTitle: '4 PILLARS OF MY APPROACH',
      pillars: {
        p1Title: 'Test Strategy & Business',
        p1Desc: 'Requirements and risk analysis, test plans and BDD acceptance criteria. ERP, support and implementation experience helps translate business rules into relevant scenarios.',
        p2Title: 'Web & Mobile Automation',
        p2Desc: 'Manual and automated testing with Cypress and Playwright, responsive application and PWA validation, and Git and CI/CD in the quality workflow.',
        p3Title: 'APIs, Data & Marketplaces',
        p3Desc: 'REST API validation with Postman and Insomnia and data checks with SQL. Experience with 27+ marketplaces, including AliExpress, Mercado Livre Full and Shein.',
        p4Title: 'AI Applied to QA (Pano-QA)',
        p4Desc: 'Creator of Pano-QA to support test scenario and case generation, with productivity gains above 70% reported in the résumé.',
      },
    },
    timeline: {
      sectionTag: 'CAREER TIMELINE // (2003 - 2026)',
      title: 'Continuous Mastery',
      highlight: 'A Trajectory of Technical Excellence & Results',
      subtitle: 'Scroll and follow the road that forged my engineering maturity and software quality discipline:',
      flightLegend: 'Live flight trajectory',
      milestones: [
        {
          year: '2003 - 2007',
          badge: 'FIRST STEP',
          title: 'Lear Corporation // Production Operator',
          description: 'Assembly line for Celta and Prisma cars, where my eye for quality control began.',
          impact: 'First hands-on contact with quality.',
        },
        {
          year: '2007 - 2011',
          badge: 'DEPLOYMENT',
          title: 'Dueto Tecnologia // Software Technical Advisor',
          description: 'Deployment of public-sector management systems, user training and support.',
          impact: 'Foundation in enterprise systems and service.',
        },
        {
          year: '2011 - 2012',
          badge: 'BUSINESS ANALYSIS',
          title: 'IPM Sistemas // Business Analyst',
          description: 'Requirements and test cases for Atende.Net; pilot of the MPS.Br level G certification.',
          impact: 'First formal test plans.',
        },
        {
          year: '2012 - 2018',
          badge: 'SUPPORT & PROCESS',
          title: 'Delsoft Sistemas // Mid-level Support Analyst',
          description: 'Programming, ERP documentation, shared services and rollout of 0800net and Scrum.',
          impact: 'Full view of the software lifecycle.',
        },
        {
          year: '2019 - 2020',
          badge: 'ERP MIGRATION',
          title: 'Proaço // IT Analyst',
          description: 'Planned and executed corporate ERP migration with complete data integrity and robust relational SQL validations.',
          impact: 'Methodological rigor and zero data loss across legacy databases.',
        },
        {
          year: '2020 - 2021',
          badge: 'ERP CONSULTING',
          title: 'Soeltech // Senior ERP Implementation Consultant',
          description: 'Consultative business requirement analysis, integration testing between ERP and industrial/commercial systems, and technical documentation.',
          impact: 'End-to-end business process mapping and customer requirement alignment.',
        },
        {
          year: '2021 - 2025',
          badge: 'HIGH SCALE (3y 9m)',
          title: 'Magazord Tecnologia // QA Analyst',
          description: 'Quality assurance in high-concurrency multi-channel e-commerce. Winner of the Black Zorder Award, rigorous SLA tracking, BDD criteria, and responsive Web/Mobile PWA tests.',
          impact: 'Significant defect reduction in production across thousands of daily transactions.',
        },
        {
          year: '2025 - PRESENT',
          badge: 'CURRENT // PANORAMA SISTEMAS',
          title: 'Panorama Sistemas // Senior QA Analyst / SDET',
          description: 'At Panorama Sistemas (leading Southern Brazil platform), created the "Pano-QA" AI agent (+70% productivity). Homologated from scratch integrations with AliExpress, Mercado Livre Full, and Shein, plus Temu, Webcontinental, MadeiraMadeira, and Conecta Lá across 27 marketplaces.',
          impact: 'Proprietary AI innovation and technical reference in scalable API contracts and test automation.',
        },
      ],
    },
    experience: {
      sectionTag: 'PROVEN EXPERIENCE // COMPANIES & RESULTS',
      title: 'Where I Made My Mark',
      highlight: 'Excellence, Reliability, and Proven Track Record',
      subtitle: 'Documented impact across high-throughput software companies:',
      experiences: [
        {
          company: 'Panorama Sistemas',
          role: 'Senior QA Analyst / SDET',
          period: 'Jun/2025 — Present (Current)',
          location: 'Ibirama, SC (Hybrid)',
          highlightBadge: '🚀 Creator of Pano-QA Agent (+70%)',
          bulletPoints: [
            'Architected and implemented "Pano-QA", an Artificial Intelligence agent for Panorama Sistemas\' Quality team that elevated test scenario formulation and sprint productivity by over 70%.',
            'Technical validation and homologation of complex integrations built from scratch: AliExpress (cross-border flows, currency conversion, and international tax calculations), Mercado Livre Full (fulfillment sync, inventory reservations, and automated dispatch), and Shein (dynamic catalog attributes and webhook callbacks).',
            'End-to-end contract testing, reconciliation, and webhook assertions for new Panorama integrations: Temu, Webcontinental, MadeiraMadeira Messaging (asynchronous customer service protocols and SLA compliance), Conecta Lá (hub aggregator), and all 27+ active marketplaces.',
            'Built resilient E2E automated test suites using Cypress and Playwright, covering Web workflows and responsive Mobile viewports (fluid layouts and device breakpoints).',
            'Planned and executed functional and non-functional tests on REST APIs via Postman (payload security contracts, schema assertions, and latency benchmarking).',
            'Designed comprehensive test plans and systematically tracked defects in Jira, intercepting issues during refinement and staging phases.',
          ],
          tags: ['AI Pano-QA', 'Cypress', 'Playwright', 'Postman', 'REST APIs', '27 Marketplaces', 'Jira'],
        },
        {
          company: 'Magazord Tecnologia',
          role: 'Quality Assurance Analyst',
          period: 'Aug/2021 — Apr/2025 (3 yrs 9 mos)',
          location: 'Rio do Sul, SC',
          highlightBadge: '🏆 Black Zorder Award Winner',
          bulletPoints: [
            'Awarded the Black Zorder recognition for outstanding technical commitment to stability and reliability across high-volume checkout funnels.',
            'Assured software quality for critical Web and Mobile applications (PWAs and responsive viewports) in high-throughput e-commerce.',
            'Tracked Jira SLAs and defect indicators, significantly minimizing production-reported discrepancies.',
            'Authored comprehensive technical documentation, BDD acceptance criteria, and facilitated functional knowledge sharing in Scrum teams.',
          ],
          tags: ['PWAs', 'Mobile Testing', 'Jira', 'BDD', 'SLAs', 'Black Zorder Award', 'Scrum'],
        },
        {
          company: 'Soeltech',
          role: 'Senior ERP Implementation Consultant',
          period: 'Nov/2020 — Jun/2021 (8 mos)',
          location: 'Rio do Sul, SC',
          bulletPoints: [
            'Senior consulting focusing on requirement analysis, business process mapping, and rule validation between ERP and enterprise clients.',
            'Executed integration testing, authored comprehensive system user manuals, and conducted user training sessions.',
          ],
          tags: ['ERP Consulting', 'Process Mapping', 'Integration Testing', 'Training'],
        },
        {
          company: 'Proaço',
          role: 'IT Analyst',
          period: 'Jan/2019 — Oct/2020 (1 yr 10 mos)',
          location: 'Ituporanga, SC',
          bulletPoints: [
            'Planned and executed corporate ERP system migration with zero data loss.',
            'Systematic defect monitoring, risk assessments, and production deployment validations.',
            'Executed robust database validations on relational databases via complex SQL queries.',
          ],
          tags: ['ERP Migration', 'SQL', 'Risk Analysis', 'Defect Tracking'],
        },
      ],
    },
    stack: {
      sectionTag: 'TECH ECOSYSTEM // QUALITY ENGINEER ARSENAL',
      title: 'High-Caliber Tools',
      highlight: 'to Guarantee Uncompromising Speed & Reliability',
      subtitle: 'Hands-on mastery across every tier of the modern test automation pyramid:',
      categories: {
        automation: 'E2E & Mobile Automation',
        api: 'API Testing & Contracts',
        performance: 'Performance & Load Testing',
        ai: 'AI & Engineering Productivity',
        management: 'CI/CD, Management & Observability',
      },
    },
    personal: {
      sectionTag: 'BEYOND THE TERMINAL // PERSONAL ARCHIVE',
      title: 'Who André Is',
      highlight: 'Outside the IDE and Test Suites',
      subtitle: 'Healthy balance, genuine relationships, and the inspirations that power top-tier technical delivery:',
      petBadge: 'HOME OFFICE GUARDIAN',
      petTitle: 'Apolo (15 Years Old) // Pinscher & Pekingese Mix',
      petDesc: 'Loyal 15-year-old companion, Apolo blends the alert agility of the Pinscher with the aristocratic serenity of the Pekingese. The official supervisor of the test workbench.',
      petMeta: 'PINSCHER & PEKINGESE (PEKE-PIN) // 15 YEARS OF LOYALTY',
      petDetails: 'With 15 wonderful years of life and wisdom, Apolo is an authentic mix of German Pinscher and Imperial Pekingese (Peke-Pin). From the Pinscher, he inherited tireless vigilance, sharp hearing for any house sound, and courageous alert instincts. From the Pekingese, he carries dignified calm, an expressive snub nose, and a deep love for lap naps. For 15 years, he has been my steadfast companion beside the test station, joining late-night deployments and reminding us daily of the virtues of loyalty, patience, and affection.',
      petBtn: 'Pet Apolo',
      petCounter: 'pets given to Apolo',
      coopBadge: 'LIFE PARTNERSHIP & BEDROCK',
      coopTitle: 'Flávia, Manuela & Helena',
      coopDesc: 'My life partner Flávia (together for 17 years) and my greatest treasures Manuela & Helena — the absolute foundation, warmth, and daily motivation behind everything.',
      coopMeta: '17 YEARS WITH FLÁVIA // MANUELA & HELENA: MY BEDROCK',
      coopDetails: 'Flávia has been my partner for 17 years — nearly two decades of genuine companionship, weathering challenges, career pivots, and celebrating victories together. Manuela and Helena are my beloved daughters and life\'s greatest treasures: they are the bedrock of who I am and the inspiration behind every line of code, test case, or career choice. Family warmth and stability provide the clarity and resilience needed for high-demand software engineering.',
      hobbiesBadge: 'PASSION & CREATIVE FLOW',
      hobbiesTitle: 'Coffee, Games, Music & Leisure',
      hobbiesDesc: 'Specialty coffee, music and games to unwind. Away from screens: family walks in parks, the gym, travel and gastronomy.',
      hobbiesMeta: 'COFFEE & MUSIC // GAMES // FAMILY LEISURE',
      hobbiesDetails: 'I enjoy specialty coffee prepared with an espresso machine or French press and music throughout the day. My games include COD Mobile, action and racing, plus Minecraft and Roblox with Manuela and Helena. Away from screens, I enjoy family walks in parks, the gym, travel and new gastronomic experiences: time to rest, connect and find balance.',
      setupBadge: 'ENGINEERING BENCH // 100% REMOTE',
      setupTitle: 'Optimized Remote Engineering Station',
      setupDesc: 'Ergonomic station engineered for technical throughput: high-performance laptop plus external monitor for parallel code and test suite inspection, tactile peripherals, and redundant fiber connectivity.',
      setupMeta: 'MAX PRODUCTIVITY // ERGONOMICS // REDUNDANT CONNECTION',
      setupDetails: 'Meticulously designed for sustained automation development and microservice inspection: high-performance laptop with an external high-resolution monitor displaying Playwright Trace Viewer, Cypress runner, Postman collections, Linux terminals, and CI/CD logs side by side; ergonomic mesh chair with dynamic lumbar support; mechanical keyboard with crisp tactile switches; active noise cancelling (ANC) headset for clear technical collaboration; and dual redundant fiber-optic internet connections ensuring zero downtime.',
      studyBadge: 'ACADEMIC EDUCATION & SDET MASTERY',
      studyTitle: 'Education & Continuous Learning',
      studyDesc: 'Systems Analysis and Development at FASUL (in progress), QA training at CESAR School and Scrum Foundation certification. Learning connected to testing and integration work.',
      studyMeta: 'FASUL // CESAR SCHOOL // SCRUM FOUNDATION',
      studyDetails: 'I am studying Systems Analysis and Development at FASUL Educacional (2025–2027, in progress). I completed the 80-hour Software Quality Engineering Career Acceleration program at CESAR School, covering BDD, Web and API automation, performance testing, QA in DevOps, AI in testing and soft skills. I hold Scrum Foundation Professional Certification (SFPC™) and training in test management and customer-service problem and conflict resolution. I apply this foundation through Cypress and Playwright automation, API and data validation with Postman and SQL, and Pano-QA development. Course topics are complementary education, not a claim of specialization in every subject.',
    },
    contact: {
      sectionTag: 'DIRECT OUTREACH // LET’S TALK',
      title: 'Ready to Elevate',
      highlight: 'the Quality & Reliability of Your Next Big Product',
      subtitle: 'Open for strategic Quality Engineering and senior technical ownership opportunities worldwide:',
      copyEmail: 'Copy Email',
      copied: 'Email Copied!',
      chatWhatsapp: 'WhatsApp Chat',
      viewLinkedin: 'View LinkedIn Profile',
      downloadCv: 'Download Resume (PDF)',
      footerRights: 'All rights reserved. Built with high engineering standards and automated testing.',
    },
    resumeModal: {
      title: 'Professional Resume — André Macedo',
      subtitle: 'Senior Quality Engineer | E-commerce & Marketplaces Specialist',
      downloadPdf: 'Download Official PDF',
      close: 'Close',
      tabOverview: 'Formatted Overview',
      tabOriginalPdf: 'Original PDF Preview',
    },
  },
  es: {
    nav: {
      about: 'Sobre mí',
      arcade: 'Arcade QA',
      experience: 'Experiencia',
      stack: 'Herramientas',
      personal: 'Vida Personal',
      contact: 'Contacto',
      viewResume: 'Ver CV',
      downloadZip: 'Descargar ZIP',
      easterEggFound: 'Trampas Bug:',
    },
    hero: {
      badge: 'QA Senior • Analista de Pruebas de Software • SDET',
      name: 'André Macedo',
      headline: 'Especialista en Pruebas de Software (QA):',
      highlight: 'APIs, Integraciones, Marketplaces e IA aplicada a QA',
      bio: 'Analista de QA con más de 8 años probando sistemas de e-commerce y ERP: pruebas manuales y automatizadas, pruebas de API (REST/Postman), integraciones con marketplaces y uso de IA para acelerar el trabajo de QA. En Panorama Sistemas validé desde cero las integraciones con AliExpress, Mercado Libre Full, Shein, Temu, Webcontinental, MadeiraMadeira y Conecta Lá — más de 27 marketplaces en producción. Creador de Pano-QA, agente de IA para QA (+70% de productividad), y suites E2E con Playwright y Cypress. Cursando Análisis y Desarrollo de Sistemas (FASUL).',
      ctaLinkedin: 'Conectar en LinkedIn',
      ctaZip: 'Descargar Proyecto (ZIP)',
      ctaResume: 'Abrir Currículum',
      yearsExp: '+8 Años',
      marketplaces: '27+',
      slasProtected: '99.9%',
      aiGain: '+70%',
    },
    metrics: {
      expLabel: '+8 Años',
      expSub: 'SDET e Ingeniería de Calidad Web y Mobile',
      marketplacesLabel: '27+ Marketplaces',
      marketplacesSub: 'Integraciones Críticas de E-commerce',
      slaLabel: '99.9% SLA',
      slaSub: 'Cero Fallas Silenciosas de APIs en Producción',
      aiLabel: '+70% Eficiencia',
      aiSub: 'Automatización con Pano-QA & Playwright',
    },
    bugBait: {
      modalTitle: '🚨 Alerta de Calidad — ¡Prueba de Atención!',
      modalSubtitle: 'Encontraste una inconsistencia sutil en el sistema.',
      catchPhrase: '¿De verdad creíste que era tan aficionado? 😉',
      explanation: '¡Esta anomalía sutil fue colocada intencionalmente para poner a prueba tu ojo analítico de QA! En producción en Panorama Sistemas, previniendo fallas en 27 marketplaces y microservicios de alto volumen, nuestras pruebas de contrato, linter estricto y pipelines de CI/CD bloquean cualquier error antes del despliegue.',
      badgeFound: 'Anomalías sutiles detectadas:',
      closeBtn: '¡Entendido! Cerrar Alerta',
      resetBaits: 'Reiniciar Trampas',
      bait1Tooltip: 'Estado de API Gateway: 200 OK (Latencia: 24ms)',
      bait2Tooltip: 'Parámetro de integración REST',
      bait3Tooltip: 'Métrica de telemetría del componente',
      bait4Tooltip: 'Versión de build hash',
    },
    arcade: {
      sectionTag: 'ARCADE VINTAGE // DESAFÍO DE PRECISIÓN Y REFLEJOS VISUALES QA',
      cabinetTitle: 'QA PRECISION ARCADE',
      cabinetSubtitle: '¡Detecta la mínima anomalía visual o desincronización de píxeles antes de producción!',
      startBtn: 'INICIAR PARTIDA',
      insertCoin: 'INICIAR PRUEBA',
      score: 'Puntos',
      highScore: 'Récord',
      round: 'Nivel',
      streak: 'Racha',
      watchSequence: 'Inspecciona la cuadrícula de píxeles...',
      yourTurn: '¡Tu turno! Encuentra la anomalía.',
      gameOver: '¡TIEMPO AGOTADO! FIN DEL JUEGO',
      finalScore: 'Puntuación Final:',
      saveScoreBtn: 'Guardar en el Ranking',
      playerNamePlaceholder: 'Tu alias de QA (ej: BugHunter)',
      leaderboardTitle: 'SALÓN DE LA FAMA QA',
      leaderboardSub: 'Los mejores estrategas de pruebas registrados',
      rank: 'Pos',
      player: 'Jugador',
      points: 'Puntos',
      soundOn: 'Audio ACTIVADO',
      soundOff: 'Audio MUDO',
      howToPlay: 'Cómo se Juega:',
      howToPlayDesc: 'Cada nivel sortea una de 4 pruebas de QA: encontrar el tono distinto en la cuadrícula de píxeles, clicar el servicio con falla en el panel de integraciones, decidir si un escenario de prueba pasa o falla, o hallar la línea con bug en el código. Responde rápido: un error cuesta 3 segundos del reloj.',
      randomTag: 'RONDA ALEATORIA // 4 PRUEBAS DE QA',
      modeColor: 'COLOR',
      modeDash: 'PANEL',
      modePassFail: 'PASA/FALLA',
      modeSquash: 'CÓDIGO',
      promptColor: 'Encuentra la casilla con tono diferente.',
      promptDash: 'Clickea el servicio con falla en el panel.',
      promptPassFail: '¿Este escenario de prueba pasa o falla?',
      promptSquash: 'Clickea la línea que contiene el bug.',
      passBtn: 'PASA',
      failBtn: 'FALLA',
      cases: [
        { text: 'La API respondió 200, pero el campo obligatorio order_id llegó vacío.', verdict: 'fail' },
        { text: 'Los 12 tests automatizados pasaron en el CI y la cobertura subió 3%.', verdict: 'pass' },
        { text: "El botón 'Finalizar compra' funciona, pero su etiqueta se muestra como 'undefined'.", verdict: 'fail' },
        { text: 'El tiempo promedio de respuesta bajó de 180ms a 120ms tras la optimización.', verdict: 'pass' },
        { text: 'El mismo pedido se facturó dos veces en el mismo carrito.', verdict: 'fail' },
        { text: 'El hotfix pasó por revisión, pruebas y un deploy en ventana aprobada.', verdict: 'pass' },
        { text: 'El stock sincronizó con el marketplace, pero el conteo quedó negativo.', verdict: 'fail' },
        { text: 'El informe mensual coincidió con el cierre anterior, sin diferencias.', verdict: 'pass' },
      ],
    },
    about: {
      sectionTag: 'FILOSOFÍA DE TRABAJO // SHIFT-LEFT TESTING',
      title: 'Ingeniería de Calidad',
      highlight: 'Confiabilidad a Escala para APIs y 27 Marketplaces',
      paragraph1: 'Trabajo con pruebas de software de e-commerce y ERP, conectando reglas de negocio, APIs y datos. En Panorama Sistemas valido integraciones con más de 27 marketplaces, identificando riesgos y reduciendo fallas en flujos críticos de pedidos y stock.',
      paragraph2: 'Mi trayectoria incluye análisis de negocios, soporte, implantación y migración de ERP. Esta visión consultiva orienta requisitos, criterios BDD y planes de prueba, junto a automatización con Cypress y Playwright y validación de APIs y bases de datos.',
      paragraph3: 'Soy el creador del agente de inteligencia artificial "Pano-QA" en Panorama Sistemas, herramienta que automatiza la generación de casos de prueba y criterios de cobertura, acelerando en más del 70% la productividad del equipo con altísima precisión técnica.',
      pillarsTitle: '4 PILARES DE MI ACTUACIÓN',
      pillars: {
        p1Title: 'Estrategia de Pruebas & Negocio',
        p1Desc: 'Análisis de requisitos y riesgos, planes de prueba y criterios de aceptación BDD. La experiencia en ERP, soporte e implantación conecta reglas de negocio con escenarios relevantes.',
        p2Title: 'Automatización Web & Mobile',
        p2Desc: 'Pruebas manuales y automatizadas con Cypress y Playwright, validación de aplicaciones responsivas y PWAs, Git y CI/CD en el ciclo de calidad.',
        p3Title: 'APIs, Datos & Marketplaces',
        p3Desc: 'Validación de APIs REST con Postman e Insomnia y datos con SQL. Experiencia con más de 27 marketplaces, incluidos AliExpress, Mercado Livre Full y Shein.',
        p4Title: 'IA Aplicada a QA (Pano-QA)',
        p4Desc: 'Creación de Pano-QA para apoyar la generación de escenarios y casos de prueba, con mejoras de productividad superiores al 70% informadas en el currículum.',
      },
    },
    timeline: {
      sectionTag: 'TRAYECTORIA PROFESIONAL // LÍNEA DE TIEMPO (2003 - 2026)',
      title: 'Construcción Continua',
      highlight: 'Una Historia de Excelencia Técnica y Resultados',
      subtitle: 'Desplázate y sigue el camino que consolidó mi madurez en ingeniería y calidad de software:',
      flightLegend: 'Ruta de vuelo en tiempo real',
      milestones: [
        {
          year: '2003 - 2007',
          badge: 'PRIMER PASO',
          title: 'Lear Corporation // Operador de Producción',
          description: 'Línea de montaje del Celta y Prisma, donde nació mi mirada de control de calidad.',
          impact: 'Primer contacto práctico con la calidad.',
        },
        {
          year: '2007 - 2011',
          badge: 'IMPLANTACIÓN',
          title: 'Dueto Tecnologia // Asesor Técnico de Software',
          description: 'Implantación de sistemas de gestión pública, capacitación de usuarios y soporte.',
          impact: 'Base en sistemas empresariales y atención.',
        },
        {
          year: '2011 - 2012',
          badge: 'ANÁLISIS DE NEGOCIOS',
          title: 'IPM Sistemas // Business Analyst',
          description: 'Requisitos y casos de prueba de Atende.Net; piloto de la certificación MPS.Br nivel G.',
          impact: 'Primeros planes de prueba formales.',
        },
        {
          year: '2012 - 2018',
          badge: 'SOPORTE Y PROCESOS',
          title: 'Delsoft Sistemas // Analista de Soporte',
          description: 'Programación, documentación del ERP, CSC e implantación de 0800net y Scrum.',
          impact: 'Visión completa del ciclo de software.',
        },
        {
          year: '2019 - 2020',
          badge: 'MIGRACIÓN ERP',
          title: 'Proaço // Analista de TI',
          description: 'Planificación y ejecución de migración de ERP corporativo con total integridad de datos y validaciones robustas en base relacional vía SQL.',
          impact: 'Rigor analítico y cero pérdida de datos en sistemas corporativos.',
        },
        {
          year: '2020 - 2021',
          badge: 'CONSULTORÍA ERP',
          title: 'Soeltech // Consultor de Implementación ERP Senior',
          description: 'Análisis consultivo de requerimientos, validación de reglas de negocio entre ERP y operaciones fabriles/comerciales, pruebas de integración y manuales técnicos.',
          impact: 'Visión consultiva holística y alineación de procesos complejos.',
        },
        {
          year: '2021 - 2025',
          badge: 'ALTA ESCALA (3a 9m)',
          title: 'Magazord Tecnologia // Analista de QA',
          description: 'Aseguramiento de calidad en e-commerce multicanal. Ganador del Premio Black Zorder, gestión de SLAs y seguimiento de defectos en Jira, criterios BDD y pruebas Web/Mobile (PWAs).',
          impact: 'Reducción drástica de incidentes en producción en miles de transacciones diarias.',
        },
        {
          year: '2025 - PRESENTE',
          badge: 'ACTUAL // PANORAMA SISTEMAS',
          title: 'Panorama Sistemas // Analista de QA Senior / SDET',
          description: 'En Panorama Sistemas (plataforma líder del Sur de Brasil), creación del agente de IA "Pano-QA" (+70% productividad). Homologación desde cero de AliExpress, Mercado Libre Full y Shein, además de Temu, Webcontinental, MadeiraMadeira y Conecta Lá en 27 marketplaces.',
          impact: 'Innovación con IA propia y referente técnico en integraciones de alta escala.',
        },
      ],
    },
    experience: {
      sectionTag: 'EXPERIENCIA COMPROBADA // EMPRESAS Y RESULTADOS',
      title: 'Donde Dejé',
      highlight: 'Mi Huella de Excelencia y Confianza',
      subtitle: 'Historial de entregas e impacto en empresas tecnológicas de alto rendimiento:',
      experiences: [
        {
          company: 'Panorama Sistemas',
          role: 'Analista de QA Senior / SDET',
          period: 'jun/2025 — presente (Actual)',
          location: 'Ibirama, SC (Híbrido)',
          highlightBadge: '🚀 Creador del Agente Pano-QA (+70%)',
          bulletPoints: [
            'Arquitecto y creador del agente de Inteligencia Artificial "Pano-QA", elevando en más de 70% la productividad del equipo de calidad de Panorama Sistemas en la formulación de escenarios y planes de prueba.',
            'Homologación y validación técnica de integraciones complejas desarrolladas desde cero: AliExpress (flujos cross-border, conversión de divisas e impuestos internacionales), Mercado Libre Full (sincronización de fulfillment, stock y despacho masivo) y Shein (mapeo de catálogo y callbacks de webhooks).',
            'Validación de contratos, conciliación y webhooks de nuevas integraciones en Panorama: Temu, Webcontinental, Mensajería MadeiraMadeira (protocolo asíncrono de atención y SLAs), Conecta Lá (hub agregador) y todos los 27+ marketplaces en producción.',
            'Construcción de suites de automatización E2E con Cypress y Playwright para flujos Web y vistas Mobile responsivas (layouts fluidos y viewports).',
            'Planificación y ejecución de pruebas funcionales y no funcionales en APIs REST con Postman (contratos de seguridad, integridad de payloads y benchmarking de latencia).',
            'Elaboración de planes de prueba y seguimiento sistemático de defectos en Jira, anticipando fallas en fases de refinamiento y preproducción.',
          ],
          tags: ['IA Pano-QA', 'Cypress', 'Playwright', 'Postman', 'APIs REST', '27 Marketplaces', 'Jira'],
        },
        {
          company: 'Magazord Tecnologia',
          role: 'Analista de QA',
          period: 'ago/2021 — abr/2025 (3 años y 9 meses)',
          location: 'Rio do Sul, SC',
          highlightBadge: '🏆 Premio Black Zorder',
          bulletPoints: [
            'Ganador del Premio Black Zorder por el compromiso ejemplar con la calidad y estabilidad de entregas en checkout y comercio electrónico.',
            'Aseguramiento de calidad en aplicaciones Web y Mobile (PWAs y responsividad) en comercio electrónico de alta criticidad.',
            'Seguimiento riguroso de SLAs e indicadores de defectos en Jira, disminuyendo sustancialmente los incidentes en producción.',
            'Redacción de documentación técnica detallada, criterios BDD y difusión de conocimientos en equipos Scrum.',
          ],
          tags: ['PWAs', 'Pruebas Mobile', 'Jira', 'BDD', 'SLAs', 'Premio Black Zorder', 'Scrum'],
        },
        {
          company: 'Soeltech',
          role: 'Consultor de Implementación ERP Senior',
          period: 'nov/2020 — jun/2021 (8 meses)',
          location: 'Rio do Sul, SC',
          bulletPoints: [
            'Actuación senior en análisis de requerimientos, mapeo de procesos y validación de reglas entre ERP y clientes corporativos.',
            'Ejecución de pruebas de integración, redacción de manuales y capacitación técnica.',
          ],
          tags: ['Consultoría ERP', 'Mapeo de Procesos', 'Pruebas de Integración', 'Capacitación'],
        },
        {
          company: 'Proaço',
          role: 'Analista de TI',
          period: 'ene/2019 — oct/2020 (1 año y 10 meses)',
          location: 'Ituporanga, SC',
          bulletPoints: [
            'Planificación y ejecución de migración de ERP corporativo con total integridad de datos.',
            'Seguimiento sistemático de defectos y análisis de riesgos en despliegues.',
            'Ejecución de validaciones de base de datos relacional mediante consultas SQL avanzadas.',
          ],
          tags: ['Migración de ERP', 'SQL', 'Análisis de Riesgos', 'Defect Tracking'],
        },
      ],
    },
    stack: {
      sectionTag: 'ECOSISTEMA TÉCNICO // ARSENAL DEL QUALITY ENGINEER',
      title: 'Herramientas de Alto Calibre',
      highlight: 'para Garantizar Estabilidad y Velocidad',
      subtitle: 'Tecnologías dominadas en la práctica en cada nivel de la pirámide de pruebas:',
      categories: {
        automation: 'Automatización E2E & Mobile',
        api: 'Pruebas de API & Contratos',
        performance: 'Rendimiento & Carga',
        ai: 'Inteligencia Artificial & Productividad',
        management: 'CI/CD, Gestión & Observabilidad',
      },
    },
    personal: {
      sectionTag: 'MÁS ALLÁ DEL CÓDIGO // ARCHIVO PERSONAL',
      title: 'Quién es André',
      highlight: 'Fuera de la Terminal y las Suites de Pruebas',
      subtitle: 'Equilibrio de vida, vínculos reales e inspiraciones que recargan la energía para construir gran software:',
      petBadge: 'GUARDIÁN DE HOME OFFICE',
      petTitle: 'Apolo (15 Años) // Mezcla Pinscher & Pekinés',
      petDesc: 'Compañero leal de 15 años, Apolo combina la agilidad vigilante del Pinscher con la docilidad aristocrática del Pekinés. El auténtico fiscal oficial de la estación de pruebas.',
      petMeta: 'PINSCHER & PEKINÉS (PEQUI-PIN) // 15 AÑOS DE LEALTAD',
      petDetails: 'Con 15 años de vida y sabiduría, Apolo es una mezcla auténtica de Pinscher Alemán y Pekinés Imperial (Pequi-Pin). Del Pinscher heredó la atención implacable, el oído ultrasensible para cualquier sonido en la casa y el coraje de un guardián protector. Del Pekinés posee la calma señorial, el hocico chato y expresivo, y el amor por descansar al pie del escritorio. Desde hace 15 años es la presencia fiel en madrugadas de pruebas y despliegues, recordándonos el valor de la lealtad, la paciencia y el cariño incondicional.',
      petBtn: 'Acariciar a Apolo',
      petCounter: 'caricias recibidas por Apolo',
      coopBadge: 'COMPAÑERISMO DE VIDA & CIMIENTO',
      coopTitle: 'Flávia, Manuela & Helena',
      coopDesc: 'Mi compañera de vida Flávia (juntos hace 17 años) y mis mayores tesoros Manuela y Helena — el pilar absoluto, el afecto y la motivación diaria.',
      coopMeta: '17 AÑOS CON FLÁVIA // MANUELA & HELENA: LA BASE DE TODO',
      coopDetails: 'Flávia es mi compañera de vida desde hace 17 años — casi dos décadas de complicidad genuina, compartiendo planes, mudanzas, desafíos superados y cada logro profesional y personal. Manuela y Helena son mis hijas y los tesoros más grandes de mi existencia: son la base de todo lo que construyo y la razón detrás de cada línea de código o escenario de prueba. El bienestar familiar y la armonía en casa son el verdadero cimiento de mi rendimiento en ingeniería de software.',
      hobbiesBadge: 'DESCONEXIÓN & ENFOQUE CREATIVO',
      hobbiesTitle: 'Café, Games, Música y Ocio',
      hobbiesDesc: 'Café de especialidad, música y juegos para relajarse. Fuera de las pantallas: paseos en familia por el parque, gimnasio, viajes y gastronomía.',
      hobbiesMeta: 'CAFÉ & MÚSICA // JUEGOS // OCIO EN FAMILIA',
      hobbiesDetails: 'Disfruto del café de especialidad preparado en máquina de espresso o prensa francesa y de escuchar música durante el día. Juego COD Mobile, juegos de acción y carreras, además de Minecraft y Roblox con Manuela y Helena. Fuera de las pantallas, disfruto de paseos en familia por el parque, gimnasio, viajes y experiencias gastronómicas: momentos de descanso, convivencia y equilibrio.',
      setupBadge: 'ESTACIÓN DE INGENIERÍA // 100% REMOTO',
      setupTitle: 'Home Office Optimizado',
      setupDesc: 'Ambiente ergonómico diseñado para alta productividad técnica: notebook de alto rendimiento con monitor extra para inspección simultánea de código y pruebas, periféricos táctiles y enlace redundante.',
      setupMeta: 'PRODUCTIVIDAD MÁXIMA // ERGONOMÍA // CONEXIÓN REDUNDANTE',
      setupDetails: 'Diseñado en cada detalle para soportar largas jornadas de automatización y análisis de microservicios: notebook de alto rendimiento con monitor externo de alta resolución para visualizar en paralelo Playwright Trace Viewer, Cypress runner, colecciones Postman, terminales Linux y logs de CI/CD; silla ergonómica con soporte lumbar activo; teclado mecánico de respuesta táctil precisa; auriculares con Cancelación Activa de Ruido (ANC); y doble enlace de fibra óptica redundante garantizando máxima disponibilidad.',
      studyBadge: 'FORMACIÓN ACADÉMICA & EVOLUCIÓN SDET',
      studyTitle: 'Formación & Aprendizaje Continuo',
      studyDesc: 'Análisis y Desarrollo de Sistemas en FASUL (en curso), formación en QA en CESAR School y certificación Scrum Foundation. Aprendizaje conectado a pruebas e integraciones.',
      studyMeta: 'FASUL // CESAR SCHOOL // SCRUM FOUNDATION',
      studyDetails: 'Curso Análisis y Desarrollo de Sistemas en FASUL Educacional (2025–2027, en curso). Completé la Aceleración de Carrera en Ingeniería de Calidad de Software de CESAR School: 80 horas, con BDD, automatización Web y API, pruebas de rendimiento, QA en DevOps, IA aplicada a pruebas y soft skills. Tengo Scrum Foundation Professional Certification (SFPC™) y formación en gestión de pruebas y resolución de problemas y conflictos en atención al cliente. Aplico esta base en automatización con Cypress y Playwright, validación de APIs y datos con Postman y SQL y desarrollo de Pano-QA. Los temas estudiados son formación complementaria, no una declaración de especialización en todas las áreas.',
    },
    contact: {
      sectionTag: 'CONEXIÓN DIRECTA // ¿CONVERSAMOS?',
      title: 'Listo para Proteger',
      highlight: 'la Calidad de tu Próximo Gran Producto',
      subtitle: 'Disponible para nuevas oportunidades estratégicas de Quality Engineering y alta senioridad técnica:',
      copyEmail: 'Copiar Correo',
      copied: '¡Correo Copiado!',
      chatWhatsapp: 'Hablar por WhatsApp',
      viewLinkedin: 'Ver Perfil en LinkedIn',
      downloadCv: 'Descargar CV (PDF)',
      footerRights: 'Todos los derechos reservados. Diseñado con estándares de calidad y pruebas automatizadas.',
    },
    resumeModal: {
      title: 'Currículum Profesional — André Macedo',
      subtitle: 'Senior Quality Engineer | Especialista en E-commerce & Marketplaces',
      downloadPdf: 'Descargar PDF Oficial',
      close: 'Cerrar',
      tabOverview: 'Vista Resumida',
      tabOriginalPdf: 'Previsualizar PDF Original',
    },
  },
};
