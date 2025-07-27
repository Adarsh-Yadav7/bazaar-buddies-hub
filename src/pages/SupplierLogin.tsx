import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useNavigate } from 'react-router-dom';
import { Store, ArrowLeft } from 'lucide-react';

const SupplierLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Signup form states
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [productTypes, setProductTypes] = useState<string[]>([]);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [deliveryAvailable, setDeliveryAvailable] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - navigate to supplier dashboard
    navigate('/supplier-dashboard');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }
    // Simulate signup - navigate to supplier dashboard
    navigate('/supplier-dashboard');
  };

  const productOptions = [
    'Fruits', 'Vegetables', 'Grains', 'Dairy', 'Meat', 'Seafood', 'Spices', 'Herbs'
  ];

  const handleProductTypeChange = (productType: string, checked: boolean) => {
    if (checked) {
      setProductTypes([...productTypes, productType]);
    } else {
      setProductTypes(productTypes.filter(type => type !== productType));
    }
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
              : 'Create your supplier account to start connecting with vendors'
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLogin ? (
            // Login Form
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="supplier@example.com"
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
                Sign In as Supplier
              </Button>
            </form>
          ) : (
            // Signup Form
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
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
                  placeholder="supplier@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessName">Business/Farm Name</Label>
                <Input
                  id="businessName"
                  type="text"
                  placeholder="Enter your business or farm name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location / Address</Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="Enter your location or address"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-3">
                <Label>Type of Products Supplied</Label>
                <div className="grid grid-cols-2 gap-2">
                  {productOptions.map((product) => (
                    <div key={product} className="flex items-center space-x-2">
                      <Checkbox
                        id={product}
                        checked={productTypes.includes(product)}
                        onCheckedChange={(checked) => 
                          handleProductTypeChange(product, checked as boolean)
                        }
                      />
                      <Label htmlFor={product} className="text-sm">
                        {product}
                      </Label>
                    </div>
                  ))}
                </div>
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
                  required
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
          
          {/* Toggle between login and signup */}
          <div className="text-center mt-4">
            <Button
              variant="link"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm"
            >
              {isLogin 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Sign in"
              }
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