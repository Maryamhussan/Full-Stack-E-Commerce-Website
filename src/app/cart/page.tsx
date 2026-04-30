'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <div className="p-10 rounded-full bg-zinc-50 dark:bg-zinc-900 mb-10">
          <ShoppingBag className="h-16 w-16 text-zinc-300" />
        </div>
        <h1 className="text-4xl font-black tracking-tighter">Your bag is empty</h1>
        <p className="mt-4 text-zinc-500 max-w-xs">Items you add to your bag will appear here.</p>
        <Link
          href="/shop"
          className="mt-10 px-10 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-black text-xs uppercase tracking-widest transition-transform hover:scale-105"
        >
          Explore Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16 lg:px-12">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <Link href="/shop" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-black dark:hover:text-white transition-colors mb-4">
            <ArrowLeft className="h-4 w-4" /> Continue Shopping
          </Link>
          <h1 className="text-5xl font-black tracking-tighter">SHOPPING BAG</h1>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
            {cart.length} {cart.length === 1 ? 'Item' : 'Items'} in your bag
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 flex flex-col gap-8">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-8 py-8 border-b border-zinc-100 dark:border-zinc-800 last:border-0 items-center sm:items-start">
                <div className="h-40 w-32 flex-shrink-0 overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>

                <div className="flex-1 flex flex-col gap-6 w-full">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <Link href={`/product/${item.id}`} className="text-xl font-black hover:underline underline-offset-4">{item.name}</Link>
                      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{item.category}</p>
                    </div>
                    <p className="text-xl font-black tracking-tight">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4">
                    <div className="flex items-center border border-zinc-200 dark:border-zinc-800 rounded-full overflow-hidden bg-zinc-50 dark:bg-zinc-900">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="px-4 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="px-4 font-black text-xs min-w-[2.5rem] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, Math.min(item.stock, item.quantity + 1))}
                        className="px-4 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4">
            <div className="p-10 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 sticky top-32 flex flex-col gap-8">
              <h2 className="text-xl font-black uppercase tracking-widest">Summary</h2>
              
              <div className="flex flex-col gap-4 text-sm font-bold">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Subtotal</span>
                  <span className="font-black">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Shipping</span>
                  <span className="text-green-600 font-black uppercase tracking-widest text-[10px]">Calculated at next step</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Estimated Tax</span>
                  <span className="font-black">$0.00</span>
                </div>
                <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6 flex justify-between items-end">
                  <span className="text-lg font-black uppercase tracking-widest">Total</span>
                  <span className="text-3xl font-black tracking-tighter">${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full flex items-center justify-center gap-3 py-5 bg-black text-white dark:bg-white dark:text-black rounded-full font-black text-xs uppercase tracking-[0.2em] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Checkout <ArrowRight className="h-4 w-4" />
              </Link>
              
              <div className="flex flex-col items-center gap-4 pt-4">
                <p className="text-[9px] text-zinc-400 font-black uppercase tracking-[0.3em]">Accepted Payments</p>
                <div className="flex gap-4 opacity-30 grayscale invert dark:invert-0">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
