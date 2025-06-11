import React from 'react';
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
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Shield,
      title: 'Superior Structural Safety',
      description: 'Advanced engineering and seismic-resistant design for maximum safety and durability.',
      features: ['Earthquake-resistant design', 'Premium materials', 'Rigorous safety inspections', 'Building code compliance']
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Proven project management ensures completion within agreed timelines.',
      features: ['Detailed project scheduling', 'Regular progress updates', 'Contingency planning', '98% on-time completion rate']
    },
    {
      icon: DollarSign,
      title: 'Cost Transparency',
      description: 'Clear, upfront pricing with no hidden costs or surprise charges.',
      features: ['Detailed cost breakdowns', 'Fixed-price contracts', 'Change order transparency', 'Value engineering']
    },
    {
      icon: Leaf,
      title: 'Energy Efficiency',
      description: 'Sustainable building practices and energy-efficient systems reduce operating costs.',
      features: ['LEED certification options', 'Smart building systems', 'Energy-efficient HVAC', 'Sustainable materials']
    },
    {
      icon: Building2,
      title: 'Modern Design',
      description: 'Contemporary architecture that enhances property value and resident satisfaction.',
      features: ['Architectural excellence', 'Functional layouts', 'Premium finishes', 'Future-ready infrastructure']
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Specialized professionals with extensive multi-storey construction experience.',
      features: ['Licensed engineers', 'Certified project managers', 'Skilled craftsmen', 'Safety specialists']
    }
  ];

  const stats = [
    { icon: Building2, value: '2.5M+', label: 'Tons of Concrete Used', color: 'text-blue-600' },
    { icon: Target, value: '2,500+', label: 'Floors Constructed', color: 'text-green-600' },
    { icon: Award, value: '150+', label: 'Buildings Completed', color: 'text-purple-600' },
    { icon: Users, value: '25,000+', label: 'Happy Residents', color: 'text-orange-600' }
  ];

  const services = [
    {
      title: 'High-Rise Construction',
      description: 'Specialized in buildings 15+ floors with advanced structural systems',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      title: 'Mid-Rise Development',
      description: 'Expert construction of 6-14 floor residential buildings',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      title: 'Design-Build Services',
      description: 'Comprehensive services from concept to completion',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose SkyRise Developments?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver exceptional value through our specialized expertise in multi-storey residential construction, 
            ensuring every project meets the highest standards of quality, safety, and innovation.
          </p>
        </motion.div>

        {/* Main Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300"
              >
                <benefit.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {benefit.description}
              </p>

              <ul className="space-y-2">
                {benefit.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
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
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Impact in Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    stat.color === 'text-blue-600' ? 'bg-blue-100' :
                    stat.color === 'text-green-600' ? 'bg-green-100' :
                    stat.color === 'text-purple-600' ? 'bg-purple-100' : 'bg-orange-100'
                  }`}
                >
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </motion.div>
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
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
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Specialized Services</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-600">{service.description}</p>
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
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <Zap className="h-16 w-16 text-blue-200 mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Multi-Storey Project?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Partner with the specialists in multi-storey residential construction. 
            Get a comprehensive consultation and detailed project proposal.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;