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
            {t('apartments.cta.button')}
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
  const [activeTab, setActiveTab] = useState('apartments');
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  const [selectedFloors, setSelectedFloors] = useState<string[]>([]);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);

  const rooms = ['1', '2', '3', '4+'];
  const floors = ['-1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
  const areas = ['10-30', '30-50', '50-70', '70-90', '90+'];
  const years = ['2024', '2025', '2026', '2027'];

  return (
    <section
      id='apartments'
      className='py-20 bg-gray-50 relative overflow-hidden'
    >
      <BackgroundShapes />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            O'zingizga ideal kvartirani tanlang
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className='flex justify-center mb-8'>
          <div className='inline-flex rounded-lg border border-gray-200 p-1 bg-white'>
            <button
              onClick={() => setActiveTab('apartments')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === 'apartments'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Xonadonlar
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === 'commercial'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Tijorat binolari
            </button>
          </div>
        </div>

        {/* Filter Section */}
        <div className='bg-white rounded-lg shadow-lg p-6 mb-8'>
          <div className='grid md:grid-cols-4 gap-6'>
            {/* Rooms Filter */}
            <div>
              <h3 className='font-medium text-gray-900 mb-3'>Xonalar</h3>
              <div className='flex flex-wrap gap-2'>
                {rooms.map((room) => (
                  <button
                    key={room}
                    onClick={() => {
                      setSelectedRooms(
                        selectedRooms.includes(room)
                          ? selectedRooms.filter((r) => r !== room)
                          : [...selectedRooms, room]
                      );
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedRooms.includes(room)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {room}
                  </button>
                ))}
              </div>
            </div>

            {/* Floors Filter */}
            <div>
              <h3 className='font-medium text-gray-900 mb-3'>Qavat</h3>
              <div className='flex flex-wrap gap-2'>
                {floors.map((floor) => (
                  <button
                    key={floor}
                    onClick={() => {
                      setSelectedFloors(
                        selectedFloors.includes(floor)
                          ? selectedFloors.filter((f) => f !== floor)
                          : [...selectedFloors, floor]
                      );
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedFloors.includes(floor)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {floor}
                  </button>
                ))}
              </div>
            </div>

            {/* Area Filter */}
            <div>
              <h3 className='font-medium text-gray-900 mb-3'>Maydon, m²</h3>
              <div className='flex flex-wrap gap-2'>
                {areas.map((area) => (
                  <button
                    key={area}
                    onClick={() => {
                      setSelectedAreas(
                        selectedAreas.includes(area)
                          ? selectedAreas.filter((a) => a !== area)
                          : [...selectedAreas, area]
                      );
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedAreas.includes(area)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            {/* Year Filter */}
            <div>
              <h3 className='font-medium text-gray-900 mb-3'>
                Topshirish muddati
              </h3>
              <div className='flex flex-wrap gap-2'>
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYears(
                        selectedYears.includes(year)
                          ? selectedYears.filter((y) => y !== year)
                          : [...selectedYears, year]
                      );
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedYears.includes(year)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className='mt-6 flex justify-between items-center'>
            <button
              onClick={() => {
                setSelectedRooms([]);
                setSelectedFloors([]);
                setSelectedAreas([]);
                setSelectedYears([]);
              }}
              className='text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2'
            >
              <X className='h-4 w-4' />
              Filtrni tozalash
            </button>
            <div className='text-gray-600'>
              Topilgan variantlar: {t('apartments.items').length}
            </div>
          </div>
        </div>

        {/* Apartments Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {t('apartments.items').map((apartment: Apartment, index: number) => (
            <ApartmentCard key={index} apartment={apartment} />
          ))}
        </div>

        <div className='mt-16 text-center'>
          <button className='bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 hover:text-white transition-colors'>
            Yana variantlarni ko'rsatish
          </button>
        </div>
      </div>
    </section>
  );
};

export default Apartments;
