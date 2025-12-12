import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type Props = {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  price: number;
  currency?: string;
  onAddToCart?: (id: string) => void;
  onBuyNow?: (id: string) => void;
};

const ProductItemCard: React.FC<Props> = ({
  id,
  name,
  image,
  shortDescription,
  price,
  currency = 'USD',
  onAddToCart,
  onBuyNow,
}) => {
  const { toast } = useToast();

  const handleAddToCart = () => {
    onAddToCart?.(id);
    toast({
      title: 'Added to cart',
      description: `${name} has been added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    onBuyNow?.(id);
    toast({
      title: 'Proceed to purchase',
      description: `Starting checkout for ${name}`,
    });
  };

  return (
    <article className="bg-card border border-border/50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col">
      <div className="relative h-48 w-full bg-accent/30">
        <img src={image} alt={name} className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h4 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{name}</h4>
        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">{shortDescription}</p>

        <div className="flex items-center justify-between mt-3 gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">{currency === 'USD' ? '$' : ''}{price.toLocaleString()}</span>
            <span className="text-xs text-muted-foreground">{currency}</span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleAddToCart} className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>

            <Button size="sm" onClick={handleBuyNow} className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover">
              <CreditCard className="h-4 w-4" />
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductItemCard;
