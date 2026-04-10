export default function About() {
  return (
    <>
      <section className="flex flex-col items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl">
        <img src="/hero-img.svg" width={350} />
        <div className="flex-1 space-y-6">
          <p className=" text-xs text-gray-600 uppercase ">ABOUT PRINTFORGE</p>
          <h1 className="text-3xl font-bold md:text-4xl">
            Empowering makers worldwide
          </h1>
          <p className="hidden text-sm text-gray-600 uppercase md:block">
            Founded in 2023, PrintForge has quickly become the go-to platform
            for 3D printing enthusiasts, makers, and professional designers to
            share and discover amazing STL files for 3D printing.
          </p>
          <p className=" text-sm text-gray-600 uppercase md:block">
            Our mission is to foster a vibrant community where creativity meets
            technology, enabling anyone to bring their ideas to life through 3D
            printing.
          </p>
        </div>
      </section>
      <section className="flex flex-col-reverse item-center justify-between gap-6 py-6 mx-auto md:flex-row max-w-7xl border-y">
        <div className="flex-1 space-y-6">
          <h2> 100K+ Models</h2>
          <p className=" text-sm text-gray-600 uppercase md:block">
            Access our vast library of community-created 3D models, from
            practical tools to artistic creations.
          </p>
        </div>
        <div className=" hidden inline-block h-[140px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10 md:block"></div>
        <div className="flex-1 space-y-6">
          <h2> 100K+ Models</h2>
          <p className=" text-sm text-gray-600 uppercase md:block">
            Access our vast library of community-created 3D models, from
            practical tools to artistic creations.
          </p>
        </div>
        <div className=" hidden inline-block h-[140px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10 md:block"></div>
        <div className="flex-1 space-y-6">
          <h2> 100K+ Models</h2>
          <p className=" text-sm text-gray-600 uppercase md:block">
            Access our vast library of community-created 3D models, from
            practical tools to artistic creations.
          </p>
        </div>
      </section>
      <section className="items-center justify-between gap-10 px-6 py-12 mx-auto max-w-3xl">
        <h1 className="font-bold text-4xl"> Our vision</h1>
        <p className="text-gray-600  text-sm py-5">
          At PrintForge, we believe that 3D printing is revolutionizing the way
          we create, prototype, and manufacture. Our platform serves as a bridge
          between designers and makers, enabling the sharing of knowledge and
          creativity that pushes the boundaries of whats possible with 3D
          printing.
        </p>
        <div className=" items-center hidden inline-block w-[150px] min-h-[1px] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10 md:block "></div>
        <p className="text-gray-600 text-sm py-5">
          Whether you are a hobbyist looking for your next weekend project, an
          educator seeking teaching materials, or a professional designer
          wanting to share your creations, PrintForge provides the tools and
          community to support your journey in 3D printing.
        </p>
      </section>
    </>
  );
}
