import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  industries: string[];
  link: string;
  imageClassName?: string;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  image,
  features,
  industries,
  link,
  imageClassName,
  index = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.03, rotate: 0.5 }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      <Card className="group h-full bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden">
        <CardContent className="p-0">
          {/* Image Section */}
          <Link to={link}>
            <div className="relative overflow-hidden rounded-t-lg bg-accent/30 cursor-pointer">
              <img
                src={image}
                alt={title}
                className={`w-full h-64 transition-transform duration-300 group-hover:scale-110 ${imageClassName || 'object-cover'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>

          {/* Content Section */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>

            <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
              {description}
            </p>

            {/* Features */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {features.slice(0, 3).map((feature, index) => (
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
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="px-2 py-1 bg-accent text-orange-600 text-xs rounded-md border border-border/50 cursor-default"
                  >
                    {industry}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link to={link}>
              <Button variant="outline" className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                View Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;