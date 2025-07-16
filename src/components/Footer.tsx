import { MessageCircle, Mail, Phone, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <div className="bg-gradient-primary text-primary-foreground font-bold text-xl px-3 py-1 rounded-lg inline-block">
              MugiX
            </div>
            <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
              Sua parceira estratégica para transformação digital. 
              Cuidamos do seu negócio no mundo digital.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-100">Serviços</h3>
            <ul className="space-y-2 text-neutral-400 text-sm sm:text-base">
              <li><a href="#" className="hover:text-primary transition-colors">Automação de Processos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tráfego Pago</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">CRM e Gestão</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Design Estratégico</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">WhatsApp Marketing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-100">Empresa</h3>
            <ul className="space-y-2 text-neutral-400 text-sm sm:text-base">
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre a MugiX</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nossa Metodologia</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreira</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-100">Contato</h3>
            <div className="space-y-3 text-sm sm:text-base">
              <a 
                href="https://wa.me/5511999999999" 
                className="flex items-center gap-3 text-neutral-400 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>(11) 99999-9999</span>
              </a>
              <a 
                href="mailto:contato@mugix.com.br" 
                className="flex items-center gap-3 text-neutral-400 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contato@mugix.com.br</span>
              </a>
              <div className="flex items-center gap-3 text-neutral-400">
                <Phone className="w-5 h-5" />
                <span>Segunda a Sexta, 8h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm text-center md:text-left">
              © 2024 MugiX. Todos os direitos reservados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-neutral-400">
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