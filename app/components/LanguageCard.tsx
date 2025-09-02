import type { Language } from "~/models/language";

type LanguageCardProps = {
  language: Language;
};

const LanguageCard = ({ language }: LanguageCardProps) => {
  // {/* Left blue stripe */} <div className="w-1 h-full bg-blue-500 rounded-l-md"></div>
  
  return (
    <div className="group bg-surface hover:bg-indigo-400 text-primary hover:text-surface p-4 rounded-md flex flex-col justify-around border border-border transition hover:-translate-y-2 duration-300 hover:shadow-soft hover:border-indigo-400">  
      <div className="flex flex-row items-center gap-3 mb-2">
        {/* Image */}
        <div className="h-12 w-12 overflow-hidden shadow-lg rounded-full">
          <img src={language.image} alt={`${language.image} image`} />
        </div>

        {/* Header */}
        <div className="flex-1">
          <div className="flex flex-row items-center justify-between mb-2">
            <span className="font-bold text-xl">{language.name}</span>
            <span className="text-indigo-400 border border-indigo-400 rounded-full py-1 px-4">{language.level}</span>
          </div>
          <div>
            <p className="text-sm text-text-secondary group-hover:text-background">{language.welcomeMessage}</p>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <p className="text-text-secondary group-hover:text-background text-sm">{language.message}</p>
      </div>
    </div>
  );
};

export default LanguageCard;
