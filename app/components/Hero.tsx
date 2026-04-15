import Image from "next/image";
export default function Hero() {
  return (
    <>
      <section className="flex flex-col items-center justify-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl relative container ">
        <div className="flex-1">
          <h1 className="font-bold text-6xl px-2">Kontrakan Senang Hati</h1>
          <h1 className="text-md font-bold text-gray-600  px-2 py-1">
            Kontrakan Nyaman di Jati Agung Lampung Selatan dekat Bandar Lampung.
          </h1>
          <p className="text-sm text-gray-600 px-2 py-2">
            Terletak di Jati Agung, Lampung Selatan, kontrakan ini menawarkan
            hunian yang tenang, nyaman, dan aman. Lokasinya dekat dengan Bandar
            Lampung, cocok bagi Anda yang mencari tempat tinggal yang hening
            namun tetap strategis.
          </p>
        </div>
        <Image
          src="/images/Kontrakan1.jpg"
          alt="Kontrakan Hero Image"
          priority
          width={550}
          height={250}
          className="shadow-lg h-auto"
        />
      </section>
    </>
  );
}
