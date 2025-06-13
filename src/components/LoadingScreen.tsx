import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 bg-white z-50 flex items-center justify-center'
    >
      <div className='text-center'>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Building2 className='w-16 h-16 text-blue-600' />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className='mt-4 text-2xl font-bold text-gray-900'
        >
          Yuksalish Group
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, delay: 0.5 }}
          className='h-1 bg-blue-600 mt-4 rounded-full'
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
