import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store, ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/context/AuthContext';

const SupplierLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [selectedProductType, setSelectedProductType] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [deliveryAvailable, setDeliveryAvailable] = useState(false);

  const { toast } = useToast();
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const productOptions = [
    'Fruits', 'Vegetables', 'Grains', 'Dairy', 'Meat', 'Seafood', 'Spices', 'Herbs'
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Direct login (skip API)
    setIsLoggedIn(true);
    toast({
      title: 'Login Successful',
      description: 'Welcome back! Redirecting...',
    });
    setTimeout(() => navigate('/supplier-dashboard'), 1000);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (!termsAccepted) {
      toast({
        title: 'Terms Not Accepted',
        description: 'You must accept the terms and conditions.',
        variant: 'destructive',
      });
      return;
    }

    // Direct signup (skip API)
    toast({
      title: 'Signup Successful',
      description: 'Account created! Redirecting...',
    });

    setIsLoggedIn(true);
    setTimeout(() => navigate('/supplier-dashboard'), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/5 to-primary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="bg-gradient-to-r from-accent to-primary p-3 rounded-full w-16 h-16 mx-auto mb-4">
            <Store className="h-10 w-10 text-white" />
          </div>
          <CardTitle className="text-2xl">
            {isLogin ? 'Supplier Login' : 'Supplier Sign Up'}
          </CardTitle>
          <CardDescription>
            {isLogin
              ? 'Sign in to your supplier account to manage products and connect with vendors'
              : 'Create your supplier account to start connecting with vendors'}
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
                  placeholder="supplier@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                />
              </div>

              <Button type="submit" className="w-full">
                Sign In as Supplier
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
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
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signupEmail">Email Address</Label>
                <Input
                  id="signupEmail"
                  type="email"
                  placeholder="supplier@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessName">Business/Farm Name</Label>
                <Input
                  id="businessName"
                  type="text"
                  placeholder="Your business or farm name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location / Address</Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="Location or address"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="productType">Type of Products Supplied</Label>
                <Select
                  value={selectedProductType}
                  onValueChange={setSelectedProductType}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select product type" />
                  </SelectTrigger>
                  <SelectContent>
                    {productOptions.map((product) => (
                      <SelectItem key={product} value={product}>
                        {product}
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
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="delivery"
                  checked={deliveryAvailable}
                  onCheckedChange={(checked) => setDeliveryAvailable(checked as boolean)}
                />
                <Label htmlFor="delivery" className="text-sm">
                  Delivery Available?
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the Terms and Conditions
                </Label>
              </div>

              <Button type="submit" className="w-full">
                Create Supplier Account
              </Button>
            </form>
          )}

          <div className="text-center mt-4">
            <Button
              variant="link"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"}
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

export default SupplierLogin;
