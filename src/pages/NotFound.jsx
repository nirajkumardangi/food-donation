import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroPageSlider from "../components/features/home/HeroPageSlider";

const NotFound = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-deep-space">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <HeroPageSlider />
        <div className="absolute inset-0 bg-deep-space/60 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-2xl px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block"
        >
          {// Floating Glow Effect
          }
          <div className="absolute -inset-8 bg-primary-color/20 blur-[100px] rounded-full animate-pulse"></div>
          
          <h1 className="text-9xl md:text-[12rem] font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-primary-color/50 drop-shadow-2xl selection:bg-primary-color/30">
            404
          </h1>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 0.6 }}
           className="mt-8 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Lost in <span className="text-primary-color">Deep Space?</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
            The page you're looking for has drifted beyond our reach. Even the best navigators get lost sometimes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <Link
              to="/"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-color to-secondary-color text-white font-bold rounded-2xl shadow-[0_0_30px_rgba(247,79,34,0.3)] transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out"></div>
              <span>Return to Home</span>
            </Link>

            <Link
              to="/dashboard"
              className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3"
            >
              <span>Dashboard</span>
            </Link>
          </div>
        </motion.div>

        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-primary-color/20 rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-secondary-color/20 rounded-br-3xl"></div>
      </div>

      {/* Footer-like subtle text */}
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <p className="text-white/20 text-xs uppercase tracking-[0.5em] font-bold">
          Feed Aid Foundaton • Neural Navigation Error
        </p>
      </div>
    </div>
  );
};

export default NotFound;
