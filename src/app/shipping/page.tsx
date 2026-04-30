export default function ShippingPage() {
  return (
    <div className="container mx-auto px-6 py-24 min-h-[60vh] max-w-3xl">
      <h1 className="text-5xl font-black tracking-tighter uppercase mb-12">Shipping & Returns</h1>
      <div className="space-y-8 text-zinc-500 leading-relaxed">
        <p>We strive to get your orders to you as quickly as possible. All orders are processed within 48 hours.</p>
        <h2 className="text-xl font-black text-black dark:text-white uppercase tracking-widest">Shipping Rates</h2>
        <p>We offer free standard shipping on all orders over $150. For smaller orders, a flat fee of $10 applies.</p>
        <h2 className="text-xl font-black text-black dark:text-white uppercase tracking-widest">Returns</h2>
        <p>If you are not satisfied with your purchase, you can return it within 30 days for a full refund.</p>
      </div>
    </div>
  );
}
