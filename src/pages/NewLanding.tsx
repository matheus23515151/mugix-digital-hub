import Hero from "@/components/new-landing/Hero";
import AutomationHighlights from "@/components/new-landing/AutomationHighlights";
import Services from "@/components/new-landing/Services";
import ProcessTimeline from "@/components/new-landing/ProcessTimeline";
import CTA from "@/components/new-landing/CTA";

const NewLanding = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Hero />
      <AutomationHighlights />
      <Services />
      <ProcessTimeline />
      <CTA />
    </div>
  );
};

export default NewLanding;