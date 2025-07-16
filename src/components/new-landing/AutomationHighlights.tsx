import { Zap, Bot, BarChart, ArrowRight } from "lucide-react";

const AutomationHighlights = () => {
  const highlights = [
    {
      icon: Zap,
      title: "Vendas 24/7",
      description: "Automatize seu funil de vendas e nunca mais perca um lead.",
    },
    {
      icon: Bot,
      title: "Atendimento Inteligente",
      description: "Chatbots que resolvem problemas e encantam seus clientes.",
    },
    {
      icon: BarChart,
      title: "Marketing de Performance",
      description: "Otimize suas campanhas com automação e análise de dados.",
    },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Automação que Gera Resultados
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-gray-700 p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-gray-400">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AutomationHighlights;