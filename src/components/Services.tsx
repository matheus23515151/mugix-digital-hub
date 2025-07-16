import { Bot, TrendingUp, Users, Palette, MessageSquare, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { elementRef: parallaxRef, getParallaxStyle } = useParallax();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const services = [
    {
      icon: Bot,
      title: "Automação Inteligente com IA Humanizada",
      description: "Chega de perder horas em tarefas repetitivas. Nossa IA resolve processos manuais que drenam seu tempo e recursos.",
      benefits: ["Elimina 80% das tarefas repetitivas", "IA que funciona 24/7 sem erros", "Processos que se adaptam ao seu negócio"]
    },
    {
      icon: TrendingUp,
      title: "Tráfego Pago que Converte",
      description: "Pare de queimar dinheiro em anúncios que não funcionam. Criamos campanhas que trazem clientes, não apenas cliques.",
      benefits: ["ROI real, não métricas vazias", "Leads qualificados prontos para comprar", "Fim do desperdício em anúncios"]
    },
    {
      icon: Users,
      title: "CRM que Vende no Automático",
      description: "Cansado de perder leads por falta de follow-up? Nosso CRM nutre e converte enquanto você dorme.",
      benefits: ["Nunca mais perde um lead", "Follow-up automático e personalizado", "Vendas 24 horas por dia"]
    },
    {
      icon: Palette,
      title: "Design que Converte",
      description: "Sites bonitos que não vendem são apenas cartões de visita caros. Criamos designs que transformam visitantes em clientes.",
      benefits: ["Páginas que aumentam vendas", "Design focado em resultados", "Experiência que converte"]
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Marketing Humanizado",
      description: "Alcance seus clientes onde eles estão, de forma natural e sem spam. Marketing direto que funciona.",
      benefits: ["98% de taxa de abertura", "Comunicação personalizada e natural", "Relacionamento genuíno com clientes"]
    }
  ];

  return (
    <section ref={parallaxRef} id="servicos" className="py-16 sm:py-20 bg-neutral-50 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-10 parallax-slow" 
        style={getParallaxStyle(0.3)}
      >
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-primary rounded-full blur-lg opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-primary rounded-full blur-md opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <div 
          ref={headerRef}
          className={`text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 scroll-animate ${headerVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900">
            Como resolvemos suas <span className="text-primary">principais dores</span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto px-4 sm:px-0">
            Cada serviço foi criado para eliminar um problema específico que impede seu negócio de crescer
          </p>
        </div>

        <div 
          ref={servicesRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 scroll-animate ${servicesVisible ? 'animate-in' : ''}`}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="border-neutral-200 hover:shadow-lg transition-all duration-300 group interactive-card">
                <CardHeader className="space-y-2 sm:space-y-3 lg:space-y-4 p-3 sm:p-4 lg:p-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-lg sm:rounded-xl flex items-center justify-center icon-container icon-bounce">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary-foreground icon-hover icon-glow" />
                  </div>
                  <CardTitle className="text-base sm:text-lg lg:text-xl text-neutral-900 leading-tight">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3 lg:space-y-4 p-3 sm:p-4 lg:p-6 pt-0">
                  <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-xs sm:text-sm py-2">
                    Saiba mais
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div 
          ref={ctaRef}
          className={`text-center scroll-animate ${ctaVisible ? 'animate-in' : ''}`}
        >
          <div className="bg-background p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-neutral-200 inline-block mx-4 sm:mx-0">
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2">
              Sua dor é única? Nós criamos a solução
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 mb-3 sm:mb-4">
              Desenvolvemos automação inteligente personalizada para resolver o problema específico do seu negócio
            </p>
            <Button 
              variant="outline-hero" 
              size="lg" 
              className="text-sm sm:text-base"
              onClick={() => window.open('/agendamento', '_self')}
            >
              Vamos resolver sua dor específica
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;