import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, TrendingUp } from "lucide-react";
import heroImage from "@/assets/mugix-hero.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-hero py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                Cuidamos do{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  digital
                </span>{" "}
                do seu negócio
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Automação, tráfego pago, CRM e design estratégico sob medida. 
                Sua parceira para aumentar faturamento e reduzir custos no mundo digital.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Vamos digitalizar seu negócio
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button variant="outline-hero" size="xl" className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Ver nossos serviços
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900">100%</div>
                <div className="text-sm text-neutral-600">Personalizado</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900">24/7</div>
                <div className="text-sm text-neutral-600">Suporte</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900">+ROI</div>
                <div className="text-sm text-neutral-600">Garantido</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Transformação digital MugiX"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-lg border border-neutral-200">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-neutral-900">
                  Atendimento ativo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;