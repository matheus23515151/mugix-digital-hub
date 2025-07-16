import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Target, Heart, Zap, CheckCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: differentialsRef, isVisible: differentialsVisible } = useScrollAnimation();

  const values = [
    {
      icon: Heart,
      title: "Parceria Real",
      description: "Não somos apenas fornecedores, somos extensão da sua equipe. Trabalhamos lado a lado para o seu sucesso."
    },
    {
      icon: Shield,
      title: "Transparência Total",
      description: "Comunicação clara, relatórios detalhados e processos transparentes em todas as etapas do projeto."
    },
    {
      icon: Zap,
      title: "Inovação Constante",
      description: "Sempre buscamos as melhores tecnologias e metodologias para otimizar seus resultados."
    },
    {
      icon: Target,
      title: "Foco em Resultado",
      description: "Medimos nosso sucesso pelo seu crescimento. ROI e resultados concretos são nossa prioridade."
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
              Somos a <span className="text-primary">MugiX</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-600 leading-relaxed">
              Sua parceira estratégica no mundo digital, levando soluções personalizadas 
              para negócios de qualquer porte.
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

      {/* Mission, Vision, Values */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div 
            ref={missionRef}
            className={`grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16 sm:mb-20 scroll-animate ${missionVisible ? 'animate-in' : ''}`}
          >
            {/* Missão */}
            <div className="bg-gradient-primary p-6 sm:p-8 rounded-xl sm:rounded-2xl text-primary-foreground text-center">
              <Target className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-sm sm:text-base leading-relaxed opacity-90">
                Levar o digital a qualquer negócio através de soluções personalizadas, 
                automatizando processos e maximizando resultados de forma humana e estratégica.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-neutral-900 p-6 sm:p-8 rounded-xl sm:rounded-2xl text-white text-center">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Nossa Visão</h3>
              <p className="text-sm sm:text-base leading-relaxed opacity-90">
                Tornar-se referência nacional em automação e performance digital personalizada, 
                sendo reconhecida pela excelência no atendimento e resultados.
              </p>
            </div>

            {/* Propósito */}
            <div className="bg-gradient-subtle p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-neutral-200 text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-neutral-900">Nosso Propósito</h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Transformar negócios através da tecnologia, criando parcerias duradouras 
                e impactando positivamente o crescimento dos nossos clientes.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div 
            ref={valuesRef}
            className={`scroll-animate ${valuesVisible ? 'animate-in' : ''}`}
          >
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                Nossos <span className="text-primary">Valores</span>
              </h2>
              <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
                Os princípios que guiam cada decisão e cada projeto da MugiX
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="bg-neutral-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center space-y-4 interactive-card">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto icon-container icon-float">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground icon-hover icon-rotate" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 sm:py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div 
            ref={differentialsRef}
            className={`scroll-animate ${differentialsVisible ? 'animate-in' : ''}`}
          >
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                Por que <span className="text-primary">não somos SaaS</span>?
              </h2>
              <p className="text-lg sm:text-xl text-neutral-600 max-w-4xl mx-auto">
                Entenda por que escolhemos ser diferentes e como isso beneficia seu negócio
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-background p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-neutral-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
                    Atendimento Humano e Próximo
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-4">
                    Enquanto SaaS oferece soluções padronizadas, nós oferecemos consultoria estratégica. 
                    Cada cliente tem um especialista dedicado que entende profundamente seu negócio.
                  </p>
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Consultor dedicado para cada projeto</span>
                  </div>
                </div>

                <div className="bg-background p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-neutral-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
                    Soluções Verdadeiramente Personalizadas
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-4">
                    Não oferecemos templates ou soluções prontas. Cada estratégia é desenvolvida 
                    especificamente para as particularidades e desafios do seu negócio.
                  </p>
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">100% personalizado para seu negócio</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-primary p-8 sm:p-10 rounded-xl sm:rounded-2xl text-primary-foreground">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                  Nossa Filosofia
                </h3>
                <blockquote className="text-lg sm:text-xl leading-relaxed opacity-95 italic mb-6">
                  "Acreditamos que cada negócio é único e merece uma estratégia digital 
                  também única. Por isso, trabalhamos como parceiros, não como vendedores 
                  de software."
                </blockquote>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                    <span className="text-sm opacity-90">Parceria estratégica real</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                    <span className="text-sm opacity-90">Foco em resultados mensuráveis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                    <span className="text-sm opacity-90">Suporte consultivo contínuo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;