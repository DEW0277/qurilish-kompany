import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const footerLinks = [
    {
      title: t('footer.company.title'),
      links: [
        { name: t('footer.company.about'), href: '#about' },
        { name: t('footer.company.projects'), href: '#projects' },
        { name: t('footer.company.services'), href: '#services' },
        { name: t('footer.company.careers'), href: '#careers' },
        { name: t('footer.company.contact'), href: '#contact' },
      ],
    },
    {
      title: t('footer.services.title'),
      links: [
        { name: t('footer.services.residential'), href: '#residential' },
        { name: t('footer.services.commercial'), href: '#commercial' },
        { name: t('footer.services.industrial'), href: '#industrial' },
        { name: t('footer.services.renovation'), href: '#renovation' },
        { name: t('footer.services.maintenance'), href: '#maintenance' },
      ],
    },
    {
      title: t('footer.resources.title'),
      links: [
        { name: t('footer.resources.blog'), href: '#blog' },
        { name: t('footer.resources.caseStudies'), href: '#case-studies' },
        { name: t('footer.resources.news'), href: '#news' },
        { name: t('footer.resources.faq'), href: '#faq' },
        { name: t('footer.resources.support'), href: '#support' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer
      ref={ref}
      className='bg-gray-900 text-white pt-20 pb-10 relative z-10'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12'>
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className='lg:col-span-2'
          >
            <h3 className='text-2xl font-bold mb-6'>Yuksalish Developments</h3>
            <p className='text-gray-400 mb-6'>{t('footer.description')}</p>
            <div className='space-y-4'>
              <div className='flex items-start space-x-4'>
                <MapPin className='h-6 w-6 text-blue-400 flex-shrink-0 mt-1' />
                <div>
                  <p className='font-medium'>{t('footer.address.title')}</p>
                  <p className='text-gray-400'>{t('footer.address.street')}</p>
                  <p className='text-gray-400'>{t('footer.address.city')}</p>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <Phone className='h-6 w-6 text-blue-400 flex-shrink-0 mt-1' />
                <div>
                  <p className='font-medium'>{t('footer.phone.title')}</p>
                  <p className='text-gray-400'>{t('footer.phone.primary')}</p>
                  <p className='text-gray-400'>{t('footer.phone.secondary')}</p>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <Mail className='h-6 w-6 text-blue-400 flex-shrink-0 mt-1' />
                <div>
                  <p className='font-medium'>{t('footer.email.title')}</p>
                  <p className='text-gray-400'>{t('footer.email.info')}</p>
                  <p className='text-gray-400'>{t('footer.email.support')}</p>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <Clock className='h-6 w-6 text-blue-400 flex-shrink-0 mt-1' />
                <div>
                  <p className='font-medium'>{t('footer.hours.title')}</p>
                  <p className='text-gray-400'>{t('footer.hours.weekdays')}</p>
                  <p className='text-gray-400'>{t('footer.hours.weekend')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <h3 className='text-lg font-semibold mb-6'>{section.title}</h3>
              <ul className='space-y-4'>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className='text-gray-400 hover:text-white transition-colors'
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-16 pt-8 border-t border-gray-800'
        >
          <div className='flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
            <div className='flex space-x-6'>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className='text-gray-400 hover:text-white transition-colors'
                  aria-label={social.label}
                >
                  <social.icon className='h-6 w-6' />
                </a>
              ))}
            </div>
            <p className='text-gray-400 text-sm'>
              © {new Date().getFullYear()} Yuksalish Developments.{' '}
              {t('footer.copyright')}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
