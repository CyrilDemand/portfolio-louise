import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-stone-50 text-stone-900">
        
        <Header />

        {/* Le main prend tout l'espace restant (flex-1) */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}