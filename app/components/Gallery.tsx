"use client"; // Wajib karena pakai onClick dan useState

import Image from "next/image";
import { useState } from "react";

// --- DATA DRIVEN AREA ---

const kontrakanImages = [
  { id: 1, src: "/images/Kontrakan1.jpg", alt: "Tampak Depan Kontrakan" },
  { id: 2, src: "/images/Kontrakan2.jpg", alt: "Tampak Depan Kontrakan 2" },
  { id: 3, src: "/images/Kontrakan3.jpg", alt: "Dapur" },
  { id: 4, src: "/images/Kontrakan4.jpg", alt: "Kamar Mandi" },
  { id: 6, src: "/images/Kontrakan6.jpg", alt: "Kamar Tidur" },
];

export default function Gallery() {
  // State untuk menyimpan gambar yang sedang di-zoom
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="px-6 py-12 mx-auto max-w-7xl relative container justify-center items-center mx-auto"
    >
      <div className="mb-8">
        <h1 className="font-bold text-4xl md:text-5xl ">Galeri</h1>
        <p className="text-gray-600 mt-2">Klik gambar untuk memperbesar</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-6 rounded-sm shadow-lg bg-white-400">
        {/* --- LOOPING DATA (MAP) --- */}
        {kontrakanImages.map((img) => (
          <div
            key={img.id}
            className="relative overflow-hidden cursor-pointer group aspect-[4/3] rounded-sm shadow-md"
            onClick={() => setSelectedImg(img.src)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={img.id <= 3}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
            />

            <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-xs font-semibold text-black bg-white/80 px-3 py-1 rounded-full shadow">
                Perbesar
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* --- MODAL ZOOM (LIGHTBOX) --- */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-all duration-300 backdrop-blur-sm"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative w-full max-w-5xl aspect-video md:aspect-[16/10]">
            <Image
              src={selectedImg}
              alt="Zoomed Kontrakan"
              fill
              className="object-contain" //
            />
          </div>

          <button className="absolute top-5 right-5 text-white text-5xl font-light hover:text-gray-300">
            ×
          </button>
        </div>
      )}
    </section>
  );
}
