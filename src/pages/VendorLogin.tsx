import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { useAuth } from '@/context/AuthContext';

const VendorAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    vendorName: '',
    shopName: '',
    email: '',
    password: '',
    phoneNumber: '',
    location: '',
    productCategory: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const url = isLogin
      ? 'http://localhost:5000/api/vendors/login'
      : 'http://localhost:5000/api/vendors/signup';

    const payload = isLogin
      ? { email: form.email, password: form.password }
      : form;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        if (isLogin) {
          throw new Error(data.message || 'No user found. Please sign up.');
        } else {
          throw new Error(data.message || 'Signup failed');
        }
      }

      if (isLogin) {
        localStorage.setItem('vendorToken', data.token);
        setIsLoggedIn(true);
        toast({
          title: 'Login Successful',
          description: `Welcome ${data.vendor.vendorName}`
        });
        setTimeout(() => navigate('/vendor-dashboard'), 1200);
      } else {
        toast({
          title: 'Signup Successful',
          description: 'Please login to continue.'
        });
        setIsLogin(true);
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast({
        title: isLogin ? 'Login Failed' : 'Signup Failed',
        description: err.message,
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full w-16 h-16 mx-auto mb-4">
            <ShoppingCart className="h-10 w-10 text-white" />
          </div>
          <CardTitle className="text-2xl">{isLogin ? 'Vendor Login' : 'Vendor Signup'}</CardTitle>
          <CardDescription>
            {isLogin ? 'Enter your credentials to login securely.' : 'Fill the form to register.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <Input name="vendorName" placeholder="Vendor Name" value={form.vendorName} onChange={handleChange} required />
                <Input name="shopName" placeholder="Shop Name" value={form.shopName} onChange={handleChange} required />
                <Input name="phoneNumber" placeholder="Phone Number" value={form.phoneNumber} onChange={handleChange} required />
                <Input name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
                <Input name="productCategory" placeholder="Product Category" value={form.productCategory} onChange={handleChange} required />
              </>
            )}
            <Input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <Input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (isLogin ? 'Logging in...' : 'Signing up...') : isLogin ? 'Login' : 'Sign up'}
            </Button>
          </form>

          <Button variant="link" className="w-full mt-2" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
          </Button>

          <Button variant="ghost" className="w-full mt-2" onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorAuth;
