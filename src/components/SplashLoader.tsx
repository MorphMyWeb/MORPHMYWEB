import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Logo from './Logo';

export default function SplashLoader({ onComplete }: { onComplete: () => void; key?: string }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('BOOTING SYSTEM...');

  const processLogs = [
    { threshold: 10, text: 'ESTABLISHING SECURE PROTOCOLS...' },
    { threshold: 25, text: 'BOOTING MORPH_CORE_ENGINE v2.6...' },
    { threshold: 45, text: 'COMPILING CYBER_NAV_SCHEMAS...' },
    { threshold: 65, text: 'MORPHING NEON_ASSETS & GRADIENTS...' },
    { threshold: 85, text: 'ESTABLISHING SALONICA_LOC_NODE...' },
    { threshold: 95, text: 'SECURE_TUNNEL_SUCCESS_200...' },
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds loader
    const intervalTime = 40;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + step, 100);
        
        // Update high-tech logs based on percentage threshold
        const matchingLog = [...processLogs]
          .reverse()
          .find((log) => next >= log.threshold);
        if (matchingLog) {
          setStatusText(matchingLog.text);
        }

        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 400); // Small exit delay for visual comfort
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-6 select-none"
    >
      {/* Background radial shine */}
      <div className="absolute w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Main vertical layout Logo */}
      <div className="relative mb-12">
        <Logo showText={true} verticalLayout={true} size="md" glow={true} className="scale-95 sm:scale-100" />
      </div>

      {/* Futuristic Progress Container */}
      <div className="w-full max-w-xs sm:max-w-sm flex flex-col items-center space-y-4 relative">
        
        {/* Progress Value indicator */}
        <div className="flex items-center justify-between w-full font-mono text-[9px] text-zinc-500 font-bold tracking-widest">
          <span>{statusText}</span>
          <span className="text-purple-400">{Math.round(progress)}%</span>
        </div>

        {/* High-tech Loading Bar */}
        <div className="w-full h-[5px] bg-zinc-900 border border-zinc-800/40 rounded-full overflow-hidden p-[1px] relative">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.7)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Micro System Credits */}
        <div className="text-[8px] font-mono text-zinc-600 tracking-wider">
          MORPHCORE SYSTEM STACK // SECURE LOCAL IP
        </div>
      </div>
    </motion.div>
  );
}
