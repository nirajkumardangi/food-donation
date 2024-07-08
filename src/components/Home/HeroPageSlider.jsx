import { useState, useEffect } from "react";

import HeroImage_1 from "../../assets/HeroImage_1.jpg";
import HeroImage_2 from "../../assets/HeroImage_2.jpg";
import HeroImage_3 from "../../assets/HeroImage_3.jpg";
import HeroImage_4 from "../../assets/HeroImage_4.jpg";
import HeroImage_5 from "../../assets/HeroImage_5.jpg";
import HeroImage_6 from "../../assets/HeroImage_6.jpg";
import HeroImage_7 from "../../assets/HeroImage_7.jpg";

const images = [
  { image: HeroImage_1, alt: "Hero_image 1" },
  { image: HeroImage_2, alt: "Hero_image 2" },
  { image: HeroImage_3, alt: "Hero_image 3" },
  { image: HeroImage_4, alt: "Hero_image 4" },
  { image: HeroImage_5, alt: "Hero_image 5" },
  { image: HeroImage_6, alt: "Hero_image 6" },
  { image: HeroImage_7, alt: "Hero_image 7" },
];

const HeroPageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {images.map((val, index) => (
        <div
          key={val.image}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: images.length - index }}
        >
          <img
            src={val.image}
            alt={val.alt}
            className="w-full h-full object-cover"
          />
          {/* Black overlay with opacity */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            aria-hidden="true"
          ></div>
        </div>
      ))}
    </div>
  );
};

export default HeroPageSlider;
