import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Award, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'High-Rise Construction',
      'Mid-Rise Development',
      'Design-Build Services',
      'Project Management',
      'Sustainable Building',
      'Renovation Services'
    ],
    company: [
      'About SkyRise',
      'Our Team',
      'Careers',
      'Safety Standards',
      'Quality Assurance',
      'Sustainability'
    ],
    resources: [
      'Project Gallery',
      'Client Testimonials',
      'Construction Blog',
      'Building Codes',
      'Free Consultations',
      'Maintenance Guides'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const certifications = [
    { name: 'LEED Certified', icon: Award },
    { name: 'ISO 9001', icon: Shield },
    { name: 'Safety First', icon: Shield }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Building2 className="h-10 w-10 text-blue-600" />
              <div>
                <span className="text-2xl font-bold">SkyRise</span>
                <div className="text-sm text-gray-400">Developments</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Specializing in premium multi-storey residential construction since 2008. 
              Building the future of urban living with excellence, innovation, and sustainability.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="text-gray-300">info@skyrisedevelopments.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-gray-300">456 Construction Plaza, Metro City</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Resources</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-400">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-8">
              <p className="text-gray-400 text-sm">
                © {currentYear} SkyRise Developments. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <cert.icon className="h-4 w-4 text-blue-400" />
                    <span className="text-xs text-gray-400">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Safety Standards
              </a>
            </div>
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 p-6 bg-blue-600 rounded-lg text-center"
        >
          <h4 className="text-xl font-bold mb-2">24/7 Project Support</h4>
          <p className="text-blue-100 mb-4">
            For ongoing projects and emergency construction support
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">Emergency: +1 (555) 911-BUILD</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span className="font-semibold">support@skyrisedevelopments.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;