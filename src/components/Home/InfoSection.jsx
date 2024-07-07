import InfoSectionCard from "./InfoCard";
import {
  faHandHoldingHeart,
  faQuestionCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import "./InfoSection.css";

const InfoSection = () => {
  return (
    <>
      <section className="info-section">
        <InfoSectionCard
          iconName={faQuestionCircle}
          title="Why Donate Food?"
          description="Millions of people go to bed hungry every day. By donating food, you help us provide meals to those who need it the most. Your contribution can bring hope and nourishment to families in need."
        />
        <InfoSectionCard
          iconName={faHandHoldingHeart}
          title="How Your Donation Helps"
          description="Your donation helps us to purchase, store, and distribute food to those in need. Every dollar you donate can provide multiple meals to hungry individuals and families. Together, we can create a hunger-free world."
        />
        <InfoSectionCard
          iconName={faStar}
          title="Success Stories"
          description="Hear from the people whose lives have been changed through your donations. These success stories highlight the impact of our combined efforts in fighting hunger and bringing hope to communities."
        />
      </section>
    </>
  );
};

export default InfoSection;
