import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageProvider';
import type { Lang } from '../../i18n/types';
import { GbFlagIcon, ItFlagIcon } from './FlagIcons';

const LANGUAGE_OPTIONS: { value: Lang; Flag: typeof GbFlagIcon; label: string }[] = [
  { value: 'en', Flag: GbFlagIcon, label: 'EN' },
  { value: 'it', Flag: ItFlagIcon, label: 'IT' },
];

export function Navigation() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { lang, setLang, strings } = useLanguage();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguage = LANGUAGE_OPTIONS.find((option) => option.value === lang) ?? LANGUAGE_OPTIONS[0];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: '/', label: strings.nav.home },
    { path: '/projects', label: strings.nav.projects },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-medium hover:opacity-70 transition-opacity">
          {strings.nav.brand}
        </Link>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative text-sm hover:opacity-70 transition-opacity"
            >
              {link.label}
              {isActive(link.path) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}

          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => setLangMenuOpen((open) => !open)}
              className="flex items-center gap-2 p-2 text-sm hover:bg-muted rounded-md transition-colors"
              aria-label="Select language"
              aria-haspopup="listbox"
              aria-expanded={langMenuOpen}
            >
              <currentLanguage.Flag className="w-5 h-4 rounded-sm shrink-0" />
              {currentLanguage.label}
            </button>
            {langMenuOpen && (
              <ul
                role="listbox"
                className="absolute right-0 mt-1 bg-background border border-border rounded-md shadow-md overflow-hidden min-w-[100px] z-50"
              >
                {LANGUAGE_OPTIONS.map((option) => (
                  <li key={option.value}>
                    <button
                      role="option"
                      aria-selected={option.value === lang}
                      onClick={() => {
                        setLang(option.value);
                        setLangMenuOpen(false);
                      }}
                      className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-muted transition-colors"
                    >
                      <option.Flag className="w-5 h-4 rounded-sm shrink-0" />
                      {option.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 hover:bg-muted rounded-md transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <FaSun className="w-4 h-4" />
            ) : (
              <FaMoon className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

