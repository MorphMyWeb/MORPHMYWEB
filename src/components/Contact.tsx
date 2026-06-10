import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle, Github, Instagram, Facebook, Calendar, Clock } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { OWNER_INFO } from '../data';

export default function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert(t('Παρακαλώ συμπληρώστε όλα τα απαραίτητα πεδία.', 'Please fill out all required fields.'));
      return;
    }

    setIsSubmitting(true);

    // Simulate real high-tech submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', phone: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1800);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-24 bg-transparent overflow-hidden border-t border-white/5">
      
      {/* Glow backgrounds */}
      <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[30rem] h-[30rem] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

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
            <MessageSquare size={12} className="text-purple-400" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-purple-400">{t('ΕΠΙΚΟΙΝΩΝΙΑ', 'GET IN TOUCH')}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            {t('Ας Δημιουργήσουμε ', 'Let’s Morph Your ')}
            <span className="text-purple-500">
              {t('Κάτι Μεγάλο', 'Next Project')}
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
              'Στείλτε μας το μήνυμά σας για να συζητήσουμε τις ανάγκες της επιχείρησής σας και να διαλέξουμε την καταλληλότερη λύση.',
              'Submit your specifications and Fotis Morfopoulos will outline a custom digital layout tailored for your business.'
            )}
          </motion.p>
        </div>

        {/* Form and info Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Neon-interactive Contact Form */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-xl glass-card relative border border-white/5"
            >
              <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
                <Send size={15} className="text-purple-400" />
                <span>{t('Στείλτε Μήνυμα', 'Send a Project Brief')}</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
                    {t('Όνομα / Επωνυμία Εταιρείας *', 'Your Name / Company *')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder={t('Φώτης Μορφόπουλος', 'Fotis Morfopoulos')}
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-sm text-white text-xs focus:outline-none focus:border-purple-500 transition-all placeholder:text-zinc-600 font-light"
                  />
                </div>

                {/* Email Address & Phone grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
                      {t('Email Επικοινωνίας *', 'Email Address *')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder={OWNER_INFO.email}
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-sm text-white text-xs focus:outline-none focus:border-purple-500 transition-all placeholder:text-zinc-600 font-light"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
                      {t('Κινητό Τηλέφωνο', 'Phone Number')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      placeholder="69446654"
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-sm text-white text-xs focus:outline-none focus:border-purple-500 transition-all placeholder:text-zinc-600 font-light"
                    />
                  </div>
                </div>

                {/* Scope requirements */}
                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
                    {t('Περιγράψτε το Project soaps *', 'Describe your Project *')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder={t('Θέλω ένα modern e-shop για την επιχείρησή μου στα Κύμινα...', 'I require a responsive business landing page for my brand...')}
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-sm text-white text-xs focus:outline-none focus:border-purple-500 transition-all placeholder:text-zinc-600 font-light resize-none"
                  />
                </div>

                {/* Button container */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800 text-white font-semibold text-xs uppercase tracking-widest rounded-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>{t('Μορφοποίηση...', 'Morphing Brief...')}</span>
                      </span>
                    ) : (
                      <>
                        <span>{t('Αποστολή Μηνύματος', 'Send Brief')}</span>
                        <Send size={12} />
                      </>
                    )}
                  </button>
                </div>

              </form>

              {/* Submitting Success feedback widget */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 rounded-xl bg-[#050505] border border-emerald-500/30 p-8 flex flex-col items-center justify-center text-center backdrop-blur-md"
                  >
                    <div className="h-14 w-14 rounded-full bg-emerald-950/40 border border-emerald-500 text-emerald-400 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                      <CheckCircle size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{t('Το Μήνυμα Εστάλη!', 'Message Delivered!')}</h3>
                    <p className="text-xs text-zinc-400 max-w-sm font-light">
                      {t(
                        'Ευχαριστούμε για την επικοινωνία! Ο Φώτης Μορφόπουλος θα σας καλέσει άμεσα στο τηλέφωνο ή θα σας στείλει email για να συζητήσετε.',
                        'Thank you for your trust! Fotis Morfopoulos will analyze your brief and reach out to you within 12 hours.'
                      )}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Column: Cards info & Custom Dark Embedded Google Maps */}
          <div className="lg:col-span-6 space-y-6">
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {/* Call Card */}
              <a
                href={`tel:${OWNER_INFO.phone}`}
                className="p-5 rounded-lg glass-card border border-white/5 hover:border-purple-500/35 group transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-sm bg-white/5 border border-white/10 text-purple-400 group-hover:bg-purple-900/30 group-hover:border-purple-400 transition-colors flex items-center justify-center mb-4">
                  <Phone size={16} />
                </div>
                <span className="text-[9px] text-zinc-500 font-mono block uppercase tracking-wider mb-1">
                  {t('ΤΗΛΕΦΩΝΟ ΕΠΙΚΟΙΝΩΝΙΑΣ', 'CALL DIRECT')}
                </span>
                <span className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                  {OWNER_INFO.phoneFormatted}
                </span>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${OWNER_INFO.email}`}
                className="p-5 rounded-lg glass-card border border-white/5 hover:border-purple-500/35 group transition-all duration-300 block overflow-hidden"
              >
                <div className="h-10 w-10 rounded-sm bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-900/30 group-hover:border-cyan-400 transition-colors flex items-center justify-center mb-4">
                  <Mail size={16} />
                </div>
                <span className="text-[9px] text-zinc-500 font-mono block uppercase tracking-wider mb-1">
                  {t('EMAIL ΕΠΙΚΟΙΝΩΝΙΑΣ', 'EMAIL ADDRESS')}
                </span>
                <span className="text-xs font-bold text-white truncate group-hover:text-purple-300 transition-colors block">
                  {OWNER_INFO.email}
                </span>
              </a>
            </motion.div>

            {/* Google Map Embedding with Dark Mode Cyber Filter Accent */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-video rounded-xl overflow-hidden bg-black/40 border border-white/5 shadow-2xl group"
            >
              {/* Overlay with instructions */}
              <div className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-black/95 border border-white/10 text-[10px] font-bold text-white rounded-sm uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                <MapPin size={12} className="text-purple-400" />
                <span>Κύμινα, Θεσσαλονίκη</span>
              </div>

              {/* Google Maps iframe pointed to Kymina, GR. 
                  We apply custom CSS inline filters: invert, hue-rotate, grayscale to make it look incredibly cyber, sci-fi and unified! 
              */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12111.411604543501!2d22.684444535311497!3d40.61333332468453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a84e60e0d5a359%3A0xc3f5da16259e8756!2sKymina%20573%2000!5e0!3m2!1sen!2sgr!4v1700000000000!5m2!1sen!2sgr"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'invert(90%) hue-rotate(185deg) grayscale(85%) opacity(0.85) contrast(1.1)',
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              
              <div className="absolute inset-0 border border-purple-500/10 pointer-events-none rounded-xl group-hover:border-purple-500/30 transition-colors duration-500" />
            </motion.div>

            {/* Quick Consultation Callout */}
            <div className="p-5 rounded-lg glass-card border border-white/5 flex items-center gap-4">
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-sm text-zinc-400">
                <Clock size={16} />
              </div>
              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                {t(
                  'Ώρες επικοινωνίας: Δευτέρα - Σάββατο, 09:00 - 21:00. Απαντάμε άμεσα σε κλήσεις και email.',
                  'Responding Hours: Monday - Saturday, 09:00 - 21:00 UTC+2. Direct designer access.'
                )}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
