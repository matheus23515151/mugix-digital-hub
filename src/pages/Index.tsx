import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AutomationShowcase from "@/components/AutomationShowcase";
import AutomationQuiz from "@/components/AutomationQuiz";
import BeforeAfter from "@/components/BeforeAfter";
import ProcessTimeline from "@/components/ProcessTimeline";
import About from "@/components/About";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import SocialProof from "@/components/SocialProof";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AutomationShowcase />
      <AutomationQuiz />
      <BeforeAfter />
      <ProcessTimeline />
      <About />
      <Services />
      <Differentials />
      <SocialProof />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
