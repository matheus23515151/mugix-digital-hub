import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-900 opacity-50 z-10"></div>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-20 text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
          Inovação e Automação para seu Negócio
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-fade-in-up animation-delay-300">
          Transformamos suas ideias em realidade digital com soluções sob medida.
        </p>
        <Button size="lg" className="animate-fade-in-up animation-delay-600">
          Comece a sua Jornada <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;