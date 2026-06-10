import React from 'react';
import { motion } from 'motion/react';
import { Monitor, ShoppingBag, Briefcase, Zap, Search, Shield, CheckCircle, Flame, LucideIcon } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { SERVICES } from '../data';

// Custom Map for type-safe rendering of icons from our data schema
const IconMap: Record<string, LucideIcon> = {
  Monitor: Monitor,
  ShoppingBag: ShoppingBag,
  Briefcase: Briefcase,
  Zap: Zap,
  Search: Search,
  Shield: Shield
};

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-24 bg-transparent overflow-hidden border-t border-white/5">
      
      {/* Visual background accents */}
      <div className="absolute top-[10%] left-[-5%] w-[30rem] h-[30rem] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[25rem] h-[25rem] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4"
          >
            <Flame size={12} className="text-purple-400 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-purple-400">{t('ΥΠΗΡΕΣΙΕΣ ΜΕ ΑΠΟΔΟΣΗ', 'PROVEN EXPERTISE')}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            {t('Ψηφιακές Υπηρεσίες που ', 'Services that Morph Your ')}
            <span className="text-purple-500">
              {t('Μεταμορφώνουν', 'Business')}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-xl mx-auto"
          >
            {t(
              'Δημιουργούμε ψηφιακά προϊόντα με προσοχή στη λεπτομέρεια, εξασφαλίζοντας μέγιστη ταχύτητα φόρτωσης και υψηλή μετατροπή επισκεπτών σε πελάτες.',
              'We craft premium digital assets with high speed, top UX, and search engine friendliness to convert leads into active clients.'
            )}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = IconMap[service.icon] || Monitor;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex flex-col justify-between p-8 rounded-xl glass-card transition-all duration-300 group hover:-translate-y-1.5"
              >
                {/* Neon vertical line accent */}
                <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl" />

                <div>
                  {/* Icon & Badge row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-purple-400 group-hover:text-purple-300 group-hover:border-purple-500/40 transition-all duration-300 shadow-md">
                      <IconComponent size={20} className="stroke-[2]" />
                    </div>

                    {service.badge && (
                      <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {t(service.title, service.titleEn)}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed mb-6 font-light">
                    {t(service.description, service.descriptionEn)}
                  </p>
                </div>

                {/* Features list */}
                <div className="border-t border-white/5 pt-6 mt-auto">
                  <h4 className="text-[10px] font-mono font-bold text-zinc-500 tracking-wider mb-3 uppercase">
                    {t('ΤΕΧΝΙΚΑ ΣΤΟΙΧΕΙΑ', 'WHAT WE DELIVER')}
                  </h4>
                  <ul className="space-y-2">
                    {t(service.features.join('|'), service.featuresEn.join('|')).split('|').map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center gap-2 text-xs text-gray-300 font-light">
                        <CheckCircle size={12} className="text-purple-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Section Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 rounded-xl glass-card border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-purple-500/20 transition-all"
        >
          <div className="text-center md:text-left">
            <h3 className="text-base md:text-lg font-bold text-white mb-2">
              {t('Έχετε ένα συγκεκριμένο project στο μυαλό σας;', 'Have a custom project blueprint in mind?')}
            </h3>
            <p className="text-xs text-gray-400 font-light">
              {t(
                'Επικοινωνήστε σήμερα με τον Φώτη Μορφόπουλο για μια δωρεάν μελέτη & κοστολόγηση του έργου σας.',
                'Contact Fotis Morfopoulos today for a comprehensive mockup proposal and accurate cost calculation.'
              )}
            </p>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all focus:ring-1 focus:ring-purple-400 cursor-pointer"
          >
            {t('Ζήτησε Προσφορά', 'Get Design Proposal')}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
