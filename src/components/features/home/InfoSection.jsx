import {
  faHandHoldingHeart,
  faQuestionCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import InfoCard from "./InfoCard";
import { motion } from "framer-motion";

const InfoSection = () => {
  return (
    <section className="py-24 bg-deep-space relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
            Why Choose <span className="text-primary-color">Feed Aid?</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <InfoCard
            iconName={faQuestionCircle}
            title="Why Donate Food?"
            description="Millions of people go to bed hungry every day. By donating food, you help us provide meals to those who need it the most. Your contribution can bring hope and nourishment."
            delay={0}
          />
          <InfoCard
            iconName={faHandHoldingHeart}
            title="How Your Donation Helps"
            description="Your donation helps us to purchase, store, and distribute food. Every dollar you donate can provide multiple meals to hungry individuals and families. Create a hunger-free world."
            delay={0.2}
          />
          <InfoCard
            iconName={faStar}
            title="Success Stories"
            description="Hear from the people whose lives have been changed through your donations. These success stories highlight the impact of our combined efforts in fighting hunger and bringing hope."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
