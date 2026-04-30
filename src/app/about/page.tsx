import Link from 'next/link';
import { ArrowRight, Globe, Leaf, Users, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
        <img
          src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2000&auto=format&fit=crop"
          alt="Our Story"
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase">Our Story</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-medium">
            Redefining modern essentialism through meticulous design and sustainable craftsmanship since 2026.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container mx-auto px-6 py-24 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 flex flex-col gap-8">
            <h2 className="text-4xl font-black tracking-tighter uppercase">The Philosophy</h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              We started E-STORE with a simple mission: to create products that bridge the gap between high-end luxury and everyday utility. We believe that the items you use every day should be beautiful, functional, and built to last.
            </p>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Our design process is rigorous. We strip away the unnecessary until only the essential remains. This "minimalist-first" approach ensures that every curve, material, and detail serves a specific purpose.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-4">
              <div>
                <h3 className="text-3xl font-black tracking-tighter">100%</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mt-2">Sustainable Materials</p>
              </div>
              <div>
                <h3 className="text-3xl font-black tracking-tighter">24/7</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mt-2">Global Support</p>
              </div>
            </div>
          </div>
          <div className="flex-1 h-[600px] w-full rounded-[3rem] overflow-hidden border border-zinc-100 dark:border-zinc-800">
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop" className="h-full w-full object-cover" alt="" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-zinc-50 dark:bg-zinc-950 py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black tracking-tighter uppercase">Our Core Values</h2>
            <p className="text-zinc-500 mt-4">The pillars that define everything we build.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-10 rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex flex-col gap-6 items-center text-center">
              <Globe className="h-10 w-10 text-gold" />
              <h3 className="text-lg font-black uppercase tracking-widest">Global Reach</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Delivering quality design to over 50 countries worldwide with carbon-neutral shipping.</p>
            </div>
            <div className="p-10 rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex flex-col gap-6 items-center text-center">
              <Leaf className="h-10 w-10 text-gold" />
              <h3 className="text-lg font-black uppercase tracking-widest">Sustainability</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">We prioritize eco-friendly materials and ethical manufacturing processes in every product.</p>
            </div>
            <div className="p-10 rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex flex-col gap-6 items-center text-center">
              <Users className="h-10 w-10 text-gold" />
              <h3 className="text-lg font-black uppercase tracking-widest">Community</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Built for creators, by creators. We support local artisans and creative communities.</p>
            </div>
            <div className="p-10 rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex flex-col gap-6 items-center text-center">
              <Award className="h-10 w-10 text-gold" />
              <h3 className="text-lg font-black uppercase tracking-widest">Quality</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Every item undergoes rigorous testing to ensure it meets our lifetime durability standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-10">Experience the difference</h2>
        <Link 
          href="/shop" 
          className="inline-flex items-center gap-3 px-12 py-5 bg-black text-white dark:bg-white dark:text-black rounded-full font-black text-xs uppercase tracking-[0.2em] transition-transform hover:scale-105"
        >
          Shop Collection <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
