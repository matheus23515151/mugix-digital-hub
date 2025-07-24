import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AutomationShowcase from "@/components/AutomationShowcase";
import AutomationQuiz from "@/components/AutomationQuiz";
import BeforeAfter from "@/components/BeforeAfter";
import StrategicConversation from "@/components/StrategicConversation";
import About from "@/components/About";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useAnimations } from "@/hooks/useAnimations";
import "@/styles/animations.css";

const Index = () => {
  useAnimations();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AutomationShowcase />
      <AutomationQuiz />
      <BeforeAfter />
      <StrategicConversation />
      <About />
      <Services />
      <Differentials />
      <SocialProof />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
