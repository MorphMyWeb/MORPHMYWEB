import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'gr' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (grText: string, enText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('gr');

  const t = (grText: string, enText: string) => {
    return lang === 'gr' ? grText : enText;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
