import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto w-full border-t border-violet-100/50 bg-white/40 py-8 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 md:flex-row text-center md:text-left">
        
        {/* Copyright & Nom */}
        <div className="text-sm font-medium text-slate-400">
          © {currentYear} Louise Pietrzyk <br className="md:hidden" />
          <span className="hidden md:inline"> | </span> 
          Tous droits réservés.
        </div>

   
        {/* Liens Réseaux Sociaux */}
        <div className="flex gap-6 text-sm font-semibold text-slate-500">
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:-translate-y-1 hover:text-violet-400"
          >
            Instagram
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:-translate-y-1 hover:text-fuchsia-400"
          >
            Twitter
          </a>
          <Link 
            href="/contact" 
            className="transition-all duration-300 hover:-translate-y-1 hover:text-violet-400"
          >
            Contact
          </Link>
        </div>

      </div>
    </footer>
  );
}