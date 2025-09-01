import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  jpnText: string;
  children: ReactNode;
};

const Section = ({ title, jpnText, children }: SectionProps) => {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className="text-2xl bg-blue-600 px-6 py-1 rounded-full shadow-soft-blue">
          {jpnText}
        </span>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
};

export default Section;
