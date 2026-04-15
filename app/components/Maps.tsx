export default function Maps() {
  return (
    <section id="location" className="px-4 md:px-6 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Lokasi Kami</h1>
        <p className="text-gray-500 mt-2">Temukan Kami Lewat Map Dibawah Ini</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* MAP */}
        <div className="relative w-full lg:w-2/3 h-72 sm:h-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.384426106504!2d105.29300657590507!3d-5.358170653635742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c5b5eb8c2a43%3A0x89c112d2893d68a3!2sKontrakan%20Senang%20Hati!5e0!3m2!1sid!2sid!4v1775992758341!5m2!1sid!2sid"
            className="absolute top-0 left-0 w-full h-full"
            loading="lazy"
          />
        </div>

        {/* INFO CARD */}
        <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">Kontrakan Senang Hati</h2>

            <p className="text-gray-600 text-sm leading-relaxed">
              Lokasi strategis, hening, dekat fasilitas umum, akses mudah, dan
              lingkungan nyaman untuk tinggal jangka panjang.
            </p>

            <div className="mt-5 space-y-2 text-sm text-gray-700">
              <p>📍 Lampung Selatan, Indonesia</p>
              <p>🚗 Akses kendaraan mudah</p>
              <p>🤵 Renaldi (CP 1)</p>
              <p>📞 +6285291007948</p>
              <p>🙎‍♀️ Idawati (CP 2)</p>
              <p>📞 +628127978564</p>
            </div>
          </div>

          {/* CTA BUTTON */}
          <a
            href="https://maps.app.goo.gl/5jxAZ2eK76qcoSNb9"
            target="_blank"
            className="mt-6 inline-block text-center bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Buka di Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
