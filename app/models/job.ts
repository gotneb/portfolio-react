export type Job = {
  company: string;
  jobKey: string; // Key to reference translations
  logo: string;
  isActual: boolean;
  endDate?: Date;
  startDate: Date;
  technologies: string[];
};

export const jobs: Job[] = [
  {
    company: "Instituto de Pesquisas Eldorado",
    jobKey: "eldorado",
    logo: "/images/jobs/eldorado.jpg",
    isActual: false,
    endDate: new Date("2025-01-9"),
    startDate: new Date("2023-01-08"),
    technologies: ["C/C++", "Python", "Bash"],
  },
  {
    company: "Crosoften",
    jobKey: "crosoften",
    logo: "/images/jobs/crosoften.png",
    isActual: false,
    endDate: new Date("2025-03-15"),
    startDate: new Date("2025-02-17"),
    technologies: ["Android", "Kotlin", "API Consume"],
  },
];
