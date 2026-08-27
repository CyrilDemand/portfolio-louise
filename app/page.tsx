import elesia from "@/public/drawings/elesia.jpg";
import pikapale from "@/public/drawings/pikapale.jpg";
import Rosalina from "@/public/drawings/Rosalina.jpg";
import Roxie from "@/public/drawings/Roxie.jpg";
import Zhao from "@/public/drawings/Zhao.jpg";
import moi from "@/public/drawings/pp_linkedin-1.png"; // Si tu l'as
import DrawingCard from "@/components/galery/DrawingCard";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full justify-center bg-rose-pastel">
      <main className="w-full max-w-[90%] px-4 py-10">
        
        {/* LA GRILLE : gap-12 gère l'espacement horizontal (tu peux mettre gap-16 pour encore plus grand) */}
        {/* items-start est très important pour ne pas étirer les images */}
        <div className="grid grid-cols-1 items-start gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* COLONNE 1 (Images 1, 5...) */}
          <div className="flex flex-col gap-12">
            <DrawingCard src={elesia} label="Elesia" />
            <DrawingCard src={Zhao} label="Zhao" />
          </div>

          {/* COLONNE 2 (Images 2, 6...) */}
          <div className="flex flex-col gap-12">
            <DrawingCard src={pikapale} label="pikapale" />
            {/* Si tu veux ajouter ton portrait ici plus tard : */}
            <DrawingCard src={moi} label="Portrait" />
          </div>

          {/* COLONNE 3 (Images 3, 7...) */}
          <div className="flex flex-col gap-12">
            <DrawingCard src={Rosalina} label="Rosalina" />
          </div>

          {/* COLONNE 4 (Images 4, 8...) */}
          <div className="flex flex-col gap-12">
            <DrawingCard src={Roxie} label="Roxie" />
          </div>

        </div>
      </main>
    </div>
  );
}