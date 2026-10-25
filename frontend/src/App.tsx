import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import ScrollToAnchor from "./components/ScrollToAnchor";
import Footer from "./components/Footer";
import RouteSeoManager from "./seo/RouteSeoManager";
import RouteLoadingFallback from "./components/RouteLoadingFallback";
import ErrorBoundary from "./components/ErrorBoundary";
import LegacyUrlRedirector from "./components/LegacyUrlRedirector";

// Core marketing entry routes: eager loaded for fast first paint on home, hub, about, contact
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Helper for dynamic imports with automatic retry on chunk loading failure
function lazyWithRetry<T extends React.ComponentType<unknown>>(
  componentImport: () => Promise<{ default: T }>
) {
  return lazy(async () => {
    try {
      return await componentImport();
    } catch (error) {
      const sessionKey = "trivantas_chunk_retry";
      const hasRetried = window.sessionStorage.getItem(sessionKey);
      if (!hasRetried) {
        window.sessionStorage.setItem(sessionKey, "true");
        window.location.reload();
        return { default: (() => null) as unknown as T };
      }
      window.sessionStorage.removeItem(sessionKey);
      throw error;
    }
  });
}

// Lazy-loaded catalog, content, and admin pages (smaller initial JS for home/contact LCP)
const ProductDetails = lazyWithRetry(() => import("./pages/ProductDetails"));
const SensorProductDetail = lazyWithRetry(() => import("./pages/SensorProductDetail"));
const WaterTreatmentProductDetail = lazyWithRetry(() => import("./pages/WaterTreatmentProductDetail"));
const HandlingProductDetail = lazyWithRetry(() => import("./pages/HandlingProductDetail"));
const FiltrationProductDetail = lazyWithRetry(() => import("./pages/FiltrationProductDetail"));
const LubricationProductDetail = lazyWithRetry(() => import("./pages/LubricationProductDetail"));
const SpmProductDetail = lazyWithRetry(() => import("./pages/SpmProductDetail"));
const Blogs = lazyWithRetry(() => import("./pages/Blogs"));
const BlogDetail = lazyWithRetry(() => import("./pages/BlogDetail"));
const PrivacyPolicy = lazyWithRetry(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazyWithRetry(() => import("./pages/TermsOfService"));
const Schedule = lazyWithRetry(() => import("./pages/Schedule"));
const Flipbook = lazyWithRetry(() => import("./pages/Flipbook"));
const AdminLogin = lazyWithRetry(() => import("./pages/AdminLogin"));
const AdminDashboard = lazyWithRetry(() => import("./pages/AdminDashboard"));

// Asynchronously loaded auxiliary widgets
const CustomerChatbot = lazyWithRetry(() => import("./components/CustomerChatbot"));

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteSeoManager />
          <ScrollToAnchor />
          <LegacyUrlRedirector />
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <ErrorBoundary>
              <Suspense fallback={<RouteLoadingFallback />}>
                <main className="flex-grow">
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
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
                    <Route path="/terms" element={<Navigate to="/terms-of-service" replace />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/flipbook" element={<Flipbook />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </Suspense>
            </ErrorBoundary>
          </div>
          <Suspense fallback={null}>
            <CustomerChatbot />
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
