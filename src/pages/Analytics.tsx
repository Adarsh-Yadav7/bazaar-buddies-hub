import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function Analytics() {
  const [data, setData] = useState([
    { time: "10:00", orders: 2, revenue: 200 },
    { time: "11:00", orders: 4, revenue: 400 },
    { time: "12:00", orders: 3, revenue: 350 },
    { time: "13:00", orders: 5, revenue: 600 },
    { time: "14:00", orders: 6, revenue: 800 },
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
      </div>
    </div>
  );
}