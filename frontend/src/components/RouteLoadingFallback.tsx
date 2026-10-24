import React from 'react';

export default function RouteLoadingFallback() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex-1 w-full flex flex-col items-center justify-center py-20 px-4" aria-busy="true" aria-live="polite">
      {/* Top subtle progress line */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-primary/20 overflow-hidden z-50">
        <div className="h-full bg-primary w-full animate-pulse" />
      </div>

      {/* Centered minimalist pulse */}
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
          <div className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        </div>
        <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">Loading Trivantas...</span>
      </div>
    </div>
  );
}
