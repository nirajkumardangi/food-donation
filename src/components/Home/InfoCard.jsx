import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoCard = ({ iconName, title, description }) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-md p-6">
      <div className="text-center">
        <FontAwesomeIcon
          icon={iconName}
          className="text-8xl text-primary-color my-6"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-2xl text-center font-bold text-secondary-color my-5 font-kalam">
          {title}
        </h2>
        <p className="mt-2 my-6 text-white font-medium text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
