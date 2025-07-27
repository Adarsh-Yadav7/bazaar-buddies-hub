import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  Shield, 
  Brain, 
  MessageCircle, 
  TrendingUp, 
  Clock, 
  MapPin,
  Star,
  Truck,
  CreditCard
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Suppliers",
      description: "All suppliers verified with Govt ID and Udyam registration for complete trust and reliability.",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "AI Recommendations",
      description: "Smart suggestions for best prices, quality suppliers, and demand forecasting for your business.",
      color: "text-accent"
    },
    {
      icon: MessageCircle,
      title: "24/7 Service",
      description: "24/7 Customer service available.",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      title: "Price Trends",
      description: "Track price movements for vegetables, grains, and spices with AI-powered predictions.",
      color: "text-primary"
    },
    {
      icon: Star,
      title: "Rating & Reviews",
      description: "Community-driven ratings help you choose the best suppliers based on real vendor experiences.",
      color: "text-accent"
    },
    {
      icon: MapPin,
      title: "Location-Based",
      description: "Find suppliers near you for fresh products and reduced delivery times and costs.",
      color: "text-secondary"
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Live inventory updates, order tracking, and instant notifications for seamless operations.",
      color: "text-primary"
    },
    {
      icon: Truck,
      title: "Delivery Tracking",
      description: "End-to-end order tracking with delivery scheduling and success rate monitoring.",
      color: "text-accent"
    },
    {
      icon: CreditCard,
      title: "Flexible Payments",
      description: "Multiple payment options: Cash on delivery, UPI, digital wallets, and credit terms.",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Why Choose Swasth Bazaar
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Everything You Need for Your Food Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI-powered recommendations to verified suppliers, we provide comprehensive tools 
            to help your street food business thrive in the digital marketplace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-muted/50 p-3 rounded-lg group-hover:bg-primary/10 transition-colors">
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Active Vendors</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-muted-foreground">Verified Suppliers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">₹10L+</div>
              <div className="text-muted-foreground">Monthly Transactions</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">30%</div>
              <div className="text-muted-foreground">Average Savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;