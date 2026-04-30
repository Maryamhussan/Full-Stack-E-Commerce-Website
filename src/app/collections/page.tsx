import Link from 'next/link';
import { MOCK_PRODUCTS } from '@/lib/mock-data';
import ProductCard from '@/components/product/ProductCard';

export default function CollectionsPage() {
  const categories = [...new Set(MOCK_PRODUCTS.map(p => p.category))];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="border-b border-zinc-100 dark:border-zinc-800">
        <div className="container mx-auto px-6 py-24 lg:px-12 text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6">Collections</h1>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">Explore our themed collections, curated for every aspect of your life.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <Link 
            key={category} 
            href={`/shop?category=${category}`}
            className="group relative h-[400px] overflow-hidden rounded-[2rem] flex items-end p-10 text-white"
          >
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="" 
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
            <div className="relative z-10 flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full w-fit">Curated</span>
              <h2 className="text-4xl font-black tracking-tighter uppercase">{category}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
