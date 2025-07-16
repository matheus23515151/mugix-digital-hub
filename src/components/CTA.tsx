import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, ArrowRight } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";

const CTA = () => {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
  const { elementRef: parallaxRef, getParallaxStyle } = useParallax();

  return (
    <section ref={parallaxRef} className="py-16 sm:py-20 bg-gradient-hero relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-15 parallax-slow" 
        style={getParallaxStyle(0.25)}
      >
        <div className="absolute top-1/3 left-1/4 w-28 h-28 bg-gradient-primary rounded-full blur-xl opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gradient-primary rounded-full blur-lg opacity-35"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <div 
          ref={ctaRef}
          className={`max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 scroll-animate ${ctaVisible ? 'animate-in' : ''}`}
        >
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900">
              Pronto para <span className="text-primary">Transformar</span> seu Negócio?
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed px-4 sm:px-0">
              Não deixe seus concorrentes saírem na frente. Comece hoje mesmo sua jornada 
              de transformação digital com quem realmente entende do seu negócio.
            </p>
          </div>

          <div className="bg-background p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-neutral-200 space-y-4 sm:space-y-6 mx-4 sm:mx-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              Conversa gratuita de 30 minutos
            </h3>
            <p className="text-sm sm:text-base text-neutral-600">
              Vamos entender seus desafios e mostrar como podemos ajudar, 
              sem compromisso e totalmente gratuito.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="flex items-center gap-2 w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/556281540306?text=Olá,%20quero%20saber%20mais%20sobre%20os%20serviços%20da%20MugiX', '_blank')}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 icon-hover icon-pulse" />
                <span className="text-sm sm:text-base">WhatsApp Direto</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 icon-hover" />
              </Button>
              
              <Button variant="outline-hero" size="lg" className="flex items-center gap-2 w-full sm:w-auto">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 icon-hover icon-rotate" />
                <span className="text-sm sm:text-base">Agendar Ligação</span>
              </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-center px-4 sm:px-0">
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-neutral-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm sm:text-base">Sem compromisso</span>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-neutral-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm sm:text-base">Consultoria gratuita</span>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 space-y-3 sm:space-y-4">
            <p className="text-xs sm:text-sm text-neutral-500">
              Ou entre em contato pelo e-mail
            </p>
            <a 
              href="mailto:contato@mugix.com.br" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary-blue-dark transition-colors text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 icon-hover icon-bounce" />
              contato@mugix.com.br
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;