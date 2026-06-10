import React from 'react';
import { motion } from 'motion/react';
import { Zap, Eye, Clock, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Guarantees() {
  const { t } = useLanguage();

  const guaranteesList = [
    {
      id: 'preview-first',
      icon: Eye,
      badge: t('01 • Χωρίς Ρίσκο', '01 • Risk-Free'),
      title: t('Δες την Ιστοσελίδα Πριν την Αγορά', 'See Your Site Before You Buy'),
      desc: t(
        'Σας δείχνουμε το προσχέδιο και τη δομή της ιστοσελίδας σας σε λειτουργία προτού πληρώσετε ή δεσμευτείτε. Θέλουμε να είστε 100% σίγουροι για το τελικό αποτέλεσμα.',
        'We design and showcase a live draft prototype of your web platform before you spend or commit. We ensure 100% satisfaction before any transaction takes place.'
      ),
      borderColor: 'border-purple-500/20',
      glowColor: 'group-hover:bg-purple-500/10',
      iconColor: 'text-purple-400',
    },
    {
      id: 'fast-delivery',
      icon: Zap,
      badge: t('02 • Κορυφαίος Χρόνος', '02 • Top Velocity'),
      title: t('Εξαιρετικά Γρήγορη Παράδοση', 'Express Fast Delivery'),
      desc: t(
        'Ξεχάστε τις πολύμηνες αναμονές. Παραδίδουμε πλήρως βελτιστοποιημένες και responsive ιστοσελίδες έτοιμες για πελάτες, τηρώντας αυστηρά τα συμφωνημένα χρονοδιαγράμματα.',
        'Forget endless delays and months of waiting. We deliver ready-to-launch, highly responsive, performance-tuned web spaces on precise, rapid timelines.'
      ),
      borderColor: 'border-cyan-500/20',
      glowColor: 'group-hover:bg-cyan-500/10',
      iconColor: 'text-cyan-400',
    },
    {
      id: 'response-time',
      icon: Clock,
      badge: t('03 • Άμεση Επικοινωνία', '03 • Zero Lag'),
      title: t('Απάντηση Εντός 2 Ωρών', 'Guaranteed 2-Hour Response'),
      desc: t(
        'Η επικοινωνία είναι το κλειδί. Εγγυώμαστε γραπτή απάντηση, επίλυση αποριών ή έναρξη τεχνικής υποστήριξης σε κάθε σας αίτημα μέσα σε 2 ώρες το πολύ.',
        'Communication is our core baseline. We officially guarantee an active reply, feedback loop, or ticket resolution for your inquiries in under 2 hours.'
      ),
      borderColor: 'border-fuchsia-500/20',
      glowColor: 'group-hover:bg-fuchsia-500/10',
      iconColor: 'text-fuchsia-400',
    },
  ];

  return (
    <section id="guarantees" className="relative py-20 bg-transparent overflow-hidden border-t border-white/5">
      {/* Background soft glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4"
          >
            <ShieldAlert size={13} className="text-purple-400 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-purple-400">
              {t('ΟΙ ΔΕΣΜΕΥΣΕΙΣ ΜΑΣ', 'OUR IRONclad GUARANTEES')}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-5 leading-[1.1]"
          >
            {t('Γιατί να Επιλέξετε τη ', 'Why Choose ')}
            <span className="text-purple-500">MORPHMYWEB</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-gray-400 max-w-xl mx-auto font-light leading-relaxed"
          >
            {t(
              'Δεν υποσχόμαστε απλώς αποτελέσματα — τα εγγυώμαστε γραπτώς με όρους που προστατεύουν και αναδεικνύουν την επένδυσή σας.',
              'We do not just make generic promises — we guarantee them with firm business terms designed to secure your growth and success.'
            )}
          </motion.p>
        </div>

        {/* Bento Grid layout with cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {guaranteesList.map((g, idx) => {
            const IconComponent = g.icon;
            return (
              <motion.div
                key={g.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`group relative p-8 bg-black/40 backdrop-blur-xl border ${g.borderColor} hover:border-purple-500/40 rounded-lg transition-all duration-300 flex flex-col justify-between`}
              >
                {/* Micro Ambient background glow */}
                <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none filter blur-xl -z-10 bg-gradient-to-br from-purple-600/5 via-violet-600/0 to-cyan-500/0`} />

                <div>
                  {/* Category / Badge */}
                  <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500 block mb-4">
                    {g.badge}
                  </span>

                  {/* Icon Frame */}
                  <div className={`w-12 h-12 rounded-sm bg-white/[0.02] border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-purple-500/30 transition-all duration-300`}>
                    <IconComponent size={22} className={`${g.iconColor} transition-transform duration-300`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-purple-400 transition-colors duration-300">
                    {g.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {g.desc}
                  </p>
                </div>

                {/* Cyber corner marks of the cards */}
                <div className="absolute top-0 left-0 w-2 h-[1px] bg-white/10 group-hover:bg-purple-400/50 transition-colors" />
                <div className="absolute top-0 left-0 h-2 w-[1px] bg-white/10 group-hover:bg-purple-400/50 transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-white/10 group-hover:bg-purple-400/50 transition-colors" />
                <div className="absolute bottom-0 right-0 h-2 w-[1px] bg-white/10 group-hover:bg-purple-400/50 transition-colors" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
