import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, User, Menu, X, Store, Truck } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
              <Store className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Swasth Bazaar</h1>
              <p className="text-xs text-muted-foreground">Trusted Supply Chain</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#marketplace" className="text-foreground hover:text-primary transition-colors">
              Marketplace
            </a>
            <a href="/supplier-dashboard" className="text-foreground hover:text-primary transition-colors">
              Suppliers
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <LanguageSwitcher />
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs">
                3
              </Badge>
            </Button>
            
            <div className="hidden sm:flex space-x-2">
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-1" />
                Login
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-3">
              <a href="#marketplace" className="text-foreground hover:text-primary transition-colors">
                Marketplace
              </a>
              <a href="#suppliers" className="text-foreground hover:text-primary transition-colors">
                Suppliers
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <div className="py-2">
                <LanguageSwitcher />
              </div>
              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <User className="h-4 w-4 mr-1" />
                  Login
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-secondary">
                  Join Now
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
