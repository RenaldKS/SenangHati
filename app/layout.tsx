import "./globals.css";
import { Albert_Sans } from "next/font/google";
import Header from "@/app/components/Navbar";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://senanghati.com"), // ganti kalau sudah deploy
  title: {
    default: "Kontrakan Senang Hati",
    template: "%s | SenangHati",
  },
  description:
    "Kontrakan nyaman, aman, dan luas di Lampung Selatan dekat Bandar Lampung.",
  openGraph: {
    title: "SenangHati - Kontrakan Nyaman di Lampung Selatan/Bandar Lampung",
    description:
      "Hunian kontrakan yang tenang, aman, dan luas di lokasi strategis dekat Bandar Lampung.",
    url: "https://senanghati.com",
    images: ["/Kontrakan1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${albertSans.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
