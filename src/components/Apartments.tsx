import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { useLanguage } from '../context/LanguageContext';
import { X } from 'lucide-react';
import { Group } from 'three';
import BackgroundShapes from './BackgroundShapes';

interface Apartment {
  type: string;
  title: string;
  description: string;
  area: string;
  rooms: string;
  features: string[];
  price: string;
  image: string;
  floor?: string;
  section?: string;
  deliveryYear?: string;
}

const Model = () => {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime();
      group.current.rotation.y = Math.sin(t / 4) / 8;
      group.current.position.y = Math.sin(t / 1.5) / 10;
    }
  });

  return (
    <group ref={group}>
      {/* Base building with gradient */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 4, 2]} />
        <meshStandardMaterial color='#4B9CD3' metalness={0.5} roughness={0.2} />
      </mesh>

      {/* Windows with glowing effect */}
      <group>
        {/* Front windows */}
        {[-1, 0, 1].map((x, i) => (
          <Float
            key={`front-${i}`}
            speed={1.5}
            rotationIntensity={0.2}
            floatIntensity={0.5}
          >
            <mesh position={[x, 1, 1.01]}>
              <boxGeometry args={[0.5, 0.8, 0.1]} />
              <meshStandardMaterial
                color='#FFFFFF'
                emissive='#88CCFF'
                emissiveIntensity={0.5}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          </Float>
        ))}

        {/* Back windows */}
        {[-1, 0, 1].map((x, i) => (
          <Float
            key={`back-${i}`}
            speed={1.5}
            rotationIntensity={0.2}
            floatIntensity={0.5}
          >
            <mesh position={[x, 1, -1.01]}>
              <boxGeometry args={[0.5, 0.8, 0.1]} />
              <meshStandardMaterial
                color='#FFFFFF'
                emissive='#88CCFF'
                emissiveIntensity={0.5}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          </Float>
        ))}

        {/* Side windows */}
        {[-1, 1].map((z, i) => (
          <Float
            key={`side-${i}`}
            speed={1.5}
            rotationIntensity={0.2}
            floatIntensity={0.5}
          >
            <mesh position={[1.51, 1, z]}>
              <boxGeometry args={[0.1, 0.8, 0.5]} />
              <meshStandardMaterial
                color='#FFFFFF'
                emissive='#88CCFF'
                emissiveIntensity={0.5}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          </Float>
        ))}
      </group>

      {/* Roof with gradient */}
      <mesh position={[0, 2.5, 0]}>
        <boxGeometry args={[3.2, 0.2, 2.2]} />
        <meshStandardMaterial color='#2C5282' metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Decorative elements */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, 2.6, 0]}>
          <coneGeometry args={[0.3, 0.5, 4]} />
          <meshStandardMaterial
            color='#FFD700'
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>
    </group>
  );
};

const ApartmentCard = ({ apartment }: { apartment: Apartment }) => {
  const [show3D, setShow3D] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='bg-white rounded-lg shadow-lg overflow-hidden'
    >
      <div className='relative'>
        <img
          src={apartment.image}
          alt={apartment.title}
          className='w-full h-64 object-cover'
        />
        <button
          onClick={() => setShow3D(true)}
          className='absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition-colors'
        >
          3D ko'rinish
        </button>
      </div>

      <div className='p-6'>
        <h3 className='text-xl font-bold text-gray-900 mb-2'>
          {apartment.title}
        </h3>
        <p className='text-gray-600 mb-4'>{apartment.description}</p>

        <div className='grid grid-cols-2 gap-4 mb-4'>
          <div>
            <span className='text-sm text-gray-500'>Maydon</span>
            <p className='font-medium'>{apartment.area}</p>
          </div>
          <div>
            <span className='text-sm text-gray-500'>Xonalar</span>
            <p className='font-medium'>{apartment.rooms}</p>
          </div>
        </div>

        <div className='mb-4'>
          <h4 className='font-medium text-gray-900 mb-2'>Imkoniyatlar</h4>
          <ul className='grid grid-cols-2 gap-2'>
            {apartment.features.map((feature: string, index: number) => (
              <li
                key={index}
                className='flex items-center text-sm text-gray-600'
              >
                <span className='w-2 h-2 bg-blue-600 rounded-full mr-2'></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex justify-between items-center'>
          <span className='text-2xl font-bold text-blue-600'>
            {apartment.price}
          </span>
          <button className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition-colors'>
            {t('apartments.cta.button') as string}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {show3D && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4'
            onClick={() => setShow3D(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className='bg-white rounded-lg w-full max-w-4xl h-[80vh] relative'
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShow3D(false)}
                className='absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full hover:bg-white transition-colors'
              >
                <X className='h-5 w-5 text-gray-900' />
              </button>

              <div className='w-full h-full'>
                <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
                  <color attach='background' args={['#f0f0f0']} />
                  <ambientLight intensity={0.5} />
                  <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={1}
                    castShadow
                  />
                  <Environment preset='city' />
                  <Model />
                  <OrbitControls
                    minDistance={3}
                    maxDistance={15}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                  />
                </Canvas>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Apartments = () => {
  const { t } = useLanguage();
  const apartments = t('apartments.items') as unknown as Apartment[];

  return (
    <section
      id='apartments'
      className='py-20 bg-gray-50 relative overflow-hidden'
    >
      <BackgroundShapes />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            {t('apartments.title') as string}
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            {t('apartments.subtitle') as string}
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {apartments.map((apartment, index) => (
            <ApartmentCard key={index} apartment={apartment} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-center mt-16'
        >
          <h3 className='text-2xl font-bold text-gray-900 mb-4'>
            {t('apartments.cta.title') as string}
          </h3>
          <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
            {t('apartments.cta.description') as string}
          </p>
          <button className='bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'>
            {t('apartments.cta.button') as string}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Apartments;
