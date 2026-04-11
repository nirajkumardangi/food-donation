import { Link } from "react-router-dom";
import HeroPageSlider from "./HeroPageSlider";
import { useFirebase } from "../../../context/FirebaseContext";
import { motion } from "framer-motion";

const HeroSection = () => {
  const firebase = useFirebase();
  return (
    <section className="hero-section relative h-screen w-full overflow-hidden">
      <HeroPageSlider />

      <div className="absolute inset-0 z-10 flex items-center justify-center pt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-secondary-color text-sm font-semibold tracking-wider uppercase"
          >
            End Hunger Together
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-display font-extrabold mb-6 text-white leading-tight drop-shadow-lg"
          >
            Share Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-color to-secondary-color">Meal</span>,<br /> Share Your Love
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl mb-10 text-gray-200 font-light max-w-2xl mx-auto drop-shadow-md"
          >
            Help us fight hunger by donating food to those in need. Join our community of everyday heroes making a tangible difference.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to={firebase.isLogin ? "/donation/form" : "/auth?mode=login"}
              className="bg-gradient-to-r from-primary-color to-secondary-color hover:opacity-90 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-[0_0_20px_rgba(247,79,34,0.4)] transition-transform transform hover:scale-[1.03] active:scale-95 w-full sm:w-auto"
            >
              Donate Now
            </Link>
            <Link
              to="/donation/meals"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all w-full sm:w-auto"
            >
              View Requests
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
