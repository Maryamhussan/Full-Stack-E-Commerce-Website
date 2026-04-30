import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-[#999] py-16">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 text-xs">
        <div>
          <h4 className="text-white font-bold mb-6">E-STORE</h4>
          <p>Defining the standard for modern e-commerce.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Support</h4>
          <div className="flex flex-col gap-3">
            <Link href="/help" className="hover:text-white">Help Center</Link>
            <Link href="/shipping" className="hover:text-white">Shipping & Returns</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Legal</h4>
          <div className="flex flex-col gap-3">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Social</h4>
          <div className="flex flex-col gap-3">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-[#333] text-[10px] text-center">
        © 2026 E-STORE. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
