import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, Menu, X, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'services', label: t('nav.services') },
    { id: 'testimonials', label: t('nav.testimonials') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <motion.div
            className='flex items-center space-x-3'
            whileHover={{ scale: 1.05 }}
          >
            <Building2
              className={`h-10 w-10 ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`}
            />
            <div>
              <span
                className={`text-2xl font-bold ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                Yuksalish
              </span>
              <div
                className={`text-sm ${
                  isScrolled ? 'text-gray-600' : 'text-gray-200'
                }`}
              >
                Developments
              </div>
            </div>
          </motion.div>

          <nav className='hidden lg:flex space-x-8'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className='hidden lg:flex items-center space-x-4'>
            <div
              className={`flex items-center space-x-2 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Phone className='h-4 w-4' />
              <span className='text-sm font-medium'>+998 90 123 45 67</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className='bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors'
            >
              {t('hero.getQuote')}
            </motion.button>
          </div>

          <button
            className='lg:hidden'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='lg:hidden bg-white shadow-lg rounded-lg mt-2 py-4'
          >
            <nav className='flex flex-col space-y-4 px-4'>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className='text-gray-700 font-medium hover:text-blue-600 transition-colors text-left'
                >
                  {item.label}
                </button>
              ))}
              <div className='flex items-center space-x-2 text-gray-700'>
                <Phone className='h-4 w-4' />
                <span className='text-sm font-medium'>+998 90 123 45 67</span>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className='bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full'
              >
                {t('hero.getQuote')}
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
