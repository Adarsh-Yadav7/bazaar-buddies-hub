// App.tsx
import { AuthProvider } from "@/context/AuthContext"; // 👈 import this
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VendorLogin from "./pages/VendorLogin";
import SupplierLogin from "./pages/SupplierLogin";
import VendorDashboard from "./pages/VendorDashboard";
import SupplierDashboard from "./pages/SupplierDashboard";
import Analytics from "./pages/Analytics";
import TrackOrders from './pages/TrackOrders';
import ChatWithSupplier from './pages/ChatWithSupplier';
import CompareSuppliers from './pages/CompareSuppliers';

import AddProduct from "./pages/AddProduct";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider> {/* 👈 wrap everything */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/SupplierDashboard" element={<SupplierDashboard />} />
            <Route path="/vendor-login" element={<VendorLogin />} />
            <Route path="/supplier-login" element={<SupplierLogin />} />
            <Route path="/vendor-dashboard" element={<VendorDashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/track-orders" element={<TrackOrders />} />
            <Route path="/chat" element={<ChatWithSupplier />} />
            <Route path="/compare" element={<CompareSuppliers />} />
            <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
