import Gallery from "@/app/components/Gallery";
import Hero from "@/app/components/Hero";
import Facillities from "./components/Facillities";
import Maps from "./components/Maps";
import Footer from "./components/Footer";

export const metadata = {
  title:
    "Kontrakan Tenang & Nyaman di Jati Agung Lampung Selatan/Bandar Lampung",
  description:
    "Kontrakan nyaman, aman, dan luas di Jati Agung Lampung Selatan. Lokasi dekat Bandar Lampung dengan suasana hening, cocok untuk keluarga maupun pekerja.",
  openGraph: {
    title: "Kontrakan Tenang & Nyaman di Jati Agung/Bandar Lampung",
    description:
      "Hunian luas, aman, dan nyaman di Lampung Selatan dekat Bandar Lampung dengan suasana tenang dan strategis.",
    images: ["images/Kontrakan1.jpg"],
  },
};

export default function kontrakan() {
  return (
    <>
      <Hero />
      <div className="hidden md:block w-full h-px bg-slate-200/50 mx-auto max-w-2xl shadow-xs"></div>
      <Facillities />
      <div className="hidden md:block w-full h-px bg-slate-200/50 mx-auto max-w-2xl shadow-xs"></div>
      <Gallery />
      <div className="hidden md:block w-full h-px bg-slate-200/50 mx-auto max-w-2xl shadow-xs"></div>
      <Maps />
      <Footer />
    </>
  );
}
