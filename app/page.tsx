import elesia from "@/public/drawings/elesia.jpg";
import pikapale from "@/public/drawings/pikapale.jpg";
import Rosalina from "@/public/drawings/Rosalina.jpg";
import Roxie from "@/public/drawings/Roxie.jpg";
import Zhao from "@/public/drawings/Zhao.jpg";

import DrawingCard from "@/components/galery/DrawingCard";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full justify-center">
      <main className="w-full max-w-5xl px-4 py-10">
        <h1 className="mb-8 text-center text-3xl font-semibold">
          Mon portfolio
        </h1>

        <div className="grid grid-cols-1 items-stretch justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <DrawingCard src={elesia} label="Elesia" />
          <DrawingCard src={pikapale} label="pikapale" />
          <DrawingCard src={Rosalina} label="Rosalina" />
          <DrawingCard src={Roxie} label="Roxie" />
          <DrawingCard src={Zhao} label="Zhao" />
        </div>
      </main>
    </div>
  );
}