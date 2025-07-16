import { Shield, Heart, Rocket, CheckCircle } from "lucide-react";

const Differentials = () => {
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
    <section id="diferenciais" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900">
              Por que escolher a <span className="text-primary">MugiX</span>?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Não somos apenas mais um prestador de serviços. Somos parceiros comprometidos com o seu sucesso.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {differentials.map((differential, index) => {
                const IconComponent = differential.icon;
                return (
                  <div key={index} className="flex gap-4 p-6 bg-neutral-50 rounded-2xl hover:bg-gradient-subtle transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-neutral-900">
                        {differential.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {differential.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-primary p-8 rounded-2xl text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">
                  Nossa Promessa
                </h3>
                <p className="text-lg leading-relaxed opacity-90">
                  Trabalhamos como se fôssemos parte da sua equipe. Seu sucesso é nosso sucesso, 
                  e não descansamos até ver resultados concretos no seu negócio.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background p-6 rounded-xl border border-neutral-200 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-neutral-600">Taxa de Satisfação</div>
                </div>
                <div className="bg-background p-6 rounded-xl border border-neutral-200 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">24h</div>
                  <div className="text-sm text-neutral-600">Tempo de Resposta</div>
                </div>
                <div className="bg-background p-6 rounded-xl border border-neutral-200 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">+150%</div>
                  <div className="text-sm text-neutral-600">ROI Médio</div>
                </div>
                <div className="bg-background p-6 rounded-xl border border-neutral-200 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">∞</div>
                  <div className="text-sm text-neutral-600">Suporte Ilimitado</div>
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