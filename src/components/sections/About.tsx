import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="w-full h-screen flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 pt-8 md:pt-12">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        {/* Header con nombre y tagline */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-left mb-3 md:mb-4">
            JON ARGAÑARAZ
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 font-body max-w-2xl">
            {t("p_home")}
          </p>
        </div>
        
        {/* Imagen centrada */}
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-4xl">
            <img 
              src="https://res.cloudinary.com/dyiiztnx4/image/upload/v1759234128/IMG_1605_en894f.jpg"
              alt="Chef Jon Argañaraz en acción" 
              className="w-full h-auto max-h-[65vh] md:max-h-[70vh] object-contain rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;