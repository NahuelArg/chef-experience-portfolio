import React from 'react';  
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
<section className="w-full flex items-start justify-center bg-white px-2 pt-4 sm:px-4 md:px-8 md:pt-8">
  <div className="max-w-7xl mx-auto w-full">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-center font-heading">
      {t("about_title")}
    </h2>
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
      {/* Image Container */}
      <div className="flex-shrink-0 w-full max-w-[220px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[380px] h-[240px] sm:h-[120px] md:h-[300px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl bg-black flex items-center justify-center mx-auto md:mx-0 mb-2 md:mb-0">
        <img 
          src={"https://res.cloudinary.com/dyiiztnx4/image/upload/v1759234128/IMG_1605_en894f.jpg"} 
          alt="Chef en acción" 
          className="w-full h-full object-contain object-center"
        />
      </div>
      {/* Text Container */}
      <div className="flex-1 space-y-4 w-full max-w-full mt-0 overflow-y-auto max-h-[260px] md:max-h-none pr-1">
        {/* Indicador de scroll solo en mobile */}
        <div className="w-full flex justify-center mb-1 md:hidden">
          <span className="text-gray-400 text-xs animate-bounce">{t("swipe")}</span>
        </div>
        <div className="prose prose-lg max-w-full break-words">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black-700 font-body mt-2 break-words">
            {t("p1")}
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black-700 mt-2 font-body break-words">
            {t("p2")}
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black-700 mt-2 font-body break-words">
            {t("p3")}
          </p>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
          <span className="px-3 py-1 bg-black-100 text-black-800 rounded-full text-xs sm:text-sm font-body">
            {t("service1")}
          </span>
          <span className="px-3 py-1 bg-black-100 text-black-800 rounded-full text-xs sm:text-sm font-body">
            {t("service2")}
          </span>
          <span className="px-3 py-1 bg-black-100 text-black-800 rounded-full text-xs sm:text-sm font-body">
            {t("service3")}
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default About;