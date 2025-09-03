import type { ReactNode } from "react";
import { useLanguage } from "~/contexts/LanguageContext";

type SectionProps = {
  id: string;
  title: string;
  jpnText: string;
  children: ReactNode;
};

const Section = ({ id, title, jpnText, children }: SectionProps) => {
  const { t } = useLanguage();
  
  return (
    <section id={id} className="scroll-mt-20 mb-8">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className="font-japanese text-2xl bg-indigo-500 text-surface px-6 py-1 rounded-full shadow-soft">
          {jpnText}
        </span>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
};

export default Section;
