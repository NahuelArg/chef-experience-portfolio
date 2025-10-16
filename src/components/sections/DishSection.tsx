import React from 'react';

interface DishProps {
  img: string;
}

const DishSection: React.FC<DishProps> = ({ img }) => (
  <section className="w-full h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">
    <div className="max-w-5xl w-full h-full flex items-center justify-center">
      <img
        src={img}
        alt="Platillo del chef"
        loading="lazy"
        className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
      />
    </div>
  </section>
);

export default DishSection;