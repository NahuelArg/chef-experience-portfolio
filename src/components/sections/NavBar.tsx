import { useState, useEffect } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    // Asegurarse de que la navbar sea visible en desktop
    if (window.innerWidth >= 1024) {
      setIsMenuOpen(true);
    }
    
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Manejar el scroll lock cuando el menú está abierto en móvil
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Detectar la sección activa en el scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'gallery', 'contact', 'faq'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hamburger menu for mobile */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-[60] p-2 hover:bg-black/5 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <div className={`w-6 h-0.5 bg-gray-800 my-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      <nav className={`
        fixed top-0 left-0 
        h-screen w-[240px] 
        px-8 lg:px-12
        flex flex-col
        transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        bg-white/95 backdrop-blur-sm lg:bg-transparent
        z-[999]
        border-r border-gray-200
      `}>
        {/* Gradient background */}
        <div
          className="fixed top-0 left-0 bottom-0 w-[240px] z-[-1] pointer-events-none hidden lg:block"
          style={{
            background: "linear-gradient(to right, hsla(38,36%,96%,0), hsla(38,36%,96%,0.3), hsla(38,36%,96%,0.6), hsla(38,36%,96%,0.8), #f8f5f0)"
          }}
        />

        {/* Social Links - Versión Mobile */}
        <div className="lg:hidden absolute bottom-8 left-8 flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
             className="text-gray-600 hover:text-black transition-colors">
            Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
             className="text-gray-600 hover:text-black transition-colors">
            Twitter
          </a>
        </div>

        <div className="flex flex-col gap-8 mt-16">
          {/* Logo */}
          <button 
            onClick={() => handleLinkClick('hero')}
            className="relative w-fit cursor-pointer bg-transparent border-0 transition-transform duration-300 hover:scale-110"
          >
            <h1 className="text-xl md:text-2xl text-[#404040] font-medium">Jon Arganaraz</h1>
          </button>

          {/* Links */}
          <div className="flex flex-col gap-[35px] pl-[30px] mt-[90px]">
            {[
              { id: 'about', label: 'About Me' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'contact', label: 'Contact' },
              { id: 'faq', label: 'FAQ' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`group relative w-fit cursor-pointer font-[Tafel_Sans_Pro] text-[14px] md:text-[16px] font-normal leading-normal transition-colors duration-300
                  ${activeSection === link.id ? 'text-black' : 'text-[#707070] hover:text-black'}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-black transition-all duration-300
                  ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}
                />
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}