import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./InfoCard.module.css";

const InfoCard = ({iconName, title, description}) => {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoCardContent}>
        <h2>
          <FontAwesomeIcon icon={iconName} className={styles.icon} />
        </h2>
        <h2 className={styles.infoCardTitle}> {title}</h2>
        <p className={styles.infoCardMotive}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
