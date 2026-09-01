import DrawingCard from "@/components/galery/DrawingCard";

// ==========================================
// IMPORTS DES IMAGES
// ==========================================

// Celles que tu avais déjà
import Rosalina from "@/public/drawings/Rosalina.jpg";
import Roxie from "@/public/drawings/Roxie.jpg";
import Zhao from "@/public/drawings/Zhao.jpg";
import moi from "@/public/drawings/pp_linkedin-1.png"; 

// Nouvelles images ajoutées depuis ton dossier
import adamantin from "@/public/drawings/Adamantin.png";
import celesteAcnh from "@/public/drawings/Celeste Acnh.png";
import cinnamonrollSleep from "@/public/drawings/Cinnamonroll_Sleep.gif";
import emotesFern from "@/public/drawings/Emotes Fern animation.gif";
import enchantixPyroli from "@/public/drawings/enchantix Pyroli.png";
import fanArtPanty2 from "@/public/drawings/Fan art Panty 2.png";
import fanartPokemon from "@/public/drawings/Fanart Pokemon.png";
import fanArtStocking from "@/public/drawings/Fan art Stocking.png";
import fanArtStocking2 from "@/public/drawings/Fan art Stocking 2.png";
import feFlayn from "@/public/drawings/Fe Flayn.png";
import fireEmblemOlivia from "@/public/drawings/Fire Emblem Olivia habillée .png";
import fragiladyHisui from "@/public/drawings/Fragilady hisui.png";
import harmonieEtLuma from "@/public/drawings/Harmonie et Luma.png";
import ineziaPolaroid from "@/public/drawings/Inezia_Polaroid_anglais.png";
import lou from "@/public/drawings/Lou.png";
import luMao from "@/public/drawings/Lu-mao.png";
import mavisSunny from "@/public/drawings/Mavis Sunny Halloween .png";
import miraPortrait from "@/public/drawings/Mira Portrait .png";
import nyalchimiste from "@/public/drawings/Nyalchimiste.png";
import ocMagicalDoremi from "@/public/drawings/OC Magical Doremi.png";
import ocMagicalDoremiZoom from "@/public/drawings/OC Magical Doremi Zoomé.png";
import pantyEtKneesocks from "@/public/drawings/Panty et Kneesocks.png";
import persoFireEmblemVampire from "@/public/drawings/Perso fire emblem vampire.png";
import pokopiaPikapale from "@/public/drawings/Pokopia Pikapale.jpg"; // Doublon potentiel avec pikapale.jpg
import rumi from "@/public/drawings/Rumi.png";
import strykna from "@/public/drawings/Strykna.png";
import zoeyPortrait from "@/public/drawings/Zoey Portrait.png";
import zzzCissia from "@/public/drawings/ZZZ Cissia.png";


export default function Home() {
  return (
    <div className="flex min-h-screen w-full justify-center bg-rose-pastel">
      <main className="w-full max-w-[90%] px-4 py-10">

        {/* LA GRILLE : gap-12 gère l'espacement horizontal */}
        <div className="grid grid-cols-1 items-start gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* COLONNE 1 */}
          <div className="flex flex-col gap-12">
            <DrawingCard src={Zhao} label="Zhao" />
            <DrawingCard src={fanArtStocking} label="Fan art Stocking" />
            <DrawingCard src={harmonieEtLuma} label="Harmonie et Luma" />
            <DrawingCard src={adamantin} label="Adamantin" />
            <DrawingCard src={miraPortrait} label="Mira Portrait" />
            <DrawingCard src={persoFireEmblemVampire} label="Fire Emblem Vampire" />
            <DrawingCard src={zoeyPortrait} label="Zoey Portrait" />
          </div>

          {/* COLONNE 2 */}
          <div className="flex flex-col gap-12">
            <DrawingCard src={fanArtStocking2} label="Fan art Stocking 2" />
            <DrawingCard src={ineziaPolaroid} label="Inezia Polaroid" />
            <DrawingCard src={emotesFern} label="Emotes Fern Animation" />
            <DrawingCard src={nyalchimiste} label="Nyalchimiste" />
            <DrawingCard src={pokopiaPikapale} label="Pokopia Pikapale" />
            <DrawingCard src={zzzCissia} label="ZZZ Cissia" />
            <DrawingCard src={celesteAcnh} label="Celeste ACNH" />
            <DrawingCard src={moi} label="Portrait" />
          </div>

          {/* COLONNE 3 */}
          <div className="flex flex-col gap-12">
            <DrawingCard src={lou} label="Lou" />
            <DrawingCard src={cinnamonrollSleep} label="Cinnamonroll Sleep" />
            <DrawingCard src={fanArtPanty2} label="Fan art Panty 2" />
            <DrawingCard src={pantyEtKneesocks} label="Panty et Kneesocks" />
            <DrawingCard src={enchantixPyroli} label="Enchantix Pyroli" />
            <DrawingCard src={feFlayn} label="FE Flayn" />
            <DrawingCard src={ocMagicalDoremi} label="OC Magical Doremi" />
            <DrawingCard src={rumi} label="Rumi" />
          </div>

          {/* COLONNE 4 */}
          <div className="flex flex-col gap-12">
            <DrawingCard src={Roxie} label="Roxie" />
            <DrawingCard src={mavisSunny} label="Mavis Sunny Halloween" />
            <DrawingCard src={fanartPokemon} label="Fanart Pokemon" />
            <DrawingCard src={fireEmblemOlivia} label="Fire Emblem Olivia" />
            <DrawingCard src={fragiladyHisui} label="Fragilady Hisui" />
            <DrawingCard src={luMao} label="Lu-mao" />
          </div>

        </div>
      </main>
    </div>
  );
}