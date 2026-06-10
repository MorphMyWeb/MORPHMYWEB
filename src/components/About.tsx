import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { OWNER_INFO } from '../data';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 bg-transparent overflow-hidden border-t border-white/5">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[40%] right-[-10%] w-[25rem] h-[25rem] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-5 left-[5%] w-[20rem] h-[20rem] bg-purple-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Group */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4"
          >
            <Award size={13} className="text-purple-400" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-purple-400">{t('Η ΟΜΑΔΑ ΜΑΣ', 'THE STUDIO')}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            {t('Γνωρίστε τη ', 'Meet ')}
            <span className="text-purple-500">
              MORPHMYWEB
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 max-w-xl mx-auto font-light leading-relaxed"
          >
            {t(
              'Συνδυάζουμε τη στρατηγική σκέψη με τον κορυφαίο σχεδιασμό για να δώσουμε ψηφιακή ζωή στο όραμά σας.',
              'We cross elite digital engineering with gorgeous styling to morph your vision into interactive reality.'
            )}
          </motion.p>
        </div>

        {/* Content Centered Layout */}
        <div className="max-w-4xl mx-auto">
          {/* Narrative Biography & Agency Core Principles */}
          <div className="flex flex-col justify-center text-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col items-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight text-center">
                {t('Η Δύναμη Πίσω Από Το Όραμα', 'The Power Behind Your Screen')}
              </h3>

              <p className="text-gray-400 mb-10 leading-relaxed font-light text-sm md:text-base text-center max-w-2xl">
                {t(OWNER_INFO.bio, OWNER_INFO.bioEn)}
              </p>

              <div className="space-y-6 w-full max-w-2xl text-left border-t border-white/5 pt-10">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-1 rounded-sm bg-purple-500/10 text-purple-400 border border-purple-500/25">
                    <CheckCircle2 size={13} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-wide">{t('Custom & Responsive Design', 'Premium Custom Craftsmanship')}</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed font-light">{t('Κάθε ιστοσελίδα σχεδιάζεται από το μηδέν, χωρίς έτοιμα templates.', 'Zero boilerplate. Complete visual layout customization built tailored for your brand.')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-1 rounded-sm bg-purple-500/10 text-purple-400 border border-purple-500/25">
                    <CheckCircle2 size={13} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-wide">{t('SEO Βελτιστοποίηση', 'Google Search Domination')}</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed font-light">{t('Χτίζουμε με άριστη δομή για να κατατάσσεστε ψηλά στη Google.', 'Elite On-page and technical hierarchy schema mapping ensuring perfect indexing.')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-1 rounded-sm bg-purple-500/10 text-purple-400 border border-purple-500/25">
                    <CheckCircle2 size={13} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-wide">{t('Άμεση & Προσωπική Υποστήριξη', 'Direct Agency Partnership')}</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed font-light">{t('Μιλάτε απευθείας με τον σχεδιαστή σας, χωρίς ενδιάμεσους.', 'No support tickets or communication buffers. Direct collaboration path.')}</p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
