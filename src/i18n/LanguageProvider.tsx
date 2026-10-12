import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Lang, Strings } from './types';
import { en } from './en';
import { it } from './it';

const STORAGE_KEY = 'lang';

const dictionaries: Record<Lang, Strings> = { en, it };

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  strings: Strings;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'it' || stored === 'en' ? stored : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (next: Lang) => setLangState(next);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, strings: dictionaries[lang] }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
