const en = {
  nav: {
    about: "About",
    services: "Services",
    projects: "Projects",
    experience: "Experience",
    passions: "Passions",
    contact: "Contact",
  },
  hero: {
    greeting: 'o(//′▽″//)o Hi!',
    firstName: "Gabriel",
    lastName: "Bento",
    title: "FULLSTACK & MOBILE DEVELOPER",
    bio: "I craft digital experiences that live at the intersection of elegant code and thoughtful design. From pixel-perfect frontends to robust cloud backends — I build things that matter.",
    scrollText: "SCROLL TO EXPLORE",
    portraitAlt: "Your portrait",
  },
  about: {
    title: "About Me",
    bio: "I'm a fullstack and mobile developer with over 5 years of experience building products that people love. I thrive in the space where technical excellence meets creative vision — whether that's crafting a responsive web app, shipping a Flutter mobile experience, or architecting a backend that scales.",
    bio2: "Born in Brazil, shaped by cultures from around the world. I speak five languages and bring that global perspective to every project I touch.",
    experience: "5+ Years Experience",
    languagesTitle: "— LANGUAGES I SPEAK —",
    languages: [
      { flag: "🇧🇷", flagImage: "/images/flags/brazil.png", name: "Portuguese", level: "Native" },
      { flag: "🇬🇧", flagImage: "/images/flags/usa.png", name: "English", level: "Fluent" },
      { flag: "🇩🇪", flagImage: "/images/flags/germany.png", name: "German", level: "Intermediate" },
      { flag: "🇯🇵", flagImage: "/images/flags/japan.png", name: "Japanese", level: "Intermediate" },
      { flag: "🇨🇳", flagImage: "/images/flags/china.png", name: "Chinese", level: "Beginner" },
    ],
  },
  services: {
    title: "What I Do",
    subtitle: "Crafting digital experiences across every layer of the stack",
    items: [
      {
        title: "Web Development",
        description:
          "Building fast, accessible, and beautiful web applications using Next.js, React, and modern CSS. From landing pages to complex dashboards.",
      },
      {
        title: "Mobile Development",
        description:
          "Crafting cross-platform mobile apps with Flutter that feel native on both iOS and Android. Smooth animations, offline-first architecture.",
      },
      {
        title: "Backend Development",
        description:
          "Designing scalable APIs and cloud infrastructure with Node.js, Rust, and AWS. Real-time features, authentication, and data pipelines.",
      },
      {
        title: "UI/UX Design",
        description:
          "Translating ideas into intuitive interfaces. I work closely with design systems, Figma prototypes, and user-centered thinking.",
      },
    ],
  },
  projects: {
    title: "Featured Works",
    subtitle: "Projects that tell a story",
    filters: ["All", "Web", "Mobile", "Backend", "Game Dev", "Systems"],
    codeLabel: "Code",
    demoLabel: "Demo",
    items: [
      {
        id: 1,
        name: "HanziFlow",
        category: "Mobile",
        description:
          "Chinese character learning app with spaced repetition algorithms and stroke-order animations. Built for deep, lasting retention.",
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
          "Full-featured e-commerce platform with real-time inventory management, Stripe payments, and a powerful admin dashboard.",
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
          "Language learning RPG app with gamified lessons, XP systems, and narrative-driven content. Makes learning addictive.",
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
          "Cloud infrastructure monitoring and management dashboard with real-time metrics, alerting, and one-click deployment pipelines.",
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
          "React + TailwindCSS component library inspired by Japanese minimalism. 60+ components, dark mode, accessible by default.",
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
          "Roguelike dungeon crawler with procedurally generated levels, permadeath mechanics, and a pixel-art aesthetic that warms the soul.",
        tech: ["Unity", "C#"],
        gradient: "from-yellow-900 via-yellow-700 to-amber-600",
        code: "#",
        demo: "#",
      },
      {
        id: 7,
        name: "NeuralNotes",
        category: "Systems",
        description:
          "Fast local-first note-taking app with AI summarization. Built in Rust for blazing performance, SQLite for reliable local storage.",
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
          "Real-time audio streaming and collaboration platform. Low-latency WebSocket architecture with Redis-backed session management.",
        tech: ["Node.js", "Redis", "WebSockets"],
        gradient: "from-indigo-900 via-indigo-700 to-violet-600",
        code: "#",
        demo: "#",
      },
    ],
  },
  experience: {
    title: "Journey So Far",
    subtitle: "Where I've been and what I've built",
    present: "Present",
    items: [
      {
        company: "TechNova Solutions",
        role: "Senior Fullstack Developer",
        start: "Jan 2023",
        end: "Present",
        bullets: [
          "Led migration of monolithic Rails app to Next.js + microservices, cutting load times by 60% and reducing infrastructure costs by 35%.",
          "Architected real-time collaboration features using WebSockets and Redis, now used by 50K+ daily active users.",
          "Mentored a team of 4 junior developers, establishing code review culture and CI/CD pipelines with GitHub Actions.",
        ],
      },
      {
        company: "PixelCraft Studio",
        role: "Fullstack Developer",
        start: "Mar 2021",
        end: "Dec 2022",
        bullets: [
          "Built and shipped 3 Flutter mobile apps from 0 to 10K+ downloads, integrating Firebase, in-app purchases, and push notifications.",
          "Designed RESTful APIs with Node.js and PostgreSQL, serving 200K+ API requests per day with 99.9% uptime.",
          "Implemented a design system used across all company products, reducing UI development time by 40%.",
        ],
      },
      {
        company: "Freelance",
        role: "Mobile & Web Developer",
        start: "Jun 2019",
        end: "Feb 2021",
        bullets: [
          "Delivered 15+ projects for clients across Brazil, Germany, and the USA — ranging from e-commerce to SaaS dashboards.",
          "Specialized in React and Flutter, building responsive, cross-platform applications with a focus on clean UX.",
          "Maintained long-term relationships with 5 recurring clients, generating consistent revenue through retainer contracts.",
        ],
      },
    ],
  },
  passions: {
    title: "Beyond the Code",
    subtitle: "The passions that shape who I am",
    items: [
      {
        icon: "🎮",
        title: "Gaming",
        description:
          "RPGs and open-world games are my refuge — places where stories unfold and choices matter. From Zelda to FromSoftware's punishing masterpieces, games taught me that great design is about the feeling, not the feature list. Every dungeon I clear makes me a better architect of user experiences.",
        gradient: "from-purple-900 via-indigo-800 to-blue-900",
      },
      {
        icon: "✍️",
        title: "Storytelling & Writing",
        description:
          "I write stories because there are worlds inside me that don't fit in code. Fiction, worldbuilding, character arcs — writing sharpens the way I communicate ideas and structure complex systems. Every README I write, every API doc I craft, benefits from the discipline of storytelling.",
        gradient: "from-amber-900 via-orange-800 to-red-900",
      },
      {
        icon: "🌍",
        title: "Language Learning",
        description:
          "Every language is a new lens on the world. Learning Chinese taught me patience. German taught me precision. Japanese taught me that context is everything. Speaking five languages isn't just a skill — it's a philosophy of empathy, of meeting people where they are, in the words they dream in.",
        gradient: "from-emerald-900 via-teal-800 to-cyan-900",
      },
    ],
  },
  contact: {
    title: "Let's Build Something",
    subtitle: "Have a project in mind? I'd love to hear about it.",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Tell me about your project...",
    sendButton: "Send Message",
    sending: "Sending...",
    successMessage: "Message sent! I'll get back to you soon.",
    errorMessage: "Something went wrong. Please try again.",
  },
};

export default en;
export type TranslationSchema = typeof en;
