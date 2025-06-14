import { useState, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ExternalLink,
  Calendar,
  MapPin,
  Building,
  Users,
  Eye,
} from 'lucide-react';
import BackgroundShapes from './BackgroundShapes';
import LazyImage from './LazyImage';
import FilterSection from './FilterSection';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  floors: number;
  units: number;
  timeline: string;
  image: string;
  description: string;
  features: string[];
  details: string;
  rooms: number;
  area: number;
  completionYear: string;
}

const ProjectCard = memo(
  ({
    project,
    onSelect,
  }: {
    project: Project;
    onSelect: (project: Project) => void;
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300'
      >
        <div className='relative overflow-hidden aspect-video'>
          <LazyImage
            src={project.image}
            alt={project.title}
            className='w-full h-full'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

          <div className='absolute top-4 left-4'>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                project.category === 'high-rise'
                  ? 'bg-blue-600'
                  : 'bg-green-600'
              }`}
            >
              {project.floors} Floors
            </span>
          </div>

          <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <button
              onClick={() => onSelect(project)}
              className='bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors'
            >
              <Eye className='h-5 w-5 text-gray-900' />
            </button>
          </div>

          <div className='absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <div className='text-white'>
              <div className='text-sm font-medium'>{project.units} Units</div>
              <div className='text-xs opacity-90'>
                {project.timeline} Construction
              </div>
            </div>
          </div>
        </div>

        <div className='p-6'>
          <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
            {project.title}
          </h3>
          <p className='text-gray-600 mb-4 leading-relaxed'>
            {project.description}
          </p>

          <div className='flex items-center justify-between text-sm text-gray-500 mb-4'>
            <div className='flex items-center space-x-1'>
              <MapPin className='h-4 w-4' />
              <span>{project.location}</span>
            </div>
            <div className='flex items-center space-x-1'>
              <Calendar className='h-4 w-4' />
              <span>{project.year}</span>
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4 text-sm text-gray-600'>
              <div className='flex items-center space-x-1'>
                <Building className='h-4 w-4' />
                <span>{project.floors} floors</span>
              </div>
              <div className='flex items-center space-x-1'>
                <Users className='h-4 w-4' />
                <span>{project.units} units</span>
              </div>
            </div>
            <button
              onClick={() => onSelect(project)}
              className='text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1'
            >
              <span>View Details</span>
              <ExternalLink className='h-4 w-4' />
            </button>
          </div>
        </div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Advanced filters state
  const [filters, setFilters] = useState({
    rooms: null as number | null,
    area: [0, 200] as [number, number],
    floor: null as number | null,
    year: null as string | null,
  });

  const projects = [
    {
      id: 1,
      title: 'Azure Heights',
      category: 'high-rise',
      location: 'Downtown Core',
      year: '2023',
      floors: 28,
      units: 240,
      timeline: '36 months',
      image:
        'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description:
        'Luxury high-rise condominium featuring panoramic city views, premium amenities, and sustainable design elements.',
      features: [
        'Rooftop garden',
        'Fitness center',
        'Concierge service',
        'Underground parking',
      ],
      details:
        'Azure Heights represents the pinnacle of urban living with its sleek glass facade and modern amenities.',
      rooms: 3,
      area: 120,
      completionYear: '2024',
    },
    {
      id: 2,
      title: 'Riverside Towers',
      category: 'high-rise',
      location: 'Waterfront District',
      year: '2023',
      floors: 22,
      units: 180,
      timeline: '32 months',
      image:
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description:
        'Twin tower complex offering waterfront living with modern design and comprehensive recreational facilities.',
      features: [
        'Marina access',
        'Swimming pool',
        'Business center',
        'Guest suites',
      ],
      details:
        'The Riverside Towers project showcases our expertise in complex multi-building developments. Each tower is designed to maximize water views while providing residents with resort-style amenities.',
      rooms: 2,
      area: 100,
      completionYear: '2025',
    },
    {
      id: 3,
      title: 'Garden Court Residences',
      category: 'mid-rise',
      location: 'Suburban Heights',
      year: '2022',
      floors: 12,
      units: 96,
      timeline: '24 months',
      image:
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description:
        'Mid-rise apartment complex designed for families, featuring spacious units and extensive green spaces.',
      features: ['Playground', 'Community garden', 'Pet park', 'Bike storage'],
      details:
        'Garden Court Residences demonstrates our commitment to family-friendly living. The building integrates seamlessly with the surrounding landscape while providing modern conveniences.',
      rooms: 1,
      area: 50,
      completionYear: '2024',
    },
    {
      id: 4,
      title: 'Metropolitan Plaza',
      category: 'high-rise',
      location: 'Business District',
      year: '2022',
      floors: 35,
      units: 320,
      timeline: '42 months',
      image:
        'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description:
        'Premier high-rise development in the heart of the business district with luxury finishes and world-class amenities.',
      features: [
        'Sky lounge',
        'Spa facilities',
        'Valet parking',
        'Private dining',
      ],
      details:
        'Our tallest residential project to date, Metropolitan Plaza sets new standards for luxury high-rise living with its sophisticated design and premium amenities.',
      rooms: 4,
      area: 160,
      completionYear: '2026',
    },
    {
      id: 5,
      title: 'Parkside Commons',
      category: 'mid-rise',
      location: 'Green Valley',
      year: '2021',
      floors: 8,
      units: 64,
      timeline: '18 months',
      image:
        'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description:
        'Eco-friendly mid-rise building with sustainable features and direct park access.',
      features: [
        'Solar panels',
        'Rainwater harvesting',
        'Green roof',
        'EV charging',
      ],
      details:
        'Parkside Commons showcases our commitment to sustainable construction with LEED Gold certification and innovative green building technologies.',
      rooms: 2,
      area: 80,
      completionYear: '2023',
    },
    {
      id: 6,
      title: 'Skyline Residences',
      category: 'mid-rise',
      location: 'Hillcrest',
      year: '2021',
      floors: 15,
      units: 120,
      timeline: '28 months',
      image:
        'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description:
        'Modern mid-rise with panoramic views and contemporary design elements.',
      features: [
        'Observation deck',
        'Yoga studio',
        'Co-working space',
        'Wine cellar',
      ],
      details:
        'Skyline Residences offers the perfect balance of urban convenience and residential comfort with stunning views and thoughtfully designed amenities.',
      rooms: 3,
      area: 100,
      completionYear: '2024',
    },
  ];

  const categoryOptions = [
    { id: 'all', label: 'Barcha Loyihalar' },
    { id: 'high-rise', label: "Ko'p Qavatli (15+ qavat)" },
    { id: 'mid-rise', label: "O'rta Qavatli (6-14 qavat)" },
  ];

  const filteredProjects = projects.filter((project) => {
    // Category filter
    if (categoryFilter !== 'all' && project.category !== categoryFilter)
      return false;

    // Room filter
    if (filters.rooms !== null && project.rooms !== filters.rooms) return false;

    // Area filter
    if (project.area < filters.area[0] || project.area > filters.area[1])
      return false;

    // Floor filter
    if (filters.floor !== null && project.floors < filters.floor) return false;

    // Year filter
    if (filters.year !== null && project.completionYear !== filters.year)
      return false;

    return true;
  });

  const handleProjectSelect = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleFilterChange = useCallback(
    (newFilters: {
      rooms: number | null;
      area: [number, number];
      floor: number | null;
      year: string | null;
    }) => {
      setFilters(newFilters);
    },
    []
  );

  return (
    <section id='projects' className='py-20 bg-white relative overflow-hidden'>
      <BackgroundShapes />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Loyihalarimiz
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Bizning yakunlangan ko'p qavatli turar-joy binolarimiz to'plamini
            kashf eting. Har bir bino sifat va innovatsiya bo'yicha eng yuqori
            standartlarga muvofiq qurilgan.
          </p>
        </motion.div>

        {/* Advanced Filters */}
        <FilterSection onFilterChange={handleFilterChange} />

        {/* Category Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex flex-wrap justify-center gap-4 mb-12'
        >
          {categoryOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setCategoryFilter(option.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                categoryFilter === option.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {option.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={handleProjectSelect}
            />
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4'
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className='bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto'
                onClick={(e) => e.stopPropagation()}
              >
                <div className='relative aspect-video'>
                  <LazyImage
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className='w-full h-full'
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className='absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors'
                  >
                    <ExternalLink className='h-5 w-5 text-gray-900' />
                  </button>
                </div>

                <div className='p-8'>
                  <h3 className='text-3xl font-bold text-gray-900 mb-4'>
                    {selectedProject.title}
                  </h3>
                  <p className='text-lg text-gray-600 mb-6'>
                    {selectedProject.details}
                  </p>

                  <div className='grid md:grid-cols-2 gap-8 mb-6'>
                    <div>
                      <h4 className='text-xl font-bold text-gray-900 mb-4'>
                        Loyiha Tafsilotlari
                      </h4>
                      <div className='space-y-3'>
                        <div className='flex justify-between'>
                          <span className='text-gray-600'>Manzil:</span>
                          <span className='font-medium'>
                            {selectedProject.location}
                          </span>
                        </div>
                        <div className='flex justify-between'>
                          <span className='text-gray-600'>Yakunlangan:</span>
                          <span className='font-medium'>
                            {selectedProject.year}
                          </span>
                        </div>
                        <div className='flex justify-between'>
                          <span className='text-gray-600'>Qavatlar:</span>
                          <span className='font-medium'>
                            {selectedProject.floors}
                          </span>
                        </div>
                        <div className='flex justify-between'>
                          <span className='text-gray-600'>Xonadonlar:</span>
                          <span className='font-medium'>
                            {selectedProject.units}
                          </span>
                        </div>
                        <div className='flex justify-between'>
                          <span className='text-gray-600'>Xonalar:</span>
                          <span className='font-medium'>
                            {selectedProject.rooms}
                          </span>
                        </div>
                        <div className='flex justify-between'>
                          <span className='text-gray-600'>Maydoni:</span>
                          <span className='font-medium'>
                            {selectedProject.area} m²
                          </span>
                        </div>
                        <div className='flex justify-between'>
                          <span className='text-gray-600'>Yakunlanish:</span>
                          <span className='font-medium'>
                            {selectedProject.completionYear}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className='text-xl font-bold text-gray-900 mb-4'>
                        Asosiy Xususiyatlar
                      </h4>
                      <ul className='space-y-2'>
                        {selectedProject.features.map((feature, index) => (
                          <li
                            key={index}
                            className='flex items-center space-x-2'
                          >
                            <div className='w-2 h-2 bg-blue-600 rounded-full'></div>
                            <span className='text-gray-600'>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default memo(Projects);
