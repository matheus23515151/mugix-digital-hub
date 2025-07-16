import { CheckCircle } from "lucide-react";

const ProcessTimeline = () => {
  const steps = [
    {
      title: "Diagnóstico Gratuito",
      description: "Analisamos seus processos e identificamos oportunidades.",
    },
    {
      title: "Planejamento Estratégico",
      description: "Desenvolvemos a estratégia completa de automação.",
    },
    {
      title: "Implementação e Testes",
      description: "Colocamos tudo em funcionamento com testes rigorosos.",
    },
    {
      title: "Monitoramento e Otimização",
      description: "Acompanhamos os resultados e otimizamos continuamente.",
    },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nosso Processo
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 h-full w-1 bg-gray-700 transform -translate-x-1/2"></div>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center mb-8 w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              <div className="w-1/2"></div>
              <div className="w-1/2 px-8">
                <div className="bg-gray-700 p-6 rounded-lg animate-fade-in-up">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-6 h-6 mr-2 text-primary" />
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;