import type React from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full h-full flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-4 md:p-8 text-center">
        <h1 className="text-4xl md:text-6xl font-light mb-4 md:mb-6">{t("home")}</h1>
        <p className="text-lg md:text-xl text-black-600 max-w-2xl mx-auto">
          {t("p_home")}
        </p>
      </div>
    </section>
  );
};
export default Home;