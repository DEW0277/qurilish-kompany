import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play, User } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Homeowner, Azure Heights',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Living in Azure Heights has exceeded all our expectations. The build quality is exceptional, and the attention to detail in every aspect of construction is evident. SkyRise delivered exactly what they promised, on time and within budget.',
      project: 'Azure Heights - 28 floors',
      videoThumbnail: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Property Developer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'As a developer, I\'ve worked with many construction companies, but SkyRise stands out for their expertise in multi-storey construction. Their project management is flawless, and they consistently deliver high-quality buildings that exceed market standards.',
      project: 'Riverside Towers - Twin 22-floor buildings',
      videoThumbnail: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'Emily Thompson',
      role: 'Resident, Garden Court',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The family-friendly design of Garden Court Residences is perfect for us. SkyRise understood our needs and created a building that truly feels like a community. The construction quality gives us confidence in our investment.',
      project: 'Garden Court Residences - 12 floors',
      videoThumbnail: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Investment Group Partner',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'SkyRise\'s expertise in high-rise construction is unmatched. Metropolitan Plaza has become a landmark in our city, and the return on investment has exceeded our projections. Their commitment to excellence is evident in every detail.',
      project: 'Metropolitan Plaza - 35 floors',
      videoThumbnail: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Sustainability Consultant',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Working with SkyRise on Parkside Commons was a pleasure. Their commitment to sustainable construction practices and achieving LEED certification demonstrates their forward-thinking approach to building design.',
      project: 'Parkside Commons - LEED Gold Certified',
      videoThumbnail: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const quickTestimonials = [
    { name: 'Robert Kim', text: 'Exceptional build quality and professional service throughout the entire process.' },
    { name: 'Maria Santos', text: 'On-time delivery and transparent communication made our project stress-free.' },
    { name: 'James Wilson', text: 'The structural engineering expertise is evident in every aspect of our building.' },
    { name: 'Anna Lee', text: 'Outstanding attention to detail and commitment to resident satisfaction.' },
    { name: 'Tom Brown', text: 'Best construction company for multi-storey residential projects in the region.' },
    { name: 'Grace Liu', text: 'Innovative design solutions and sustainable building practices exceeded expectations.' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from property developers, homeowners, and residents who have experienced 
            the SkyRise difference in multi-storey construction excellence.
          </p>
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-0"
              >
                {/* Video/Image Section */}
                <div className="relative bg-gray-900 min-h-[400px] flex items-center justify-center">
                  <img 
                    src={testimonials[currentTestimonial].videoThumbnail}
                    alt={testimonials[currentTestimonial].project}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                      <Play className="h-12 w-12 text-white ml-1" />
                    </div>
                  </motion.button>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-lg font-semibold">{testimonials[currentTestimonial].project}</div>
                    <div className="text-sm opacity-90">Project Showcase</div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Quote className="h-12 w-12 text-blue-600 mb-6" />
                  
                  <div className="flex mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    "{testimonials[currentTestimonial].text}"
                  </p>

                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Quick Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">More Client Feedback</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-gray-600">Referral Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;