
import classes from "./HeroSliderPage.module.css";
import { useState, useEffect } from "react";

import HeroImage_1 from "../../assets/HeroImage_1.jpg";
import HeroImage_2 from "../../assets/HeroImage_2.jpg";

import HeroImage_3 from "../../assets/HeroImage_3.jpg";

import HeroImage_4 from "../../assets/HeroImage_4.jpg";

import HeroImage_5 from "../../assets/HeroImage_5.jpg";

import HeroImage_6 from "../../assets/HeroImage_6.jpg";

const images = [
  { image: HeroImage_1, alt: "Hero_image 1" },
  { image: HeroImage_2, alt: "Hero_image 2" },
  { image: HeroImage_3, alt: "Hero_image 3" },
  { image: HeroImage_4, alt: "Hero_image 4" },
  { image: HeroImage_5, alt: "Hero_image 5" },
  { image: HeroImage_6, alt: "Hero_image 6" },
];

function HeroPageSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previousActiveImage) => {
        return previousActiveImage < images.length-1
          ? previousActiveImage + 1
          : 0;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((val, index) => {
        return (
          <img
            src={val.image}
            alt={val.alt}
            key={val.image}
            className={currentImage === index ? classes.active : "heroBgc"}
          />
        );
      })}
    </div>
  );
}

export default HeroPageSlider;
