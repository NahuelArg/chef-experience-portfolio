import React, { useState } from 'react';

interface DishProps {
  img: string;
}

const ImgSection: React.FC<DishProps> = ({ img }) => {
  const [isLoading, setIsLoading] = useState(true);  // ← DENTRO del componente

  return (
    <section className="w-full h-screen flex items-center justify-center px-2 md:px-4">
      <div className="max-w-3xl w-full h-full flex items-center justify-center relative">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg"></div>
        )}
        <img
          src={img}
          onLoad={() => setIsLoading(false)}
          alt="Platillo del chef"
          loading="lazy"
          className={`w-full h-auto max-h-[60vh] object-contain rounded-lg ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } transition-opacity`}
        />
      </div>
    </section>
  );
};

export default ImgSection;