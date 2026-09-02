import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Remplace Geist par Quicksand
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});




export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <header>
        <title>Loupillion - Louise Pietrzyk</title>
      </header>
      <body
        className={`${quicksand.variable} relative flex min-h-screen flex-col font-sans bg-rose-pastel`}
      >
        
        <Header />

     
          {children}

        <Footer />
      </body>
    </html>
  );
}