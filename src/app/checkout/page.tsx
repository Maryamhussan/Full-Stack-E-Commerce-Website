'use client';

import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ShieldCheck, Loader2, ArrowRight, Lock, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login?redirect=/checkout');
    }
    if (!authLoading && cart.length === 0) {
      router.push('/shop');
    }
  }, [isAuthenticated, authLoading, cart.length, router]);

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2500));
    
    const order = {
      id: `ORD-${Math.floor(Math.random() * 1000000)}`,
      date: new Date().toISOString(),
      items: cart,
      total: cartTotal,
      status: 'Processing',
    };
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    localStorage.setItem('orders', JSON.stringify([order, ...savedOrders]));

    clearCart();
    setIsProcessing(false);
    router.push('/orders');
  };

  if (authLoading || !isAuthenticated || cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-zinc-300" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-6 py-16 lg:px-12">
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 flex flex-col gap-12">
            <div>
              <h1 className="text-5xl font-black tracking-tighter mb-4">CHECKOUT</h1>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                <Lock className="h-3 w-3" /> Secure Encrypted Transaction
              </div>
            </div>

            <section className="flex flex-col gap-8">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Shipping Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                   <label className="text-[9px] font-black uppercase tracking-widest ml-4">First Name</label>
                   <input type="text" placeholder="John" required className="px-6 py-4 bg-zinc-50 dark:bg-zinc-900 border-none rounded-2xl outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all font-bold text-sm" />
                </div>
                <div className="flex flex-col gap-2">
                   <label className="text-[9px] font-black uppercase tracking-widest ml-4">Last Name</label>
                   <input type="text" placeholder="Doe" required className="px-6 py-4 bg-zinc-50 dark:bg-zinc-900 border-none rounded-2xl outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all font-bold text-sm" />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                   <label className="text-[9px] font-black uppercase tracking-widest ml-4">Address</label>
                   <input type="text" placeholder="123 Modern Ave" required className="px-6 py-4 bg-zinc-50 dark:bg-zinc-900 border-none rounded-2xl outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all font-bold text-sm" />
                </div>
                <div className="flex flex-col gap-2">
                   <label className="text-[9px] font-black uppercase tracking-widest ml-4">City</label>
                   <input type="text" placeholder="New York" required className="px-6 py-4 bg-zinc-50 dark:bg-zinc-900 border-none rounded-2xl outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all font-bold text-sm" />
                </div>
                <div className="flex flex-col gap-2">
                   <label className="text-[9px] font-black uppercase tracking-widest ml-4">Postal Code</label>
                   <input type="text" placeholder="10001" required className="px-6 py-4 bg-zinc-50 dark:bg-zinc-900 border-none rounded-2xl outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all font-bold text-sm" />
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-8">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Payment</h2>
              <div className="p-6 rounded-[2rem] border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-900 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="h-12 w-16 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                    <CreditCard className="text-white dark:text-black" />
                  </div>
                  <div>
                    <p className="font-black text-sm uppercase tracking-widest">Test Card</p>
                    <p className="text-xs text-zinc-500 font-bold tracking-widest">4242 •••• •••• 4242</p>
                  </div>
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest bg-zinc-200 dark:bg-zinc-800 px-3 py-1 rounded-full">Stripe Mock</div>
              </div>
              <p className="text-[10px] text-zinc-500 font-medium leading-relaxed max-w-md">
                This is a demonstration environment. Your order will be processed instantly and no real funds will be moved.
              </p>
            </section>
          </div>

          <div className="lg:col-span-5">
            <div className="p-10 rounded-[3rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 sticky top-32 flex flex-col gap-10">
              <h2 className="text-xl font-black uppercase tracking-widest">Order Summary</h2>
              
              <div className="flex flex-col gap-6 max-h-[30vh] overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-12 rounded-lg overflow-hidden border bg-white">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-black truncate w-32">{item.name}</span>
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Qty: {item.quantity}</span>
                      </div>
                    </div>
                    <span className="font-black">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col gap-4 text-sm font-bold border-t border-zinc-200 dark:border-zinc-800 pt-10">
                <div className="flex justify-between">
                  <span className="text-zinc-500 uppercase tracking-widest text-[10px]">Subtotal</span>
                  <span className="font-black">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500 uppercase tracking-widest text-[10px]">Shipping</span>
                  <span className="text-green-600 font-black uppercase tracking-widest text-[10px]">Free Express</span>
                </div>
                <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6 flex justify-between items-end">
                  <span className="text-lg font-black uppercase tracking-widest">Total</span>
                  <span className="text-3xl font-black tracking-tighter">${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-3 py-5 bg-black text-white dark:bg-white dark:text-black rounded-full font-black text-xs uppercase tracking-[0.2em] transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              >
                {isProcessing ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>Complete Purchase <ArrowRight className="h-4 w-4" /></>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
