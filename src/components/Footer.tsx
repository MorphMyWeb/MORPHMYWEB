import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ArrowUp, Send, Heart } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import Logo from './Logo';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { id: 'hero', gr: 'Αρχική', en: 'Home' },
    { id: 'about', gr: 'Σχετικά', en: 'About' },
    { id: 'services', gr: 'Υπηρεσίες', en: 'Services' },
    { id: 'contact', gr: 'Επικοινωνία', en: 'Contact' },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-transparent pt-16 pb-12 border-t border-white/5 overflow-hidden">
      {/* Absolute Bottom Purple Floor Shine Glow */}
      <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Column Grid */}
        <div className="flex flex-col items-center justify-center text-center space-y-10">
          
          {/* Logo element Centered (Vertical Form) */}
          <div className="cursor-pointer" onClick={scrollToTop}>
            <Logo showText={true} verticalLayout={true} size="md" glow={true} />
          </div>

          {/* Quick Footer Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 border-b border-white/5 pb-8 w-full max-w-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className="text-xs uppercase tracking-wider font-bold text-zinc-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {t(item.gr, item.en)}
              </button>
            ))}
          </nav>

          {/* Socials & Copyright Row */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full pt-4 text-zinc-500 text-xs gap-6">
            
            {/* Left Copyright info */}
            <div className="text-center md:text-left">
              <p className="font-bold tracking-wide text-zinc-500 text-[10px] uppercase">
                MORPHMYWEB &copy; 2026. {t('Με επιφύλαξη παντός δικαιώματος.', 'All rights reserved.')}
              </p>
            </div>

            {/* Middle Social icons list */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.instagram.com/morphmyweb.gr"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 bg-white/5 hover:bg-purple-650/40 border border-white/10 hover:border-purple-500/30 rounded-sm flex items-center justify-center text-zinc-400 hover:text-purple-400 transition-all shadow-md"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://www.tiktok.com/@morph.my.web"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 bg-white/5 hover:bg-purple-650/40 border border-white/10 hover:border-purple-500/30 rounded-sm flex items-center justify-center text-zinc-400 hover:text-purple-400 transition-all shadow-md"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>

            {/* Right Scroll to Top action */}
            <button
              onClick={scrollToTop}
              className="group h-9 w-9 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/40 transition-all hover:-translate-y-1 shadow-md cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp size={14} className="group-hover:animate-bounce" />
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}
