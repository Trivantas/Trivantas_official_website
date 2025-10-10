import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  industries: string[];
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  description, 
  image, 
  features, 
  industries,
  link 
}) => {
  return (
    <Card className="group h-full bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-t-lg bg-accent/30">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>

          {/* Features */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-2">Industries:</h4>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-md border border-border/50"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link to={link}>
            <Button variant="outline" className="w-full group/btn">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;