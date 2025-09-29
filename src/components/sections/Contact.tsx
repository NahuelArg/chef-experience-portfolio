import type React from "react";
import {useTranslation} from "react-i18next";

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
              <p className="text-black-600 font-body">contacto@empresa.com</p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-light mb-2 font-heading">{t("phone")}</h3>
              <p className="text-black-600 font-body">+1 234 567 890</p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-light mb-2 font-heading">{t("address")}</h3>
              <p className="text-black-600 font-body">
                Calle Principal 123<br />
                Ciudad, País
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
