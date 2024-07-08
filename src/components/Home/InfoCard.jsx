import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoCard = ({ iconName, title, description }) => {
  return (
    <div>
      <div>
        <h2>
          <FontAwesomeIcon icon={iconName} />
        </h2>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
