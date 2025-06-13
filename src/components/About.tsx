import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Clock, Target, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import BackgroundShapes from './BackgroundShapes';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const milestones = [
    {
      year: '2008',
      event: t('about.journey.milestones.0.event'),
      description: t('about.journey.milestones.0.description'),
    },
    {
      year: '2012',
      event: t('about.journey.milestones.1.event'),
      description: t('about.journey.milestones.1.description'),
    },
    {
      year: '2018',
      event: t('about.journey.milestones.2.event'),
      description: t('about.journey.milestones.2.description'),
    },
    {
      year: '2023',
      event: t('about.journey.milestones.3.event'),
      description: t('about.journey.milestones.3.description'),
    },
  ];

  const values = [
    {
      icon: Shield,
      title: t('about.values.items.0.title'),
      description: t('about.values.items.0.description'),
    },
    {
      icon: Clock,
      title: t('about.values.items.1.title'),
      description: t('about.values.items.1.description'),
    },
    {
      icon: Target,
      title: t('about.values.items.2.title'),
      description: t('about.values.items.2.description'),
    },
    {
      icon: Users,
      title: t('about.values.items.3.title'),
      description: t('about.values.items.3.description'),
    },
  ];

  return (
    <section id='about' className='py-20 bg-gray-50 relative overflow-hidden'>
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
            {t('about.title')}
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 mb-20'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative'
          >
            <div className='aspect-w-4 aspect-h-3 rounded-lg overflow-hidden'>
              <img
                src='https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
                alt='Construction site'
                className='object-cover w-full h-full'
              />
            </div>
            <div className='absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl'>
              <div className='text-4xl font-bold'>15+</div>
              <div className='text-sm'>Yillik Tajriba</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='space-y-6'
          >
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                {t('about.mission.title')}
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                {t('about.mission.description')}
              </p>
            </div>

            <div className='bg-blue-50 p-6 rounded-lg'>
              <h4 className='text-xl font-bold text-blue-900 mb-3'>
                {t('about.mission.title')}
              </h4>
              <p className='text-blue-800'>{t('about.mission.description')}</p>
            </div>
          </motion.div>
        </div>

        {/* Company Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='mb-20'
        >
          <h3 className='text-3xl font-bold text-center text-gray-900 mb-12'>
            {t('about.journey.title')}
          </h3>
          <div className='relative'>
            <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200'></div>
            <div className='space-y-12'>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className='flex-1 lg:pr-12 lg:text-right'>
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                      <div className='text-2xl font-bold text-blue-600 mb-2'>
                        {milestone.year}
                      </div>
                      <h4 className='text-xl font-bold text-gray-900 mb-2'>
                        {milestone.event}
                      </h4>
                      <p className='text-gray-600'>{milestone.description}</p>
                    </div>
                  </div>
                  <div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full'></div>
                  <div className='flex-1 lg:pl-12'></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className='text-3xl font-bold text-center text-gray-900 mb-12'>
            {t('about.values.title')}
          </h3>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className='bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow group'
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors'
                >
                  <value.icon className='h-8 w-8 text-blue-600 group-hover:text-white transition-colors' />
                </motion.div>
                <h4 className='text-xl font-bold text-gray-900 mb-4'>
                  {value.title}
                </h4>
                <p className='text-gray-600 leading-relaxed'>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
