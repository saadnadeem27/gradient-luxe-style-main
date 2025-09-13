import { Button } from "@/components/ui/button";
import { Menu, Search, ShoppingBag, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-cream/95 backdrop-blur-xl border-b border-luxury-gold/20 shadow-xl">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-300">
              <h1 className="text-3xl font-bold tracking-tight text-luxury-midnight">
                ÉLÉGANCE
              </h1>
              <div className="ml-2 w-2 h-2 bg-luxury-gold rounded-full"></div>
            </Link>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link 
              to="/" 
              className={`text-luxury-midnight hover:text-luxury-gold transition-all duration-300 font-medium text-sm uppercase tracking-widest hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-luxury-gold after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/' ? 'text-luxury-gold after:w-full' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/collections" 
              className={`text-luxury-midnight hover:text-luxury-gold transition-all duration-300 font-medium text-sm uppercase tracking-widest hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-luxury-gold after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/collections' ? 'text-luxury-gold after:w-full' : ''}`}
            >
              Collections
            </Link>
            <Link 
              to="/women" 
              className={`text-luxury-midnight hover:text-luxury-gold transition-all duration-300 font-medium text-sm uppercase tracking-widest hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-luxury-gold after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/women' ? 'text-luxury-gold after:w-full' : ''}`}
            >
              Women
            </Link>
            <Link 
              to="/men" 
              className={`text-luxury-midnight hover:text-luxury-gold transition-all duration-300 font-medium text-sm uppercase tracking-widest hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-luxury-gold after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/men' ? 'text-luxury-gold after:w-full' : ''}`}
            >
              Men
            </Link>
            <Link 
              to="/about" 
              className={`text-luxury-midnight hover:text-luxury-gold transition-all duration-300 font-medium text-sm uppercase tracking-widest hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-luxury-gold after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/about' ? 'text-luxury-gold after:w-full' : ''}`}
            >
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hover:bg-luxury-gold/10 hover:text-luxury-gold text-luxury-midnight transition-all duration-300">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-luxury-gold/10 hover:text-luxury-gold text-luxury-midnight transition-all duration-300">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-luxury-gold/10 hover:text-luxury-gold text-luxury-midnight transition-all duration-300 relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-luxury-gold text-luxury-midnight text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">2</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-luxury-gold/10 hover:text-luxury-gold text-luxury-midnight transition-all duration-300">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;