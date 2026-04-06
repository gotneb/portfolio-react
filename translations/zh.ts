import type { TranslationSchema } from "./en";

const zh: TranslationSchema = {
  nav: {
    about: "关于",
    services: "服务",
    projects: "项目",
    experience: "经历",
    passions: "热爱",
    contact: "联系",
  },
  hero: {
    greeting: "o(//′▽″//)o 你好！",
    firstName: "Gabriel",
    lastName: "Bento",
    title: "全栈 & 移动开发者",
    bio: "我在优雅代码与用心设计的交汇处，打造数字体验。从像素级精准的前端到强健的云端后台——我构建真正有意义的产品。",
    scrollText: "向下滚动探索",
    portraitAlt: "您的照片",
  },
  about: {
    title: "关于我",
    bio: "我是一名全栈和移动开发者，拥有超过5年的产品开发经验。我擅长在技术卓越与创意视野的交汇处发挥——无论是精心设计响应式网页应用、发布Flutter移动体验，还是架构可扩展的后台系统。",
    bio2: "生于巴西，被世界各地的文化所塑造。我说五种语言，并将这种全球视野带入每一个我参与的项目。",
    experience: "5年以上经验",
    languagesTitle: "— 我会说的语言 —",
    languages: [
      { flag: "🇧🇷", flagImage: "/images/flags/brazil.png", name: "葡萄牙语", level: "母语" },
      { flag: "🇬🇧", flagImage: "/images/flags/usa.png", name: "英语", level: "流利" },
      { flag: "🇩🇪", flagImage: "/images/flags/germany.png", name: "德语", level: "中级" },
      { flag: "🇯🇵", flagImage: "/images/flags/japan.png", name: "日语", level: "中级" },
      { flag: "🇨🇳", flagImage: "/images/flags/china.png", name: "中文", level: "初级" },
    ],
  },
  services: {
    title: "我的服务",
    subtitle: "在技术栈的每一层打造数字体验",
    items: [
      {
        title: "网页开发",
        description:
          "使用Next.js、React和现代CSS构建快速、无障碍且美观的网页应用。从落地页到复杂的数据看板。",
      },
      {
        title: "移动开发",
        description:
          "使用Flutter开发跨平台移动应用，在iOS和Android上都能呈现原生体验。流畅的动画，离线优先架构。",
      },
      {
        title: "后端开发",
        description:
          "使用Node.js、Rust和AWS设计可扩展的API和云基础架构。实时功能、身份验证和数据管道。",
      },
      {
        title: "UI/UX设计",
        description:
          "将想法转化为直观的界面。我与设计系统、Figma原型以及以用户为中心的思维紧密协作。",
      },
    ],
  },
  projects: {
    title: "精选作品",
    subtitle: "讲述故事的项目",
    filters: ["全部", "网页", "移动", "后端", "游戏开发", "系统"],
    codeLabel: "代码",
    demoLabel: "演示",
    items: [
      {
        id: 1,
        name: "HanziFlow",
        category: "移动",
        description:
          "搭载间隔重复算法和笔顺动画的汉字学习应用，专为深度、持久的记忆而生。",
        tech: ["Flutter", "Firebase", "Dart"],
        gradient: "from-red-900 via-red-700 to-orange-600",
        code: "#",
        demo: "#",
      },
      {
        id: 2,
        name: "NexShop",
        category: "网页",
        description:
          "功能完整的电商平台，具有实时库存管理、Stripe支付和强大的管理后台。",
        tech: ["Next.js", "Supabase", "Stripe", "TailwindCSS"],
        gradient: "from-blue-900 via-blue-700 to-cyan-600",
        code: "#",
        demo: "#",
      },
      {
        id: 3,
        name: "LinguaPath",
        category: "移动",
        description:
          "带有游戏化课程、经验值系统和叙事内容的语言学习RPG应用，让学习令人上瘾。",
        tech: ["Flutter", "Firebase", "Dart"],
        gradient: "from-purple-900 via-purple-700 to-pink-600",
        code: "#",
        demo: "#",
      },
      {
        id: 4,
        name: "CloudPilot",
        category: "网页",
        description:
          "云基础架构监控和管理看板，提供实时指标、告警功能和一键部署流水线。",
        tech: ["Next.js", "AWS", "TypeScript"],
        gradient: "from-sky-900 via-sky-700 to-teal-600",
        code: "#",
        demo: "#",
      },
      {
        id: 5,
        name: "ZenUI",
        category: "网页",
        description:
          "受日本极简主义启发的React + TailwindCSS组件库。60+组件，深色模式，默认无障碍访问。",
        tech: ["React", "TailwindCSS", "TypeScript"],
        gradient: "from-emerald-900 via-emerald-700 to-green-600",
        code: "#",
        demo: "#",
      },
      {
        id: 6,
        name: "PixelDungeon",
        category: "游戏开发",
        description:
          "带有程序生成关卡、永久死亡机制和像素艺术美学的Roguelike地下城爬行游戏。",
        tech: ["Unity", "C#"],
        gradient: "from-yellow-900 via-yellow-700 to-amber-600",
        code: "#",
        demo: "#",
      },
      {
        id: 7,
        name: "NeuralNotes",
        category: "系统",
        description:
          "快速的本地优先笔记应用，搭载AI摘要功能。用Rust构建，性能卓越，SQLite提供可靠本地存储。",
        tech: ["Rust", "SQLite", "AI"],
        gradient: "from-zinc-800 via-zinc-700 to-slate-600",
        code: "#",
        demo: "#",
      },
      {
        id: 8,
        name: "SoundWave",
        category: "后端",
        description:
          "实时音频流和协作平台。低延迟WebSocket架构，Redis支持的会话管理。",
        tech: ["Node.js", "Redis", "WebSockets"],
        gradient: "from-indigo-900 via-indigo-700 to-violet-600",
        code: "#",
        demo: "#",
      },
    ],
  },
  experience: {
    title: "我的旅程",
    subtitle: "我走过的路和构建的成就",
    present: "至今",
    items: [
      {
        company: "TechNova Solutions",
        role: "高级全栈开发者",
        start: "2023年1月",
        end: "至今",
        bullets: [
          "主导将单体Rails应用迁移至Next.js + 微服务架构，加载时间缩短60%，基础架构成本降低35%。",
          "使用WebSockets和Redis架构了实时协作功能，现已有50K+日活用户。",
          "指导4名初级开发者，建立代码审查文化和基于GitHub Actions的CI/CD流水线。",
        ],
      },
      {
        company: "PixelCraft Studio",
        role: "全栈开发者",
        start: "2021年3月",
        end: "2022年12月",
        bullets: [
          "从零开始构建并发布了3款Flutter移动应用，下载量均超过10K，集成了Firebase、应用内购买和推送通知。",
          "使用Node.js和PostgreSQL设计RESTful API，每日服务200K+API请求，可用率达99.9%。",
          "实施了贯穿所有公司产品的设计系统，将UI开发时间缩短40%。",
        ],
      },
      {
        company: "自由职业",
        role: "移动与网页开发者",
        start: "2019年6月",
        end: "2021年2月",
        bullets: [
          "为巴西、德国和美国的客户交付了15+个项目，涵盖电商到SaaS看板。",
          "专注于React和Flutter，构建响应式跨平台应用，注重简洁用户体验。",
          "与5位长期客户保持合作关系，通过保留合同持续产生收入。",
        ],
      },
    ],
  },
  passions: {
    title: "代码之外",
    subtitle: "塑造我的热情",
    items: [
      {
        icon: "🎮",
        title: "游戏",
        description:
          "RPG和开放世界游戏是我的避难所——故事在那里展开，选择在那里产生意义。从塞尔达到FromSoftware的虐心杰作，游戏教会了我：伟大的设计关乎感受，而非功能清单。每一个攻克的地下城都让我成为更好的用户体验架构师。",
        gradient: "from-purple-900 via-indigo-800 to-blue-900",
      },
      {
        icon: "✍️",
        title: "写作与故事",
        description:
          "我写故事，因为我心中有代码装不下的世界。小说、世界构建、人物弧线——写作磨砺了我表达想法和构建复杂系统的方式。我写的每一篇README、每一份API文档，都受益于讲故事的纪律。",
        gradient: "from-amber-900 via-orange-800 to-red-900",
      },
      {
        icon: "🌍",
        title: "语言学习",
        description:
          "每种语言都是看待世界的新视角。学中文教会了我耐心，学德文教会了我精确，学日文教会了我语境即一切。说五种语言不只是一项技能——这是一种同理心哲学，是在人们梦境的语言里与他们相遇。",
        gradient: "from-emerald-900 via-teal-800 to-cyan-900",
      },
    ],
  },
  contact: {
    title: "一起构建未来",
    subtitle: "有项目想法吗？我很想听你说说。",
    namePlaceholder: "您的姓名",
    emailPlaceholder: "您的邮箱",
    messagePlaceholder: "告诉我您的项目...",
    sendButton: "发送消息",
    sending: "发送中...",
    successMessage: "消息已发送！我很快会回复您。",
    errorMessage: "出了些问题，请再试一次。",
  },
};

export default zh;
