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
      <body
        className={`${quicksand.variable} relative flex min-h-screen flex-col bg-[#FCFAFF] font-sans text-slate-600 selection:bg-violet-200 selection:text-violet-900`}
      >
        {/* Optionnel : Un léger motif ou des "taches" de mauve floutées en arrière-plan (glow) */}
        <div className="pointer-events-none fixed left-0 top-0 h-full w-full overflow-hidden z-[-1]">
          <div className="absolute -left-[10%] top-[-10%] h-[40%] w-[40%] rounded-full bg-violet-100/50 blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-5%] h-[50%] w-[50%] rounded-full bg-fuchsia-50/40 blur-[120px]" />
        </div>
        
        <Header />

        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}