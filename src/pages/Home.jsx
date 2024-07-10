import Footer from "../components/Home/Footer";

import InfoSection from "../components/Home/InfoSection";
import HeroSection from "../components/Home/HeroSection";
import Dashboard from "../components/Dashbord/Dashboard";

export default function RootHome() {
  return (
    <>
      <HeroSection />
      <Dashboard />
      <InfoSection />
      <Footer />
    </>
  );
}
