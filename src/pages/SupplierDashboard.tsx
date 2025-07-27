import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { SupplierInfoDialog } from "@/components/SupplierInfoDialog";

import { 
  Store, 
  Plus, 
  Star, 
  Users, 
  Package, 
  LogOut,
  Camera,
  Eye,
  Edit,
  TrendingUp,
  CheckCircle,
  Clock
} from 'lucide-react';

const SupplierDashboard = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Fresh Tomatoes",
      price: "₹40/kg",
      stock: "500kg",
      image: "🍅",
      orders: 12,
      rating: 4.8
    },
    {
      id: 2,
      name: "Organic Potatoes",
      price: "₹30/kg",
      stock: "800kg",
      image: "🥔",
      orders: 8,
      rating: 4.6
    },
    {
      id: 3,
      name: "Premium Onions",
      price: "₹25/kg",
      stock: "600kg",
      image: "🧅",
      orders: 15,
      rating: 4.9
    }
  ];

  const orders = [
    {
      id: 1,
      vendor: "Raj's Food Cart",
      product: "Fresh Tomatoes",
      quantity: "50kg",
      amount: "₹2,000",
      status: "pending",
      time: "2 hours ago"
    },
    {
      id: 2,
      vendor: "Street Kitchen Pro",
      product: "Organic Potatoes",
      quantity: "30kg",
      amount: "₹900",
      status: "confirmed",
      time: "4 hours ago"
    },
    {
      id: 3,
      vendor: "Tasty Bites",
      product: "Premium Onions",
      quantity: "20kg",
      amount: "₹500",
      status: "delivered",
      time: "1 day ago"
    }
  ];
  const vendors = {
  "Raj's Food Cart": {
    name: "Raj's Food Cart",
    location: "Mumbai, India",
    rating: 4.7,
    totalProducts: 23,
    joinedDate: "Feb 2023",
    phone: "+91 9988776655",
    email: "raj@foodcart.in",
    description: "Local vendor specializing in fresh produce for street-style cuisine.",
    specialties: ["Street Food", "Vegetables", "Spices"],
  },
  "Street Kitchen Pro": {
    name: "Street Kitchen Pro",
    location: "Delhi, India",
    rating: 4.5,
    totalProducts: 45,
    joinedDate: "May 2022",
    phone: "+91 9876543210",
    email: "info@streetkitchen.pro",
    description: "Modern food cart vendor serving high-volume orders daily.",
    specialties: ["Bulk Orders", "Potatoes", "Fast Service"],
  },
  "Tasty Bites": {
    name: "Tasty Bites",
    location: "Bangalore, India",
    rating: 4.9,
    totalProducts: 18,
    joinedDate: "Aug 2021",
    phone: "+91 9123456780",
    email: "contact@tastybites.in",
    description: "Trusted partner for high-quality ingredients and timely orders.",
    specialties: ["Onions", "Fresh Produce", "Daily Delivery"],
  },
};


  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-accent to-primary p-2 rounded-lg">
                <Store className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Supplier Dashboard</h1>
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-muted-foreground">Fresh Farm Co.</p>
                  <Badge className="bg-accent text-accent-foreground">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    Verified
                  </Badge>
                </div>
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
            {/* Stats Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-accent" />
                  Your Reach
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">542</div>
                  <div className="text-sm text-muted-foreground">Active Vendors</div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">This Month</span>
                  <span className="font-semibold">+48</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Rating</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                    <span className="font-semibold">4.8</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust & Verification */}
            <Card>
              <CardHeader>
                <CardTitle>Trust Score</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Verification</span>
                  <Badge className="bg-accent text-accent-foreground">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    Verified
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Trust Score</span>
                  <span className="font-semibold text-accent">95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Reviews</span>
                  <span className="font-semibold">127</span>
                </div>
                <Button size="sm" className="w-full">
                  Boost Trust Score
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Products Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Your Products</h2>
                <Button className="bg-accent hover:bg-accent/90">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Product
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {products.map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-3">{product.image}</div>
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <p className="text-2xl font-bold text-accent">{product.price}</p>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Stock:</span>
                          <span className="font-medium">{product.stock}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Orders:</span>
                          <span className="font-medium">{product.orders}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Rating:</span>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                            <span className="font-medium">{product.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Camera className="mr-2 h-4 w-4" />
                          Photo
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Real-time Orders */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="mr-2 h-5 w-5" />
                  Real-time Order Management
                </CardTitle>
                <CardDescription>
                  Manage and track all incoming orders from vendors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold">{order.vendor}</h4>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {order.product} - {order.quantity}
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          {order.time}
                        </div>
                      </div>
<div className="flex gap-2">
  <SupplierInfoDialog supplier={vendors[order.vendor]}>
    <Button size="sm" variant="outline">
      <Eye className="mr-1 h-3 w-3" />
      View
    </Button>
  </SupplierInfoDialog>

  {order.status === 'pending' && (
    <Button size="sm">Accept</Button>
  )}
</div>

                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your supplier business efficiently</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-20 flex-col">
                    <Plus className="h-6 w-6 mb-2" />
                    <span>Add Product</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Users className="h-6 w-6 mb-2" />
                    <span>View Vendors</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Star className="h-6 w-6 mb-2" />
                    <span>Ratings</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <TrendingUp className="h-6 w-6 mb-2" />
                    <span>Analytics</span>
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

export default SupplierDashboard;
