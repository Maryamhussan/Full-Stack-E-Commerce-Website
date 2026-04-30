'use client';

import Link from 'next/link';
import { ShoppingCart, User, Search, Heart, X, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useFavorites } from '@/context/FavoritesContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { cartCount } = useCart();
  const { user } = useAuth();
  const { favorites } = useFavorites();
  const [search, setSearch] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/shop?search=${encodeURIComponent(search)}`);
      setSearch('');
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background border-b border-border py-6">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter text-foreground">E-STORE</Link>
          
          <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.25em] text-accent">
            <Link href="/shop" className="hover:text-foreground transition-colors">Shop</Link>
            <Link href="/collections" className="hover:text-foreground transition-colors">Collections</Link>
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/favorites" className="relative text-foreground"><Heart className="h-5 w-5" />{favorites.length > 0 && <span className="absolute -top-1 -right-1 h-2 w-2 bg-foreground rounded-full" />}</Link>
            <Link href="/cart" className="relative text-foreground"><ShoppingCart className="h-5 w-5" />{cartCount > 0 && <span className="absolute -top-1 -right-1 h-2 w-2 bg-foreground rounded-full" />}</Link>
            <Link href="/login" className="hidden md:block text-foreground"><User className="h-5 w-5" /></Link>
            <button className="md:hidden flex flex-col gap-1.5" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Minus className={`h-6 w-6 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <Minus className={`h-6 w-6 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background pt-32 px-6 animate-in fade-in duration-300">
          <div className="flex flex-col gap-10 text-4xl font-bold tracking-tighter uppercase text-foreground">
            <Link href="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link href="/collections" onClick={() => setIsMenuOpen(false)}>Collections</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/login" onClick={() => setIsMenuOpen(false)}>Profile</Link>
          </div>
        </div>
      )}
    </>
  );
}
