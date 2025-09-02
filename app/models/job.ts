export type Job = {
  company: string;
  role: string;
  logo: string;
  isActual: boolean;
  endDate?: Date;
  startDate: Date;
  modality: string;
  description: string;
  technologies: string[];
};

export const jobs: Job[] = [
  {
    company: "Instituto de Pesquisas Eldorado",
    role: "Intern Engineer",
    logo: "/images/jobs/eldorado.jpg",
    isActual: false,
    endDate: new Date("2025-01-9"),
    startDate: new Date("2023-01-08"),
    modality: "Hybrid",
    description: "Enhanced camera framework features like HDR, Portrait, and Night Vision using modern C++. Managed projects end-to-end, collaborated with global teams, ensured performance improvements.",
    technologies: ["C++", "Java", "Python", "Bash"],
  },
  {
    company: "Crosoften",
    role: "Android Developer",
    logo: "/images/jobs/crosoften.png",
    isActual: false,
    endDate: new Date("2025-03-15"),
    startDate: new Date("2025-02-17"),
    modality: "Remote",
    description: "Develop Android apps with Kotlin and Jetpack Compose, implementing MVVM, building UIs, integrating APIs, and delivering high-quality projects on schedule.",
    technologies: ["Android", "Kotlin", "Figma", "API"],
  },
  {
    company: "WithNoCode",
    role: "Software Developer",
    logo: "/images/jobs/withnocode.png",
    isActual: true,
    startDate: new Date("2025-07-02"),
    modality: "Remote",
    description: "Maintained and optimized a web app built with WeWeb and Flutterflow. Collaborated with the U.S. client team, resolved bugs, and improved performance using Stripe and GCP.",
    technologies: ["Flutterflow", "WeWeb"],
  },
];
