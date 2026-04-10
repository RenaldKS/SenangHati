import "./globals.css";
import { Albert_Sans } from "next/font/google";
import Header from "@/app/components/Navbar";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
