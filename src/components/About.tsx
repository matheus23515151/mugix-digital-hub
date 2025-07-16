import { Users, Target, Zap } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation();

  return (
    <section id="sobre" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          <div 
            ref={headerRef}
            className={`space-y-3 sm:space-y-4 scroll-animate ${headerVisible ? 'animate-in' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900">
              Não somos uma ferramenta, somos sua <span className="text-primary">empresa parceira</span>
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed px-4 sm:px-0">
              Enquanto outros vendem software, nós desenvolvemos uma jornada personalizada lado a lado com você. 
              Nossa automação inteligente com IA humanizada resolve suas dores específicas, 
              não problemas genéricos.
            </p>
          </div>

          <div 
            ref={cardsRef}
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 scroll-animate ${cardsVisible ? 'animate-in' : ''}`}
          >
            <div className="bg-neutral-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl space-y-3 sm:space-y-4 interactive-card">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg sm:rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">
                IA Humanizada Real
              </h3>
              <p className="text-sm sm:text-base text-neutral-600">
                Nossa automação inteligente com IA humanizada não substitui pessoas - 
                libera sua equipe das tarefas repetitivas para focar no que gera resultado.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl space-y-3 sm:space-y-4 interactive-card">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg sm:rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">
                Soluções Sob Medida
              </h3>
              <p className="text-sm sm:text-base text-neutral-600">
                Cada negócio é único. Por isso, criamos estratégias personalizadas 
                que se adaptam perfeitamente às suas necessidades.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl space-y-3 sm:space-y-4 interactive-card sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg sm:rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">
                Resultados Reais
              </h3>
              <p className="text-sm sm:text-base text-neutral-600">
                Nosso foco é simples: aumentar seu faturamento e reduzir custos. 
                Trabalhamos pelo seu sucesso, não por métricas vazias.
              </p>
            </div>
          </div>

          <div 
            ref={quoteRef}
            className={`bg-gradient-subtle p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-neutral-200 mx-4 sm:mx-0 scroll-animate ${quoteVisible ? 'animate-in' : ''}`}
          >
            <blockquote className="text-base sm:text-lg text-neutral-700 italic">
              "Nós não entregamos uma solução pronta — desenvolvemos uma jornada personalizada lado a lado com você. 
              Sua dor vira nossa missão, seu crescimento vira nosso sucesso."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;