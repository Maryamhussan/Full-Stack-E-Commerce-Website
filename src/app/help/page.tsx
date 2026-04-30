export default function HelpPage() {
  return (
    <div className="container mx-auto px-6 py-24 min-h-[60vh] max-w-3xl">
      <h1 className="text-5xl font-black tracking-tighter uppercase mb-12">Help Center</h1>
      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-black uppercase tracking-widest mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 text-zinc-500">
            <p className="font-bold text-black dark:text-white">How do I track my order?</p>
            <p>Once your order ships, you will receive an email with a tracking number.</p>
            <p className="font-bold text-black dark:text-white">What is your return policy?</p>
            <p>We offer a 30-day money-back guarantee on all unused products.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
