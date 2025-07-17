import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, ArrowRight } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const CTA = () => {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <section className="section-spacing bg-gradient-hero relative w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div 
          ref={ctaRef}
          className={`max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 scroll-animate ${ctaVisible ? 'animate-in' : ''}`}
        >
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900">
              Chega de perder <span className="text-primary">tempo e dinheiro</span> com processos manuais
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed px-4 sm:px-0">
              Seus concorrentes já estão automatizando. Não fique para trás perdendo horas em tarefas 
              que nossa IA humanizada faz em segundos. Comece sua transformação hoje.
            </p>
          </div>

          <div className="bg-background p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-neutral-200 space-y-4 sm:space-y-6 mx-4 sm:mx-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              Diagnóstico gratuito: descubra quanto tempo você está perdendo
            </h3>
            <p className="text-sm sm:text-base text-neutral-600">
              Em 30 minutos, identificamos suas principais oportunidades e mostramos exatamente 
              como nossa automação inteligente pode otimizar seus processos, sem compromisso.
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
              
              <Button 
                variant="outline-hero" 
                size="lg" 
                className="flex items-center gap-2 w-full sm:w-auto"
                onClick={() => window.open('/agendamento', '_self')}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 icon-hover icon-rotate" />
                <span className="text-sm sm:text-base">Agendar Reunião</span>
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
              <span className="text-sm sm:text-base">Diagnóstico gratuito</span>
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
