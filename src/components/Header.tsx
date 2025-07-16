import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-neutral-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
              <img 
                src="/lovable-uploads/1752533e-5716-4436-9af7-42f011461172.png" 
                alt="MugiX - Automação e Performance Digital" 
                className="h-16 sm:h-20 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/sobre" className={`text-sm lg:text-base transition-colors ${isActive('/sobre') ? 'text-primary font-medium' : 'text-neutral-600 hover:text-primary'}`}>
              Sobre
            </Link>
            <Link to="/servicos" className={`text-sm lg:text-base transition-colors ${isActive('/servicos') ? 'text-primary font-medium' : 'text-neutral-600 hover:text-primary'}`}>
              Serviços
            </Link>
            <Link to="/diferenciais" className={`text-sm lg:text-base transition-colors ${isActive('/diferenciais') ? 'text-primary font-medium' : 'text-neutral-600 hover:text-primary'}`}>
              Diferenciais
            </Link>
          </nav>

          <div className="flex items-center">
            <Button 
              variant="hero" 
              size="default" 
              className="hidden md:flex items-center gap-2 text-sm lg:text-base"
              onClick={() => window.open('https://wa.me/556281540306?text=Olá,%20quero%20saber%20mais%20sobre%20os%20serviços%20da%20MugiX', '_blank')}
            >
              <MessageCircle className="w-4 h-4 icon-hover icon-pulse" />
              WhatsApp
            </Button>
            <div className="md:hidden">
              <Button onClick={toggleMobileMenu} variant="outline" size="icon">
                {mobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6 icon-hover icon-rotate" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6 icon-hover icon-bounce" />}
              </Button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neutral-200 pt-4 bg-background/95 backdrop-blur-sm rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/sobre" 
                className={`px-4 py-3 rounded-lg transition-all text-base ${isActive('/sobre') ? 'text-primary font-medium bg-primary/10' : 'text-neutral-600 hover:text-primary hover:bg-neutral-50'}`} 
                onClick={toggleMobileMenu}
              >
                📖 Sobre
              </Link>
              <Link 
                to="/servicos" 
                className={`px-4 py-3 rounded-lg transition-all text-base ${isActive('/servicos') ? 'text-primary font-medium bg-primary/10' : 'text-neutral-600 hover:text-primary hover:bg-neutral-50'}`} 
                onClick={toggleMobileMenu}
              >
                ⚙️ Serviços
              </Link>
              <Link 
                to="/diferenciais" 
                className={`px-4 py-3 rounded-lg transition-all text-base ${isActive('/diferenciais') ? 'text-primary font-medium bg-primary/10' : 'text-neutral-600 hover:text-primary hover:bg-neutral-50'}`} 
                onClick={toggleMobileMenu}
              >
                ⭐ Diferenciais
              </Link>
              <div className="pt-2 border-t border-neutral-200 mt-3">
                <Button 
                  variant="hero" 
                  size="default" 
                  className="flex items-center gap-2 w-full justify-center"
                  onClick={() => {
                    window.open('https://wa.me/556281540306?text=Olá,%20quero%20saber%20mais%20sobre%20os%20serviços%20da%20MugiX', '_blank');
                    toggleMobileMenu();
                  }}
                >
                  <MessageCircle className="w-4 h-4 icon-hover icon-pulse" />
                  Falar via WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;