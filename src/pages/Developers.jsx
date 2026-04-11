import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const developers = [
  {
    name: "Niraj Kumar Dangi",
    photo: "https://avatars.githubusercontent.com/u/102892441?v=4",
    role: "Full Stack Developer",
    description:
      "Driven by clean code and innovative UX. Let's build scalable frontends together.",
    github: "https://github.com/nirajkumardangi",
    instagram: "https://instagram.com/itz_nirajkr",
    email: "niraj8825224435@gmail.com",
    twitter: "https://x.com/nirajkumardangi",
  },
  {
    name: "Raushan Kumar Saw",
    photo: "https://avatars.githubusercontent.com/u/124686068?v=4",
    role: "React Developer",
    description:
      "Passionate about dynamic architectures and performant component designs.",
    github: "https://github.com/Raushan102",
    instagram: "https://instagram.com/raush_an6671",
    email: "raushankumarsaw102@gmail.com",
    twitter: "https://x.com/RaushanKumarSaw",
  },
];

function Developers() {
  return (
    <div className="min-h-screen bg-deep-space pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Meet the <span className="text-primary-color">Creators</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            The engineering minds behind Feed Aid. We build scalable platforms
            to orchestrate community change.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {developers.map((developer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl transition-all duration-300 max-w-sm w-full relative group overflow-hidden text-center"
            >
              {/* Card glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-color/20 rounded-bl-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

              <div className="relative">
                <div className="inline-block relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-color to-secondary-color rounded-full blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <img
                    src={developer.photo}
                    alt={developer.name}
                    className="w-36 h-36 rounded-full mb-6 border-4 border-deep-space object-cover relative z-10"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-1 font-display text-white">
                  {developer.name}
                </h2>
                <h3 className="text-sm font-medium text-primary-color uppercase tracking-wider mb-4">
                  {developer.role}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {developer.description}
                </p>

                <div className="flex justify-center space-x-4 mb-8">
                  <a
                    href={developer.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-xl" />
                  </a>
                  <a
                    href={developer.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center text-white p-2 rounded-full bg-white/10 hover:bg-primary-color transition-all duration-300 hover:scale-110"
                  >
                    <FontAwesomeIcon icon={faTwitter} className="text-xl" />
                  </a>
                  <a
                    href={developer.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center text-white p-2 rounded-full bg-white/10 hover:bg-primary-color transition-all duration-300 hover:scale-110"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                  </a>
                </div>

                <a
                  href={`mailto:${developer.email}`}
                  className="inline-block w-full text-center bg-gradient-to-r from-primary-color to-secondary-color hover:opacity-90 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-transform transform hover:scale-[1.02] active:scale-95"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Developers;
