import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4  rounded-xl px-6 py-4">
        {/* LEFT */}
        <p className="text-sm text=black text-center md:text-left">
          © 2026 RenaldKS Dev. All rights reserved.
        </p>

        {/* RIGHT (SOCIAL ICONS) */}
        <div className="flex items-center gap-5">
          <Link href="" target="_blank">
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
              className="hover:opacity-100 opacity-70 transition"
            />
          </Link>

          <Link href="" target="_blank">
            <Image
              src="/icons/facebook.svg"
              alt="Facebook"
              width={20}
              height={20}
              className="hover:opacity-100 opacity-70 transition"
            />
          </Link>
          <Link href="" target="_blank">
            <Image
              src="/icons/youtube.svg"
              alt="Youtube"
              width={20}
              height={20}
              className="hover:opacity-100 opacity-70 transition"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
