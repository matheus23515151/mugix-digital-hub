import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-neutral-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary text-primary-foreground font-bold text-xl px-3 py-1 rounded-lg">
              MugiX
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-neutral-600 hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-neutral-600 hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#diferenciais" className="text-neutral-600 hover:text-primary transition-colors">
              Diferenciais
            </a>
          </nav>

          <div className="flex items-center">
            <Button variant="hero" size="default" className="hidden md:flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Fale conosco
            </Button>
            <div className="md:hidden">
              <Button onClick={toggleMobileMenu} variant="outline" size="icon">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#sobre" className="text-neutral-600 hover:text-primary transition-colors" onClick={toggleMobileMenu}>
                Sobre
              </a>
              <a href="#servicos" className="text-neutral-600 hover:text-primary transition-colors" onClick={toggleMobileMenu}>
                Serviços
              </a>
              <a href="#diferenciais" className="text-neutral-600 hover:text-primary transition-colors" onClick={toggleMobileMenu}>
                Diferenciais
              </a>
              <Button variant="hero" size="default" className="flex items-center gap-2 w-full">
                <MessageCircle className="w-4 h-4" />
                Fale conosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;