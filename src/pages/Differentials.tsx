import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Heart, Rocket, CheckCircle, Users, TrendingUp, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Differentials = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: differentialsRef, isVisible: differentialsVisible } = useScrollAnimation();
  const { ref: comparisonRef, isVisible: comparisonVisible } = useScrollAnimation();
  const { ref: casesRef, isVisible: casesVisible } = useScrollAnimation();

  const differentials = [
    {
      icon: Heart,
      title: "Atendimento Humano vs Modelo SaaS",
      description: "Enquanto SaaS oferece suporte via chat ou ticket, você tem acesso direto a especialistas que conhecem profundamente seu negócio.",
      saas: "Suporte via chatbot ou ticket",
      mugix: "Consultor dedicado e atendimento humanizado",
      benefit: "Resolução 5x mais rápida e estratégias personalizadas"
    },
    {
      icon: Rocket,
      title: "Personalização Real de Projeto a Projeto",
      description: "Não oferecemos templates ou pacotes prontos. Cada solução é desenvolvida especificamente para suas necessidades e desafios únicos.",
      saas: "Templates e configurações limitadas",
      mugix: "Desenvolvimento 100% personalizado",
      benefit: "Soluções que se adaptam ao seu negócio, não o contrário"
    },
    {
      icon: CheckCircle,
      title: "Foco em Resultado Real e ROI Comprovado",
      description: "Medimos nosso sucesso pelo seu crescimento. Trabalhamos com metas claras e entregamos relatórios detalhados de performance.",
      saas: "Métricas genéricas de uso da plataforma",
      mugix: "KPIs específicos do seu negócio e ROI mensurável",
      benefit: "Crescimento médio de 180% no faturamento dos clientes"
    },
    {
      icon: Shield,
      title: "Suporte Consultivo, Não Apenas Execução",
      description: "Não apenas executamos tarefas. Analisamos seu mercado, sugerimos melhorias e atuamos como consultores estratégicos.",
      saas: "Execução de tarefas conforme configurado",
      mugix: "Consultoria estratégica contínua e proativa",
      benefit: "Evolução constante da sua estratégia digital"
    }
  ];

  const successCases = [
    {
      title: "E-commerce de Moda",
      challenge: "Loja online com baixa conversão e alto custo de aquisição",
      solution: "Automação completa do funil + tráfego pago otimizado + CRM personalizado",
      results: [
        "250% de aumento nas vendas em 6 meses",
        "Redução de 60% no custo por aquisição",
        "90% dos processos automatizados"
      ],
      timeline: "6 meses"
    },
    {
      title: "Clínica Médica",
      challenge: "Gestão manual de agendamentos causando perda de pacientes",
      solution: "Sistema de agendamento automatizado + WhatsApp integrado + CRM médico",
      results: [
        "70% menos tempo gasto em ligações",
        "45% aumento na retenção de pacientes",
        "Zero conflitos de horário"
      ],
      timeline: "3 meses"
    },
    {
      title: "Consultoria Jurídica",
      challenge: "5.000 leads desorganizados sem follow-up adequado",
      solution: "CRM jurídico + automação de follow-up + campanhas segmentadas",
      results: [
        "45% aumento na conversão em vendas",
        "Organização completa da base de clientes",
        "300% melhoria no tempo de resposta"
      ],
      timeline: "4 meses"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div 
            ref={heroRef}
            className={`max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 scroll-animate ${heroVisible ? 'animate-in' : ''}`}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900">
              Nossos <span className="text-primary">Diferenciais</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-600 leading-relaxed">
              Entenda por que escolher a MugiX faz toda a diferença 
              para o crescimento do seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/">
                <Button variant="outline-hero" size="lg" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar à Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Differentials */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div 
            ref={differentialsRef}
            className={`space-y-12 sm:space-y-16 scroll-animate ${differentialsVisible ? 'animate-in' : ''}`}
          >
            {differentials.map((differential, index) => {
              const IconComponent = differential.icon;
              
              return (
                <div key={index} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                        {differential.title}
                      </h2>
                    </div>

                    <p className="text-lg text-neutral-600 leading-relaxed">
                      {differential.description}
                    </p>

                    <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-800">Benefício Real</span>
                      </div>
                      <p className="text-green-700">
                        {differential.benefit}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* SaaS Tradicional */}
                    <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                      <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        SaaS Tradicional
                      </h4>
                      <p className="text-red-700">{differential.saas}</p>
                    </div>

                    {/* MugiX */}
                    <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                      <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Abordagem MugiX
                      </h4>
                      <p className="text-blue-700">{differential.mugix}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div 
            ref={comparisonRef}
            className={`scroll-animate ${comparisonVisible ? 'animate-in' : ''}`}
          >
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                MugiX vs <span className="text-primary">SaaS Tradicional</span>
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Compare e entenda as diferenças que fazem toda a diferença nos seus resultados
              </p>
            </div>

            <div className="bg-background rounded-2xl border border-neutral-200 overflow-hidden">
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
                {/* Headers */}
                <div className="p-6 bg-neutral-50">
                  <h3 className="font-semibold text-neutral-900">Características</h3>
                </div>
                <div className="p-6 bg-red-50">
                  <h3 className="font-semibold text-red-800">SaaS Tradicional</h3>
                </div>
                <div className="p-6 bg-blue-50">
                  <h3 className="font-semibold text-blue-800">MugiX</h3>
                </div>

                {/* Rows */}
                {[
                  {
                    feature: "Atendimento",
                    saas: "Chatbot ou ticket",
                    mugix: "Consultor dedicado"
                  },
                  {
                    feature: "Personalização",
                    saas: "Templates limitados",
                    mugix: "100% sob medida"
                  },
                  {
                    feature: "Implementação",
                    saas: "Self-service",
                    mugix: "Implementação guiada"
                  },
                  {
                    feature: "Estratégia",
                    saas: "Genérica",
                    mugix: "Consultoria estratégica"
                  },
                  {
                    feature: "Resultados",
                    saas: "Métricas básicas",
                    mugix: "ROI mensurável"
                  }
                ].map((row, index) => (
                  <div key={index} className="contents">
                    <div className="p-4 sm:p-6 font-medium text-neutral-900 bg-neutral-50">
                      {row.feature}
                    </div>
                    <div className="p-4 sm:p-6 text-red-700 bg-red-50">
                      {row.saas}
                    </div>
                    <div className="p-4 sm:p-6 text-blue-700 bg-blue-50 font-medium">
                      {row.mugix}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div 
            ref={casesRef}
            className={`scroll-animate ${casesVisible ? 'animate-in' : ''}`}
          >
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                Cases de <span className="text-primary">Sucesso Reais</span>
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Veja como nossa abordagem personalizada transforma negócios de verdade
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              {successCases.map((case_, index) => (
                <div key={index} className="bg-background p-6 sm:p-8 rounded-xl border border-neutral-200 space-y-6 interactive-card">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {case_.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      <TrendingUp className="w-4 h-4" />
                      {case_.timeline}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Desafio:</h4>
                      <p className="text-neutral-600 text-sm">
                        {case_.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Solução:</h4>
                      <p className="text-neutral-600 text-sm">
                        {case_.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-3">Resultados:</h4>
                      <ul className="space-y-2">
                        {case_.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-600 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
              Experimente a <span className="text-primary">Diferença MugiX</span>
            </h2>
            <p className="text-lg text-neutral-600">
              Pare de perder tempo com soluções genéricas. Tenha uma estratégia 
              digital verdadeiramente personalizada para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Quero uma Consultoria Gratuita
              </Button>
              <Button variant="outline-hero" size="lg">
                Ver Mais Cases de Sucesso
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Differentials;