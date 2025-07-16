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
      title: "Automação de Processos",
      description: "Automatize tarefas repetitivas e otimize fluxos de trabalho para sua equipe focar no que realmente importa.",
      benefits: ["Redução de 80% em tarefas manuais", "Integração completa entre sistemas", "Workflows personalizados"]
    },
    {
      icon: TrendingUp,
      title: "Tráfego Pago",
      description: "Campanhas estratégicas no Google Ads, Facebook e Instagram que geram leads qualificados e vendas.",
      benefits: ["ROI acima da média do mercado", "Segmentação precisa", "Otimização contínua"]
    },
    {
      icon: Users,
      title: "CRM e Gestão de Relacionamento",
      description: "Organize, nutra e converta seus leads com sistemas de CRM personalizados para seu negócio.",
      benefits: ["Funil de vendas otimizado", "Follow-up automatizado", "Relatórios detalhados"]
    },
    {
      icon: Palette,
      title: "Design Estratégico",
      description: "Design que converte: desde landing pages até materiais de marketing alinhados com sua estratégia.",
      benefits: ["Design orientado a conversão", "Identidade visual consistente", "UX/UI otimizada"]
    },
    {
      icon: MessageSquare,
      title: "Disparos em Massa via WhatsApp",
      description: "Alcance sua audiência de forma direta e pessoal com campanhas automatizadas no WhatsApp.",
      benefits: ["98% de taxa de abertura", "Segmentação avançada", "Compliance garantido"]
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
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto px-4 sm:px-0">
            Soluções digitais completas e personalizadas para acelerar o crescimento do seu negócio
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
              Precisa de algo específico?
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 mb-3 sm:mb-4">
              Criamos soluções personalizadas para desafios únicos
            </p>
            <Button variant="outline-hero" size="lg" className="text-sm sm:text-base">
              Vamos conversar sobre seu projeto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;