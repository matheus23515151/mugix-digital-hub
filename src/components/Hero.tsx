import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, TrendingUp } from "lucide-react";
import heroImage from "@/assets/mugix-hero.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-hero py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                <span className="block animate-fade-in-up">Automatize seu negócio e</span>
                <span className="bg-gradient-primary bg-clip-text text-transparent block animate-fade-in-up stagger-1">
                  multiplique resultados
                </span>
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed animate-fade-in-up stagger-2">
                Transformamos processos manuais em sistemas inteligentes. Mais tempo para estratégia, 
                menos tempo perdido com tarefas repetitivas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
              <Button variant="cta" size="xl" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Descobrir meu potencial de automação
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button variant="outline-hero" size="xl" className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Ver transformações reais
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8 animate-fade-in-up stagger-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900">80%</div>
                <div className="text-sm text-neutral-600">Menos trabalho manual</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900">24/7</div>
                <div className="text-sm text-neutral-600">Automação ativa</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900">5x</div>
                <div className="text-sm text-neutral-600">Mais eficiência</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <img
              src={heroImage}
              alt="Automação de processos MugiX"
              className="w-full h-auto rounded-2xl shadow-xl hover-glow transition-all duration-300"
            />
            
            {/* Floating automation indicators */}
            <div className="absolute -top-4 -right-4 bg-gradient-primary p-4 rounded-xl shadow-lg animate-float">
              <div className="text-center text-primary-foreground">
                <div className="text-xl font-bold">⚡</div>
                <div className="text-xs">Automação ativa</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-lg border border-neutral-200 animate-pulse-glow">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-neutral-900">
                  Processos automatizados
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