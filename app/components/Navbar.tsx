"use client";
import { useState } from "react";

import Link from "next/link";
import { Boldonse, Albert_Sans } from "next/font/google";
const boldonse = Boldonse({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        <title>Kontrakan Senang Hati</title>
        <nav className="flex justify-between items-center px-3 py-3 max-w-7xl mx-auto relative transition-all duration-300  rounded">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>

            <p className={`text-2xl px-8 ${boldonse.className} `}>SenangHati</p>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-6 text-lg">
            <Link href={"/"}>
              <li className="px-3 py-2 rounded-lg hover:bg-slate-200 hover:text-black">
                Home
              </li>
            </Link>
            <Link href={"#gallery"}>
              <li className="px-3 py-2 rounded-lg hover:bg-slate-200 hover:text-black">
                Galeri
              </li>
            </Link>
            <Link href={"#facilities"}>
              <li className="px-3 py-2 rounded-lg hover:bg-slate-200 hover:text-black">
                Fasilitas
              </li>
            </Link>
            <Link href={"#location"}>
              <li className="px-3 py-2 rounded-lg hover:bg-slate-200 hover:text-black">
                Lokasi
              </li>
            </Link>
          </ul>

          {/* BUTTON (ALWAYS VISIBLE) */}
          <Link href={"https://wa.me/6285117067601"}>
            <button className="px-4 py-2 rounded-lg bg-black text-white shadow-md hover:bg-slate-200 hover:text-black">
              Hubungi Kami
            </button>
          </Link>

          {/* MOBILE DROPDOWN */}
          {isOpen && (
            <div className="absolute top-full left-0 w-[25%] bg-teal-200 shadow-md md:hidden">
              <ul className="flex flex-col items-start p-4 gap-4 text-lg">
                <Link href={"/"}>
                  <li>Home</li>
                </Link>
                <Link href={"#gallery"}>
                  <li>Galeri</li>
                </Link>
                <Link href={"#facilities"}>
                  <li>Fasilitas</li>
                </Link>
                <Link href={"#location"}>
                  <li>Lokasi</li>
                </Link>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
