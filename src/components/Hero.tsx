import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Code, Cpu, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-28 pb-16"
    >
      {/* Background corner blur glow orbs from Design specifications */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_100%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center flex flex-col items-center justify-center">
        {/* Left Column: Bold Copy & Headlines (Now centered) */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6 mx-auto"
          >
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-purple-400">
              {t('Κορυφαίες Ψηφιακές Λύσεις', 'Highest Quality Digital Solutions')}
            </span>
          </motion.div>

          {/* Heading with custom spacing and line-height layout from Design HTML */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] tracking-tighter mb-6 text-white text-center max-w-2xl"
          >
            {t('Transforming Ideas', 'Transforming Ideas')}<br/>
            {t('Into ', 'Into ')}<span className="text-purple-500">{t('Powerful', 'Powerful')}</span><br/>
            {t('Websites', 'Websites')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 max-w-md mb-8 font-light leading-relaxed text-center"
          >
            {t(
              'Custom responsive ιστοσελίδες σχεδιασμένες για να αναπτύξουν την επιχείρησή σας. Συνδυασμός υψηλής αισθητικής και προηγμένης τεχνολογίας.',
              'Custom websites designed to grow your business. We craft digital experiences that redefine the modern web.'
            )}
          </motion.p>

          {/* CTA Buttons in minimalist professional style */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto"
          >
            {/* Primary Action Button */}
            <button
              onClick={() => handleScrollTo('services')}
              className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-lg shadow-purple-600/20 cursor-pointer"
            >
              {t('Δες τις Υπηρεσίες', 'See our Services')}
            </button>

            {/* Secondary Action Button */}
            <button
              onClick={() => handleScrollTo('contact')}
              className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-purple-500/50 hover:text-purple-400 text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-all cursor-pointer"
            >
              {t('Επικοινωνία', 'Contact Info')}
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 border-t border-white/5 pt-6 w-full max-w-sm text-center mx-auto"
          >
            <div className="flex items-center gap-2 justify-center">
              <Code size={14} className="text-purple-400" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-gray-300">Clean Code</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Cpu size={14} className="text-purple-400" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-gray-300">Fast Speed</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <ShieldCheck size={14} className="text-purple-400" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-gray-300">SEO Optim</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroller bottom icon */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center opacity-40">
        <div className="w-5 h-8 border border-white/10 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeIn' }}
            className="w-1 h-2 bg-purple-500 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
