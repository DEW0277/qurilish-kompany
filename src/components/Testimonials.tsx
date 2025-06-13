import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const testimonials = Array.isArray(t('testimonials.items'))
    ? t('testimonials.items')
    : [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id='testimonials'
      className='py-20 bg-gradient-to-br from-gray-50 to-white'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className='text-center mb-16'
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-4xl font-bold text-gray-900 mb-4'
          >
            {t('testimonials.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-xl text-gray-600 max-w-3xl mx-auto'
          >
            {t('testimonials.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {Array.isArray(testimonials) &&
            testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
                className='bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300'
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className='flex items-center mb-4'
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className='w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-blue-500'
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className='w-full h-full object-cover'
                    />
                  </motion.div>
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 * index }}
                      className='text-lg font-semibold text-gray-900'
                    >
                      {testimonial.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 * index }}
                      className='text-gray-600'
                    >
                      {testimonial.role}
                    </motion.p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 * index }}
                  className='flex mb-4'
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.5 * index + i * 0.1,
                      }}
                    >
                      <Star className='w-5 h-5 text-yellow-400 fill-current' />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 * index }}
                  className='relative'
                >
                  <Quote className='absolute -top-2 -left-2 h-8 w-8 text-blue-100' />
                  <p className='text-gray-600 italic pl-6'>
                    {testimonial.quote}
                  </p>
                </motion.div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
