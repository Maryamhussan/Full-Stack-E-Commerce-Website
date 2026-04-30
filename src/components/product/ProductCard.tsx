'use client';

import Link from 'next/link';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '@/lib/mock-data';
import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoritesContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

/**
 * ProductCard component displays a product summary with interactivity.
 * Includes hover effects, cart integration, and favorite toggle.
 */
export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [isHovered, setIsHovered] = useState(false);
  const isLiked = isFavorite(product.id);

  return (
    <div 
      className="group flex flex-col bg-card rounded-3xl p-3 border border-border transition-all duration-500 hover:border-foreground/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image and Action Overlay */}
      <Link href={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Interaction overlay visible on hover */}
        <div className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <button 
            onClick={(e) => { e.preventDefault(); addToCart(product, 1); }}
            className="flex-1 bg-white text-black py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200"
          >
            Add
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); toggleFavorite(product); }}
            className={`px-4 bg-white text-black rounded-full transition-colors ${isLiked ? 'text-red-500' : ''}`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </Link>

      {/* Product Details Section */}
      <div className="p-4 flex flex-col gap-1">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-secondary">{product.category}</p>
        <h3 className="font-bold tracking-tight text-sm line-clamp-1">{product.name}</h3>
        <p className="text-sm font-black mt-2">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
