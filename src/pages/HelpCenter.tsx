import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search } from "lucide-react";

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqData = [
    {
      question: "How do I register as a supplier?",
      answer: "To register as a supplier, click on 'Join as Supplier' button and fill out the registration form with your business details."
    },
    {
      question: "How do I place an order?",
      answer: "Browse products, add them to cart, and proceed to checkout. You can track your order status in your dashboard."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards, bank transfers, and digital payment methods."
    },
    {
      question: "How do I track my order?",
      answer: "Log into your account and go to 'My Orders' section to track all your orders in real-time."
    },
    {
      question: "What is the return policy?",
      answer: "Returns are accepted within 7 days of delivery for perishable goods and 30 days for non-perishable items."
    }
  ];

  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Help Center</h1>
          <p className="text-muted-foreground">Find answers to common questions</p>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>For Suppliers</CardTitle>
                <CardDescription>Learn how to sell on our platform</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Setting up your store</li>
                  <li>• Managing inventory</li>
                  <li>• Order fulfillment</li>
                  <li>• Payment processing</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>For Vendors</CardTitle>
                <CardDescription>Guide for purchasing agricultural products</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Finding products</li>
                  <li>• Placing orders</li>
                  <li>• Payment options</li>
                  <li>• Delivery tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technical Support</CardTitle>
                <CardDescription>Technical issues and troubleshooting</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Account issues</li>
                  <li>• Payment problems</li>
                  <li>• Website bugs</li>
                  <li>• Mobile app support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}