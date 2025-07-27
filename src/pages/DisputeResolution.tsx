import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function DisputeResolution() {
  const [disputeForm, setDisputeForm] = useState({
    orderNumber: "",
    disputeType: "",
    description: "",
    contactEmail: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dispute submitted:", disputeForm);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Dispute Resolution</h1>
          <p className="text-muted-foreground">We're here to help resolve any issues</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>File a Dispute</CardTitle>
              <CardDescription>Let us know about any issues with your order</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="orderNumber">Order Number</Label>
                  <Input
                    id="orderNumber"
                    value={disputeForm.orderNumber}
                    onChange={(e) => setDisputeForm({...disputeForm, orderNumber: e.target.value})}
                    placeholder="Enter order number"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="disputeType">Type of Issue</Label>
                  <Select value={disputeForm.disputeType} onValueChange={(value) => setDisputeForm({...disputeForm, disputeType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select issue type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quality">Product Quality Issue</SelectItem>
                      <SelectItem value="delivery">Delivery Problem</SelectItem>
                      <SelectItem value="payment">Payment Issue</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={disputeForm.contactEmail}
                    onChange={(e) => setDisputeForm({...disputeForm, contactEmail: e.target.value})}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={disputeForm.description}
                    onChange={(e) => setDisputeForm({...disputeForm, description: e.target.value})}
                    placeholder="Please describe the issue in detail..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full">Submit Dispute</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Dispute Resolution Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">1. Submit Your Dispute</h4>
                  <p className="text-sm text-muted-foreground">Fill out the form with details about your issue</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">2. Investigation</h4>
                  <p className="text-sm text-muted-foreground">Our team will review your case within 24 hours</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">3. Resolution</h4>
                  <p className="text-sm text-muted-foreground">We'll work with both parties to find a fair solution</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">4. Follow-up</h4>
                  <p className="text-sm text-muted-foreground">We'll ensure the resolution is implemented properly</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Immediate Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Support Email</h4>
                  <p className="text-muted-foreground">disputes@agribazaar.com</p>
                </div>
                <div>
                  <h4 className="font-semibold">Phone Support</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className="font-semibold">Business Hours</h4>
                  <p className="text-muted-foreground">Monday - Friday: 9 AM - 6 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}