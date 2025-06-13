import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Shield,
  Clock,
  DollarSign,
  Leaf,
  Building2,
  Users,
  Award,
  Zap,
  Target,
  CheckCircle,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Shield,
      title: t('services.items.0.title'),
      description: t('services.items.0.description'),
      features: [
        t('services.items.0.features.0'),
        t('services.items.0.features.1'),
        t('services.items.0.features.2'),
        t('services.items.0.features.3'),
      ],
    },
    {
      icon: Clock,
      title: t('services.items.1.title'),
      description: t('services.items.1.description'),
      features: [
        t('services.items.1.features.0'),
        t('services.items.1.features.1'),
        t('services.items.1.features.2'),
        t('services.items.1.features.3'),
      ],
    },
    {
      icon: DollarSign,
      title: t('services.items.2.title'),
      description: t('services.items.2.description'),
      features: [
        t('services.items.2.features.0'),
        t('services.items.2.features.1'),
        t('services.items.2.features.2'),
        t('services.items.2.features.3'),
      ],
    },
    {
      icon: Leaf,
      title: t('services.items.3.title'),
      description: t('services.items.3.description'),
      features: [
        t('services.items.3.features.0'),
        t('services.items.3.features.1'),
        t('services.items.3.features.2'),
        t('services.items.3.features.3'),
      ],
    },
    {
      icon: Building2,
      title: t('services.items.4.title'),
      description: t('services.items.4.description'),
      features: [
        t('services.items.4.features.0'),
        t('services.items.4.features.1'),
        t('services.items.4.features.2'),
        t('services.items.4.features.3'),
      ],
    },
  ];

  const stats = [
    {
      icon: Building2,
      value: '2.5M+',
      label: t('services.stats.items.0.label'),
      color: 'text-blue-600',
    },
    {
      icon: Target,
      value: '2,500+',
      label: t('services.stats.items.1.label'),
      color: 'text-green-600',
    },
    {
      icon: Award,
      value: '150+',
      label: t('services.stats.items.2.label'),
      color: 'text-purple-600',
    },
    {
      icon: Users,
      value: '25,000+',
      label: t('services.stats.items.3.label'),
      color: 'text-orange-600',
    },
  ];

  const services = [
    {
      title: t('services.services.items.0.title'),
      description: t('services.services.items.0.description'),
      image:
        'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    },
    {
      title: t('services.services.items.1.title'),
      description: t('services.services.items.1.description'),
      image:
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    },
    {
      title: t('services.services.items.2.title'),
      description: t('services.services.items.2.description'),
      image:
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    },
  ];

  return (
    <section id='services' className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            {t('services.title') as string}
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            {t('services.description') as string}
          </p>
        </motion.div>

        {/* Main Benefits Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title as string }
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group'
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className='w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300'
              >
                <benefit.icon className='h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300' />
              </motion.div>

              <h3 className='text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors'>
                {benefit.title as string}
              </h3>

              <p className='text-gray-600 mb-6 leading-relaxed'>
                {benefit.description as string}
              </p>

              <ul className='space-y-2'>
                {benefit.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className='text-sm text-gray-500 flex items-center'
                  >
                    <CheckCircle className='w-4 h-4 text-green-500 mr-2 flex-shrink-0' />
                    {feature as string}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-20'
        >
          <h3 className='text-3xl font-bold text-center text-gray-900 mb-12'>
            {t('services.stats.title') as string}
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label as string}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className='text-center'
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    stat.color === 'text-blue-600'
                      ? 'bg-blue-100'
                      : stat.color === 'text-green-600'
                      ? 'bg-green-100'
                      : stat.color === 'text-purple-600'
                      ? 'bg-purple-100'
                      : 'bg-orange-100'
                  }`}
                >
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </motion.div>
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className='text-gray-600 text-sm'>
                  {stat.label as string}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className='text-3xl font-bold text-center text-gray-900 mb-12'>
            {t('services.services.title') as string}
          </h3>
          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            {services.map((service, index) => (
              <motion.div
                key={service.title as string}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group'
              >
                <div className='relative overflow-hidden'>
                  <img
                    src={service.image}
                    alt={service.title as string}
                    className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
                <div className='p-6'>
                  <h4 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors'>
                    {service.title as string}
                  </h4>
                  <p className='text-gray-600'>
                    {service.description as string}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className='bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white'
        >
          <Zap className='h-16 w-16 text-blue-200 mx-auto mb-6' />
          <h3 className='text-3xl md:text-4xl font-bold mb-6'>
            {t('services.cta.title') as string}
          </h3>
          <p className='text-xl mb-8 opacity-90 max-w-2xl mx-auto'>
            {t('services.cta.description') as string}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors'
          >
            {t('services.cta.button') as string}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
