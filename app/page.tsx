import Gallery from "@/app/components/Gallery";
import Hero from "@/app/components/Hero";
import Facillities from "./components/Facillities";
import Maps from "./components/Maps";
import Footer from "./components/Footer";

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
