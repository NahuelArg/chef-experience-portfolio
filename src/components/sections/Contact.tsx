import type React from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full min-h-screen md:min-h-0 flex items-start justify-center relative overflow-hidden pt-8 md:py-16 pb-0">
      <div className="max-w-3xl md:max-w-4xl mx-auto px-4 md:px-8 w-full relative z-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-4 md:mb-6 font-heading">
          {t("contact_title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-3 md:space-y-4">
            <div>
              <h3 className="text-sm md:text-base font-light mb-2 font-heading">
                {t("email")}
              </h3>
              <p className="text-xs md:text-sm text-black-600 font-body">
                Jon.arganaraz@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-light mb-2 font-heading">
                {t("phone")}
              </h3>
              <p className="text-xs md:text-sm text-black-600 font-body">
                +310684217382
              </p>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-light mb-2 font-heading">
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

      {/* Sol negro - grande, mitad visible en el medio derecho */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-64 md:-right-80 w-[512px] h-[512px] md:w-[640px] md:h-[640px] pointer-events-none">
        <img
          src="/sol.png"
          alt="Sol argentino"
          className="w-full h-full object-contain"
          style={{
            filter: 'grayscale(100%) brightness(0)',
          }}
        />
      </div>
    </section>
  );
};

export default Contact;