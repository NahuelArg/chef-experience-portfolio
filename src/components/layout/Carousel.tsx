import { useEffect, useRef, type ReactNode } from "react";

interface HorizontalScrollProps {
  children: ReactNode[];
  className?: string;
  activeIndex?: number;
  setActiveIndex?: (idx: number) => void;
}

const HorizontalScroll = ({ 
  children, 
  className = "", 
  activeIndex, 
  setActiveIndex 
}: HorizontalScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const childrenArray = Array.isArray(children) ? children : [children];
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Navegar suavemente a un índice específico
  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const targetScroll = index * container.clientWidth;
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  // Efecto para navegar cuando cambia activeIndex desde fuera
  useEffect(() => {
    if (typeof activeIndex === 'number') {
      scrollToIndex(activeIndex);
    }
  }, [activeIndex]);

  // Detectar en qué sección estamos basado en el scroll (con debounce)
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !setActiveIndex) return;

    const handleScroll = () => {
      // Limpiar timeout previo
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Esperar a que termine el scroll para actualizar el índice
      scrollTimeoutRef.current = setTimeout(() => {
        const scrollLeft = container.scrollLeft;
        const containerWidth = container.clientWidth;
        const currentIndex = Math.round(scrollLeft / containerWidth);
        
        setActiveIndex(currentIndex);
      }, 150);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [setActiveIndex]);

  // Convertir wheel vertical a scroll horizontal (MUY SUAVE)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Si hay movimiento horizontal natural, dejarlo pasar
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        return;
      }

      // Convertir wheel vertical a horizontal de forma SUAVE
      e.preventDefault();
      
      // Multiplicador para hacer el scroll más suave y controlable
      const smoothFactor = 0.6;
      container.scrollLeft += e.deltaY * smoothFactor;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Navegación con teclado
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        container.scrollBy({
          left: -container.clientWidth,
          behavior: 'smooth'
        });
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        container.scrollBy({
          left: container.clientWidth,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div 
        ref={containerRef}
        className="w-full h-full overflow-x-auto overflow-y-hidden scrollbar-hide"
        style={{
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <div 
          className="flex h-full"
          style={{ width: `${childrenArray.length * 100}%` }}
        >
          {childrenArray.map((child, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 h-full"
              style={{ 
                width: `${100 / childrenArray.length}%`
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación */}
      <button 
        onClick={() => {
          const container = containerRef.current;
          if (container) {
            container.scrollBy({
              left: -container.clientWidth,
              behavior: 'smooth'
            });
          }
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 p-3 rounded-full transition-colors hidden md:block"
        aria-label="Previous section"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        onClick={() => {
          const container = containerRef.current;
          if (container) {
            container.scrollBy({
              left: container.clientWidth,
              behavior: 'smooth'
            });
          }
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 p-3 rounded-full transition-colors hidden md:block"
        aria-label="Next section"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>


    </div>
  );
};

export default HorizontalScroll;