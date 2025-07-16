import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, CheckCircle, Clock, TrendingUp, Users } from "lucide-react";

const BeforeAfter = () => {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenarios = [
    {
      title: "Gestão de Leads",
      icon: Users,
      before: {
        title: "Antes da Automação",
        problems: [
          "Leads perdidos por falta de follow-up",
          "Planilhas desorganizadas e desatualizadas", 
          "Equipe sobrecarregada com tarefas manuais",
          "Tempo de resposta lento aos interessados"
        ],
        metrics: { conversion: "2%", time: "4h/dia", satisfaction: "60%" }
      },
      after: {
        title: "Após a Automação MugiX",
        benefits: [
          "100% dos leads recebem follow-up automático",
          "CRM integrado com todas as informações centralizadas",
          "Equipe focada em relacionamento e vendas",
          "Resposta instantânea 24/7"
        ],
        metrics: { conversion: "15%", time: "30min/dia", satisfaction: "95%" }
      }
    },
    {
      title: "Atendimento ao Cliente",
      icon: Clock,
      before: {
        title: "Processo Manual",
        problems: [
          "Filas longas de atendimento",
          "Informações inconsistentes entre canais",
          "Horário limitado de funcionamento",
          "Dificuldade em acompanhar histórico"
        ],
        metrics: { response: "2h", satisfaction: "65%", resolution: "70%" }
      },
      after: {
        title: "Sistema Automatizado",
        benefits: [
          "Chatbot resolve 80% das dúvidas comuns",
          "Informações unificadas em todos os canais",
          "Atendimento 24/7 disponível",
          "Histórico completo e acessível"
        ],
        metrics: { response: "30s", satisfaction: "92%", resolution: "95%" }
      }
    },
    {
      title: "Campanhas de Marketing",
      icon: TrendingUp,
      before: {
        title: "Marketing Manual",
        problems: [
          "Campanhas genéricas para toda base",
          "Dificuldade em mensurar resultados",
          "Envios manuais demorados e propensos a erro",
          "Baixa personalização"
        ],
        metrics: { openRate: "12%", roi: "200%", time: "6h/campanha" }
      },
      after: {
        title: "Marketing Automatizado",
        benefits: [
          "Segmentação automática por comportamento",
          "Dashboards em tempo real com métricas",
          "Envios automáticos baseados em triggers",
          "Mensagens personalizadas por perfil"
        ],
        metrics: { openRate: "45%", roi: "600%", time: "15min/campanha" }
      }
    }
  ];

  const currentScenario = scenarios[activeScenario];
  const IconComponent = currentScenario.icon;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900">
              Transformação <span className="text-primary">Real</span> nos Negócios
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Veja como a automação transforma processos manuais em máquinas de crescimento
            </p>
          </div>

          {/* Scenario Selector */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12">
            {scenarios.map((scenario, index) => {
              const ScenarioIcon = scenario.icon;
              return (
                <Button
                  key={index}
                  variant={activeScenario === index ? "hero" : "outline"}
                  size="lg"
                  onClick={() => setActiveScenario(index)}
                  className={`flex items-center gap-2 hover-scale ${
                    activeScenario === index ? "animate-pulse-glow" : ""
                  }`}
                >
                  <ScenarioIcon className="w-5 h-5" />
                  {scenario.title}
                </Button>
              );
            })}
          </div>

          {/* Before/After Comparison */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Before */}
            <Card className="border-red-200 bg-red-50/50 animate-fade-in-left hover-lift">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-800">
                      {currentScenario.before.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {currentScenario.before.problems.map((problem, index) => (
                      <li key={index} className={`flex items-start gap-3 stagger-${index + 1} animate-fade-in-up`}>
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-neutral-700">{problem}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-red-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-3">Métricas Típicas:</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                      {Object.entries(currentScenario.before.metrics).map(([key, value]) => (
                        <div key={key} className="space-y-1">
                          <div className="text-lg font-bold text-red-700">{value}</div>
                          <div className="text-xs text-red-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Arrow for mobile */}
            <div className="lg:hidden flex justify-center items-center my-4">
              <div className="bg-gradient-primary p-3 rounded-full animate-pulse-glow">
                <ArrowDown className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>

            {/* After */}
            <Card className="border-green-200 bg-green-50/50 animate-fade-in-right hover-lift">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800">
                      {currentScenario.after.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {currentScenario.after.benefits.map((benefit, index) => (
                      <li key={index} className={`flex items-start gap-3 stagger-${index + 1} animate-fade-in-up`}>
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-green-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-3">Resultados Reais:</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                      {Object.entries(currentScenario.after.metrics).map(([key, value]) => (
                        <div key={key} className="space-y-1">
                          <div className="text-lg font-bold text-green-700">{value}</div>
                          <div className="text-xs text-green-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 animate-fade-in-up">
            <Card className="max-w-2xl mx-auto bg-gradient-subtle border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  Sua empresa pode ter resultados similares
                </h3>
                <p className="text-neutral-600 mb-6">
                  Cada negócio é único, mas os benefícios da automação são universais: 
                  mais eficiência, menos custos e melhor experiência do cliente.
                </p>
                <Button variant="cta" size="xl" className="hover-glow">
                  Quero automatizar meu negócio
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;