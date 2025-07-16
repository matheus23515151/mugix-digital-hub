import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const SocialProof = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation();
  const { ref: trustRef, isVisible: trustVisible } = useScrollAnimation();

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
    <section className="py-16 sm:py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div 
          ref={headerRef}
          className={`text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 scroll-animate ${headerVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900">
            Resultados que <span className="text-primary">Falam por Si</span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto px-4 sm:px-0">
            Veja o que nossos parceiros falam sobre os resultados conquistados juntos
          </p>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 scroll-animate ${statsVisible ? 'animate-in' : ''}`}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 sm:p-6 bg-background rounded-xl sm:rounded-2xl border border-neutral-200 interactive-card">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-neutral-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div 
          ref={testimonialsRef}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 scroll-animate ${testimonialsVisible ? 'animate-in' : ''}`}
        >
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-neutral-200 hover:shadow-lg transition-all duration-300 interactive-card">
              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary opacity-20 absolute -top-1 sm:-top-2 -left-1 sm:-left-2" />
                  <p className="text-sm sm:text-base text-neutral-700 italic leading-relaxed pl-3 sm:pl-4">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="pt-3 sm:pt-4 border-t border-neutral-200">
                  <div className="text-sm sm:text-base font-semibold text-neutral-900">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-600">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div 
          ref={trustRef}
          className={`bg-background p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-neutral-200 mx-4 sm:mx-0 scroll-animate ${trustVisible ? 'animate-in' : ''}`}
        >
          <div className="text-center space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">
              Junte-se aos negócios que já estão crescendo com a MugiX
            </h3>
            <p className="text-sm sm:text-base text-neutral-600">
              Empresas de todos os portes confiam em nós para acelerar seu crescimento digital
            </p>
            <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-60 overflow-x-auto">
              <div className="h-6 w-16 sm:h-8 sm:w-24 bg-neutral-300 rounded flex-shrink-0"></div>
              <div className="h-6 w-16 sm:h-8 sm:w-24 bg-neutral-300 rounded flex-shrink-0"></div>
              <div className="h-6 w-16 sm:h-8 sm:w-24 bg-neutral-300 rounded flex-shrink-0"></div>
              <div className="h-6 w-16 sm:h-8 sm:w-24 bg-neutral-300 rounded flex-shrink-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;