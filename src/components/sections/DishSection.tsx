
import React from 'react';
import { motion } from 'framer-motion';

interface DishProps {
  img: string;
}

const DishSection: React.FC<DishProps> = ({ img }) => (
  <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-8">
     <motion.img
      src={img}
      alt="Dish Image"
      loading="lazy"
      className="w-64 h-64 object-cover rounded-lg shadow mb-6"
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: -150, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
     />
  </section>
);

export default DishSection;

