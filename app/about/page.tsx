// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import profilePicture from "@/public/drawings/pp_linkedin-1.png";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Loupillion — Louise Pietrzyk",
  description: "Illustratrice indépendante, personnages hauts en couleur.",
};

export default function About() {
  return (
    <main className="px-12 pb-24 md:px-28 md:pb-32">
      {/* ---------- TITRE ---------- */}
      <div className="mb-16 md:mb-24">
        <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight text-indigo-sombre">
          Coucou,
          <br />
          c'est <span className="text-framboise">Louise</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-indigo-sombre/70">
          Illustratrice indépendante, je créée des personnages, haut en couleurs et un
          brin magiques.
        </p>
      </div>

      {/* ---------- CONTENU ---------- */}
      <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        {/* COLONNE GAUCHE : PHOTO */}
        <div className="relative aspect-square w-full max-w-sm self-start">
          {/* Cadre décalé */}
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] border-2 border-framboise/40" />

          <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-indigo-sombre/5">
            <Image
              src={profilePicture}
              alt="Portrait de Louise Pietrzyk"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
              priority
            />
          </div>
        </div>

        {/* COLONNE DROITE : TEXTE */}
        <div className="flex flex-col gap-12">
          {/* Bio */}
          <section>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-indigo-sombre/60">
              Mon univers
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-indigo-sombre/80">
              <p>
                J'aime donner vie à des personnages attachants et capturer
                des <span className="text-framboise font-medium">émotions</span>.
              </p>
              <p>
                Mon travail s'inspire beaucoup de la culture anime, des jeux
                vidéo et de la fantasy. Mon but&nbsp;? Donner vie
                à nos personnages fictifs préférés.
              </p>
            </div>
          </section>

          {/* Ce que je fais */}
          <section>
            <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-indigo-sombre/60">
              Ce que je fais
            </h2>
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {[
                "Illustration éditoriale",
                "Character design",
                "Couvertures & affiches",
                "Identité visuelle",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 text-lg font-medium text-indigo-sombre"
                >
                  <span className="text-framboise">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Outils */}
          <section>
            <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-indigo-sombre/60">
              Mes outils
            </h2>
            <div className="flex flex-wrap gap-3">
              {["Clip Studio Paint", "Aquarelle", "Feutre acrylique", "Feutre à alcool"].map(
                (tool) => (
                  <span
                    key={tool}
                    className="rounded-full border-2 border-indigo-sombre/15 px-4 py-1.5 text-sm font-medium text-indigo-sombre/70"
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          </section>

          {/* CTA */}
          <div className="pt-2">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-black tracking-tight text-indigo-sombre transition-colors hover:text-framboise"
            >
              <span className="border-b-2 border-indigo-sombre pb-1 transition-colors group-hover:border-framboise">
                Travaillons ensemble
              </span>
              <svg
                className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}