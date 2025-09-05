import Header from "~/components/Header";
import type { Route } from "./+types";
import Section from "~/components/Section";
import type { Language } from "~/models/language";
import LanguageCard from "~/components/LanguageCard";
import { projects } from "~/models/project";
import ProjectCard from "~/components/ProjectCard";
import { services } from "~/models/service";
import ServiceCard from "~/components/ServiceCard";
import { jobs } from "~/models/job";
import JobCard from "~/components/JobCard";
import { useLanguage } from "~/contexts/LanguageContext";
import ContactForm from "~/components/ContactForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gabriel Bento | Home" },
    { name: "description", content: "Gabriel Bento's website portfolio." },
  ];
}

const HomePage = () => {
  const { t } = useLanguage();

  const languages: Language[] = [
    {
      name: t.languages.portuguese.name,
      image: "/images/brazil.png",
      level: t.languages.portuguese.level,
      welcomeMessage: t.languages.portuguese.welcomeMessage,
      message: t.languages.portuguese.message,
    },
    {
      name: t.languages.english.name,
      image: "/images/usa.png",
      level: t.languages.english.level,
      welcomeMessage: t.languages.english.welcomeMessage,
      message: t.languages.english.message,
    },
    {
      name: t.languages.japanese.name,
      image: "/images/japan.png",
      level: t.languages.japanese.level,
      welcomeMessage: t.languages.japanese.welcomeMessage,
      message: t.languages.japanese.message,
    },
    {
      name: t.languages.german.name,
      image: "/images/germany.png",
      level: t.languages.german.level,
      welcomeMessage: t.languages.german.welcomeMessage,
      message: t.languages.german.message,
    },
  ];

  return (
    <div>
      <Header id="about" />
      <Section id="languages" title={t.sections.languages} jpnText="話せる言語">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {languages.map((l) => (
            <LanguageCard key={l.name} language={l} />
          ))}
        </div>
      </Section>
      <Section id="services" title={t.sections.services} jpnText="サービス">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            service={{
              ...services[0],
              title: t.services.fullstack.title,
              description: t.services.fullstack.description,
            }}
          />
          <ServiceCard
            service={{
              ...services[1],
              title: t.services.mobile.title,
              description: t.services.mobile.description,
            }}
          />
        </div>
      </Section>
      <Section id="experience" title={t.sections.experience} jpnText="経歴">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobs
            .slice() // make a shallow copy so the original array isn't mutated
            .sort((a, b) => {
              const aDate = a.isActual
                ? new Date()
                : (a.endDate ?? a.startDate);
              const bDate = b.isActual
                ? new Date()
                : (b.endDate ?? b.startDate);

              return bDate.getTime() - aDate.getTime(); // recent first
            })
            .map((j, index) => (
              <JobCard key={index} job={j} />
            ))}
        </div>
      </Section>
      <Section id="projects" title={t.sections.projects} jpnText="プロジェクト">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Section>
      <Section id="contact" title={t.sections.contact} jpnText="話しましょう">
          <ContactForm />
      </Section>
    </div>
  );
};

export default HomePage;
