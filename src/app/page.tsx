'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { MOCK_PRODUCTS } from '@/lib/mock-data';
import ProductCard from '@/components/product/ProductCard';

export default function Home() {
  const featured = MOCK_PRODUCTS.slice(0, 3);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-end p-12 lg:p-24 bg-zinc-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="relative z-10 max-w-4xl">
          <motion.div variants={itemVariants}>
            <span className="text-white/60 font-bold tracking-[0.3em] uppercase text-[10px]">Essence of Modernity</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-[clamp(4rem,12vw,9rem)] font-black text-white leading-[0.8] tracking-tighter uppercase my-6">
            The Art of<br /> Essentialism.
          </motion.h1>
          <motion.div variants={itemVariants} className="flex gap-6">
            <Link href="/shop" className="px-10 py-4 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all">
              Explore Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Narrative */}
      <section className="py-32 container mx-auto px-6 text-center">
        <motion.p variants={itemVariants} className="text-[clamp(1.5rem,4vw,3rem)] font-medium leading-tight max-w-4xl mx-auto">
          We don't just create products. We craft experiences designed to simplify your life and elevate your aesthetic. Built for the thinkers, the creators, and the visionaries.
        </motion.p>
      </section>

      {/* Featured Grid */}
      <section className="container mx-auto px-6 pb-32">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl font-black tracking-tighter uppercase">Selections</h2>
          <Link href="/shop" className="font-bold border-b border-black dark:border-white text-xs uppercase tracking-widest">View All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((p, i) => (
            <motion.div key={p.id} variants={itemVariants}>
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-black text-white py-32 text-center">
        <motion.h2 variants={itemVariants} className="text-[clamp(3rem,8vw,6rem)] font-black tracking-tighter uppercase mb-12">Elevate your everyday.</motion.h2>
        <motion.div variants={itemVariants}>
          <Link href="/register" className="px-12 py-5 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all">
            Join the Club
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
