'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Package, Loader2, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface Order {
  id: string;
  date: string;
  items: any[];
  total: number;
  status: string;
}

export default function OrdersPage() {
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login?redirect=/orders');
    }
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(savedOrders);
  }, [isAuthenticated, authLoading, router]);

  if (authLoading || !isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <div className="p-6 rounded-full bg-gray-50 dark:bg-zinc-900 mb-6">
          <Package className="h-12 w-12 text-gray-400" />
        </div>
        <h1 className="text-3xl font-black">No orders yet</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Your order history will appear here once you make a purchase.</p>
        <Link
          href="/shop"
          className="mt-8 px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-xl font-bold transition-transform hover:scale-105"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black mb-10">Order History</h1>

      <div className="flex flex-col gap-6">
        {orders.map((order) => (
          <div key={order.id} className="p-6 rounded-3xl border bg-white dark:bg-zinc-950 shadow-sm overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b pb-6">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Order ID</p>
                <p className="font-black text-lg">{order.id}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Date Placed</p>
                <p className="font-bold">{new Date(order.date).toLocaleDateString()}</p>
              </div>
              <div>
                <span className="px-4 py-1.5 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-black uppercase tracking-tighter">
                  {order.status}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {order.items.map((item: any) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="h-12 w-12 rounded-lg object-cover border" />
                    <div>
                      <p className="font-bold text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Total Amount</p>
                <p className="text-2xl font-black">${order.total.toFixed(2)}</p>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold hover:underline transition-all">
                View Details <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
