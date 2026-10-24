import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "./ui/button";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught route error:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = "/";
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[70vh] flex items-center justify-center bg-background px-4 py-16">
          <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl border border-border bg-card shadow-lg">
            <div className="w-16 h-16 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mx-auto">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Something went wrong</h2>
              <p className="text-sm text-muted-foreground mt-2">
                We encountered an unexpected issue while loading this page. Please try refreshing.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <Button onClick={this.handleReload} variant="default" className="gap-2">
                <RefreshCw className="w-4 h-4" />
                Refresh Page
              </Button>
              <Button onClick={this.handleGoHome} variant="outline" className="gap-2">
                <Home className="w-4 h-4" />
                Home
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
