import { Link } from "react-router-dom";
import HeroPageSlider from "./HeroPageSlider";
import { useFirebase } from "../../utility/Storage";

const HeroSection = () => {
  const firebase = useFirebase();
  return (
    <section className="hero-section relative h-screen overflow-hidden mt-18">
      <HeroPageSlider />

      <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-secondary-color">
            Donate Food to the Poor
          </h1>
          <p className="text-lg mb-10 font-bold">
            Help us fight hunger by donating food to those in need. Together, we
            can make a difference in the lives of many.
          </p>
          <Link
            to={firebase.isLogin ? "/donation/form" : "/auth"}
            className="bg-primary-color hover:bg-secondary-color px-6 py-3 rounded-lg text-lg font-light-bold transition-colors duration-500"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
