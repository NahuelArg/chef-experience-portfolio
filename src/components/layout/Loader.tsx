import { motion } from "framer-motion";
import React from "react";
import {useTranslation} from "react-i18next";


const LoaderComponent: React.FC = () => {
  const { t } = useTranslation();
  const fullText = t("Chef_professional");


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      }}
      className="fixed inset-0  z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.h1
          initial={{ scale: 2, opacity: 0, y: -50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 1],
          }}
          className="text-4xl md:text-6xl font-heading text-black-600 mb-4"
        >
          Jon Arganaraz
        </motion.h1>
        <motion.div
        initial={{ scale: 2, opacity: 0, y: -50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 1],
          }}
          className="text-xl text-black-600 font-body inline-block"
          style={{ whiteSpace: "pre" }}
        >
          {fullText}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoaderComponent;
