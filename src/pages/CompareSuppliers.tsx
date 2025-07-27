import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const CompareSuppliers = () => {
  const navigate = useNavigate();

  const suppliers = [
    {
      name: 'Fresh Farm Co.',
      rating: 4.8,
      location: 'Delhi, India',
      products: ['Vegetables', 'Fruits', 'Grains'],
      price: '₹500-2000/kg',
      savings: '25%',
    },
    {
      name: 'Spice Masters',
      rating: 4.6,
      location: 'Mumbai, India',
      products: ['Spices', 'Herbs', 'Condiments'],
      price: '₹200-1500/kg',
      savings: '30%',
    },
    {
      name: 'Grain Valley',
      rating: 4.9,
      location: 'Punjab, India',
      products: ['Rice', 'Wheat', 'Pulses'],
      price: '₹50-150/kg',
      savings: '28%',
    },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <Card className="max-w-5xl mx-auto shadow-lg">
        <CardHeader className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <CardTitle className="text-xl">Compare Suppliers</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/vendor-dashboard')}
            className="text-sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </CardHeader>

        <CardContent className="overflow-x-auto">
          <table className="w-full border rounded-md text-sm text-left">
            <thead className="bg-muted/40 font-semibold">
              <tr>
                <th className="p-3 border">Supplier</th>
                <th className="p-3 border">Location</th>
                <th className="p-3 border">Products</th>
                <th className="p-3 border">Rating</th>
                <th className="p-3 border">Price Range</th>
                <th className="p-3 border">Savings</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((s, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3 border">{s.name}</td>
                  <td className="p-3 border">{s.location}</td>
                  <td className="p-3 border">
                    {s.products.map((p) => (
                      <span
                        key={p}
                        className="inline-block bg-muted px-2 py-1 text-xs rounded mr-1 mb-1"
                      >
                        {p}
                      </span>
                    ))}
                  </td>
                  <td className="p-3 border">{s.rating}</td>
                  <td className="p-3 border">{s.price}</td>
                  <td className="p-3 border">{s.savings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompareSuppliers;
