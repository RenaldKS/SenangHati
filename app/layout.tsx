import "./globals.css";
import { Boldonse, Albert_Sans } from "next/font/google";

import Link from "next/link";

const boldonse = Boldonse({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.className}`}>
        <header className="w-full bg-white">
          <nav className="flex justify-between items-center   px-3 py-3 max-w-7xl mx-auto">
            <Link href={"/kontrakan"}>
              <p className={`text-2xl px-8 ${boldonse.className}`}>
                SenangHati
              </p>
            </Link>

            <div className="flex flex-col-reverse items-center justify-between mx-auto relative text-lg">
              <ul className="flex items-center gap-2.5">
                <Link href={"/"}>
                  <li>Home</li>
                </Link>
                <Link href={"#gallery"}>
                  <li>Gallery</li>
                </Link>
                <Link href={"#facilities"}>
                  <li>Facilities</li>
                </Link>
                <Link href={"#location"}>
                  <li>Location</li>
                </Link>
              </ul>
            </div>
            <button className="px-4 py-2 rounded-lg bg-black text-white hover:bg-slate-200 hover:text-black">
              Contact Us
            </button>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
