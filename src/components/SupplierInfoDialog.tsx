import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Phone, Mail } from "lucide-react";

interface SupplierInfoDialogProps {
  supplier: {
    name: string;
    location: string;
    rating: number;
    totalProducts: number;
    joinedDate: string;
    phone: string;
    email: string;
    description: string;
    specialties: string[];
  };
  children: React.ReactNode;
}

export function SupplierInfoDialog({ supplier, children }: SupplierInfoDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{supplier.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{supplier.location}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{supplier.rating}</span>
            <span className="text-sm text-muted-foreground">rating</span>
          </div>

          <Card>
            <CardContent className="pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Products</p>
                  <p className="font-semibold">{supplier.totalProducts}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Member since</p>
                  <p className="font-semibold">{supplier.joinedDate}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-2">
            <h4 className="font-semibold">Contact Information</h4>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{supplier.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{supplier.email}</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold">About</h4>
            <p className="text-sm text-muted-foreground">{supplier.description}</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold">Specialties</h4>
            <div className="flex flex-wrap gap-2">
              {supplier.specialties.map((specialty, index) => (
                <Badge key={index} variant="secondary">{specialty}</Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <Button className="flex-1">Contact Supplier</Button>
            <Button variant="outline" className="flex-1">View Products</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}