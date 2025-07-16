import { Home, User, Settings, Star, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MobileBottomNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/sobre", icon: User, label: "Sobre" },
    { path: "/servicos", icon: Settings, label: "Serviços" },
    { path: "/diferenciais", icon: Star, label: "Diferenciais" },
    { path: "/agendamento", icon: Calendar, label: "Agendar" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border/50 z-50">
      <div className="flex justify-around items-center py-2 px-4">
        {navItems.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-300 min-w-0 flex-1 ${
              isActive(path)
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-primary hover:bg-accent/50"
            }`}
          >
            <Icon className={`w-5 h-5 mb-1 ${isActive(path) ? "scale-110" : ""}`} />
            <span className="text-xs font-medium truncate">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileBottomNav;