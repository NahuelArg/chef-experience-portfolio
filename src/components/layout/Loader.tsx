import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoaderComponent = () => {
  const fullText = "Chef profesional";
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
    }, 120); // velocidad de tipeo (ms)
    return () => clearInterval(interval);
  }, [fullText]);

  // Cursor parpadeante
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
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
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
          className="text-4xl md:text-6xl font-light text-yellow-600 mb-4"
        >
          Jon Arganaraz
        </motion.h1>
        <div
          className="text-xl text-gray-600 font-mono inline-block overflow-hidden"
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
