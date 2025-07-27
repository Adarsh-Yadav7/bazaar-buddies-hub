import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertTitle } from "@/components/ui/alert";

interface Product {
  name: string;
  price: string;
  stock: string;
  orders: string;
  category: string;
  description: string;
}

export default function AddProduct() {
  const [product, setProduct] = useState<Product>({
    name: "",
    price: "",
    stock: "",
    orders: "",
    category: "",
    description: "",
  });

  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const data = await response.json();

    if (response.ok) {
      setSuccess(true); // Show popup
      setTimeout(() => {
        navigate("/supplier-dashboard"); // Redirect after 2 sec
      }, 2000);
    } else {
      alert("Error adding product: " + data.message);
    }
  };

  return (
    <Card className="max-w-xl mx-auto mt-10">
      <CardHeader>
        <CardTitle>Add Product</CardTitle>
      </CardHeader>
      <CardContent>
        {success && (
          <Alert className="mb-4 bg-green-100 text-green-800 border border-green-300">
            <AlertTitle>Product added successfully!</AlertTitle>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <Label htmlFor="name">Product Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Price */}
          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              type="number"
              name="price"
              id="price"
              value={product.price}
              onChange={handleChange}
              required
            />
          </div>

          {/* Stock */}
          <div>
            <Label htmlFor="stock">Stock</Label>
            <Input
              type="number"
              name="stock"
              id="stock"
              value={product.stock}
              onChange={handleChange}
              required
            />
          </div>

          {/* Orders */}
          <div>
            <Label htmlFor="orders">Orders</Label>
            <Input
              type="number"
              name="orders"
              id="orders"
              value={product.orders}
              onChange={handleChange}
              required
            />
          </div>

          {/* Category */}
          <div>
            <Label htmlFor="category">Category</Label>
            <Input
              type="text"
              name="category"
              id="category"
              value={product.category}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              name="description"
              id="description"
              rows={3}
              value={product.description}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full" disabled={success}>
            Add Product
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
