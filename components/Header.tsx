import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';
import Logo from './Logo';

interface HeaderProps {
  onNavigate: (section: NavLink['section']) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


const Header: React.FC<HeaderProps> = ({ onNavigate, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `
    flex items-center space-x-6
    ${isMenuOpen ? 'flex-col absolute top-full left-0 w-full bg-white dark:bg-slate-900 p-6 space-y-4 md:space-y-0 md:static md:w-auto md:flex-row md:bg-transparent md:p-0 md:space-x-6' : 'hidden md:flex'}
  `;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-20">
        <div 
          className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:rotate-[-3deg]"
          onClick={() => onNavigate('home')}>
          <Logo />
        </div>

        <div className="flex items-center space-x-4">
          <nav className={navClasses}>
            {NAV_LINKS.map(link => (
              <a
                key={link.name}
                href={`#${link.section}`}
                onClick={(e) => { e.preventDefault(); onNavigate(link.section); setIsMenuOpen(false); }}
                className="relative nav-link text-lg font-medium text-slate-600 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
             <button
              onClick={() => onNavigate('contact')}
              className="md:hidden block w-full text-left bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition-colors"
            >
              Kontak Saya
            </button>
          </nav>

          <button onClick={toggleTheme} className="p-2 rounded-full text-slate-600 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
          
          <button
              onClick={() => onNavigate('contact')}
              className="hidden md:block bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-sky-500/40"
            >
              Kontak Saya
            </button>

          <button className="md:hidden p-2 text-slate-600 dark:text-slate-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;