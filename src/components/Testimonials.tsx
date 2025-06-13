import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import BackgroundShapes from './BackgroundShapes';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  video: string;
  quote: string;
}

const Testimonials = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const testimonials = t('testimonials.items') as unknown as Testimonial[];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  return (
    <section
      id='testimonials'
      className='py-20 bg-white relative overflow-hidden'
    >
      <BackgroundShapes />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            {t('testimonials.title') as string}
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            {t('testimonials.subtitle') as string}
          </p>
        </motion.div>

        <div
          className='relative'
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className='overflow-hidden'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className='bg-white rounded-2xl shadow-xl overflow-hidden'
              >
                <div className='grid md:grid-cols-2 gap-8'>
                  {/* Video Section */}
                  <div className='relative aspect-video bg-gray-900'>
                    <video
                      ref={videoRef}
                      src={testimonials[currentIndex].video}
                      className='w-full h-full object-cover'
                      poster={testimonials[currentIndex].image}
                    />
                    <button
                      onClick={togglePlay}
                      className='absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors'
                    >
                      <Play
                        className={`w-16 h-16 text-white ${
                          isPlaying ? 'opacity-0' : 'opacity-100'
                        } transition-opacity`}
                      />
                    </button>
                  </div>

                  {/* Content Section */}
                  <div className='p-8 flex flex-col justify-center'>
                    <div className='flex items-center space-x-4 mb-6'>
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className='w-16 h-16 rounded-full object-cover'
                      />
                      <div>
                        <h3 className='text-xl font-bold text-gray-900'>
                          {testimonials[currentIndex].name}
                        </h3>
                        <p className='text-gray-600'>
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                    <p className='text-gray-600 text-lg leading-relaxed'>
                      {testimonials[currentIndex].quote}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors'
          >
            <ChevronLeft className='w-6 h-6 text-gray-900' />
          </button>
          <button
            onClick={nextSlide}
            className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors'
          >
            <ChevronRight className='w-6 h-6 text-gray-900' />
          </button>

          {/* Dots Navigation */}
          <div className='flex justify-center mt-8 space-x-2'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-blue-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
