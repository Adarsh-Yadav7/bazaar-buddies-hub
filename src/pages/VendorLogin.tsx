import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { useAuth } from "@/context/AuthContext"; // ✅

const VendorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleDirectLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    toast({
      title: 'Login Successful',
      description: 'Welcome! Redirecting to vendor dashboard...',
    });
    setTimeout(() => navigate('/vendor-dashboard'), 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full w-16 h-16 mx-auto mb-4">
            <ShoppingCart className="h-10 w-10 text-white" />
          </div>
          <CardTitle className="text-2xl">Vendor Login</CardTitle>
          <CardDescription>
            Direct login enabled. Click login to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleDirectLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Anything works..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Anything works..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Login (Skip Auth)
            </Button>
          </form>

          <Button
            variant="ghost"
            className="w-full mt-4"
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
