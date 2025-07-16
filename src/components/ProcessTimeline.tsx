import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, MessageCircle, ChevronDown } from "lucide-react";

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Diagnóstico Gratuito",
      duration: "30 minutos",
      description: "Analisamos seus processos atuais e identificamos oportunidades de automação",
      details: [
        "Mapeamento completo dos processos manuais",
        "Identificação de gargalos e perdas",
        "Análise do potencial de automação",
        "Proposta inicial personalizada"
      ],
      icon: "🔍"
    },
    {
      title: "Planejamento Estratégico",
      duration: "1-2 semanas",
      description: "Desenvolvemos a estratégia completa de automação para seu negócio",
      details: [
        "Definição de prioridades e cronograma",
        "Escolha das melhores ferramentas",
        "Mapeamento de integrações necessárias",
        "Projeção de ROI e resultados esperados"
      ],
      icon: "📋"
    },
    {
      title: "Implementação",
      duration: "2-4 semanas",
      description: "Colocamos tudo em funcionamento com testes e validações",
      details: [
        "Configuração de sistemas e automações",
        "Integração entre plataformas",
        "Testes completos de funcionamento",
        "Treinamento da sua equipe"
      ],
      icon: "⚙️"
    },
    {
      title: "Monitoramento & Otimização",
      duration: "Contínuo",
      description: "Acompanhamos os resultados e otimizamos constantemente",
      details: [
        "Relatórios detalhados de performance",
        "Ajustes e melhorias contínuas",
        "Suporte técnico 24/7",
        "Expansão para novos processos"
      ],
      icon: "📈"
    }
  ];

  const StepDetails = ({ step, isActive }) => (
    <div className={`lg:sticky lg:top-28 ${isActive ? '' : 'lg:hidden'}`}>
      <Card className="border-primary/20 shadow-xl animate-scale-in">
        <CardContent className="p-8">
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-6xl mb-4 animate-float">{step.icon}</div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">{step.title}</h3>
              <p className="text-primary font-medium">Duração: {step.duration}</p>
            </div>
            <div className="space-y-4">
              <p className="text-neutral-600 leading-relaxed">{step.description}</p>
              <div className="space-y-3">
                <h4 className="font-semibold text-neutral-900">O que fazemos nesta etapa:</h4>
                <ul className="space-y-2">
                  {step.details.map((detail, index) => (
                    <li key={index} className={`flex items-start gap-3 animate-fade-in-up stagger-${index + 1}`}>
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-neutral-600">
                <span>Progresso do processo</span>
                <span>{Math.round(((steps.indexOf(step) + 1) / steps.length) * 100)}%</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-3">
                <div
                  className="bg-gradient-primary h-3 rounded-full transition-all duration-500"
                  style={{ width: `${((steps.indexOf(step) + 1) / steps.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between pt-4 gap-4">
              <Button
                variant="outline"
                onClick={() => setActiveStep(Math.max(0, steps.indexOf(step) - 1))}
                disabled={steps.indexOf(step) === 0}
                className="w-full sm:w-auto justify-center"
              >
                Etapa Anterior
              </Button>
              <Button
                variant="outline"
                onClick={() => setActiveStep(Math.min(steps.length - 1, steps.indexOf(step) + 1))}
                disabled={steps.indexOf(step) === steps.length - 1}
                className="w-full sm:w-auto justify-center"
              >
                Próxima Etapa
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="mt-6 bg-gradient-primary text-primary-foreground">
        <CardContent className="container-standard section-padding text-center flex flex-col items-center justify-center space-standard">
          <h4 className="text-lg font-semibold">Pronto para começar?</h4>
          <p className="text-primary-foreground/90 max-w-md">Agende seu diagnóstico gratuito agora mesmo</p>
          <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <MessageCircle className="w-4 h-4 mr-2" />
            Começar Diagnóstico
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900">
              Como Funciona o <span className="text-primary">Processo MugiX</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Do diagnóstico ao resultado: um processo transparente e eficiente
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Timeline Navigation */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index}>
                  <Card
                    className={`cursor-pointer transition-all duration-300 hover-lift ${
                      activeStep === index
                        ? "border-primary bg-primary/5 shadow-lg"
                        : "border-neutral-200 hover:border-primary/50"
                    } animate-fade-in-left stagger-${index + 1}`}
                    onClick={() => setActiveStep(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${
                            activeStep === index
                              ? "bg-gradient-primary text-primary-foreground"
                              : "bg-neutral-200 text-neutral-600"
                          }`}
                        >
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className={`font-semibold ${activeStep === index ? "text-primary" : "text-neutral-900"}`}>
                              {step.title}
                            </h3>
                            <span className="text-sm text-neutral-500 hidden sm:block">{step.duration}</span>
                          </div>
                          <p className="text-neutral-600 text-sm">{step.description}</p>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 lg:hidden ${activeStep === index ? 'rotate-180' : ''}`} />
                      </div>
                    </CardContent>
                  </Card>
                  {/* Step Details for mobile */}
                  <div className="lg:hidden">
                    {activeStep === index && <div className="mt-4"><StepDetails step={step} isActive={true} /></div>}
                  </div>
                </div>
              ))}
            </div>

            {/* Step Details for desktop */}
            <div className="hidden lg:block">
              <StepDetails step={steps[activeStep]} isActive={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;