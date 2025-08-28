import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";


const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);
  const handleClose = () => setIsMenuOpen(false);


  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop - 100;
      const sectionHeight = (section as HTMLElement).offsetHeight;
      const sectionId = section.getAttribute("id") || "";

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        setActiveSection(sectionId);
      }
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Botón de menú móvil */}
      <button
        className="fixed top-4 right-4 z-50 p-2 bg-white/80 rounded-full shadow-md"
        onClick={handleMenuClick}
        aria-label="Abrir menú"
      >
        <FiMenu size={28} />
      </button>
      {/* Barra de navegación con degradado sutil */}
        {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={handleClose}
        />
      )}
// ...existing code...
<nav
  className={`
    fixed top-0 right-0 h-full w-[220px] bg-white shadow-lg z-50
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
          {/* Contenedor principal */}
          <div className="flex flex-col">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-gray-800 mb-8"
            >
              <h1 className="text-2xl font-bold">Jon Arganaraz</h1>
              <p className="text-sm text-gray-600">Chef Profesional</p>
            </motion.div>

            {/* Links de navegación */}
            <div className="flex flex-col gap-4 mb-8">
              <AnimatePresence>
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      text-left text-lg font-medium
                      ${
                        activeSection === item.id
                          ? "text-gray-800"
                          : "text-gray-500 hover:text-gray-800"
                      }
                      transition-colors duration-200
                    `}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>

            {/* Sol Argentino */}
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
