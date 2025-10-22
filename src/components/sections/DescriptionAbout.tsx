import React from "react";
import { useTranslation } from "react-i18next";

const DescriptionAbout: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="prose prose-lg max-w-full break-words text-center px-4 sm:px-6 md:px-8 lg:px-10">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black-700 font-body mb-6 break-words">
                  {t("p1")}
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black-700 mb-6 font-body break-words">
                  {t("p2")}
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black-700 mb-8 font-body break-words">
                  {t("p3")}
                </p>
            </div>
        </div>
    );
};

export default DescriptionAbout;