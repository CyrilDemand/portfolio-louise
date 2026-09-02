import type { Metadata } from "next";
import Contact from "./Contact";

export const metadata: Metadata = {
  title: "Contact — Loupillion — Louise Pietrzyk",
  description: "Illustratrice indépendante, personnages hauts en couleur.",
};

export default function ContactPage() {
  return <Contact/>
}