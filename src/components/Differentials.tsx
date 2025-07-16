import { Shield, Heart, Rocket, CheckCircle } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Differentials = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const differentials = [
    {
      icon: Heart,
      title: "Atendimento Humano e Consultivo",
      description: "Cada cliente tem um consultor dedicado que entende seu negócio e está sempre disponível para orientações estratégicas."
    },
    {
      icon: Rocket,
      title: "Não Somos SaaS: Atuamos Junto",
      description: "Não vendemos software. Somos sua extensão digital, trabalhando lado a lado para implementar e otimizar soluções."
    },
    {
      icon: CheckCircle,
      title: "Foco em Resultado Real",
      description: "Medimos sucesso pelo seu crescimento: aumento de faturamento, redução de custos e eficiência operacional."
    },
    {
      icon: Shield,
      title: "Soluções Verdadeiramente Sob Medida",
      description: "Nada de pacotes prontos. Cada estratégia é desenvolvida especificamente para as necessidades do seu negócio."
    }
  ];

  return (
    <section id="diferenciais" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={headerRef}
            className={`text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 scroll-animate ${headerVisible ? 'animate-in' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900">
              Por que escolher a <span className="text-primary">MugiX</span>?
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto px-4 sm:px-0">
              Não somos apenas mais um prestador de serviços. Somos parceiros comprometidos com o seu sucesso.
            </p>
          </div>

          <div 
            ref={contentRef}
            className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center scroll-animate ${contentVisible ? 'animate-in' : ''}`}
          >
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
              {differentials.map((differential, index) => {
                const IconComponent = differential.icon;
                return (
                  <div key={index} className="flex gap-3 sm:gap-4 p-3 sm:p-4 lg:p-6 bg-neutral-50 rounded-lg sm:rounded-xl lg:rounded-2xl hover:bg-gradient-subtle transition-all duration-300 interactive-card">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 icon-container icon-float">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary-foreground icon-hover icon-glow" />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-neutral-900 leading-tight">
                        {differential.title}
                      </h3>
                      <p className="text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed">
                        {differential.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div className="bg-gradient-primary p-6 sm:p-8 rounded-xl sm:rounded-2xl text-primary-foreground">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Nossa Promessa
                </h3>
                <p className="text-base sm:text-lg leading-relaxed opacity-90">
                  Trabalhamos como se fôssemos parte da sua equipe. Seu sucesso é nosso sucesso, 
                  e não descansamos até ver resultados concretos no seu negócio.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                <div className="bg-background p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-neutral-200 text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-1 sm:mb-2">98%</div>
                  <div className="text-xs sm:text-sm text-neutral-600">Taxa de Satisfação</div>
                </div>
                <div className="bg-background p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-neutral-200 text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-1 sm:mb-2">24h</div>
                  <div className="text-xs sm:text-sm text-neutral-600">Tempo de Resposta</div>
                </div>
                <div className="bg-background p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-neutral-200 text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-1 sm:mb-2">+150%</div>
                  <div className="text-xs sm:text-sm text-neutral-600">ROI Médio</div>
                </div>
                <div className="bg-background p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-neutral-200 text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-1 sm:mb-2">∞</div>
                  <div className="text-xs sm:text-sm text-neutral-600">Suporte Ilimitado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;