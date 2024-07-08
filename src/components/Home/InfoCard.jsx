import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoCard = ({ iconName, title, description }) => {
  return (
    <div className="bg-cyan-900 rounded-lg shadow-md p-6">
      <div className="text-center">
        <FontAwesomeIcon icon={iconName} className="text-4xl text-blue-600" />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-center text-white">{title}</h2>
        <p className="mt-2 ">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
