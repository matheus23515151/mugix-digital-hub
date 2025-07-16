import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bot, TrendingUp, Users, Palette, MessageSquare, CheckCircle, BarChart3, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Services = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();

  const services = [
    {
      icon: Bot,
      title: "Automação de Processos",
      subtitle: "Inteligência para operações eficientes",
      description: "Transforme tarefas repetitivas em fluxos automatizados inteligentes que economizam tempo, reduzem erros e liberam sua equipe para atividades estratégicas.",
      benefits: [
        "Redução de até 80% no tempo de tarefas manuais",
        "Eliminação de erros humanos em processos críticos",
        "Integração completa entre seus sistemas existentes",
        "Workflows personalizados para sua operação",
        "Relatórios automáticos de produtividade"
      ],
      cases: "Uma clínica médica automatizou o agendamento de consultas, reduzindo o tempo de atendimento telefônico em 70% e aumentando a satisfação dos pacientes.",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: TrendingUp,
      title: "Tráfego Pago",
      subtitle: "Campanhas que geram resultados reais",
      description: "Gestão estratégica de campanhas no Google Ads, Facebook e Instagram com foco em ROI positivo e geração de leads qualificados para seu negócio.",
      benefits: [
        "ROI médio de 300% acima do investimento",
        "Segmentação precisa do público-alvo",
        "Otimização contínua baseada em dados",
        "Relatórios detalhados de performance",
        "Campanhas multicanal integradas"
      ],
      cases: "Um e-commerce de moda aumentou as vendas em 250% em 6 meses com campanhas otimizadas e segmentação estratégica.",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: Users,
      title: "CRM e Gestão de Relacionamento",
      subtitle: "Transforme leads em clientes fiéis",
      description: "Sistemas de CRM personalizados que organizam, nutrem e convertem seus leads, melhorando o atendimento e aumentando a taxa de conversão.",
      benefits: [
        "Aumento de 60% na taxa de conversão",
        "Follow-up automatizado e personalizado",
        "Histórico completo da jornada do cliente",
        "Previsão de vendas baseada em dados",
        "Integração com WhatsApp e e-mail"
      ],
      cases: "Uma empresa de consultoria jurídica organizou 5.000 leads e aumentou a conversão em vendas em 45% no primeiro trimestre.",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: Palette,
      title: "Design Estratégico",
      subtitle: "Visual que converte e engaja",
      description: "Design orientado a conversão desde landing pages até materiais de marketing, criando uma identidade visual consistente e estratégica.",
      benefits: [
        "Aumento de 40% na taxa de conversão",
        "Identidade visual única e memorável",
        "UX/UI otimizada para seu público",
        "Materiais alinhados com sua estratégia",
        "Design responsivo para todos dispositivos"
      ],
      cases: "Uma startup de tecnologia redesenhou sua landing page e aumentou as conversões de teste gratuito em 180%.",
      color: "bg-pink-50 border-pink-200"
    },
    {
      icon: MessageSquare,
      title: "Disparos em Massa via WhatsApp",
      subtitle: "Comunicação direta e eficaz",
      description: "Campanhas automatizadas no WhatsApp com alta taxa de abertura, segmentação avançada e total compliance com as regulamentações.",
      benefits: [
        "98% de taxa de abertura das mensagens",
        "Segmentação avançada por comportamento",
        "Chatbots inteligentes 24/7",
        "Compliance total com LGPD",
        "Integração com seu CRM"
      ],
      cases: "Uma rede de academias aumentou a retenção de alunos em 35% com campanhas de engajamento via WhatsApp.",
      color: "bg-yellow-50 border-yellow-200"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div 
            ref={heroRef}
            className={`max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 scroll-animate ${heroVisible ? 'animate-in' : ''}`}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900">
              Nossos <span className="text-primary">Serviços</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-600 leading-relaxed">
              Soluções digitais completas e personalizadas para acelerar 
              o crescimento do seu negócio com resultados mensuráveis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/">
                <Button variant="outline-hero" size="lg" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar à Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detailed */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div 
            ref={servicesRef}
            className={`space-y-16 sm:space-y-20 scroll-animate ${servicesVisible ? 'animate-in' : ''}`}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-xl flex items-center justify-center icon-container icon-shimmer">
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground icon-hover icon-pulse" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                          {service.title}
                        </h2>
                        <p className="text-primary font-medium">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg text-neutral-600 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-neutral-900">Benefícios principais:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-subtle p-6 rounded-xl border border-neutral-200">
                      <h5 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        Case de Sucesso
                      </h5>
                      <p className="text-neutral-600 italic">
                        {service.cases}
                      </p>
                    </div>
                  </div>

                  {/* Visual/Stats */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className={`${service.color} p-8 rounded-2xl border-2 space-y-6`}>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl font-bold text-neutral-900">+80%</div>
                          <div className="text-sm text-neutral-600">Eficiência</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl font-bold text-neutral-900">24/7</div>
                          <div className="text-sm text-neutral-600">Funcionamento</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl font-bold text-neutral-900">300%</div>
                          <div className="text-sm text-neutral-600">ROI Médio</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl font-bold text-neutral-900">98%</div>
                          <div className="text-sm text-neutral-600">Satisfação</div>
                        </div>
                      </div>
                      
                      <div className="bg-background p-4 rounded-xl">
                        <div className="flex items-center gap-3 text-center">
                          <BarChart3 className="w-8 h-8 text-primary" />
                          <div>
                            <div className="font-semibold text-neutral-900">Resultados Mensuráveis</div>
                            <div className="text-sm text-neutral-600">Relatórios detalhados mensais</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
              Pronto para <span className="text-primary">Transformar</span> seu Negócio?
            </h2>
            <p className="text-lg text-neutral-600">
              Escolha os serviços ideais para sua empresa ou deixe que montemos 
              uma estratégia completa e personalizada.
            </p>
            <div className="flex justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="flex items-center gap-2"
                onClick={() => window.open('https://wa.me/556281540306?text=Olá,%20quero%20saber%20mais%20sobre%20os%20serviços%20da%20MugiX', '_blank')}
              >
                <MessageSquare className="w-5 h-5" />
                Falar com Especialista via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;