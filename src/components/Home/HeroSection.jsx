import HeroPageSlider from "./HeroPageSlider";
import { Link } from "react-router-dom";

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
        <Link to="/DonateForm" className="btn donate-now">
          Donate Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
