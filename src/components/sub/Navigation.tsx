import { Link, useLocation } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export function Navigation() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-medium hover:opacity-70 transition-opacity">
          Portfolio
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
