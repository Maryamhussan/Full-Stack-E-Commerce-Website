'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MOCK_PRODUCTS } from '@/lib/mock-data';
import { Star, ShoppingCart, ArrowLeft, ShieldCheck, Truck, RotateCcw, Heart, Share2 } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = MOCK_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-6 py-12 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Gallery Section */}
          <div className="flex-1 flex flex-col gap-6">
            <Link href="/shop" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Collection
            </Link>
            
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              <button className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                <Heart className="h-5 w-5 text-black" />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`aspect-square rounded-2xl overflow-hidden border-2 cursor-pointer transition-all ${i === 1 ? 'border-black dark:border-white' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                   <img src={product.image} alt="" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                  {product.category}
                </span>
                <div className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-900 px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-black">{product.rating}</span>
                  <span className="text-xs text-zinc-500 font-medium">(124 Reviews)</span>
                </div>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9]">
                {product.name}
              </h1>
              <p className="text-3xl font-black tracking-tight mt-2">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <div className="flex flex-col gap-6 border-y border-zinc-100 dark:border-zinc-800 py-8">
              <p className="text-zinc-500 leading-relaxed text-lg">
                {product.description}
              </p>

              <div className="flex flex-col gap-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Select Quantity</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-zinc-200 dark:border-zinc-800 rounded-full overflow-hidden bg-zinc-50 dark:bg-zinc-900">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-6 py-4 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors font-black"
                    >
                      -
                    </button>
                    <span className="px-6 py-4 font-black min-w-[4rem] text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="px-6 py-4 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors font-black"
                    >
                      +
                    </button>
                  </div>
                  
                  <button
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                    className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all ${
                      isAdded
                        ? 'bg-green-600 text-white'
                        : 'bg-black text-white dark:bg-white dark:text-black hover:scale-[1.02] active:scale-[0.98]'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {isAdded ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <Truck className="h-6 w-6 text-zinc-400" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest">Free Shipping</p>
                  <p className="text-[10px] text-zinc-500">On all orders over $150</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <RotateCcw className="h-6 w-6 text-zinc-400" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest">Easy Returns</p>
                  <p className="text-[10px] text-zinc-500">30-day money back policy</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <ShieldCheck className="h-6 w-6 text-zinc-400" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest">Secure Order</p>
                  <p className="text-[10px] text-zinc-500">100% data encryption</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex gap-8 border-b border-zinc-100 dark:border-zinc-800 mb-6">
                {['description', 'details', 'shipping'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative ${
                      activeTab === tab ? 'text-black dark:text-white' : 'text-zinc-400 hover:text-zinc-600'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black dark:bg-white animate-fade-in"></div>}
                  </button>
                ))}
              </div>
              <div className="text-zinc-500 text-sm leading-relaxed animate-fade-in">
                {activeTab === 'description' && (
                  <p>Our {product.name} represents the pinnacle of craftsmanship and design. Each piece is meticulously inspected to ensure it meets our rigorous standards for quality and performance. Whether you're using it for daily tasks or special occasions, this product is designed to excel.</p>
                )}
                {activeTab === 'details' && (
                  <ul className="list-disc pl-4 flex flex-col gap-2 font-medium">
                    <li>Premium materials sourced sustainably</li>
                    <li>Designed in-house by our award-winning team</li>
                    <li>Engineered for durability and longevity</li>
                    <li>Available in limited quantities</li>
                  </ul>
                )}
                {activeTab === 'shipping' && (
                  <p>We offer worldwide shipping with fully tracked services. Orders are typically processed within 24-48 hours. Estimated delivery times are 3-5 business days for domestic and 7-14 business days for international orders.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
