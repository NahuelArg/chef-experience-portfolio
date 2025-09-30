import React from 'react';  
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
<section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 py-8">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-center font-heading">
          {t("about_title")}
        </h2>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Image Container */}
          <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] rounded-lg overflow-hidden shadow-xl bg-black flex items-center justify-center mx-auto md:mx-0">
            <img 
              src={"https://res.cloudinary.com/dyiiztnx4/image/upload/v1759234128/IMG_1605_en894f.jpg"} 
              alt="Chef en acción" 
              className="w-full h-full object-contain object-center"
            />
          </div>
          {/* Text Container */}
          <div className="space-y-4 mt-6 md:mt-0">
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black-700 font-body mt-4">
                {t("p1")}
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black-700 mt-4 font-body">
                {t("p2")}
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black-700 mt-4 font-body">
                {t("p3")}
              </p>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-6">
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