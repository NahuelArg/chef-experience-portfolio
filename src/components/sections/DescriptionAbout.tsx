import React from "react";
import { useTranslation } from "react-i18next";

const DescriptionAbout: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen md:min-h-0 flex flex-col items-center justify-center md:py-16">
            <div className="prose prose-lg max-w-3xl md:max-w-4xl break-words text-center px-4 md:px-8 mx-auto">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-black-700 font-body mb-4 break-words">
                  {t("p1")}
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-black-700 mb-4 font-body break-words">
                  {t("p2")}
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-black-700 mb-4 font-body break-words">
                  {t("p3")}
                </p>
            </div>
        </div>
    );
};

export default DescriptionAbout;