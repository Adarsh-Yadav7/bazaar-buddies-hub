import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { useAuth } from "@/context/AuthContext"; // ✅

const VendorLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn } = useAuth(); 

  // Signup form states
  const [vendorName, setVendorName] = useState('');
  const [shopName, setShopName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/vendors/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (data.message === 'Login successful') {
        setIsLoggedIn(true);
        toast({
          title: 'Login Successful',
          description: 'Welcome back! Redirecting to your home page...',
        });
        setTimeout(() => navigate('/vendor-dashboard'), 1500);
      } else {
        toast({
          title: 'Login Failed',
          description: data.message || 'Invalid credentials.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Login Error',
        description: 'Server connection failed.',
        variant: 'destructive',
      });
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!termsAccepted) {
      toast({
        title: 'Terms Not Accepted',
        description: 'You must accept the terms and conditions.',
        variant: 'destructive',
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/vendors/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vendorName,
          shopName,
          email,
          password,
          phoneNumber,
          location,
          productCategory
        })
      });

      const data = await response.json();

      if (data.message === 'Vendor registered successfully') {
        toast({
          title: 'Signup Successful',
          description: 'Account created! Please log in.',
        });

        // Reset form and switch to login mode
        setVendorName('');
        setShopName('');
        setEmail('');
        setPassword('');
        setPhoneNumber('');
        setLocation('');
        setProductCategory('');
        setTermsAccepted(false);
        setIsLogin(true);
      } else {
        toast({
          title: 'Signup Failed',
          description: data.message || 'Something went wrong.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Signup Error',
        description: 'Unable to reach server.',
        variant: 'destructive',
      });
    }
  };

  const productCategories = [
    'Fruits & Vegetables', 'Grains & Cereals', 'Dairy Products', 'Meat & Poultry',
    'Seafood', 'Spices & Herbs', 'Beverages', 'Bakery Items', 'Organic Products', 'Other'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full w-16 h-16 mx-auto mb-4">
            <ShoppingCart className="h-10 w-10 text-white" />
          </div>
          <CardTitle className="text-2xl">
            {isLogin ? 'Vendor Login' : 'Vendor Sign Up'}
          </CardTitle>
          <CardDescription>
            {isLogin
              ? 'Sign in to your vendor account to access suppliers and manage orders'
              : 'Create your vendor account to start connecting with suppliers'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLogin ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="vendor@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Sign In as Vendor
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="vendorName">Vendor Name / Full Name</Label>
                <Input
                  id="vendorName"
                  type="text"
                  placeholder="Enter your full name"
                  value={vendorName}
                  onChange={(e) => setVendorName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="shopName">Shop Name 🏪</Label>
                <Input
                  id="shopName"
                  type="text"
                  placeholder="Enter your shop name"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signupEmail">Email Address</Label>
                <Input
                  id="signupEmail"
                  type="email"
                  placeholder="vendor@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location / City</Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="Enter your city or location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="productCategory">Product Category</Label>
                <Select value={productCategory} onValueChange={setProductCategory} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select product category" />
                  </SelectTrigger>
                  <SelectContent>
                    {productCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signupPassword">Password</Label>
                <Input
                  id="signupPassword"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                  required
                />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the Terms and Conditions
                </Label>
              </div>

              <Button type="submit" className="w-full">
                Create Vendor Account
              </Button>
            </form>
          )}

          <div className="text-center mt-4">
            <Button
              variant="link"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </Button>
          </div>

          <Button
            variant="ghost"
            className="w-full mt-2"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorLogin;
