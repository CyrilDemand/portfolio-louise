import Image from "next/image";
import profilePicture from "@/public/drawings/pp_linkedin-1.png";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex min-h-[80vh] w-full items-center justify-center py-10">
      <main className="flex w-full max-w-5xl flex-col items-center gap-12 px-6 md:flex-row md:gap-20">
        
        {/* COLONNE GAUCHE : Photo avec effet "Tache d'aquarelle" */}
        <div className="relative flex w-full max-w-sm justify-center md:w-1/2 md:justify-end">
          
          {/* Tache de fond 1 (Mauve) */}
          <div className="absolute -left-4 top-4 h-64 w-64 animate-pulse rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-violet-200/60 mix-blend-multiply blur-2xl transition-all duration-1000 md:h-80 md:w-80" />
          
          {/* Tache de fond 2 (Fuchsia) */}
          <div className="absolute -right-4 bottom-4 h-64 w-64 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-fuchsia-200/50 mix-blend-multiply blur-2xl md:h-72 md:w-72" />

          {/* Photo de profil (Glassmorphism) */}
          <div className="relative z-10 aspect-square w-64 overflow-hidden rounded-[2rem] border-[6px] border-white/80 bg-white/40 shadow-[0_20px_50px_rgba(139,92,246,0.15)] backdrop-blur-sm md:w-80 transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src={profilePicture}
              alt="Portrait de Louise"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, 320px"
              priority
            />
          </div>
        </div>

        {/* COLONNE DROITE : Texte */}
        <div className="flex w-full flex-col space-y-6 text-center md:w-1/2 md:text-left">
          <div className="space-y-2">
            <p className="text-sm font-bold tracking-widest text-violet-400 uppercase">
              À propos de moi
            </p>
            <h1 className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
              Coucou, c'est Louise ! ✧
            </h1>
          </div>

          <div className="space-y-4 text-lg text-slate-500 leading-relaxed">
            <p>
              Je suis une illustratrice passionnée par la création d'univers doux,
              chaleureux et un brin magiques. J'aime donner vie à des personnages 
              attachants et capturer des instants "cozy".
            </p>
            <p>
              Mon travail s'inspire beaucoup de la culture anime, des jeux vidéo
              réconfortants et de la nature. Mon but ? Apporter un petit nuage
              de douceur à ceux qui regardent mes dessins.
            </p>
          </div>

          <div className="pt-4">
            <Link 
              href="/contact"
              className="inline-block rounded-full bg-violet-100 px-8 py-3.5 font-bold text-violet-500 shadow-sm transition-all hover:-translate-y-1 hover:bg-violet-200 hover:shadow-md hover:shadow-violet-200/50"
            >
              Travaillons ensemble 💌
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}