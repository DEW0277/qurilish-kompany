
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Building2,
  Shield,
  Award,
  Clock,
  Users,
  Leaf,
  Zap,
  Heart,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Building2,
      title: t('benefits.quality.title'),
      description: t('benefits.quality.description'),
    },
    {
      icon: Shield,
      title: t('benefits.safety.title'),
      description: t('benefits.safety.description'),
    },
    {
      icon: Award,
      title: t('benefits.expertise.title'),
      description: t('benefits.expertise.description'),
    },
    {
      icon: Clock,
      title: t('benefits.timeline.title'),
      description: t('benefits.timeline.description'),
    },
    {
      icon: Users,
      title: t('benefits.team.title'),
      description: t('benefits.team.description'),
    },
    {
      icon: Leaf,
      title: t('benefits.sustainability.title'),
      description: t('benefits.sustainability.description'),
    },
    {
      icon: Zap,
      title: t('benefits.innovation.title'),
      description: t('benefits.innovation.description'),
    },
    {
      icon: Heart,
      title: t('benefits.satisfaction.title'),
      description: t('benefits.satisfaction.description'),
    },
  ];

  return (
    <section id='benefits' className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            {t('benefits.title')}
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            {t('benefits.subtitle')}
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow'
            >
              <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
                <benefit.icon className='h-6 w-6 text-blue-600' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                {benefit.title}
              </h3>
              <p className='text-gray-600'>{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='mt-16 text-center'
        >
          <h3 className='text-2xl font-bold text-gray-900 mb-4'>
            {t('benefits.cta.title')}
          </h3>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
            {t('benefits.cta.description')}
          </p>
          <motion.a
            href='#contact'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'
          >
            {t('benefits.cta.button')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
