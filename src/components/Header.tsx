import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Globe, ChevronRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import Logo from './Logo';

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Nav items list
  const navItems = [
    { id: 'hero', gr: 'Αρχική', en: 'Home' },
    { id: 'about', gr: 'Σχετικά', en: 'About' },
    { id: 'services', gr: 'Υπηρεσίες', en: 'Services' },
    { id: 'contact', gr: 'Επικοινωνία', en: 'Contact' },
  ];

  // Track scroll position to trigger background glass effect and active link highlights
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link detection based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-md bg-[#050505]/90 border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(168,85,247,0.02)]'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <Logo showText={true} verticalLayout={false} size="sm" className="scale-95 md:scale-100 origin-left" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-3.5 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 rounded-lg ${
                      isActive ? 'text-purple-400' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>{t(item.gr, item.en)}</span>
                    {isActive && (
                      <motion.span
                        layoutId="active-nav-dot"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-[2px] bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Actions (Language Switcher, Quick Call) */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Language Switcher Buttons */}
              <div className="flex items-center p-1 bg-white/5 rounded-full border border-white/5">
                <button
                  onClick={() => setLang('gr')}
                  className={`px-3 py-1 text-[10px] tracking-wider font-semibold rounded-full uppercase transition-all duration-300 ${
                    lang === 'gr'
                      ? 'bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  GR
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 text-[10px] tracking-wider font-semibold rounded-full uppercase transition-all duration-300 ${
                    lang === 'en'
                      ? 'bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Dedicated Phone Widget from Theme Design */}
              <div className="text-xs font-bold font-mono border-l border-white/10 pl-6 h-6 flex items-center">
                <span className="text-purple-400 mr-1.5 font-bold uppercase tracking-wider">PH:</span>
                <a href="tel:69446654" className="text-white hover:text-purple-400 transition-colors">69446654</a>
              </div>

              {/* Contact Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold uppercase tracking-widest text-white rounded-sm group bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-600 hover:text-white focus:ring-1 focus:outline-none focus:ring-purple-400 transition duration-300"
              >
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-zinc-950 rounded-sm group-hover:bg-opacity-0 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span>{t('Κλείσε Έργο', 'Hire Us')}</span>
                </span>
              </button>
            </div>

            {/* Mobile Menu Actions */}
            <div className="flex items-center space-x-3 md:hidden">
              {/* Compact Language Toggle */}
              <button
                onClick={() => setLang(lang === 'gr' ? 'en' : 'gr')}
                className="flex items-center justify-center p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-white transition-colors"
                title="Change Language"
              >
                <Globe size={16} className="text-purple-400 mr-1" />
                <span className="text-xs font-bold uppercase">{lang === 'gr' ? 'EN' : 'GR'}</span>
              </button>

              {/* Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-white focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Overlay and Menu) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-40 md:hidden bg-zinc-950/98 backdrop-blur-xl border-b border-purple-500/10 shadow-2xl py-6 px-4 flex flex-col space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 text-base font-semibold rounded-xl transition-all ${
                    activeSection === item.id
                      ? 'bg-purple-950/40 text-purple-400 border-l-2 border-purple-500'
                      : 'text-gray-400 hover:bg-zinc-900/60 hover:text-white'
                  }`}
                >
                  {t(item.gr, item.en)}
                </button>
              ))}
            </div>

            <div className="h-[1px] bg-zinc-900" />

            {/* Quick Mobile Support Widget */}
            <div className="px-4 py-2">
              <p className="text-xs text-zinc-500 mb-2">{t('ΑΜΕΣΗ ΕΠΙΚΟΙΝΩΝΙΑ', 'FAST CONTACT')}</p>
              <a
                href="tel:69446654"
                className="flex items-center gap-2 text-sm text-purple-400 font-bold hover:text-purple-300 transition-colors"
              >
                <Phone size={14} />
                <span>69446654</span>
              </a>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-transform shadow-[0_4px_20px_rgba(168,85,247,0.25)]"
            >
              <span>{t('Ξεκινήστε ένα Project', 'Get Started')}</span>
              <ChevronRight size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
