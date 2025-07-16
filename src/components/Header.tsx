import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Header = () => {
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

          <Button variant="hero" size="default" className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Fale conosco
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;