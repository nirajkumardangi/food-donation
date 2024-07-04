
import "./HeroSection.css";
import HeroPageSlider from "./HeroPageSlider";


const HeroSection = () => {
  return (
    <section className="hero-section">
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
      <div className="hero-image">
        <div className="hero-image-circle">
          <HeroPageSlider />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
