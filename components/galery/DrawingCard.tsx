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
      <figure className="group relative w-full max-w-xs">
  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-300/0 to-fuchsia-300/0 opacity-0 blur transition duration-500 group-hover:opacity-100" />

<div className="relative overflow-hidden rounded-3xl border border-violet-100/50 bg-white/60 backdrop-blur-md p-3 shadow-[0_8px_30px_rgba(139,92,246,0.04)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-violet-200 group-hover:shadow-[0_20px_40px_rgba(139,92,246,0.12)] group-hover:bg-white/80">    <button
      type="button"
      onClick={() => setOpen(true)}
      className="relative block aspect-[4/5] w-full overflow-hidden rounded-xl bg-violet-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
      aria-label={`Agrandir ${label}`}
    >
      <Image
        src={src}
        alt={alt ?? label}
        fill
        placeholder={typeof src === "string" ? undefined : "blur"}
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 320px"
        className="object-cover transition duration-500 group-hover:scale-105"
      />

        <span className="absolute inset-0 bg-gradient-to-t  via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 whitespace-nowrap rounded-full bg-white/95 px-5 py-2.5 text-xs font-bold text-violet-400 opacity-0 shadow-xl shadow-violet-200/50 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            ✧ Voir le dessin ✧
        </span>
        </button>

        <figcaption className="px-1 pb-1 pt-4 text-center">
        <p className="font-semibold tracking-wide ">
            {label}
        </p>

        <p className="mt-1 text-xs text-stone-400">
            Illustration originale
        </p>
        </figcaption>
    </div>
    </figure>

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