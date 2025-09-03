import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { en } from "~/translations/en";
import { pt } from "~/translations/pt";

export type Language = "en" | "pt";

type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("en");

  // Detect user's browser language on component mount
  useEffect(() => {
    const detectBrowserLanguage = () => {
      // Get browser language (e.g., "pt-BR", "en-US", "es-ES")
      const browserLang = navigator.language || navigator.languages?.[0] || "en";
      
      // Check if the language starts with "pt" (Portuguese)
      if (browserLang.startsWith("pt")) {
        setLanguage("pt");
        console.log("Browser language detected as Portuguese, switching to Portuguese");
      } else {
        setLanguage("en");
        console.log("Browser language detected as non-Portuguese, using English");
      }
    };

    detectBrowserLanguage();
  }, []);

  const translations: Record<Language, Translations> = {
    en,
    pt,
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 