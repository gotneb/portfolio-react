import { useEffect } from "react";
import type { ReactNode } from "react";
import { useLanguage } from "~/contexts/LanguageContext";

interface LanguageAwareLayoutProps {
  children: ReactNode;
}

const LanguageAwareLayout = ({ children }: LanguageAwareLayoutProps) => {
  const { language } = useLanguage();
  
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  
  return <>{children}</>;
};

export default LanguageAwareLayout; 