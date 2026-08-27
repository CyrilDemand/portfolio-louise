"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type DrawingCardProps = {
  src: StaticImageData | string;
  label: string;
  alt?: string;
};

export default function DrawingCard({ src, label, alt }: DrawingCardProps) {
  const [open, setOpen] = useState(false);

  // Fermer avec Échap + bloquer le scroll derrière le modal
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      {/* On a enlevé le padding et le fond. Juste un conteneur simple */}
      <figure className="group relative w-full flex flex-col gap-3 break-inside-avoid">
        <button
          type="button"
          onClick={() => setOpen(true)}
          // On a enlevé aspect-[4/5] pour laisser la hauteur naturelle
          className="relative block w-full overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-framboise focus-visible:ring-offset-2 focus-visible:ring-offset-rose-pastel"
          aria-label={`Agrandir ${label}`}
        >
          <Image
            src={src}
            alt={alt ?? label}
            // On a supprimé 'fill' et remplacé 'object-cover' par 'h-auto w-full'
            className="h-auto w-full transition duration-500 group-hover:scale-105"
            placeholder={typeof src === "string" ? undefined : "blur"}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 320px"
          />
        </button>

        {
            /*
                    <figcaption className="text-center">
          <p className="font-semibold tracking-wide text-indigo-sombre">
            {label}
          </p>
          <p className="mt-1 text-xs text-indigo-sombre/70">
            Illustration originale
          </p>
        </figcaption>
            */
        }

      </figure>

      {/* Le modal (agrandissement) reste inchangé */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-black/85 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fermer"
            className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-2xl leading-none text-white hover:bg-white/20"
          >
            ×
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative h-[85vh] w-full max-w-[95vw]"
          >
            <Image
              src={src}
              alt={alt ?? label}
              fill
              sizes="95vw"
              priority
              className="object-contain"
            />
          </div>

          <p className="text-sm text-white/80">{label}</p>
        </div>
      )}
    </>
  );
}