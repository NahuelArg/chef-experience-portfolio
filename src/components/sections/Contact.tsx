import type React from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full h-full flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-4 md:p-8 w-full">
        <h2 className="text-3xl md:text-4xl font-light mb-6 md:mb-8 font-heading">{t("contact_title")}</h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          <div className="space-y-4 md:space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-light mb-2 font-heading">{t("email")}</h3>
              <p className="text-black-600 font-body">Jon.arganaraz@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-light mb-2 font-heading">{t("phone")}</h3>
              <p className="text-black-600 font-body">+310684217382</p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-light mb-2 font-heading">{t("social_media")}</h3>
              <div className="flex gap-4 mt-2">
                <a href="https://www.instagram.com/jon.arganaraz?igsh=MWM5dm1tOTduNmhkbA=="
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
    </section>
  );
};

export default Contact;
