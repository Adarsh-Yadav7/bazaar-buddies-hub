import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, User, Menu, X, Store } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleProtectedClick = (path: string) => {
    if (!isLoggedIn) {
      alert("Please login to access this section.");
      navigate("/supplier-login");
    } else {
      navigate(path);
    }
  };

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

          {/* Desktop Navigation - Always show */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => handleProtectedClick("/marketplace")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Marketplace
            </button>
            <button
              onClick={() => handleProtectedClick("/SupplierDashboard")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Suppliers
            </button>
            <button
              onClick={() => handleProtectedClick("/about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
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

            {!isLoggedIn && (
              <div className="hidden sm:flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate("/supplier-login")}
                >
                  <User className="h-4 w-4 mr-1" />
                  Login
                </Button>
              </div>
            )}

            {/* Mobile Menu Toggle */}
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
              <button
                onClick={() => handleProtectedClick("/marketplace")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Marketplace
              </button>
              <button
                onClick={() => handleProtectedClick("/SupplierDashboard")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Suppliers
              </button>
              <button
                onClick={() => handleProtectedClick("/about")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <div className="py-2">
                <LanguageSwitcher />
              </div>

              {!isLoggedIn && (
                <div className="flex space-x-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate("/supplier-login")}
                  >
                    <User className="h-4 w-4 mr-1" />
                    Login
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-secondary"
                    onClick={() => navigate("/supplier-signup")}
                  >
                    Join Now
                  </Button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
