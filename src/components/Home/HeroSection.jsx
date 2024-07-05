import "./HeroSection.css";
import HeroPageSlider from "./HeroPageSlider";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-slider-container">
        <HeroPageSlider />
      </div>
      <div className="hero-content">
        <h1>Donate Food to the Poor</h1>
        <p>
          Help us fight hunger by donating food to those in need. Together, we
          can make a difference in the lives of many.
        </p>
        <a href="#" className="btn donate-now">
          Donate Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
