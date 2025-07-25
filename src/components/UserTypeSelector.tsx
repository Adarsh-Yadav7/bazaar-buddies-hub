import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Store, TrendingUp, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UserTypeSelector = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Choose Your Path
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Join Swasth Bazaar Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a street food vendor looking for quality supplies or a supplier wanting to reach more customers, 
            we have the perfect solution for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vendor Card */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30 group">
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-full w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ShoppingCart className="h-12 w-12 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">I'm a Vendor</h3>
              <p className="text-muted-foreground mb-6">
                Street food vendor looking for quality raw materials at wholesale prices
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-left">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">Browse verified suppliers</span>
                </div>
                <div className="flex items-center text-left">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">Compare prices and quality</span>
                </div>
                <div className="flex items-center text-left">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">AI-powered recommendations</span>
                </div>
                <div className="flex items-center text-left">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">Direct chat with suppliers</span>
                </div>
                <div className="flex items-center text-left">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">Track orders & savings</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 group-hover:scale-105 transition-transform"
                onClick={() => navigate('/vendor-login')}
              >
                Start as Vendor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  500+ Vendors
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  30% Savings
                </div>
              </div>
            </div>
          </Card>

          {/* Supplier Card */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/30 group">
            <div className="text-center">
              <div className="bg-gradient-to-r from-accent to-primary p-4 rounded-full w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Store className="h-12 w-12 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">I'm a Supplier</h3>
              <p className="text-muted-foreground mb-6">
                Wholesaler or farmer wanting to sell directly to street food vendors
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-left">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">List products with photos</span>
                </div>
                <div className="flex items-center text-left">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">Reach 500+ vendors</span>
                </div>
                <div className="flex items-center text-left">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">Real-time order management</span>
                </div>
                <div className="flex items-center text-left">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">Build trust with ratings</span>
                </div>
                <div className="flex items-center text-left">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">Verified badge system</span>
                </div>
              </div>

              <Button 
                size="lg" 
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground group-hover:scale-105 transition-transform"
                onClick={() => navigate('/supplier-login')}
              >
                Start as Supplier
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Store className="h-4 w-4 mr-1" />
                  100+ Suppliers
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  3x Growth
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UserTypeSelector;