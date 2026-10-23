import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ScrollToAnchor from "./components/ScrollToAnchor";
import Footer from "./components/Footer";
import RouteSeoManager from "./seo/RouteSeoManager";
import RouteLoadingFallback from "./components/RouteLoadingFallback";

// Lazy-loaded route components for Core Web Vitals and bundle splitting
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const SensorProductDetail = lazy(() => import("./pages/SensorProductDetail"));
const WaterTreatmentProductDetail = lazy(() => import("./pages/WaterTreatmentProductDetail"));
const HandlingProductDetail = lazy(() => import("./pages/HandlingProductDetail"));
const FiltrationProductDetail = lazy(() => import("./pages/FiltrationProductDetail"));
const LubricationProductDetail = lazy(() => import("./pages/LubricationProductDetail"));
const SpmProductDetail = lazy(() => import("./pages/SpmProductDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const Schedule = lazy(() => import("./pages/Schedule"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const Flipbook = lazy(() => import("./pages/Flipbook"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

// Asynchronously loaded auxiliary widgets
const CustomerChatbot = lazy(() => import("./components/CustomerChatbot"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteSeoManager />
        <ScrollToAnchor />
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Suspense fallback={<RouteLoadingFallback />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/sensors/:productname" element={<SensorProductDetail />} />
                <Route path="/products/water-treatment/:productname" element={<WaterTreatmentProductDetail />} />
                <Route path="/products/handling/:productname" element={<HandlingProductDetail />} />
                <Route path="/products/filtration/:productname" element={<FiltrationProductDetail />} />
                <Route path="/products/lubrication-systems/:productname" element={<LubricationProductDetail />} />
                <Route path="/products/spm/:productname" element={<SpmProductDetail />} />
                <Route path="/products/:category" element={<ProductDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:id" element={<BlogDetail />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/flipbook" element={<Flipbook />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin" element={<AdminDashboard />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
        <Suspense fallback={null}>
          <CustomerChatbot />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
