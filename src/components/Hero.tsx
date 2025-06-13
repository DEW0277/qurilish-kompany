import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    {
      image:
        'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
    },
    {
      image:
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
    },
    {
      image:
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className='relative min-h-[100vh] flex items-center justify-center'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='absolute inset-0'
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/50' />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className='absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors'
      >
        <ChevronLeft className='h-6 w-6 text-white' />
      </button>

      <button
        onClick={nextSlide}
        className='absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors'
      >
        <ChevronRight className='h-6 w-6 text-white' />
      </button>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {slides[currentSlide].title}
            <span className='text-blue-400 block'>
              {slides[currentSlide].subtitle}
            </span>
          </motion.h1>

          <motion.p
            className='text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='flex flex-col sm:flex-row items-center justify-center gap-4'
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className='bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2'
            >
              {t('hero.getQuote')}
              <ArrowRight className='h-5 w-5' />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('about')}
              className='bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors flex items-center gap-2'
            >
              <Play className='h-5 w-5' />
              Video
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className='absolute bottom-[-150px] left-0 transform -translate-x-1/2 w-full max-w-4xl'
        >
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/10 backdrop-blur-md rounded-lg p-6 mt-20'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white'>150+</div>
              <div className='text-sm text-gray-200'>Yakunlangan Binolar</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white'>2,500+</div>
              <div className='text-sm text-gray-200'>Qurilgan Qavatlar</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white'>15+</div>
              <div className='text-sm text-gray-200'>Yillik Tajriba</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white'>98%</div>
              <div className='text-sm text-gray-200'>Mijoz Mamnuniyati</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
