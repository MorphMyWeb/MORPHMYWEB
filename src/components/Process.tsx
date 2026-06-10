import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Palette, Layers, Rocket, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      id: 'step-1',
      index: '01',
      icon: MessageSquare,
      title: t('Επικοινωνία & Στρατηγική', 'Communication & Strategy'),
      subtitle: t('ΠΡΩΤΑ ΕΠΙΚΟΙΝΩΝΟΥΜΕ', 'FIRST WE TALK'),
      desc: t(
        'Ξεκινάμε με μια αναλυτική συζήτηση για να κατανοήσουμε τις ανάγκες, το κοινό-στόχο και τους επιχειρηματικούς σας στόχους. Σχεδιάζουμε τη σωστή στρατηγική.',
        'We begin with a detailed discussion to deeply understand your needs, target audience, and business goals. We outline the optimal roadmap together.'
      ),
      color: 'from-purple-500 to-indigo-500',
      iconColor: 'text-purple-400',
      glow: 'rgba(168, 85, 247, 0.15)',
    },
    {
      id: 'step-2',
      index: '02',
      icon: Palette,
      title: t('Σχεδίαση & Προσχέδιο', 'Design & Mockups'),
      subtitle: t('ΜΕΤΑ ΣΧΕΔΙΑΖΟΥΜΕ', 'THEN WE DESIGN'),
      desc: t(
        'Δημιουργούμε το εικαστικό και τη δομή της ιστοσελίδας σας. Έχετε τη δυνατότητα να δείτε ένα πλήρως λειτουργικό προσχέδιο (live preview) πριν από οποιαδήποτε δέσμευση.',
        'We craft the visual framework and structural layout of your platform. You get to interact with a functional live preview of your web space before buying.'
      ),
      color: 'from-pink-500 to-purple-500',
      iconColor: 'text-pink-400',
      glow: 'rgba(236, 72, 153, 0.15)',
    },
    {
      id: 'step-3',
      index: '03',
      icon: Layers,
      title: t('Ανάπτυξη & Προσθήκη Στοιχείων', 'Development & Assets'),
      subtitle: t('ΤΟΠΟΘΕΤΟΥΜΕ ΤΑ ΚΑΤΑΛΛΗΛΑ ΣΤΟΙΧΕΙΑ', 'ADDING SUITABLE CONTENT'),
      desc: t(
        'Τοποθετούμε τα κατάλληλα γραφικά, κείμενα, SEO ρυθμίσεις, φόρμες και λειτουργίες. Κάνουμε τις απαραίτητες βελτιστοποιήσεις για άριστη ταχύτητα και ασφάλεια.',
        'We inject custom elements, high-resolution imagery, direct marketing copy, proper SEO tags, and robust databases. Optimization for maximum speed.'
      ),
      color: 'from-cyan-500 to-blue-500',
      iconColor: 'text-cyan-400',
      glow: 'rgba(6, 182, 212, 0.15)',
    },
    {
      id: 'step-4',
      index: '04',
      icon: Rocket,
      title: t('Δοκιμές & Παράδοση', 'Testing & Deployment'),
      subtitle: t('ΚΑΙ ΠΑΡΑΔΙΔΟΥΜΕ', 'AND WE DELIVER'),
      desc: t(
        'Πραγματοποιούμε εξονυχιστικούς ελέγχους ποιότητας σε όλες τις συσκευές. Σας παραδίδουμε μια υπερσύγχρονη ιστοσελίδα έτοιμη να φέρει πελάτες και να απογειώσει την επιχείρησή σας.',
        'We perform rigorous quality assurance checks across all responsive devices. Your brand new, state-of-the-art website is deployed live, ready to acquire converts.'
      ),
      color: 'from-cyan-400 to-purple-500',
      iconColor: 'text-emerald-400',
      glow: 'rgba(52, 211, 153, 0.15)',
    },
  ];

  return (
    <section id="process" className="relative py-24 bg-transparent overflow-hidden border-t border-white/5">
      {/* Background radial orbs */}
      <div className="absolute top-1/3 left-1/4 w-[35rem] h-[35rem] bg-indigo-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[35rem] h-[35rem] bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold text-purple-400">
              {t('ΠΩΣ ΔΟΥΛΕΥΟΥΜΕ', 'OUR METHODOLOGY')}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-5 leading-[1.1]"
          >
            {t('Η Διαδικασία ', 'The Evolution ')}
            <span className="text-purple-500">{t('Μας', 'Process')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-gray-400 max-w-xl mx-auto font-light leading-relaxed"
          >
            {t(
              'Από την αρχική ιδέα μέχρι την επίσημη έναρξη, ακολουθούμε μία αποτελεσματική και διαφανή ροή εργασιών.',
              'From your seed concept to the official launch, we operate a seamless, crystal clear, collaborative framework.'
            )}
          </motion.p>
        </div>

        {/* Process Connector Line & Steps */}
        <div className="relative mt-8">
          
          {/* Timeline center/side connectors for spacious view */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500/10 via-cyan-500/20 to-purple-500/10" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={step.id} className={`flex flex-col lg:flex-row items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} relative z-10`}>
                  
                  {/* Step Card Container */}
                  <div className="w-full lg:w-1/2 px-4 lg:px-12">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                      className="group relative p-8 bg-black/45 backdrop-blur-xl border border-white/5 hover:border-purple-500/30 rounded-xl transition-all duration-300"
                    >
                      {/* Ambient background blur */}
                      <div 
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none filter blur-xl -z-10"
                        style={{ background: `radial-gradient(circle at 10% 10%, ${step.glow} 0%, transparent 80%)` }}
                      />

                      {/* Step index badge floated top-right */}
                      <div className="absolute top-6 right-8 font-mono text-3xl font-extrabold text-white/[0.04] group-hover:text-purple-500/10 transition-colors">
                        {step.index}
                      </div>

                      {/* Subtitle Accent */}
                      <span className="text-[10px] font-mono tracking-widest text-purple-400 block mb-2 font-bold">
                        {step.subtitle}
                      </span>

                      {/* Info & Icon Column */}
                      <div className="flex items-start gap-4">
                        <div className={`p-3 bg-white/[0.02] border border-white/5 rounded-lg text-white group-hover:border-purple-500/30 transition-colors ${step.iconColor}`}>
                          <IconComponent size={22} className="stroke-[1.5]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-purple-400 transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-xs text-gray-400 leading-relaxed font-light">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      {/* Graphic Corner details */}
                      <div className="absolute top-0 right-0 w-2 h-[1px] bg-white/10 group-hover:bg-purple-500/40" />
                      <div className="absolute top-0 right-0 h-2 w-[1px] bg-white/10 group-hover:bg-purple-500/40" />
                      <div className="absolute bottom-0 left-0 w-2 h-[1px] bg-white/10 group-hover:bg-purple-500/40" />
                      <div className="absolute bottom-0 left-0 h-2 w-[1px] bg-white/10 group-hover:bg-purple-500/40" />
                    </motion.div>
                  </div>

                  {/* Indicator sphere in the middle timeline line */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 items-center justify-center rounded-full bg-[#030206] border border-white/10 group z-20">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${step.color} animate-pulse`} />
                  </div>

                  {/* Negative space companion side */}
                  <div className="hidden lg:block lg:w-1/2" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
