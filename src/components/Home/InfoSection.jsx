import React from "react";
import {
  faHandHoldingHeart,
  faQuestionCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import InfoCard from "./InfoCard";

const InfoSection = () => {
  return (
    <section className="py-12 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            iconName={faQuestionCircle}
            title="Why Donate Food?"
            description="Millions of people go to bed hungry every day. By donating food, you help us provide meals to those who need it the most. Your contribution can bring hope and nourishment to families in need."
          />
          <InfoCard
            iconName={faHandHoldingHeart}
            title="How Your Donation Helps"
            description="Your donation helps us to purchase, store, and distribute food to those in need. Every dollar you donate can provide multiple meals to hungry individuals and families. Together, we can create a hunger-free world."
          />
          <InfoCard
            iconName={faStar}
            title="Success Stories"
            description="Hear from the people whose lives have been changed through your donations. These success stories highlight the impact of our combined efforts in fighting hunger and bringing hope to communities."
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
