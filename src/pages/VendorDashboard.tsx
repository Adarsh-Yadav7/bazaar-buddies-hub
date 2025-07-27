import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { 
  ShoppingCart, 
  Search, 
  MessageCircle, 
  Star, 
  TrendingUp, 
  Package, 
  User,
  LogOut,
  Filter,
  Heart,
  DollarSign,
  Store
} from 'lucide-react';

const VendorDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const suppliers = [
    {
      id: 1,
      name: "Fresh Farm Co.",
      rating: 4.8,
      location: "Delhi, India",
      products: ["Vegetables", "Fruits", "Grains"],
      price: "₹500-2000/kg",
      verified: true,
      savings: "25%"
    },
    {
      id: 2,
      name: "Spice Masters",
      rating: 4.6,
      location: "Mumbai, India",
      products: ["Spices", "Herbs", "Condiments"],
      price: "₹200-1500/kg",
      verified: true,
      savings: "30%"
    },
    {
      id: 3,
      name: "Grain Valley",
      rating: 4.7,
      location: "Punjab, India",
      products: ["Rice", "Wheat", "Pulses"],
      price: "₹50-150/kg",
      verified: true,
      savings: "20%"
    }
  ];

  const recommendations = [
    "🌟 Best quality tomatoes at 20% off from Fresh Farm Co.",
    "💰 Bulk spice deals available from Spice Masters",
    "🚚 Same-day delivery available for grain orders"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Vendor Dashboard</h1>
                <p className="text-sm text-muted-foreground">Welcome back, Raj Kumar</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => navigate('/')}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* AI Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                  AI Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recommendations.map((rec, index) => (
                  <div key={index} className="p-3 bg-muted/50 rounded-lg text-sm">
                    {rec}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Orders & Savings Tracker */}
            <Card>
              <CardHeader>
                <CardTitle>Orders & Savings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Orders</span>
                  <span className="font-semibold">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">This Month</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Savings</span>
                  <span className="font-semibold text-accent">₹12,500</span>
                </div>
                <Button size="sm" className="w-full">
                  <Package className="mr-2 h-4 w-4" />
                  Track Orders
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search suppliers, products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                  <Button variant="outline">
                    <Heart className="mr-2 h-4 w-4" />
                    Favorites
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Verified Suppliers */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Browse Verified Suppliers</h2>
              <div className="grid gap-6">
                {suppliers.map((supplier) => (
                  <Card key={supplier.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-lg">
                            <Store className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h3 className="text-lg font-semibold">{supplier.name}</h3>
                              {supplier.verified && (
                                <Badge className="bg-accent text-accent-foreground">
                                  ✓ Verified
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{supplier.location}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 mb-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="font-semibold">{supplier.rating}</span>
                          </div>
                          <Badge variant="outline" className="text-accent">
                            {supplier.savings} savings
                          </Badge>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <h4 className="font-medium mb-2">Products</h4>
                          <div className="flex flex-wrap gap-1">
                            {supplier.products.map((product, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {product}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Price Range</h4>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
                            <span className="text-sm">{supplier.price}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Chat
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            Compare
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Frequently used features for faster access</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-20 flex-col">
                    <MessageCircle className="h-6 w-6 mb-2" />
                    <span>Chat with Suppliers</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Package className="h-6 w-6 mb-2" />
                    <span>Track My Orders</span>
                  </Button>
                  <Button
  variant="outline"
  className="h-20 flex-col"
  onClick={() => navigate('/analytics')}
>
  <TrendingUp className="h-6 w-6 mb-2" />
  <span>View Analytics</span>
</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;