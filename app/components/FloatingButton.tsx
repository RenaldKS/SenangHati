import Image from "next/image";

export default function FloatingWhatsApp() {
  const phone = "6285291007948";

  const message = encodeURIComponent(
    "Halo, saya tertarik dengan Kontrakan Senang Hati. Bisa info lebih lanjut?",
  );

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      <div className="bg-black text-white text-xs px-3 py-1 rounded-md shadow-md opacity-0 hover:opacity-100 transition">
        Chat via WhatsApp
      </div>

      {/* Button */}
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
      >
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-50"></span>

        {/* Main button */}
        <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 group-hover:scale-110">
          {/* <MessageCircle size={28} /> */}
          <Image
            src="/icons/whatsapp.svg"
            alt="whatsapp-icon"
            width={28}
            height={28}
          />
        </div>
      </a>
    </div>
  );
}
