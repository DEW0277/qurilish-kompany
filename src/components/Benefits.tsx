import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Clock, 
  DollarSign, 
  Shield, 
  Users, 
  Wrench, 
  Award,
  HeadphonesIcon,
  Leaf
} from 'lucide-react';

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Clock,
      title: 'Fast & Efficient Service',
      description: 'We complete projects on time with our streamlined construction process and experienced team.',
      features: ['30% faster than industry average', 'Dedicated project managers', 'Real-time progress updates']
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective Solutions',
      description: 'Competitive pricing without compromising quality through smart planning and resource optimization.',
      features: ['Transparent pricing', 'No hidden costs', 'Value engineering']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control at every stage ensures lasting results and customer satisfaction.',
      features: ['ISO certified processes', '10-year warranty', 'Regular inspections']
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Licensed professionals with decades of combined experience in all construction disciplines.',
      features: ['Certified contractors', 'Continuous training', 'Safety first approach']
    },
    {
      icon: Wrench,
      title: 'Full-Service Construction',
      description: 'From design to completion, we handle every aspect of your construction project.',
      features: ['Design consultation', 'Permit handling', 'Post-construction support']
    },
    {
      icon: Award,
      title: 'Award-Winning Results',
      description: 'Recognition from industry leaders for excellence in construction and customer service.',
      features: ['Multiple industry awards', '5-star customer ratings', 'Featured in trade publications']
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to address any concerns during and after construction.',
      features: ['Emergency response', 'Dedicated hotline', 'Online project portal']
    },
    {
      icon: Leaf,
      title: 'Sustainable Building',
      description: 'Eco-friendly construction practices and materials for environmentally responsible projects.',
      features: ['LEED certified options', 'Energy-efficient designs', 'Sustainable materials']
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose BuildCraft Pro?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver exceptional value through our comprehensive construction services, 
            experienced team, and unwavering commitment to quality and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300"
              >
                <benefit.icon className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {benefit.description}
              </p>

              <ul className="space-y-2">
                {benefit.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trusted us with their construction needs. 
            Get a free consultation and quote today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;