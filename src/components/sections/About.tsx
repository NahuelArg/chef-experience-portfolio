import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="w-full h-screen md:h-auto flex flex-col px-4 pt-8 md:py-12">
      <div className="max-w-4xl mx-auto w-full md:h-auto flex flex-col">
        {/* Header con nombre y tagline */}
        <div className="mb-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-light text-left mb-2">
            JON ARGAÑARAZ
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 font-body max-w-2xl">
            {t("p_home")}
          </p>
        </div>
        
        {/* Imagen centrada */}
        <div className="flex-1 md:flex-none flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-3xl">
            <img
              src="https://res.cloudinary.com/dyiiztnx4/image/upload/v1759234128/IMG_1605_en894f.jpg"
              alt="Chef Jon Argañaraz en acción"
              className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;