// app/contact/page.tsx
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log(res)
      if(res.ok){
        console.log("ici")
        setStatus("sent");
      } else {
        throw new Error();
      } 
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full border-b-2 border-indigo-sombre/20 bg-transparent py-3 text-lg text-indigo-sombre placeholder:text-indigo-sombre/40 focus:border-framboise focus:outline-none transition-colors";

  return (
    <main className="px-12 pb-24 md:px-28 md:pb-32">
      {/* TITRE */}
      <div className="mb-16 md:mb-24">
        <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight text-indigo-sombre">
          Travaillons
          <br />
          <span className="text-framboise">ensemble</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-indigo-sombre/70">
          Un projet, une envie, une question&nbsp;? Écrivez-moi, je réponds
          généralement sous 48&nbsp;heures.
        </p>
      </div>

      <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
        {/* ---------- FORMULAIRE ---------- */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-bold uppercase tracking-widest text-indigo-sombre/60">
                Nom
              </label>
              <input id="name" name="name" type="text" required placeholder="Votre nom" className={inputClasses} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-bold uppercase tracking-widest text-indigo-sombre/60">
                Email
              </label>
              <input id="email" name="email" type="email" required placeholder="vous@exemple.com" className={inputClasses} />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-1 block text-sm font-bold uppercase tracking-widest text-indigo-sombre/60">
              Sujet
            </label>
            <input id="subject" name="subject" type="text" placeholder="Type de projet, collaboration…" className={inputClasses} />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-bold uppercase tracking-widest text-indigo-sombre/60">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Parlez-moi de votre projet…"
              className={`${inputClasses} resize-none`}
            />
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-indigo-sombre px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-framboise disabled:opacity-50"
            >
              {status === "sending" ? "Envoi…" : "Envoyer le message"}
            </button>

            {status === "sent" && (
              <p className="text-framboise font-medium">Message envoyé, merci&nbsp;!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 font-medium">Oups, une erreur est survenue, veuillez vérifiez vos informations.</p>
            )}
          </div>
        </form>

        {/* ---------- COORDONNÉES ---------- */}
        <aside className="flex flex-col gap-10 lg:border-l-2 lg:border-indigo-sombre/10 lg:pl-16">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-sombre/60">
              Email
            </h2>
            <a
              href="mailto:loupillion@gmail.com"
              className="mt-2 inline-block text-xl md:text-2xl font-black tracking-tight text-indigo-sombre hover:text-framboise transition-colors break-all"
            >
              loupillion@gmail.com
            </a>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-sombre/60">
              Instagram
            </h2>
            <a
              href="https://x.com/Loupillion0"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-xl md:text-2xl font-black tracking-tight text-indigo-sombre hover:text-framboise transition-colors"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @Loupillion
            </a>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-sombre/60">
              Téléphone
            </h2>
            <a
              href="tel:+33623710355"
              className="mt-2 inline-block text-xl md:text-2xl font-black tracking-tight text-indigo-sombre hover:text-framboise transition-colors"
            >
              06 23 71 03 55
            </a>
            <p className="mt-2 text-sm text-indigo-sombre/50">
              Du lundi au vendredi, 9h&nbsp;–&nbsp;18h
            </p>
          </div>

          <div className="rounded-2xl bg-indigo-sombre/5 p-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-sombre/60">
              Basée à
            </h2>
            <p className="mt-2 text-lg font-medium text-indigo-sombre">
              Lille, France
              <span className="block text-base text-indigo-sombre/60">
                Disponible en remote partout
              </span>
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}