import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import BackgroundShapes from './BackgroundShapes';

const Impact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  return (
    <section id='impact' className='py-20 bg-white relative overflow-hidden'>
      <BackgroundShapes />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            {t('impact.title')}
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            {t('impact.subtitle')}
          </p>
        </motion.div>

        {/* Impact Numbers */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'>
          {t('impact.items').map((item: any, index: number) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow'
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className='text-4xl font-bold text-blue-600 mb-2'
              >
                {item.number}
              </motion.div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                {item.label}
              </h3>
              <p className='text-gray-600'>{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='bg-blue-50 rounded-2xl p-8 md:p-12'
        >
          <h3 className='text-3xl font-bold text-center text-gray-900 mb-12'>
            Yutuqlarimiz
          </h3>
          <div className='grid md:grid-cols-3 gap-8'>
            {t('impact.achievements').map((achievement: any, index: number) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className='bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow'
              >
                <div className='text-blue-600 font-bold mb-2'>
                  {achievement.year}
                </div>
                <h4 className='text-xl font-bold text-gray-900 mb-2'>
                  {achievement.title}
                </h4>
                <p className='text-gray-600'>{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
