import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Package } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.warn("404 Error: Non-existent route accessed:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-[75vh] flex items-center justify-center px-4 py-20 bg-background overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/60 shadow-xl">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary font-mono text-2xl font-bold">
          404
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The page you requested (<code>{location.pathname}</code>) does not exist, has been moved, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button onClick={() => navigate("/")} className="gap-2">
            <Home className="w-4 h-4" />
            Home
          </Button>
          <Button variant="outline" onClick={() => navigate("/products")} className="gap-2">
            <Package className="w-4 h-4" />
            Products
          </Button>
          <Button variant="ghost" onClick={() => navigate(-1)} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
