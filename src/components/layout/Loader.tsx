import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {useTranslation} from "react-i18next";


const LoaderComponent: React.FC = () => {
  const { t } = useTranslation();
  const fullText = t("Chef_professional");
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, current + 1));
      current++;
      if (current === fullText.length) {
        clearInterval(interval);
      }
    }, 120);
    return () => clearInterval(interval);
  }, [fullText]);
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

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
        <div
          className="text-xl text-black-600 font-body inline-block overflow-hidden"
          style={{ whiteSpace: "pre" }}
        >
          {displayedText}
          <span
            className="inline-block"
            style={{ opacity: showCursor ? 1 : 0 }}
          >
            |
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoaderComponent;
