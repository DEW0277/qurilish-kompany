import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Apartments from './components/Apartments';
import Benefits from './components/Benefits';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <div className='min-h-screen bg-white'>
        <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className={isLoading ? 'hidden' : ''}
        >
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Benefits />
            <Services />
            <Apartments />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      </div>
    </LanguageProvider>
  );
}

export default App;
