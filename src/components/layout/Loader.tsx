import { motion } from 'framer-motion';

const LoaderComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.h1
          initial={{ scale: 3, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.5,
            ease: "easeOut",
            times: [0, 0.2, 0.5, 1],
          }}
          className="text-4xl md:text-6xl font-light text-yellow-600 mb-4"
        >
          Jon Arganaraz
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.5
          }}
          className="text-xl text-gray-600"
        >
          Chef Profesional
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoaderComponent;
