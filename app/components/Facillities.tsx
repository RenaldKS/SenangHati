import Image from "next/image";
export default function Facillities() {
  return (
    <>
      <section>
        <div className="flex flex-col gap-8 px-6 py-3 mx-auto max-w-7xl relative container  justify-center ">
          <h1 id="facilities" className="font-bold text-4xl md:text-5xl">
            Fasilitas
          </h1>
        </div>
        <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-6 py-12 mx-auto max-w-7xl container relative">
          <div className="flex-1 ">
            <h1 className="text-3xl px-2 mb-6"> Rumah Tipe 1 :</h1>

            <div className="grid grid-cols-3 gap-3 p-3 rounded-lg  bg-white">
              <div className="flex flex-col items-center text-center">
                <Image
                  src={"/icons/bed.svg"}
                  alt="bed icon"
                  width={45}
                  height={45}
                />
                <p className=" mt-2"> 2 KT ( Single Bed )</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src={"/icons/shower.svg"}
                  alt="bed icon"
                  width={45}
                  height={45}
                />
                <p className=" mt-2"> 1 KM</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src={"/icons/toilet-squad.svg"}
                  alt="bed icon"
                  width={45}
                  height={45}
                />
                <p className=" mt-2"> Toilet Jongkok</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src={"/icons/kitchen.svg"}
                  alt="bed icon"
                  width={45}
                  height={45}
                />
                <p className=" mt-2"> Ruang Dapur</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src={"/icons/Table.svg"}
                  alt="bed icon"
                  width={45}
                  height={45}
                />
                <p className=" mt-2"> Meja Kursi</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src={"/icons/parking.svg"}
                  alt="bed icon"
                  width={45}
                  height={45}
                />
                <p className=" mt-2"> Parkir Luas</p>
              </div>
            </div>
          </div>

          <Image
            src="/Kontrakan1.jpg"
            alt="image here"
            priority
            width={350}
            height={150}
            className="shadow-lg  h-auto"
          />
        </section>
        <div className="hidden md:block w-full h-px bg-slate-200/50 mx-auto max-w-2xl shadow-xs"></div>
        <section className="flex flex-col-reverse md:flex-row-reverse items-center gap-8 px-6 py-12 mx-auto max-w-7xl container relative">
          <div className="flex-1 ">
            <h1 className="text-3xl px-2 mb-6"> Rumah Tipe 2 :</h1>

            <div className="grid grid-cols-3 gap-3 p-3 rounded-lg  bg-white">
              <div className="flex flex-col items-center text-center">
                <Image
                  src={"/icons/bed.svg"}
                  alt="bed icon"
                  width={45}
                  height={45}
                />
                <p className=" mt-2"> 1 KT ( Single Bed )</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src={"/icons/shower.svg"}
                  alt="bed icon"
                  width={45}
                  height={45}
                />
                <p className=" mt-2"> 1 KM</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src={"/icons/toilet-squad.svg"}
                  alt="bed icon"
                  width={45}
                  height={45}
                />
                <p className=" mt-2"> Toilet Jongkok</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src={"/icons/kitchen.svg"}
                  alt="bed icon"
                  width={45}
                  height={45}
                />
                <p className=" mt-2"> Ruang Dapur</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src={"/icons/Table.svg"}
                  alt="bed icon"
                  width={45}
                  height={45}
                />
                <p className=" mt-2"> Meja & Kursi</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src={"/icons/parking.svg"}
                  alt="bed icon"
                  width={45}
                  height={45}
                />
                <p className=" mt-2"> Parkir Luas</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src={"/icons/door.svg"}
                  alt="bed icon"
                  width={45}
                  height={45}
                />
                <p className=" mt-2"> Pintu Hubung</p>
              </div>
            </div>
          </div>

          <Image
            src="/Kontrakan1.jpg"
            alt="image here"
            priority
            width={350}
            height={150}
            className="shadow-lg  h-auto"
          />
        </section>
      </section>
    </>
  );
}
