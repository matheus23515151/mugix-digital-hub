import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, TrendingUp } from "lucide-react";
import heroImage from "@/assets/mugix-hero.jpg";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <section className="bg-gradient-hero section-spacing relative w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div 
              ref={titleRef}
              className={`space-y-4 scroll-animate ${titleVisible ? 'animate-in' : ''}`}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 leading-tight">
                <span className="block">Cansado de perder tempo com</span>
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  tarefas repetitivas?
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Pare de desperdiçar horas em processos manuais. Nossa automação inteligente com IA humanizada 
                libera você para focar no que realmente importa: crescer seu negócio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                variant="cta" 
                size="lg" 
                className="flex items-center gap-2 w-full sm:w-auto btn-modern ripple hover-glow"
                onClick={() => window.location.href = '/agendamento'}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Quero parar de perder tempo</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              
              <Button variant="outline-hero" size="lg" className="flex items-center gap-2 w-full sm:w-auto btn-modern ripple hover-glow">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Ver casos de sucesso</span>
              </Button>
            </div>

            <div 
              ref={statsRef}
              className={`flex flex-wrap justify-center lg:justify-start items-center gap-6 sm:gap-8 pt-6 sm:pt-8 scroll-animate ${statsVisible ? 'animate-in' : ''}`}
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-neutral-900">80%</div>
                <div className="text-xs sm:text-sm text-neutral-600">Menos trabalho manual</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-neutral-900">24/7</div>
                <div className="text-xs sm:text-sm text-neutral-600">Automação ativa</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-neutral-900">5x</div>
                <div className="text-xs sm:text-sm text-neutral-600">Mais eficiência</div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0 order-1 lg:order-2">
            <img
              src={heroImage}
              alt="Automação de processos MugiX"
              className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg lg:shadow-xl transition-all duration-300 lg:hover-glow max-h-96 lg:max-h-none object-cover"
            />
            
            {/* Floating automation indicators - responsive */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-primary p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-lg animate-float">
              <div className="text-center text-primary-foreground">
                <div className="text-lg sm:text-xl font-bold">⚡</div>
                <div className="text-xs hidden sm:block">Automação ativa</div>
              </div>
            </div>
            
            <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-background p-3 sm:p-6 rounded-lg sm:rounded-xl shadow-lg border border-neutral-200 animate-pulse-glow">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-neutral-900">
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