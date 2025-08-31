import Header from "~/components/Header";
import type { Route } from "./+types";
import Section from "~/components/Section";
import type { Language } from "~/models/language";
import LanguageCard from "~/components/LanguageCard";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gabriel Bento | Home" },
    { name: "description", content: "Gabriel Bento's website portfolio." },
  ];
}

const HomePage = () => {
  const languages: Language[] = [
    {
      name: "Português",
      image: "/images/brazil.png",
      level: "Fluent",
      welcomeMessage: "Bem-vindo(a)!",
      message:
        "Sou profundamente apaixonado por aprender novos idiomas. Gosto muito de entender a cultura e estudar sobre línguas. Estou ancioso para continuar aprendendo e evoluindo nessa jornada.",
    },
    {
      name: "English",
      image: "/images/usa.png",
      level: "Fluent",
      welcomeMessage: "What's up! :D",
      message:
        "I'm depply passionate about learning languages. The joy of being able to express and communicate in another languages is a very rewardinging experiences. I'm eager to continue learning and growing in this journey.",
    },
    {
      name: "日本語",
      image: "/images/japan.png",
      level: "Intermediate",
      welcomeMessage: "このサイトへようこそ",
      message:
        "新しい言語を学ぶことが大好きです。文化を理解したり、言葉について勉強するのもとても楽しいです。これからも学び続けて成長していけるのを楽しみにしています。",
    },
    {
      name: "Deutsch",
      image: "/images/germany.png",
      level: "Intermediate",
      welcomeMessage: "Willkommen",
      message:
        "Ich lerne sehr gerne neue Sprachen. Es macht mir viel Spaß, die Kultur zu verstehen und mehr über Sprachen zu erfahren. Ich freue mich darauf, weiterhin zu lernen und mich auf dieser Reise weiterzuentwickeln.",
    },
  ];

  return (
    <section>
      <Header />
      <Section title="Languages" jpnText="私の言語">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {languages.map((l) => (
            <LanguageCard language={l} />
          ))}
        </div>
      </Section>
      <Section title="Projects" jpnText="プロジェクト">
        Children
      </Section>
    </section>
  );
};

export default HomePage;
