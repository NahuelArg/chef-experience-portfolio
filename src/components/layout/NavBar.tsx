import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX } from "react-icons/fi";

interface NavBarProps {
  onNavigate: (idx: number) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);
  const handleClose = () => setIsMenuOpen(false);
  const { t, i18n } = useTranslation();

  const menuItems = [
    { idx: 0, label: t("About") },
    { idx: 7, label: t("Contact") },
  ];

  return (
    <>
      <button
        className="fixed top-4 right-4 z-50 p-2 bg-[#ed7d9] rounded-full shadow-md"
        onClick={handleMenuClick}
        aria-label="Abrir menú"
      >
        <FiMenu size={28} />
      </button>
      
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/30 z-40" onClick={handleClose} />
      )}
      <nav
        className={`
    fixed top-0 right-0 h-full w-full max-w-xs sm:w-[220px] bg-white shadow-lg z-50
    transform transition-transform duration-300
    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
    flex flex-col px-6 py-8 minh-h-fit
  `}
      >
        <button
          className="self-end mb-8"
          onClick={handleClose}
          aria-label="Cerrar menú"
        >
          <FiX size={28} />
        </button>
        <div className="relative w-full px-8 py-8">
          {/* Main contents */}
          <div className="flex flex-col">
            <div className="flex gap-2 mb-4 justify-end">
              <button
                onClick={() => i18n.changeLanguage("es")}
                className="px-2 py-1 text-sm"
              >
                ES
              </button>
              <button
                onClick={() => i18n.changeLanguage("en")}
                className="px-2 py-1 text-sm"
              >
                EN
              </button>
            </div>
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-gray-800 mb-8"
            >
              
              <h1 className="text-2xl font-heading">Jon Arganaraz</h1>
              <p className="text-sm text-black-600 font-body">{t("Chef_professional")}</p>
            </motion.div>
            
            {/* Navigate Links */}
            <div className="flex flex-col gap-4 mb-8 font-body">
              <AnimatePresence>
                {menuItems.map((item) => (
                  <motion.button
                    key={item.idx}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      onNavigate(item.idx);
                      setIsMenuOpen(false);
                    }}
                    className="text-left text-lg font-medium text-gray-500 hover:text-gray-800 transition-colors duration-200"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>

            {/* Sun Argentinian */}
            <div className="border-t border-gray-100 pt-4">
              <div
                className="relative w-20 mx-auto"
                style={{ height: "35.6px" }}
              >
                <motion.img
                  src="/sol.png"
                  alt="Sol argentino"
                  className="w-full h-full object-contain"
                  animate={{
                    filter: [
                      "drop-shadow(0 0 15px rgba(234, 179, 8, 0.5))",
                      "drop-shadow(0 0 8px rgba(234, 179, 8, 0.3))",
                      "drop-shadow(0 0 15px rgba(234, 179, 8, 0.5))",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    aspectRatio: "375/666",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
