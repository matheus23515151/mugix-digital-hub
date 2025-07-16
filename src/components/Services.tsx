import { Bot, TrendingUp, Users, Palette, MessageSquare, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
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
    <section id="servicos" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Soluções digitais completas e personalizadas para acelerar o crescimento do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="border-neutral-200 hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-neutral-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-neutral-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-primary-blue group-hover:text-primary-foreground transition-colors">
                    Saiba mais
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-background p-8 rounded-2xl border border-neutral-200 inline-block">
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              Precisa de algo específico?
            </h3>
            <p className="text-neutral-600 mb-4">
              Criamos soluções personalizadas para desafios únicos
            </p>
            <Button variant="outline-hero" size="lg">
              Vamos conversar sobre seu projeto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;