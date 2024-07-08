import { Link } from "react-router-dom";
import HeroPageSlider from "./HeroPageSlider";

const HeroSection = () => {
  return (
    <section className="hero-section relative h-screen overflow-hidden">
      <HeroPageSlider />

      <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
        <div className="max-w-2xl mx-auto p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Donate Food to the Poor
          </h1>
          <p className="text-lg mb-10 font-bold">
            Help us fight hunger by donating food to those in need. Together, we
            can make a difference in the lives of many.
          </p>
          <Link
            to="/DonateForm"
            className="btn donate-now bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
