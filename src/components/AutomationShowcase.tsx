import { Bot, Zap, Cog, BarChart, MessageSquare, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AutomationShowcase = () => {
  const automationAreas = [
    {
      icon: Bot,
      title: "Atendimento Inteligente",
      description: "Chatbots que realmente entendem seus clientes",
      features: ["Respostas 24/7", "Integração com WhatsApp", "Escalação automática"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Funil de Vendas",
      description: "Do lead qualificado à venda fechada automaticamente",
      features: ["Lead scoring automático", "Follow-up inteligente", "Pipeline organizado"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cog,
      title: "Processos Internos",
      description: "Workflows que economizam horas da sua equipe",
      features: ["Aprovações automáticas", "Relatórios periódicos", "Integrações completas"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart,
      title: "Marketing Inteligente",
      description: "Campanhas que se otimizam sozinhas",
      features: ["Segmentação automática", "A/B testing contínuo", "ROI em tempo real"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: MessageSquare,
      title: "Comunicação Multicanal",
      description: "Mensagens certas, na hora certa, no canal certo",
      features: ["Disparos programados", "Personalização em massa", "Compliance garantido"],
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900">
              O que Podemos <span className="text-primary">Automatizar</span> para Você?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Transformamos processos manuais em sistemas inteligentes que trabalham 24/7 para o seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 place-items-center lg:place-items-stretch">
            {automationAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card 
                  key={index} 
                  className={`group relative overflow-hidden border-neutral-200 hover:border-primary/50 transition-all duration-500 hover-lift animate-fade-in-up stagger-${index + 1} w-full max-w-sm lg:max-w-none ${index >= 3 ? 'md:col-start-2 lg:col-start-auto' : ''}`}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-4 icon-container icon-float stagger-${index + 1}`}>
                      <IconComponent className="w-8 h-8 text-white icon-hover icon-glow" />
                    </div>
                    <CardTitle className="text-xl text-neutral-900 group-hover:text-primary transition-colors duration-300">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative space-y-4">
                    <p className="text-neutral-600">
                      {area.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {area.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-neutral-600">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${area.color}`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      Explorar automação
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Central CTA */}
          <div className="text-center animate-fade-in-up">
            <Card className="max-w-4xl mx-auto bg-gradient-hero border-primary/20 shadow-xl">
              <CardContent className="p-8 sm:p-12">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                      Não viu seu processo aqui?
                    </h3>
                    <p className="text-lg sm:text-xl text-neutral-600">
                      Nenhum problema! Criamos automações personalizadas para qualquer processo repetitivo do seu negócio.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
                    <Button variant="cta" size="lg" className="flex items-center gap-2 hover-glow w-full sm:w-auto">
                      <Bot className="w-5 h-5" />
                      Descobrir Meu Potencial de Automação
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                    
                    <div className="text-sm text-neutral-500 mt-2 sm:mt-0">
                      ✓ Consulta gratuita de 30 minutos
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-neutral-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">80%</div>
                      <div className="text-sm text-neutral-600">Redução em tarefas manuais</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                      <div className="text-sm text-neutral-600">Operação contínua</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">5x</div>
                      <div className="text-sm text-neutral-600">Aumento na eficiência</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationShowcase;