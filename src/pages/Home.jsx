import InfoSection from "../components/features/home/InfoSection";
import HeroSection from "../components/features/home/HeroSection";
import ImpactStats from "../components/features/home/ImpactStats";
import HowItWorks from "../components/features/home/HowItWorks";

export default function RootHome() {
  return (
    <div className="bg-deep-space">
      <HeroSection />
      <ImpactStats />
      <HowItWorks />
      <InfoSection />
    </div>
  );
}
