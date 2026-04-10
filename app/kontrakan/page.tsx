import Image from "next/image";
export default function kontrakan() {
  return (
    <>
      <section className="flex flex-col items-center justify-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl relative container ">
        <div className="flex-1">
          <h1 className="font-bold text-6xl px-2">Kontrakan Senang Hati</h1>
          <p className="text-sm text-gray-600 uppercase px-2 py-5">
            Escape to this cozy Nordic cabin, perfect for solo retreats or group
            getaways — whether it is unwinding by the fire after a day of skiing
            or enjoying a morning coffee with stunning views.
          </p>
        </div>
        <Image
          src="/Kontrakan1.jpg"
          alt="image here"
          priority
          width={600}
          height={250}
          style={{ width: "60%", height: "auto" }}
        />
      </section>
      <div className="hidden md:block w-full h-px bg-slate-200/50 mx-auto max-w-2xl shadow-xs"></div>
      <section
        id="gallery"
        className="flex flex-row items-center justify-center justify-between gap-8 px-6 py-12 mx-auto max-w-7xl relative container "
      >
        <div className="flex-1">
          <h1 className="font-bold text-6xl px-2">Galeri</h1>
        </div>
      </section>
    </>
  );
}
