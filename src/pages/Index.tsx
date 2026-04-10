import FloatingPetals from "@/components/FloatingPetals";
import HeroSection from "@/components/HeroSection";
import InvitationSection from "@/components/InvitationSection";
import EventsSection from "@/components/EventsSection";
import VenueSection from "@/components/VenueSection";
import ClosingSection from "@/components/ClosingSection";

const Index = () => {
  return (
    <div className="relative overflow-x-hidden">
      <FloatingPetals />
      <HeroSection />
      <InvitationSection />
      <EventsSection />
      <VenueSection />
      <ClosingSection />
    </div>
  );
};

export default Index;
