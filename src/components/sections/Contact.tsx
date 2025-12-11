import type React from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full min-h-screen flex items-start justify-center relative overflow-hidden pt-8 pb-0">
      <div className="max-w-4xl mx-auto px-4 md:px-6 w-full relative z-10">
        <h2 className="text-2xl md:text-3xl font-light mb-4 font-heading">
          {t("contact_title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <h3 className="text-base md:text-lg font-light mb-2 font-heading">
                {t("email")}
              </h3>
              <p className="text-sm md:text-base text-black-600 font-body">
                Jon.arganaraz@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-light mb-2 font-heading">
                {t("phone")}
              </h3>
              <p className="text-sm md:text-base text-black-600 font-body">
                +310684217382
              </p>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-light mb-2 font-heading">
                {t("social_media")}
              </h3>
              <div className="flex gap-4 mt-2">
                <a 
                  href="https://www.instagram.com/jon.arganaraz?igsh=MWM5dm1tOTduNmhkbA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-600 hover:text-gray-800 transition-colors duration-200"
                >
                  <FaInstagram size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/jon-arga%C3%B1araz-14a2191a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-600 hover:text-gray-800 transition-colors duration-200"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sol negro - centrado verticalmente, derecha, mitad visible */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-64 w-[500px] h-[500px] sm:-right-64 sm:w-[550px] sm:h-[550px] md:-right-72 md:w-[550px] md:h-[550px] lg:-right-0 lg:w-[600px] lg:h-[600px] pointer-events-none">
        <img
          src="/sol2.png"
          alt="Sol argentino"
          className="w-full h-full object-contain"
       style={{
  filter: 'brightness(2) contrast(5) saturate(0.3) sepia(0.1) drop-shadow(0.7px 0 0.7px rgba(0, 0, 0, 0.8))',
}}
        />
      </div>
    </section>
  );
};

export default Contact;