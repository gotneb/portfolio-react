"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import en from "@/translations/en";
import zh from "@/translations/zh";
import pt from "@/translations/pt";
import type { TranslationSchema } from "@/translations/en";

export type Language = "en" | "zh" | "pt";

const translations: Record<Language, TranslationSchema> = { en, zh, pt };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (lang === "zh") {
      document.documentElement.lang = "zh-Hans";
    } else {
      document.documentElement.lang = lang;
    }
  }, []);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
