import { motion } from "framer-motion";
import { useState, useEffect, useRef, type ReactNode } from "react";

interface CarouselProps {
  children: ReactNode[];
  className?: string;
}

export const Carousel = ({ children, className = "" }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + children.length) % children.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Event listeners para navegación
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let isScrollingHorizontally = false;

    const handleWheel = (e: WheelEvent) => {
    const deltaX = Math.abs(e.deltaX);
    const deltaY = Math.abs(e.deltaY);

      // Si es un gesto de trackpad con scroll horizontal
    if (deltaX > deltaY && deltaX > 20) {
        e.preventDefault();
        if (e.deltaX > 0) {
        handleNext();
        } else {
        handlePrev();
        }
    }
      // Si es scroll vertical (rueda del mouse o trackpad vertical)
    else if (deltaY > 20 && !isScrollingHorizontally) {
        e.preventDefault();
        if (e.deltaY > 0) {
        handleNext();
        } else {
        handlePrev();
        }
    }
    };

    const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].pageY;
    };

    const handleTouchMove = (e: TouchEvent) => {
    if (!touchStartX.current || isAnimating) return;

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].pageY;
    const diffX = touchStartX.current - currentX;
    const diffY = touchStartY.current - currentY;

      // Determinar si el scroll es principalmente horizontal
    if (Math.abs(diffX) > Math.abs(diffY)) {
        e.preventDefault();
        isScrollingHorizontally = true;
    }

    };

    const handleTouchEnd = (e: TouchEvent) => {
    if (!touchStartX.current || isAnimating) return;

    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].pageY;

      // Si el movimiento fue principalmente horizontal
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
        handleNext();
        } else {
        handlePrev();
        }
    }

    touchStartX.current = 0;
    touchStartY.current = 0;
    isScrollingHorizontally = false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
    if (isAnimating) return;
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, {
    passive: true,
    });
    container.addEventListener("touchmove", handleTouchMove, {
    passive: false,
    });
    container.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
    container.removeEventListener("wheel", handleWheel);
    container.removeEventListener("touchstart", handleTouchStart);
    container.removeEventListener("touchmove", handleTouchMove);
    container.removeEventListener("touchend", handleTouchEnd);
    window.removeEventListener("keydown", handleKeyDown);
    };
}, [children.length, isAnimating]);

return (
    <div
    className={`relative overflow-hidden touch-pan-x ${className}`}
    ref={containerRef}
    >
    <motion.div
        className="flex h-full transition-transform ease-out duration-500"
        animate={{ x: `${-currentIndex * 100}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
        {children.map((child, index) => (
    <div key={index} className="flex-shrink-0 w-full h-full">
            {child}
        </div>
        ))}
    </motion.div>

      {/* Navigation Dots */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {children.map((_, index) => (
        <button
            key={index}
            onClick={() => {
              /* ...existing code... */
            }}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
            index === currentIndex ? "bg-yellow-400" : "bg-gray-300"
            }`}
        />
        ))}
    </div>

      {/* Navigation Arrows */}
    <button
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-1 md:p-2 z-10 hover:bg-white/80 transition-colors hidden md:flex items-center justify-center"
        onClick={handlePrev}
    >
        <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
        />
        </svg>
    </button>
    <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 z-10 hover:bg-white/80 transition-colors md:flex hidden items-center justify-center"
        onClick={handleNext}
    >
        <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
        />
        </svg>
    </button>
    </div>
);
};
