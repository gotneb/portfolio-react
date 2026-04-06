import type { TranslationSchema } from "./en";

const pt: TranslationSchema = {
  nav: {
    about: "Sobre",
    services: "Serviços",
    projects: "Projetos",
    experience: "Experiência",
    passions: "Paixões",
    contact: "Contato",
  },
  hero: {
    greeting: "o(//′▽″//)o Oi!",
    firstName: "Gabriel",
    lastName: "Bento",
    title: "DESENVOLVEDOR FULL STACK & MOBILE",
    bio: "Crio experiências digitais que vivem na interseção entre código elegante e design cuidadoso. De frontends pixel-perfect a backends robustos na nuvem — construo coisas que importam.",
    scrollText: "ROLE PARA EXPLORAR",
    portraitAlt: "Sua foto",
  },
  about: {
    title: "Sobre Mim",
    bio: "Sou um desenvolvedor fullstack e mobile com mais de 5 anos de experiência construindo produtos que as pessoas amam. Prospero no espaço onde a excelência técnica encontra a visão criativa — seja criando um web app responsivo, entregando uma experiência Flutter, ou arquitetando um backend que escala.",
    bio2: "Nascido no Brasil, moldado por culturas de todo o mundo. Falo cinco idiomas e trago essa perspectiva global a cada projeto que toco.",
    experience: "5+ Anos de Experiência",
    languagesTitle: "— IDIOMAS QUE FALO —",
    languages: [
      { flag: "🇧🇷", flagImage: "/images/flags/brazil.png", name: "Português", level: "Nativo" },
      { flag: "🇬🇧", flagImage: "/images/flags/usa.png", name: "Inglês", level: "Fluente" },
      { flag: "🇩🇪", flagImage: "/images/flags/germany.png", name: "Alemão", level: "Intermediário" },
      { flag: "🇯🇵", flagImage: "/images/flags/japan.png", name: "Japonês", level: "Intermediário" },
      { flag: "🇨🇳", flagImage: "/images/flags/china.png", name: "Chinês", level: "Iniciante" },
    ],
  },
  services: {
    title: "O Que Faço",
    subtitle: "Criando experiências digitais em cada camada do stack",
    items: [
      {
        title: "Desenvolvimento Web",
        description:
          "Construindo aplicações web rápidas, acessíveis e bonitas com Next.js, React e CSS moderno. De landing pages a dashboards complexos.",
      },
      {
        title: "Desenvolvimento Mobile",
        description:
          "Criando apps mobile multiplataforma com Flutter que parecem nativos em iOS e Android. Animações fluidas, arquitetura offline-first.",
      },
      {
        title: "Desenvolvimento Backend",
        description:
          "Projetando APIs escaláveis e infraestrutura em nuvem com Node.js, Rust e AWS. Recursos em tempo real, autenticação e pipelines de dados.",
      },
      {
        title: "Design UI/UX",
        description:
          "Traduzindo ideias em interfaces intuitivas. Trabalho de perto com sistemas de design, protótipos no Figma e pensamento centrado no usuário.",
      },
    ],
  },
  projects: {
    title: "Projetos em Destaque",
    subtitle: "Projetos que contam uma história",
    filters: ["Todos", "Web", "Mobile", "Backend", "Game Dev", "Sistemas"],
    codeLabel: "Código",
    demoLabel: "Demo",
    items: [
      {
        id: 1,
        name: "HanziFlow",
        category: "Mobile",
        description:
          "App de aprendizado de caracteres chineses com algoritmos de repetição espaçada e animações de ordem de traços. Feito para retenção profunda e duradoura.",
        tech: ["Flutter", "Firebase", "Dart"],
        gradient: "from-red-900 via-red-700 to-orange-600",
        code: "#",
        demo: "#",
      },
      {
        id: 2,
        name: "NexShop",
        category: "Web",
        description:
          "Plataforma de e-commerce completa com gerenciamento de estoque em tempo real, pagamentos Stripe e um poderoso painel administrativo.",
        tech: ["Next.js", "Supabase", "Stripe", "TailwindCSS"],
        gradient: "from-blue-900 via-blue-700 to-cyan-600",
        code: "#",
        demo: "#",
      },
      {
        id: 3,
        name: "LinguaPath",
        category: "Mobile",
        description:
          "App RPG de aprendizado de idiomas com lições gamificadas, sistemas de XP e conteúdo narrativo. Faz o aprendizado viciante.",
        tech: ["Flutter", "Firebase", "Dart"],
        gradient: "from-purple-900 via-purple-700 to-pink-600",
        code: "#",
        demo: "#",
      },
      {
        id: 4,
        name: "CloudPilot",
        category: "Web",
        description:
          "Dashboard de monitoramento e gerenciamento de infraestrutura em nuvem com métricas em tempo real, alertas e pipelines de deploy com um clique.",
        tech: ["Next.js", "AWS", "TypeScript"],
        gradient: "from-sky-900 via-sky-700 to-teal-600",
        code: "#",
        demo: "#",
      },
      {
        id: 5,
        name: "ZenUI",
        category: "Web",
        description:
          "Biblioteca de componentes React + TailwindCSS inspirada no minimalismo japonês. 60+ componentes, modo escuro, acessível por padrão.",
        tech: ["React", "TailwindCSS", "TypeScript"],
        gradient: "from-emerald-900 via-emerald-700 to-green-600",
        code: "#",
        demo: "#",
      },
      {
        id: 6,
        name: "PixelDungeon",
        category: "Game Dev",
        description:
          "Dungeon crawler roguelike com níveis gerados proceduralmente, mecânicas de morte permanente e estética pixel art que aquece a alma.",
        tech: ["Unity", "C#"],
        gradient: "from-yellow-900 via-yellow-700 to-amber-600",
        code: "#",
        demo: "#",
      },
      {
        id: 7,
        name: "NeuralNotes",
        category: "Sistemas",
        description:
          "App de notas local-first rápido com sumarização por IA. Construído em Rust para performance absurda, SQLite para armazenamento local confiável.",
        tech: ["Rust", "SQLite", "AI"],
        gradient: "from-zinc-800 via-zinc-700 to-slate-600",
        code: "#",
        demo: "#",
      },
      {
        id: 8,
        name: "SoundWave",
        category: "Backend",
        description:
          "Plataforma de streaming de áudio e colaboração em tempo real. Arquitetura WebSocket de baixa latência com gerenciamento de sessão baseado em Redis.",
        tech: ["Node.js", "Redis", "WebSockets"],
        gradient: "from-indigo-900 via-indigo-700 to-violet-600",
        code: "#",
        demo: "#",
      },
    ],
  },
  experience: {
    title: "Minha Jornada",
    subtitle: "Onde estive e o que construí",
    present: "Presente",
    items: [
      {
        company: "TechNova Solutions",
        role: "Desenvolvedor Fullstack Sênior",
        start: "Jan 2023",
        end: "Presente",
        bullets: [
          "Liderou a migração de um app Rails monolítico para Next.js + microsserviços, reduzindo o tempo de carregamento em 60% e os custos de infraestrutura em 35%.",
          "Arquitetou recursos de colaboração em tempo real usando WebSockets e Redis, agora usados por 50K+ usuários ativos diários.",
          "Mentorou uma equipe de 4 desenvolvedores júnior, estabelecendo cultura de code review e pipelines CI/CD com GitHub Actions.",
        ],
      },
      {
        company: "PixelCraft Studio",
        role: "Desenvolvedor Fullstack",
        start: "Mar 2021",
        end: "Dez 2022",
        bullets: [
          "Construiu e lançou 3 apps Flutter do zero até 10K+ downloads, integrando Firebase, compras no app e notificações push.",
          "Projetou APIs RESTful com Node.js e PostgreSQL, servindo 200K+ requisições por dia com 99,9% de uptime.",
          "Implementou um sistema de design usado em todos os produtos da empresa, reduzindo o tempo de desenvolvimento de UI em 40%.",
        ],
      },
      {
        company: "Freelance",
        role: "Desenvolvedor Mobile & Web",
        start: "Jun 2019",
        end: "Fev 2021",
        bullets: [
          "Entregou 15+ projetos para clientes no Brasil, Alemanha e EUA — de e-commerce a dashboards SaaS.",
          "Especializado em React e Flutter, construindo aplicações multiplataforma responsivas com foco em UX limpa.",
          "Manteve relacionamentos de longo prazo com 5 clientes recorrentes, gerando receita consistente por contratos de retainer.",
        ],
      },
    ],
  },
  passions: {
    title: "Além do Código",
    subtitle: "As paixões que moldam quem eu sou",
    items: [
      {
        icon: "🎮",
        title: "Games",
        description:
          "RPGs e jogos de mundo aberto são o meu refúgio — lugares onde histórias se desdobram e escolhas importam. De Zelda às obras-primas sofridas da FromSoftware, jogos me ensinaram que grande design é sobre a sensação, não a lista de funcionalidades. Cada dungeon que concluo me torna um arquiteto de experiências melhor.",
        gradient: "from-purple-900 via-indigo-800 to-blue-900",
      },
      {
        icon: "✍️",
        title: "Escrita e Narrativa",
        description:
          "Escrevo histórias porque há mundos dentro de mim que não cabem em código. Ficção, worldbuilding, arcos de personagens — escrever aguça a forma como comunico ideias e estruturo sistemas complexos. Cada README que escrevo, cada documentação de API que crio, se beneficia da disciplina da narrativa.",
        gradient: "from-amber-900 via-orange-800 to-red-900",
      },
      {
        icon: "🌍",
        title: "Aprendizado de Idiomas",
        description:
          "Cada idioma é uma nova lente sobre o mundo. Aprender chinês me ensinou paciência. O alemão me ensinou precisão. O japonês me ensinou que contexto é tudo. Falar cinco idiomas não é só uma habilidade — é uma filosofia de empatia, de encontrar as pessoas onde elas estão, nas palavras em que sonham.",
        gradient: "from-emerald-900 via-teal-800 to-cyan-900",
      },
    ],
  },
  contact: {
    title: "Vamos Construir Algo",
    subtitle: "Tem um projeto em mente? Adoraria ouvir sobre ele.",
    namePlaceholder: "Seu Nome",
    emailPlaceholder: "Seu E-mail",
    messagePlaceholder: "Me conte sobre seu projeto...",
    sendButton: "Enviar Mensagem",
    sending: "Enviando...",
    successMessage: "Mensagem enviada! Entrarei em contato em breve.",
    errorMessage: "Algo deu errado. Por favor, tente novamente.",
  },
};

export default pt;
