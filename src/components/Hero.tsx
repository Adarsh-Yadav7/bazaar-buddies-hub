import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Users, TrendingUp, Shield, ArrowRight } from 'lucide-react';
import heroBazaar from '@/assets/hero-bazaar.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBazaar} 
          alt="Indian bazaar with fresh vegetables and spices"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <Badge className="mb-4 bg-primary/20 text-primary-light border-primary/30">
              🚀 Revolutionizing Street Food Supply Chain
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Swasth Bazaar
              </span>
              <br />
              <span className="text-white">
                Trusted Supply Chain for Street Food Vendors
              </span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Connect directly with verified suppliers. Get quality raw materials at wholesale prices. 
              Build your business with AI-powered recommendations and trusted partnerships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Start Buying
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Users className="mr-2 h-5 w-5" />
                Become Supplier
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-gray-300">Active Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">100+</div>
                <div className="text-sm text-gray-300">Verified Suppliers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">30%</div>
                <div className="text-sm text-gray-300">Cost Savings</div>
              </div>
            </div>
          </div>

          {/* Features Cards */}
          <div className="space-y-4">
            <div className="bg-card/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <div className="bg-primary/20 p-2 rounded-lg mr-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white">Verified Suppliers</h3>
              </div>
              <p className="text-gray-200">
                All suppliers verified with government ID and business licenses for your safety.
              </p>
            </div>

            <div className="bg-card/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <div className="bg-accent/20 p-2 rounded-lg mr-3">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white">AI Price Predictions</h3>
              </div>
              <p className="text-gray-200">
                Smart recommendations and price trend analysis to help you make better decisions.
              </p>
            </div>

            <div className="bg-card/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <div className="bg-secondary/20 p-2 rounded-lg mr-3">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-white">Community Trust</h3>
              </div>
              <p className="text-gray-200">
                Rating system and reviews from real vendors to build lasting partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;