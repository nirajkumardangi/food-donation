import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const InfoCard = ({ iconName, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ y: -10 }}
      className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
    >
      <div className="text-center">
        <FontAwesomeIcon
          icon={iconName}
          className="text-6xl text-primary-color mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(247,79,34,0.8)] transition-all duration-300"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-2xl text-center font-bold text-white mb-4 font-display">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed text-center">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default InfoCard;
