import React from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Flipbook = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header bar */}
      <div className="bg-card border-b border-border py-4 px-6 flex items-center justify-between shadow-sm relative z-10">
        <Button 
          onClick={() => navigate(-1)} 
          variant="ghost" 
          className="text-primary hover:text-primary-hover hover:bg-accent/50 gap-2 font-semibold"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
        <span className="font-bold text-foreground text-lg hidden sm:inline-block">
          Trivantas Official Flipbook
        </span>
        <a href="/TRIVANTAS_Flipbook.pdf" download="TRIVANTAS_Flipbook.pdf" className="inline-flex">
          <Button variant="default" className="bg-primary hover:bg-primary-hover text-white gap-2 font-bold shadow-lg shadow-primary/20 rounded-xl">
            <Download className="h-4 w-4" /> Download PDF
          </Button>
        </a>
      </div>

      {/* Embed container */}
      <div className="flex-grow w-full relative bg-muted/30">
        <object
          data="/TRIVANTAS_Flipbook.pdf"
          type="application/pdf"
          className="absolute inset-0 w-full h-full"
        >
          <iframe
            src="/TRIVANTAS_Flipbook.pdf"
            className="w-full h-full border-none"
            title="Trivantas Flipbook"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <p className="text-muted-foreground text-lg max-w-md">
                Your browser or extension layout does not support previewing this PDF directly.
              </p>
              <a href="/TRIVANTAS_Flipbook.pdf" download="TRIVANTAS_Flipbook.pdf">
                <Button variant="default" className="bg-primary hover:bg-primary-hover text-white gap-2 font-bold rounded-xl">
                  <Download className="h-4 w-4" /> Download Flipbook PDF
                </Button>
              </a>
            </div>
          </iframe>
        </object>
      </div>
    </div>
  );
};

export default Flipbook;
