import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Logo from './Logo';
import { useLanguage } from '../LanguageContext';

export default function SplashLoader({ onComplete }: { onComplete: () => void; key?: string }) {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('');

  const processLogs = [
    { threshold: 0, textgr: 'ΣΥΝΔΕΣΗ ΜΕ ΤΟΝ ΔΙΑΚΟΜΙΣΤΗ...', texten: 'ESTABLISHING SECURE CONNECTION...' },
    { threshold: 15, textgr: 'ΦΟΡΤΩΣΗ PREMIUM DESIGN SYSTEM...', texten: 'INITIALIZING DESIGN SYSTEM...' },
    { threshold: 35, textgr: 'ΒΕΛΤΙΣΤΟΠΟΙΗΣΗ ΤΑΧΥΤΗΤΑΣ & SEO...', texten: 'OPTIMIZING CORE WEB VITALS & SEO...' },
    { threshold: 60, textgr: 'ΜΕΤΑΜΟΡΦΩΣΗ ΨΗΦΙΑΚΗΣ ΕΜΠΕΙΡΙΑΣ...', texten: 'MORPHING DIGITAL WEB EXPERIENCE...' },
    { threshold: 80, textgr: 'ΕΝΕΡΓΟΠΟΙΗΣΗ INTERACTIVE GRAPHICS...', texten: 'ACTIVATING SECURE INTERACTIVE STAGE...' },
    { threshold: 95, textgr: 'ΕΤΟΙΜΟ ΓΙΑ ΠΛΟΗΓΗΣΗ...', texten: 'READY TO EXPLORE...' },
  ];

  useEffect(() => {
    const duration = 2200; // Sleek loading pace
    const intervalTime = 30;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + step, 100);
        
        // Find matching status log
        const matchingLog = [...processLogs]
          .reverse()
          .find((log) => next >= log.threshold);
        if (matchingLog) {
          setStatusText(t(matchingLog.textgr, matchingLog.texten));
        }

        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 350);
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete, t]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-6 select-none"
    >
      {/* Background radial shine */}
      <div className="absolute w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Main vertical layout Logo */}
      <div className="relative mb-10">
        <Logo showText={true} verticalLayout={true} size="md" glow={true} className="scale-95 sm:scale-100" />
      </div>

      {/* Futuristic Progress Container */}
      <div className="w-full max-w-xs sm:max-w-sm flex flex-col items-center space-y-4 relative">
        
        {/* Progress Value indicator */}
        <div className="flex items-center justify-between w-full font-mono text-[9px] text-zinc-500 font-bold tracking-widest uppercase">
          <span>{statusText || t('ΦΟΡΤΩΣΗ...', 'LOADING...')}</span>
          <span className="text-purple-400">{Math.round(progress)}%</span>
        </div>

        {/* High-tech Loading Bar */}
        <div className="w-full h-[5px] bg-zinc-950 border border-white/5 rounded-full overflow-hidden p-[1px] relative">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.7)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Micro System Credits */}
        <div className="text-[8px] font-mono text-zinc-600 tracking-wider uppercase">
          MORPHMYWEB // {t('ΚΑΙΝΟΤΟΜΕΣ ΨΗΦΙΑΚΕΣ ΛΥΣΕΙΣ', 'INNOVATIVE DIGITAL SOLUTIONS')}
        </div>
      </div>
    </motion.div>
  );
}
