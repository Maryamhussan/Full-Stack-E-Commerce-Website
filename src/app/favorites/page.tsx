'use client';

import { useFavorites } from '@/context/FavoritesContext';
import ProductCard from '@/components/product/ProductCard';
import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="container mx-auto px-6 py-16 lg:px-12 min-h-screen">
      <div className="flex flex-col gap-2 mb-16">
        <h1 className="text-5xl font-black tracking-tighter">FAVORITES</h1>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
          {favorites.length} {favorites.length === 1 ? 'Item' : 'Items'} saved
        </p>
      </div>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="p-8 rounded-full bg-zinc-50 dark:bg-zinc-900 mb-8">
            <Heart className="h-16 w-16 text-zinc-300" />
          </div>
          <h2 className="text-2xl font-black">No favorites yet</h2>
          <p className="text-zinc-500 mt-2 max-w-xs">Save products you love to your favorites list.</p>
          <Link
            href="/shop"
            className="mt-10 px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-black text-xs uppercase tracking-widest transition-transform hover:scale-105"
          >
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
}
