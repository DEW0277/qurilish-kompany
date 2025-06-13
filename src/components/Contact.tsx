import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import BackgroundShapes from './BackgroundShapes';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    floors: '',
    units: '',
    location: '',
    timeline: '',
    budget: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      floors: '',
      units: '',
      location: '',
      timeline: '',
      budget: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.info.callUs'),
      details: ['+998 90 123 45 67', 'Dushanba-Juma: 8:00-18:00'],
      action: 'tel:+998901234567',
    },
    {
      icon: Mail,
      title: t('contact.info.emailUs'),
      details: [
        'info@yuksalishdevelopments.com',
        'quotes@yuksalishdevelopments.com',
      ],
      action: 'mailto:info@yuksalishdevelopments.com',
    },
    {
      icon: MapPin,
      title: t('contact.info.visitOffice'),
      details: ['456 Qurilish Maydoni', 'Toshkent shahri, 100000'],
      action: '#',
    },
    {
      icon: Clock,
      title: t('contact.info.workingHours'),
      details: ['Dushanba - Juma: 8:00 - 18:00', 'Shanba: 9:00 - 14:00'],
      action: '#',
    },
  ];

  return (
    <section id='contact' className='py-20 bg-gray-50 relative overflow-hidden'>
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
            {t('contact.title')}
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='bg-white rounded-lg shadow-lg p-8'
          >
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                  />
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    {t('contact.form.phone')} *
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                  />
                </div>

                <div>
                  <label
                    htmlFor='company'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    {t('contact.form.company')}
                  </label>
                  <input
                    type='text'
                    id='company'
                    name='company'
                    value={formData.company}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                  />
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='projectType'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    {t('contact.form.projectType')} *
                  </label>
                  <select
                    id='projectType'
                    name='projectType'
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                  >
                    <option value=''>
                      {t('contact.form.selectProjectType')}
                    </option>
                    <option value='residential'>
                      {t('contact.form.residential')}
                    </option>
                    <option value='commercial'>
                      {t('contact.form.commercial')}
                    </option>
                    <option value='mixed-use'>
                      {t('contact.form.mixedUse')}
                    </option>
                    <option value='other'>{t('contact.form.other')}</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor='floors'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    {t('contact.form.floors')} *
                  </label>
                  <input
                    type='number'
                    id='floors'
                    name='floors'
                    value={formData.floors}
                    onChange={handleInputChange}
                    required
                    min='1'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                  />
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='units'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    {t('contact.form.units')} *
                  </label>
                  <input
                    type='number'
                    id='units'
                    name='units'
                    value={formData.units}
                    onChange={handleInputChange}
                    required
                    min='1'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                  />
                </div>

                <div>
                  <label
                    htmlFor='location'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    {t('contact.form.location')} *
                  </label>
                  <input
                    type='text'
                    id='location'
                    name='location'
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                  />
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='timeline'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    {t('contact.form.timeline')} *
                  </label>
                  <select
                    id='timeline'
                    name='timeline'
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                  >
                    <option value=''>{t('contact.form.selectTimeline')}</option>
                    <option value='immediate'>
                      {t('contact.form.immediate')}
                    </option>
                    <option value='3-6-months'>
                      {t('contact.form.3to6Months')}
                    </option>
                    <option value='6-12-months'>
                      {t('contact.form.6to12Months')}
                    </option>
                    <option value='12+months'>
                      {t('contact.form.12PlusMonths')}
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor='budget'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    {t('contact.form.budget')}
                  </label>
                  <select
                    id='budget'
                    name='budget'
                    value={formData.budget}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                  >
                    <option value=''>{t('contact.form.selectBudget')}</option>
                    <option value='5-10m'>$5M - $10M</option>
                    <option value='10-25m'>$10M - $25M</option>
                    <option value='25-50m'>$25M - $50M</option>
                    <option value='50m+'>$50M+</option>
                    <option value='discuss'>{t('contact.form.discuss')}</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  {t('contact.form.message')} *
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none'
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type='submit'
                className='w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2'
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className='h-5 w-5' />
                    {t('contact.form.submitted')}
                  </>
                ) : (
                  <>
                    <Send className='h-5 w-5' />
                    {t('contact.form.submit')}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='space-y-8'
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow'
              >
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <info.icon className='h-6 w-6 text-blue-600' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>
                      {info.title}
                    </h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className='text-gray-600'>
                        {detail}
                      </p>
                    ))}
                    {info.action && (
                      <a
                        href={info.action}
                        className='text-blue-600 hover:text-blue-700 font-medium mt-2 inline-block'
                      >
                        {t('contact.form.contactUs')}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className='bg-blue-600 text-white rounded-lg shadow-lg p-8'
            >
              <h3 className='text-2xl font-bold mb-4'>
                {t('contact.emergency.title')}
              </h3>
              <p className='text-blue-100 mb-6'>
                {t('contact.emergency.description')}
              </p>
              <div className='flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6'>
                <div className='flex items-center space-x-2'>
                  <Phone className='h-5 w-5' />
                  <span className='font-semibold'>+998 90 123 45 67</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Mail className='h-5 w-5' />
                  <span className='font-semibold'>
                    support@yuksalishdevelopments.com
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
