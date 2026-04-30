'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { Mail, Lock, User, Loader2, ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { register, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(email, password, name);
  };

  return (
    <div className="container mx-auto px-4 py-20 flex items-center justify-center">
      <div className="w-full max-w-md p-8 rounded-3xl border bg-white dark:bg-zinc-950 shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black tracking-tight">Create Account</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Join our community and start shopping</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-zinc-900 border rounded-xl outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-zinc-900 border rounded-xl outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-zinc-900 border rounded-xl outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 w-full py-4 bg-black text-white dark:bg-white dark:text-black rounded-xl font-black flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Sign Up'}
            {!isLoading && <ArrowRight className="h-5 w-5" />}
          </button>
        </form>

        <div className="mt-8 text-center text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link href="/login" className="font-bold text-black dark:text-white hover:underline">
              Log in instead
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
