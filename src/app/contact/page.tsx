export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-24 min-h-[60vh] max-w-3xl">
      <h1 className="text-5xl font-black tracking-tighter uppercase mb-12">Contact Us</h1>
      <form className="flex flex-col gap-6">
        <input type="text" placeholder="Name" className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl outline-none font-bold" />
        <input type="email" placeholder="Email" className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl outline-none font-bold" />
        <textarea placeholder="Message" className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl outline-none font-bold h-40" />
        <button className="bg-black text-white dark:bg-white dark:text-black rounded-full px-10 py-4 font-black uppercase tracking-widest w-fit">Send Message</button>
      </form>
    </div>
  );
}
