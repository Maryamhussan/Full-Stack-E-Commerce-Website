import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { FavoritesProvider } from "@/context/FavoritesContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern E-Commerce",
  description: "A full-stack portfolio e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <AuthProvider>
          <FavoritesProvider>
            <CartProvider>
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </CartProvider>
          </FavoritesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
