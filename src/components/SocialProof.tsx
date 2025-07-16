import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "E-commerce Fashion",
      content: "A MugiX transformou completamente nossa operação. O ROI das campanhas aumentou 180% e conseguimos automatizar 90% dos nossos processos.",
      rating: 5
    },
    {
      name: "Carlos Santos",
      company: "Clínica Médica",
      content: "Impressionante como eles entenderam nosso negócio rapidamente. O sistema de CRM personalizado revolucionou nosso atendimento aos pacientes.",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "Consultoria Jurídica",
      content: "Finalmente encontrei uma empresa que realmente trabalha como parceira. Eles não apenas entregam, mas sugerem melhorias constantemente.",
      rating: 5
    }
  ];

  const stats = [
    { number: "50+", label: "Projetos Entregues" },
    { number: "95%", label: "Clientes Ativos" },
    { number: "180%", label: "ROI Médio" },
    { number: "24/7", label: "Suporte Ativo" }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900">
            Resultados que <span className="text-primary">Falam por Si</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Veja o que nossos parceiros falam sobre os resultados conquistados juntos
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-background rounded-2xl border border-neutral-200">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-neutral-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="w-8 h-8 text-primary opacity-20 absolute -top-2 -left-2" />
                  <p className="text-neutral-700 italic leading-relaxed pl-4">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="pt-4 border-t border-neutral-200">
                  <div className="font-semibold text-neutral-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-background p-8 rounded-2xl border border-neutral-200">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-neutral-900">
              Junte-se aos negócios que já estão crescendo com a MugiX
            </h3>
            <p className="text-neutral-600">
              Empresas de todos os portes confiam em nós para acelerar seu crescimento digital
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="h-8 w-24 bg-neutral-300 rounded"></div>
              <div className="h-8 w-24 bg-neutral-300 rounded"></div>
              <div className="h-8 w-24 bg-neutral-300 rounded"></div>
              <div className="h-8 w-24 bg-neutral-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;