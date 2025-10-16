import React from 'react';
import { motion } from 'framer-motion';

const SolSection: React.FC = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Sol argentino con animación de brillo */}
        <motion.div
          className="relative w-[22rem] h-[22rem] md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] mx-auto mb-8"
          animate={{
            filter: [
              "drop-shadow(0 0 30px rgba(234, 179, 8, 0.6))",
              "drop-shadow(0 0 50px rgba(234, 179, 8, 0.4))",
              "drop-shadow(0 0 30px rgba(234, 179, 8, 0.6))",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img 
            src="/sol.png" 
            alt="Sol argentino" 
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SolSection;