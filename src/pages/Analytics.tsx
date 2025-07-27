import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { BarChart, Bar, Legend } from "recharts";
import { PieChart, Pie, Cell } from "recharts";



export default function Analytics() {
  const [data, setData] = useState([
    { time: "10:00", orders: 2, revenue: 200 },
    { time: "11:00", orders: 4, revenue: 400 },
    { time: "12:00", orders: 3, revenue: 350 },
    { time: "13:00", orders: 5, revenue: 600 },
    { time: "14:00", orders: 6, revenue: 800 },
  ]);
  const [productSales, setProductSales] = useState([
  { name: "Samosa", sales: 120 },
  { name: "Chaat", sales: 98 },
  { name: "Pav Bhaji", sales: 80 },
  { name: "Dosa", sales: 65 },
  ]);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const [userTypes, setUserTypes] = useState([
  { name: "Vendors", value: 400 },
  { name: "Suppliers", value: 300 },
  { name: "Customers", value: 300 },
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => [
        ...prev.slice(1),
        {
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          orders: Math.floor(Math.random() * 10),
          revenue: Math.floor(Math.random() * 1000),
        },
      ]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Real-Time Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="orders" stroke="#8884d8" name="Orders" />
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" name="Revenue" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="mt-8">
  <CardHeader>
    <CardTitle>Product Sales</CardTitle>
  </CardHeader>
  <CardContent>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={productSales}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" name="Sales" />
      </BarChart>
    </ResponsiveContainer>
  </CardContent>
</Card>
<Card className="mt-8">
  <CardHeader>
    <CardTitle>User Distribution</CardTitle>
  </CardHeader>
  <CardContent>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={userTypes}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {userTypes.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </CardContent>
</Card>
      </div>
    </div>
  );
}