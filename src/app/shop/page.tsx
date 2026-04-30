'use client';

import { useState, useEffect, Suspense } from 'react';
import { MOCK_PRODUCTS, Product } from '@/lib/mock-data';
import ProductCard from '@/components/product/ProductCard';
import { Search, Filter, X, ChevronDown } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

function ShopContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  
  const [search, setSearch] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    setSearch(initialSearch);
  }, [initialSearch]);

  const categories = ['All', ...new Set(MOCK_PRODUCTS.map(p => p.category))];

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || 
                          product.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-6 py-12 lg:px-12">
          <h1 className="text-5xl font-black tracking-tighter mb-4 uppercase">Shop All</h1>
          <p className="text-zinc-500 max-w-xl text-lg">
            Explore our curated collection of essential products designed for the modern lifestyle.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters */}
          <aside className="hidden lg:flex flex-col gap-10 w-64 flex-shrink-0">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Search</h3>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Keywords..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-zinc-50 dark:bg-zinc-900 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all font-bold"
                />
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Categories</h3>
              <div className="flex flex-col gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`text-left text-sm font-bold transition-all hover:translate-x-1 ${
                      selectedCategory === category
                        ? 'text-black dark:text-white translate-x-1'
                        : 'text-zinc-500 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Price Range</h3>
              <div className="flex flex-col gap-4">
                <div className="h-1 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full relative text-gold">
                  <div className="absolute inset-y-0 left-0 w-3/4 bg-current rounded-full"></div>
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  <span>$0</span>
                  <span>$1000+</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center justify-center gap-2 w-full py-4 bg-zinc-100 dark:bg-zinc-900 rounded-xl font-black text-xs uppercase tracking-widest"
          >
            <Filter className="h-4 w-4" /> Filters
          </button>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                Showing {filteredProducts.length} Results
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] cursor-pointer hover:text-zinc-500">
                Sort By <ChevronDown className="h-3 w-3" />
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-40 text-center">
                <h2 className="text-2xl font-black uppercase tracking-tighter">No matches found</h2>
                <p className="text-zinc-500 mt-2">Try adjusting your filters or search terms.</p>
                <button
                  onClick={() => { setSearch(''); setSelectedCategory('All'); }}
                  className="mt-8 px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-black text-[10px] uppercase tracking-widest transition-transform hover:scale-105"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-[60] bg-white dark:bg-black p-8 flex flex-col gap-10 overflow-y-auto lg:hidden">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-black tracking-tighter uppercase">Filters</h2>
            <button onClick={() => setIsFilterOpen(false)}><X className="h-8 w-8" /></button>
          </div>
          
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Search</h3>
              <input
                type="text"
                placeholder="Keywords..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-6 py-4 bg-zinc-100 dark:bg-zinc-900 rounded-2xl text-sm outline-none font-bold"
              />
            </div>

            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border transition-all ${
                      selectedCategory === category
                        ? 'bg-black text-white dark:bg-white dark:text-black border-transparent'
                        : 'border-zinc-200 dark:border-zinc-800'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setIsFilterOpen(false)}
              className="mt-auto py-5 bg-black text-white dark:bg-white dark:text-black rounded-full font-black text-sm uppercase tracking-[0.2em]"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-black dark:border-white border-t-transparent rounded-full"></div>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
