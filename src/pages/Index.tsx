import EmergencyBanner from "@/components/EmergencyBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImpactStats from "@/components/ImpactStats";
import DroughtResponse from "@/components/DroughtResponse";
import DonationCampaigns from "@/components/DonationCampaigns";
import ProgramsSection from "@/components/ProgramsSection";
import NewsSection from "@/components/NewsSection";
import Principles from "@/components/Principles";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <EmergencyBanner />
      <Navbar />
      <main>
        <HeroSection />
        <ImpactStats />
        <DroughtResponse />
        <DonationCampaigns />
        <ProgramsSection />
        <NewsSection />
        <Principles />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
