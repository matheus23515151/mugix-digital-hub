import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X, Home, User, Settings, Star, Calendar } from "lucide-react";
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
    <header className="bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group transition-all duration-300 hover:scale-105">
              <img 
                src="/lovable-uploads/1752533e-5716-4436-9af7-42f011461172.png" 
                alt="MugiX - Automação e Performance Digital" 
                className="h-16 sm:h-18 w-auto transition-all duration-300 group-hover:brightness-110"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link 
              to="/" 
              className={`relative text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 ${
                isActive('/') 
                  ? 'text-primary after:w-full' 
                  : 'text-muted-foreground hover:text-foreground'
              } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
                isActive('/') ? 'after:w-full' : 'after:w-0 hover:after:w-full'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/sobre" 
              className={`relative text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 ${
                isActive('/sobre') 
                  ? 'text-primary after:w-full' 
                  : 'text-muted-foreground hover:text-foreground'
              } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
                isActive('/sobre') ? 'after:w-full' : 'after:w-0 hover:after:w-full'
              }`}
            >
              Sobre
            </Link>
            <Link 
              to="/servicos" 
              className={`relative text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 ${
                isActive('/servicos') 
                  ? 'text-primary after:w-full' 
                  : 'text-muted-foreground hover:text-foreground'
              } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
                isActive('/servicos') ? 'after:w-full' : 'after:w-0 hover:after:w-full'
              }`}
            >
              Serviços
            </Link>
            <Link 
              to="/diferenciais" 
              className={`relative text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 ${
                isActive('/diferenciais') 
                  ? 'text-primary after:w-full' 
                  : 'text-muted-foreground hover:text-foreground'
              } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
                isActive('/diferenciais') ? 'after:w-full' : 'after:w-0 hover:after:w-full'
              }`}
            >
              Diferenciais
            </Link>
            <Link 
              to="/agendamento" 
              className={`relative text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 ${
                isActive('/agendamento') 
                  ? 'text-primary after:w-full' 
                  : 'text-muted-foreground hover:text-foreground'
              } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
                isActive('/agendamento') ? 'after:w-full' : 'after:w-0 hover:after:w-full'
              }`}
            >
              Agendar Reunião
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              variant="default" 
              size="sm" 
              className="hidden md:flex items-center gap-2 text-sm font-medium px-6 py-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://wa.me/556281540306?text=Olá,%20quero%20saber%20mais%20sobre%20os%20serviços%20da%20MugiX', '_blank')}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
            <div className="md:hidden">
              <Button 
                onClick={toggleMobileMenu} 
                variant="ghost" 
                size="icon"
                className="rounded-full hover:bg-accent transition-all duration-300 hover:scale-110"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu className="h-5 w-5 transition-transform duration-300" />
                )}
              </Button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-border/50 pt-3 bg-background/95 backdrop-blur-sm rounded-xl shadow-xl mx-2">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={`px-3 py-2.5 rounded-lg transition-all text-sm font-medium flex items-center gap-3 ${isActive('/') ? 'text-primary font-semibold bg-primary/10 border border-primary/20' : 'text-muted-foreground hover:text-primary hover:bg-accent/50'}`} 
                onClick={toggleMobileMenu}
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
              <Link 
                to="/sobre" 
                className={`px-3 py-2.5 rounded-lg transition-all text-sm font-medium flex items-center gap-3 ${isActive('/sobre') ? 'text-primary font-semibold bg-primary/10 border border-primary/20' : 'text-muted-foreground hover:text-primary hover:bg-accent/50'}`} 
                onClick={toggleMobileMenu}
              >
                <User className="w-4 h-4" />
                Sobre
              </Link>
              <Link 
                to="/servicos" 
                className={`px-3 py-2.5 rounded-lg transition-all text-sm font-medium flex items-center gap-3 ${isActive('/servicos') ? 'text-primary font-semibold bg-primary/10 border border-primary/20' : 'text-muted-foreground hover:text-primary hover:bg-accent/50'}`} 
                onClick={toggleMobileMenu}
              >
                <Settings className="w-4 h-4" />
                Serviços
              </Link>
              <Link 
                to="/diferenciais" 
                className={`px-3 py-2.5 rounded-lg transition-all text-sm font-medium flex items-center gap-3 ${isActive('/diferenciais') ? 'text-primary font-semibold bg-primary/10 border border-primary/20' : 'text-muted-foreground hover:text-primary hover:bg-accent/50'}`} 
                onClick={toggleMobileMenu}
              >
                <Star className="w-4 h-4" />
                Diferenciais
              </Link>
              <Link 
                to="/agendamento" 
                className={`px-3 py-2.5 rounded-lg transition-all text-sm font-medium flex items-center gap-3 ${isActive('/agendamento') ? 'text-primary font-semibold bg-primary/10 border border-primary/20' : 'text-muted-foreground hover:text-primary hover:bg-accent/50'}`} 
                onClick={toggleMobileMenu}
              >
                <Calendar className="w-4 h-4" />
                Agendar
              </Link>
              <div className="pt-2 border-t border-border/50 mt-2">
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