import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import flan from '../../assets/flan.webp';
import molleja from '../../assets/mollejas.jpg';
import provoleta from '../../assets/provoleta.webp';
import asado from '../../assets/asado-argentin-kamado.jpg';
import bife from '../../assets/bife.jpg';
import empanada from '../../assets/empanadas.jpeg';


interface DishProps {
  title: string;
  desc: string;
  img: string;
  category: string;
}

const GallerySection: React.FC = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageHovered, setIsImageHovered] = useState(false);

 useEffect(() => {
    if (!isImageHovered) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % dishes.length);
      }, 3000); // Cambiado de 2000 a 3000

      return () => clearInterval(timer);
    }
  }, [isImageHovered]);

  const dishes: DishProps[] = [
    { 
      title: "Asado Argentino", 
      desc: "Cortes seleccionados a la parrilla con chimichurri casero",
      img: `${asado}`,
      category: "Carnes"
    },
    { 
      title: "Empanadas Criollas", 
      desc: "Rellenas de carne cortada a cuchillo con especias tradicionales",
      img: `${empanada}`,
      category: "Entrada"
    },
    { 
      title: "Provoleta", 
      desc: "Queso provolone fundido con orégano y pimentón",
      img: `${provoleta}`,
      category: "Entrada"
    },
    { 
      title: "Mollejas al Limón", 
      desc: "Tiernas mollejas doradas con toque cítrico",
      img: `${molleja}`,
      category: "Especialidad"
    },
    { 
      title: "Bife de Chorizo", 
      desc: "Jugoso bife madurado con sal parrillera",
      img: `${bife}`,
      category: "Carnes"
    },
    { 
      title: "Flan Casero", 
      desc: "Con dulce de leche y crema batida",
      img: `${flan}`,
      category: "Postre"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dishes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dishes.length) % dishes.length);
  };

  return (
    <section 
      className="w-full min-h-screen bg-white flex flex-col justify-between px-4 md:px-8 lg:px-12 py-8"
    >
      <div className="flex justify-between items-center mb-8">
        <button 
          onClick={prevSlide} 
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <span className="sr-only">Anterior</span>
  
        
          <span className="sr-only">Siguiente</span>
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Imagen Principal */}
      <div className="flex flex-col md:flex-row md:gap-8 items-center">
        <motion.div 
         
          className="w-full md:w-2/3 aspect-square md:aspect-[4/3] relative overflow-hidden rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={dishes[currentIndex].img} 
            alt={dishes[currentIndex].title}
            className="w-full h-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 375px,
                   (max-width: 1024px) 768px,
                   1024px"
          />
       {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-black/50 text-white rounded-full text-sm">
              {dishes[currentIndex].category}
            </span>
          </div>
        </motion.div>


       {/* Description - Now side by side with image on desktop */}
        <div className="md:w-1/3 mt-6 md:mt-0 text-center md:text-left"
         onMouseEnter={() => setIsImageHovered(true)}
      onMouseLeave={() => setIsImageHovered(false)}
        >

          <p className="text-gray-600 italic text-sm md:text-base lg:text-lg">
            {dishes[currentIndex].desc}
          </p>
        </div>
      </div>
      {/* Indicadores de página */}
      <div className="flex justify-center gap-2 mt-8">
        {dishes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-yellow-400' : 'bg-gray-300'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
