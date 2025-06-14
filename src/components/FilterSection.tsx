import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, Home, Ruler, Building, Calendar } from 'lucide-react';

interface FilterSectionProps {
  onFilterChange: (filters: {
    rooms: number | null;
    area: [number, number];
    floor: number | null;
    year: string | null;
  }) => void;
}

const FilterSection = ({ onFilterChange }: FilterSectionProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const [roomFilter, setRoomFilter] = useState<number | null>(null);
  const [areaFilter, setAreaFilter] = useState<[number, number]>([0, 200]);
  const [floorFilter, setFloorFilter] = useState<number | null>(null);
  const [yearFilter, setYearFilter] = useState<string | null>(null);

  const roomOptions = [
    { value: 1, label: '1 xona' },
    { value: 2, label: '2 xona' },
    { value: 3, label: '3 xona' },
    { value: 4, label: '4 xona' },
  ];

  const floorOptions = [
    { value: 1, label: '1-qavat' },
    { value: 2, label: '2-qavat' },
    { value: 3, label: '3-qavat' },
    { value: 4, label: '4-qavat' },
    { value: 5, label: '5-qavat' },
  ];

  const yearOptions = [
    { value: '2024', label: '2024 yil' },
    { value: '2025', label: '2025 yil' },
    { value: '2026', label: '2026 yil' },
  ];

  const handleFilterChange = () => {
    onFilterChange({
      rooms: roomFilter,
      area: areaFilter,
      floor: floorFilter,
      year: yearFilter,
    });
  };

  const handleResetFilters = () => {
    setRoomFilter(null);
    setAreaFilter([0, 200]);
    setFloorFilter(null);
    setYearFilter(null);
    onFilterChange({
      rooms: null,
      area: [0, 200],
      floor: null,
      year: null,
    });
  };

  return (
    <div className='mb-8'>
      <div className='flex items-center justify-between mb-4'>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className='flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
        >
          <Filter className='h-5 w-5' />
          <span>Filterlar</span>
        </button>

        {showFilters && (
          <button
            onClick={handleResetFilters}
            className='flex items-center space-x-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors'
          >
            <X className='h-5 w-5' />
            <span>Filterlarni tozalash</span>
          </button>
        )}
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='bg-white rounded-lg shadow-lg overflow-hidden'
          >
            <div className='p-6'>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {/* Xonalar soni */}
                <div className='space-y-2'>
                  <label className='flex items-center space-x-2 text-sm font-medium text-gray-700'>
                    <Home className='h-4 w-4' />
                    <span>Xonalar soni</span>
                  </label>
                  <select
                    value={roomFilter || ''}
                    onChange={(e) => {
                      setRoomFilter(
                        e.target.value ? Number(e.target.value) : null
                      );
                      handleFilterChange();
                    }}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  >
                    <option value=''>Barchasi</option>
                    {roomOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Maydoni */}
                <div className='space-y-2'>
                  <label className='flex items-center space-x-2 text-sm font-medium text-gray-700'>
                    <Ruler className='h-4 w-4' />
                    <span>Maydoni (m²)</span>
                  </label>
                  <div className='flex items-center space-x-2'>
                    <input
                      type='number'
                      value={areaFilter[0]}
                      onChange={(e) => {
                        setAreaFilter([Number(e.target.value), areaFilter[1]]);
                        handleFilterChange();
                      }}
                      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                      placeholder='Min'
                    />
                    <span className='text-gray-500'>-</span>
                    <input
                      type='number'
                      value={areaFilter[1]}
                      onChange={(e) => {
                        setAreaFilter([areaFilter[0], Number(e.target.value)]);
                        handleFilterChange();
                      }}
                      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                      placeholder='Max'
                    />
                  </div>
                </div>

                {/* Qavat */}
                <div className='space-y-2'>
                  <label className='flex items-center space-x-2 text-sm font-medium text-gray-700'>
                    <Building className='h-4 w-4' />
                    <span>Qavat</span>
                  </label>
                  <select
                    value={floorFilter || ''}
                    onChange={(e) => {
                      setFloorFilter(
                        e.target.value ? Number(e.target.value) : null
                      );
                      handleFilterChange();
                    }}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  >
                    <option value=''>Barchasi</option>
                    {floorOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Yakunlanish yili */}
                <div className='space-y-2'>
                  <label className='flex items-center space-x-2 text-sm font-medium text-gray-700'>
                    <Calendar className='h-4 w-4' />
                    <span>Yakunlanish yili</span>
                  </label>
                  <select
                    value={yearFilter || ''}
                    onChange={(e) => {
                      setYearFilter(e.target.value || null);
                      handleFilterChange();
                    }}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  >
                    <option value=''>Barchasi</option>
                    {yearOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterSection;
