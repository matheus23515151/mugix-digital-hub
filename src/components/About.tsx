import { Users, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900">
              Somos a <span className="text-primary">MugiX</span>
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Não somos mais uma ferramenta no mercado. Somos sua parceira estratégica 
              no mundo digital, criando soluções sob medida que realmente funcionam 
              para o seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">
                Atendimento Humano
              </h3>
              <p className="text-neutral-600">
                Nada de chatbots ou respostas automáticas. Você fala diretamente 
                com especialistas que entendem do seu negócio.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">
                Soluções Sob Medida
              </h3>
              <p className="text-neutral-600">
                Cada negócio é único. Por isso, criamos estratégias personalizadas 
                que se adaptam perfeitamente às suas necessidades.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">
                Resultados Reais
              </h3>
              <p className="text-neutral-600">
                Nosso foco é simples: aumentar seu faturamento e reduzir custos. 
                Trabalhamos pelo seu sucesso, não por métricas vazias.
              </p>
            </div>
          </div>

          <div className="bg-gradient-subtle p-8 rounded-2xl border border-neutral-200">
            <blockquote className="text-lg text-neutral-700 italic">
              "Na MugiX, acreditamos que tecnologia sem estratégia é apenas uma ferramenta cara. 
              Por isso, combinamos inovação com consultoria especializada para transformar 
              seu negócio de verdade."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;