import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle, Instagram, Facebook, Calendar, Clock, ShieldCheck, Lock, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { OWNER_INFO } from '../data';

export default function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [showPrivacyError, setShowPrivacyError] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert(t('Παρακαλώ συμπληρώστε όλα τα απαραίτητα πεδία.', 'Please fill out all required fields.'));
      return;
    }

    if (!acceptedPrivacy) {
      setShowPrivacyError(true);
      return;
    }

    setIsSubmitting(true);
    setShowPrivacyError(false);

    try {
      const response = await fetch('https://formspree.io/f/xbdvjvyj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormState({ name: '', email: '', phone: '', message: '' });
        setAcceptedPrivacy(false);

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        const data = await response.json();
        alert(data.error || t('Παρουσιάστηκε σφάλμα κατά την αποστολή. Παρακαλώ δοκιμάστε ξανά.', 'An error occurred during submission. Please try again.'));
        setIsSubmitting(false);
      }
    } catch (error) {
      alert(t('Σφάλμα σύνδεσης. Ελέγξτε τη σύνδεσή σας και δοκιμάστε ξανά.', 'Connection error. Please check your network and try again.'));
      setIsSubmitting(false);
    }
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
                    placeholder={t('Ιωάννης Παπαδόπουλος', 'John Doe')}
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
                      placeholder={t('company@example.com', 'company@example.com')}
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
                      placeholder="6912345647"
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
                    placeholder={t('Θέλω ένα modern e-shop για την επιχείρησή μου...', 'I require a responsive business landing page for my brand...')}
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-sm text-white text-xs focus:outline-none focus:border-purple-500 transition-all placeholder:text-zinc-600 font-light resize-none"
                  />
                </div>

                {/* Button container */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || !acceptedPrivacy}
                    className="w-full py-3 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-900/50 disabled:opacity-45 disabled:cursor-not-allowed disabled:shadow-none text-white font-semibold text-xs uppercase tracking-widest rounded-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(147,51,234,0.15)] hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]"
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

                {/* Privacy Policy Checkbox & SSL Security Details */}
                <div className="mt-4 space-y-4">
                  {/* Checkbox */}
                  <div className={`p-3 bg-white/[0.01] border ${showPrivacyError ? 'border-rose-500/30 bg-rose-500/5' : 'border-white/5'} rounded-sm transition-all duration-300`}>
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={acceptedPrivacy}
                        onChange={(e) => {
                          setAcceptedPrivacy(e.target.checked);
                          if (e.target.checked) setShowPrivacyError(false);
                        }}
                        className="mt-0.5 h-4 w-4 accent-purple-500 rounded border-white/20 bg-black cursor-pointer"
                      />
                      <span className="text-[11px] text-zinc-400 leading-snug font-light">
                        {t('Έχω διαβάσει και αποδέχομαι την ', 'I have read and accept the ')}
                        <button
                          type="button"
                          onClick={() => setIsPolicyOpen(true)}
                          className="text-purple-400 hover:text-purple-300 underline font-semibold transition-colors cursor-pointer decoration-dotted focus:outline-none"
                        >
                          {t('Πολιτική Απορρήτου της MorphMyWeb', 'Privacy Policy of MorphMyWeb')}
                        </button>
                        .
                      </span>
                    </label>
                    {showPrivacyError && (
                      <span className="text-[9px] text-rose-450 font-semibold uppercase tracking-wider block mt-2 text-rose-400 animate-pulse">
                        * {t('Πρέπει να αποδεχτείτε την πολιτική απορρήτου για την αποστολή.', 'You must agree to the privacy policy to submit.')}
                      </span>
                    )}
                  </div>

                  {/* SSL Credentials Mention */}
                  <div className="flex gap-2.5 p-3 rounded-lg border border-white/5 bg-white/[0.01]">
                    <Lock size={15} className="text-purple-400 mt-0.5 shrink-0" />
                    <div className="text-[10px] text-zinc-500 leading-normal font-light">
                      <strong className="text-zinc-400 font-semibold block mb-0.5">
                        {t('Ασφαλής Σύνδεση SSL (HTTPS)', 'SSL Encrypted Security (HTTPS)')}
                      </strong>
                      {t(
                        'Όλες οι πληροφορίες που καταχωρείτε στη φόρμα επικοινωνίας κρυπτογραφούνται μεταφερόμενες στο διαδίκτυο, ώστε να μην μπορούν να διαβαστούν από τρίτους.',
                        'All transmitted communication details is safely encrypted over SSL. Your data stays 100% confidential and secure.'
                      )}
                    </div>
                  </div>
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
                <span>Θεσσαλονίκη, Ελλάδα</span>
              </div>

              {/* Google Maps iframe pointed to Thessaloniki, GR. 
                  We apply custom CSS inline filters: invert, hue-rotate, grayscale to make it look incredibly cyber, sci-fi and unified! 
              */}
              <iframe
                src="https://maps.google.com/maps?q=Thessaloniki,Greece&t=&z=12&ie=UTF8&iwloc=&output=embed"
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

      {/* Privacy Policy Modal overlay */}
      <AnimatePresence>
        {isPolicyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setIsPolicyOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0a0a0c] border border-white/10 rounded-lg p-6 md:p-8 text-left shadow-2xl scrollbar-thin scrollbar-thumb-purple-500/20 scrollbar-track-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setIsPolicyOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-sm border border-white/5 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-purple-500/30 transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X size={15} />
              </button>

              {/* Title heading */}
              <div className="flex items-center gap-2 pb-4 mb-6 border-b border-white/5">
                <ShieldCheck size={22} className="text-purple-400" />
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                  {t('Πολιτική Απορρήτου & Προστασίας Δεδομένων', 'Privacy & Data Protection Policy')}
                </h3>
              </div>

              {/* Content body */}
              <div className="space-y-6 text-xs md:text-sm text-zinc-300 font-light leading-relaxed max-h-[50vh] overflow-y-auto pr-2">
                <p>
                  {t(
                    'Η επιχείρηση MorphMyWeb σέβεται την ιδιωτικότητά σας και δεσμεύεται για την προστασία των προσωπικών σας δεδομένων. Η παρούσα Πολιτική Απορρήτου εξηγεί πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τις πληροφορίες που καταχωρείτε στη φόρμα επικοινωνίας της ιστοσελίδας μας.',
                    'MorphMyWeb respects your privacy and is dedicated to securing your personal information. This Privacy Policy details how we gather, utilize, and protect any credentials input through our contact form.'
                  )}
                </p>

                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-purple-400 mb-2 font-mono">
                    {t('1. Ποια Δεδομένα Συλλέγουμε', '1. Data We Collect')}
                  </h4>
                  <p className="mb-2">
                    {t('Όταν επικοινωνείτε μαζί μας μέσω της φόρμας επικοινωνίας, ενδέχεται να σας ζητηθούν τα εξής στοιχεία:', 'When utilizing our contact form, we might request the following values:')}
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
                    <li>{t('Όνομα / Επώνυμο', 'Full Name / Company Name')}</li>
                    <li>{t('Διεύθυνση ηλεκτρονικού ταχυδρομείου (Email)', 'Email Address (Electronic Mail)')}</li>
                    <li>{t('Οποιαδήποτε άλλη πληροφορία συμπεριλάβετε στο πεδίο του μηνύματός σας.', 'Any additional descriptive brief context you write in your messaging area.')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-purple-400 mb-2 font-mono">
                    {t('2. Σκοπός Επεξεργασίας', '2. Purpose of Processing')}
                  </h4>
                  <p className="mb-2">
                    {t('Χρησιμοποιούμε τα δεδομένα αυτά αποκλειστικά και μόνο για:', 'We process these records strictly for:')}
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
                    <li>{t('Να απαντήσουμε στα αιτήματα, τις ερωτήσεις ή τις προσφορές που μας ζητάτε.', 'Answering details, request updates, and project estimates requested by you.')}</li>
                    <li>{t('Την ομαλή μεταξύ μας επικοινωνία στο πλαίσιο της παροχής των υπηρεσιών μας.', 'Ensuring continuous and seamless communication within active digital services rendering.')}</li>
                  </ul>
                  <p className="mt-3 text-zinc-500 italic text-[11px]">
                    {t('Σημείωση: Δεν χρησιμοποιούμε τα στοιχεία σας για διαφημιστικούς σκοπούς (newsletters), εκτός αν μας δώσετε ρητά ξεχωριστή συγκατάθεση για αυτό.', 'Attention: We never utilize your private listings for promotional or advertising loops unless you specifically grant clear consent.')}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-purple-400 mb-2 font-mono">
                    {t('3. Χρονικό Διάστημα Διατήρησης', '3. Retainment Timeframe')}
                  </h4>
                  <p>
                    {t(
                      'Διατηρούμε τα δεδομένα σας για το χρονικό διάστημα που απαιτείται για την εκπλήρωση του σκοπού της επικοινωνίας μας ή μέχρι να ζητήσετε τη διαγραφή τους, εκτός αν η τήρησή τους επιβάλλεται από έννομη υποχρέωση (π.χ. φορολογικοί λόγοι σε περίπτωση συνεργασίας).',
                      'We secure your details strictly for the timeframe required to achieve active project consultation milestones or until you formally request their erasure, unless overridden by local laws.'
                    )}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-purple-400 mb-2 font-mono">
                    {t('4. Ασφάλεια & Κοινοποίηση σε Τρίτα Μέρη', '4. Security & Sharing with Third Parties')}
                  </h4>
                  <p className="mb-3">
                    {t(
                      'Τα δεδομένα σας αποθηκεύονται με ασφάλεια και δεν πωλούνται, δεν ενοικιάζονται και δεν κοινοποιούνται σε τρίτους για προωθητικούς σκοπούς. Πρόσβαση σε αυτά έχει μόνο το εξουσιοδοτημένο προσωπικό της MorphMyWeb καθώς και οι παρακάτω έμπιστοι συνεργάτες/υπηρεσίες (εκτελούντες την επεξεργασία) που είναι απαραίτητοι για τη λειτουργία της ιστοσελίδας και την επικοινωνία μας:',
                      'Your data is stored securely. No commercial trading, leasing, or sharing of your credentials is ever allowed for promotional purposes. Access is limited to authorized administrators of MorphMyWeb and the following trusted partners/services (data processors) required for website and communication operations:'
                    )}
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
                    <li>
                      <strong className="text-zinc-300 font-medium">Formspree:</strong>{' '}
                      {t(
                        'Υπηρεσία επεξεργασίας και προώθησης φορμών επικοινωνίας, η οποία διασφαλίζει την ασφαλή μεταφορά των μηνυμάτων και την προστασία από κακόβουλο λογισμικό (μέσω του FormShield).',
                        'Mail-processing and form-dispatch service that guarantees the safe transfer of messages and protection against malicious programs (via FormShield).'
                      )}
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-purple-400 mb-2 font-mono">
                    {t('5. Τα Δικαιώματά σας (Σύμφωνα με τον GDPR)', '5. Legal Entitlements (GDPR)')}
                  </h4>
                  <p className="mb-2">
                    {t('Έχετε τα εξής δικαιώματα:', 'You have the following rights:')}
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                    <li>
                      <strong className="text-zinc-300 font-medium">{t('Πρόσβαση: ', 'Access: ')}</strong>
                      {t('να μάθετε ποια δεδομένα έχουμε για εσάς', 'to know what data we hold about you')}
                    </li>
                    <li>
                      <strong className="text-zinc-300 font-medium">{t('Διόρθωση: ', 'Rectification: ')}</strong>
                      {t('να διορθώσετε ανακριβή δεδομένα', 'to correct inaccurate data')}
                    </li>
                    <li>
                      <strong className="text-zinc-300 font-medium">{t('Διαγραφή: ', 'Erasure: ')}</strong>
                      {t('να ζητήσετε διαγραφή των δεδομένων σας', 'to request the deletion of your data')}
                    </li>
                    <li>
                      <strong className="text-zinc-300 font-medium">{t('Περιορισμός: ', 'Restriction: ')}</strong>
                      {t('να περιορίσετε την επεξεργασία', 'to restrict processing')}
                    </li>
                    <li>
                      <strong className="text-zinc-300 font-medium">{t('Φορητότητα: ', 'Portability: ')}</strong>
                      {t('να λάβετε τα δεδομένα σας σε δομημένη μορφή', 'to receive your data in a structured format')}
                    </li>
                    <li>
                      <strong className="text-zinc-300 font-medium">{t('Εναντίωση: ', 'Objection: ')}</strong>
                      {t('να αντιταχθείτε στην επεξεργασία', 'to object to the processing')}
                    </li>
                    <li>
                      <strong className="text-zinc-300 font-medium">{t('Ανάκληση συγκατάθεσης: ', 'Withdraw Consent: ')}</strong>
                      {t('ανά πάσα στιγμή', 'at any time')}
                    </li>
                  </ul>
                  <p className="mt-3">
                    {t('Για να ασκήσετε οποιοδήποτε από τα παραπάνω δικαιώματα, μπορείτε να επικοινωνήσετε μαζί μας στέλνοντας ένα email στο: ', 'To command any privacy actions, directly contact us at: ')}
                    <a href="mailto:morphmywebsite@gmail.com" className="text-purple-400 underline font-semibold hover:text-purple-300">
                      morphmywebsite@gmail.com
                    </a>
                  </p>
                </div>

                <div className="p-3 bg-purple-500/5 border border-purple-500/10 rounded-sm">
                  <h4 className="text-xs uppercase font-bold text-purple-400 mb-1.5 flex items-center gap-1.5">
                    <Lock size={13} />
                    <span>{t('6. Ασφάλεια SSL & Κρυπτογράφηση', '6. SSL & TLS Encrypted Transport')}</span>
                  </h4>
                  <p className="text-[11px] text-zinc-450 font-light leading-relaxed">
                    {t(
                      'Η ιστοσελίδα μας χρησιμοποιεί πιστοποιητικό ασφαλείας SSL (HTTPS). Αυτό σημαίνει ότι όλες οι πληροφορίες που καταχωρείτε στη φόρμα επικοινωνίας κρυπτογραφούνται μεταφερόμενες στο διαδίκτυο, ώστε να μην μπορούν να διαβαστούν από τρίτους.',
                      'Our applet hosts an certified active SSL key to run strictly under HTTPS rules. This ensures all contact entries are completely encrypted before transmission and cannot be packets-sniffed.'
                    )}
                  </p>
                </div>
              </div>

              {/* Close Button footer bar */}
              <div className="mt-8 pt-4 border-t border-white/5 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsPolicyOpen(false)}
                  className="px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs uppercase tracking-widest rounded-sm transition-all cursor-pointer"
                >
                  {t('ΚΛΕΙΣΙΜΟ', 'CLOSE POLICY')}
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
