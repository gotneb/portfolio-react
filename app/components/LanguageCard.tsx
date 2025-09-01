import type { Language } from "~/models/language";

type LanguageCardProps = {
  language: Language;
};

const LanguageCard = ({ language }: LanguageCardProps) => {
  // {/* Left blue stripe */} <div className="w-1 h-full bg-blue-500 rounded-l-md"></div>
  
  return (
    <div className="bg-gray-800 hover:bg-blue-900 p-4 rounded-md flex flex-col justify-around border border-gray-700 transition hover:-translate-y-2 duration-300">  
      <div className="flex flex-row items-center gap-3 mb-2">
        {/* Image */}
        <div className="h-12 w-12 overflow-hidden">
          <img src={language.image} alt={`${language.image} image`} />
        </div>

        {/* Header */}
        <div className="flex-1">
          <div className="flex flex-row items-center justify-between mb-2">
            <span className="font-bold text-2xl">{language.name}</span>
            <span className="text-blue-500 border border-blue-500 rounded-full py-1 px-4">{language.level}</span>
          </div>
          <div>
            <p>{language.welcomeMessage}</p>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <p>{language.message}</p>
      </div>
    </div>
  );
};

export default LanguageCard;
