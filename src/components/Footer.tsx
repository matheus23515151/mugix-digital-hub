import { MessageCircle, Mail, Phone, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-100 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <img 
              src="/lovable-uploads/1752533e-5716-4436-9af7-42f011461172.png" 
              alt="MugiX - Automação e Performance Digital" 
              className="h-6 sm:h-8 w-auto"
            />
            <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
              Sua parceira estratégica para transformação digital. 
              Cuidamos do seu negócio no mundo digital.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 bg-neutral-800 rounded-lg flex items-center justify-center icon-container icon-bounce"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 icon-hover icon-glow" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 bg-neutral-800 rounded-lg flex items-center justify-center icon-container icon-bounce"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 icon-hover icon-glow" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-neutral-100">Serviços</h3>
            <ul className="space-y-2 text-neutral-400 text-sm sm:text-base">
              <li><a href="#" className="hover:text-primary transition-colors">Automação de Processos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tráfego Pago</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">CRM e Gestão</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Design Estratégico</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">WhatsApp Marketing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-neutral-100">Empresa</h3>
            <ul className="space-y-2 text-neutral-400 text-sm sm:text-base">
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre a MugiX</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nossa Metodologia</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreira</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-neutral-100">Contato</h3>
            <div className="space-y-3 text-sm sm:text-base">
              <a 
                href="https://wa.me/556281540306?text=Olá,%20quero%20saber%20mais%20sobre%20os%20serviços%20da%20MugiX" 
                className="flex items-center gap-2 sm:gap-3 text-neutral-400 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 icon-hover icon-pulse" />
                <span>(62) 8154-0306</span>
              </a>
              <a 
                href="mailto:contato@mugix.com.br" 
                className="flex items-center gap-2 sm:gap-3 text-neutral-400 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 icon-hover icon-bounce" />
                <span>contato@mugix.com.br</span>
              </a>
              <div className="flex items-center gap-2 sm:gap-3 text-neutral-400">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 icon-hover icon-rotate" />
                <span>Segunda a Sexta, 8h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-xs sm:text-sm text-center md:text-left">
              © 2024 MugiX. Todos os direitos reservados.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm text-neutral-400 text-center sm:text-left">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-primary transition-colors">LGPD</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;