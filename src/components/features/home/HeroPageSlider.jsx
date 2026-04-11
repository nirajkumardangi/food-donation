import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import HeroImage_1 from "../../../assets/hero_food_donation.png";
import HeroImage_2 from "../../../assets/community_volunteers.png";
import HeroImage_3 from "../../../assets/serving_meal.png";

const slides = [
  { 
    image: HeroImage_1, 
    alt: "Fresh organic food in a donation box",
    position: "center"
  },
  { 
    image: HeroImage_2, 
    alt: "Diverse community volunteers",
    position: "top"
  },
  { 
    image: HeroImage_3, 
    alt: "Passing a fresh warm meal",
    position: "center"
  },
];

const HeroPageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const duration = 6000; // 6 seconds per slide

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, duration);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="absolute inset-0 w-full h-full bg-deep-space overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.div
            initial={{ scale: 1, x: 0, y: 0 }}
            animate={{ 
              scale: 1.15,
              x: currentSlide % 2 === 0 ? "-2%" : "2%",
              y: currentSlide % 2 === 0 ? "-1%" : "1%"
            }}
            transition={{ 
              duration: duration / 1000 + 2, 
              ease: "linear" 
            }}
            className="w-full h-full"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              className={`w-full h-full object-cover object-${slides[currentSlide].position}`}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Cinematic Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-deep-space/80 via-transparent to-deep-space/90"
        aria-hidden="true"
      ></div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-deep-space/60 via-transparent to-deep-space/60"
        aria-hidden="true"
      ></div>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group py-2 px-1 focus:outline-none"
          >
            <div className="relative w-8 h-1 bg-white/20 rounded-full overflow-hidden transition-all duration-300 group-hover:bg-white/40">
              {currentSlide === index && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: duration / 1000, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-primary-color to-secondary-color"
                />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Decorative Blur for edges */}
      <div className="absolute -inset-1 backdrop-blur-[1px] pointer-events-none border border-white/5 z-10"></div>
    </div>
  );
};

export default HeroPageSlider;
