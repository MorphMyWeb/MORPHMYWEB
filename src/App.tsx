import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { LanguageProvider } from './LanguageContext';
import SplashLoader from './components/SplashLoader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function PortfolioAppContent() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-bg-brand text-white font-sans selection:bg-purple-600/30 selection:text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashLoader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="page-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col min-h-screen"
          >
            {/* Nav Header */}
            <Header />

            {/* Main Interactive Stage */}
            <main className="flex-grow">
              {/* Hero Section */}
              <Hero />

              {/* About Section */}
              <About />

              {/* Services Section */}
              <Services />

              {/* Contact Section */}
              <Contact />
            </main>

            {/* Footer Row */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioAppContent />
    </LanguageProvider>
  );
}
