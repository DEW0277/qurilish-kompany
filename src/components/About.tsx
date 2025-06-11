import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building, Shield, Clock, Award, Target, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    { year: '2008', event: 'Founded SkyRise Developments', description: 'Started with a vision to revolutionize multi-storey residential construction' },
    { year: '2012', event: 'First High-Rise Completed', description: '20-story residential tower setting new standards for quality' },
    { year: '2018', event: 'Sustainable Building Pioneer', description: 'First LEED Platinum certified residential high-rise in the region' },
    { year: '2023', event: '150+ Buildings Milestone', description: 'Celebrating over 150 completed multi-storey residential projects' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Structural Excellence',
      description: 'Every building is engineered to exceed safety standards with advanced structural systems and seismic resistance.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Our proven project management ensures on-time completion without compromising quality or safety.',
    },
    {
      icon: Target,
      title: 'Precision Construction',
      description: 'Meticulous attention to detail in every aspect, from foundation to finishing touches.',
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We work closely with developers and residents to create communities that enhance quality of life.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About SkyRise Developments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we've specialized exclusively in multi-storey residential construction, 
            building premium apartment buildings and condominiums that define modern urban living.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Modern high-rise residential building"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Multi-Storey Specialists Since 2008
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              SkyRise Developments was founded with a singular focus: to become the premier builder 
              of multi-storey residential buildings. Our expertise spans mid-rise apartments (6-12 floors) 
              to luxury high-rise condominiums (25+ floors).
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We understand the unique challenges of vertical construction - from complex foundation 
              systems and structural engineering to coordinating utilities across multiple floors. 
              Our specialized knowledge ensures every project meets the highest standards for safety, 
              efficiency, and resident comfort.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-blue-900 mb-3">Our Mission</h4>
              <p className="text-blue-800">
                To create exceptional multi-storey residential communities that enhance urban living 
                through innovative design, superior construction quality, and sustainable building practices.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Company Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors"
                >
                  <value.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;