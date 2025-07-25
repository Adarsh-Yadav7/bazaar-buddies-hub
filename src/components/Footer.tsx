import { Button } from '@/components/ui/button';
import { Store, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                <Store className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Swasth Bazaar</h3>
                <p className="text-sm text-muted-foreground">Trusted Supply Chain</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Connecting street food vendors with verified suppliers for a thriving food ecosystem.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#marketplace" className="text-muted-foreground hover:text-primary transition-colors">Marketplace</a></li>
              <li><a href="#suppliers" className="text-muted-foreground hover:text-primary transition-colors">Find Suppliers</a></li>
              <li><a href="#vendors" className="text-muted-foreground hover:text-primary transition-colors">Join as Vendor</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#disputes" className="text-muted-foreground hover:text-primary transition-colors">Dispute Resolution</a></li>
              <li><a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@swasthbazaar.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm">123 Tech Park, Bangalore, Karnataka 560001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Swasth Bazaar. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms</a>
            <a href="#privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy</a>
            <a href="#cookies" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;