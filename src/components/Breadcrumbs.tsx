import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  
  const getPageTitle = (pathname: string) => {
    switch (pathname) {
      case '/sobre':
        return 'Sobre a MugiX';
      case '/servicos':
        return 'Nossos Serviços';
      case '/diferenciais':
        return 'Nossos Diferenciais';
      default:
        return 'Home';
    }
  };

  if (location.pathname === '/') return null;

  return (
    <nav className="bg-neutral-50 border-b border-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 max-w-7xl">
        <div className="flex items-center space-x-2 text-sm">
          <Link 
            to="/" 
            className="flex items-center gap-1 text-neutral-600 hover:text-primary transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-4 h-4 text-neutral-400" />
          <span className="text-neutral-900 font-medium">
            {getPageTitle(location.pathname)}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumbs;