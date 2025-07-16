import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900">
              Pronto para <span className="text-primary">Transformar</span> seu Negócio?
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Não deixe seus concorrentes saírem na frente. Comece hoje mesmo sua jornada 
              de transformação digital com quem realmente entende do seu negócio.
            </p>
          </div>

          <div className="bg-background p-8 rounded-2xl border border-neutral-200 space-y-6">
            <h3 className="text-2xl font-semibold text-neutral-900">
              Conversa gratuita de 30 minutos
            </h3>
            <p className="text-neutral-600">
              Vamos entender seus desafios e mostrar como podemos ajudar, 
              sem compromisso e totalmente gratuito.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Direto
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button variant="outline-hero" size="xl" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Agendar Ligação
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3 text-neutral-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Resposta em até 1 hora</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-neutral-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-neutral-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Consultoria gratuita</span>
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <p className="text-sm text-neutral-500">
              Ou entre em contato pelo e-mail
            </p>
            <a 
              href="mailto:contato@mugix.com.br" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary-blue-dark transition-colors"
            >
              <Mail className="w-4 h-4" />
              contato@mugix.com.br
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;