export default function Contact() {
  return (
    <section id="kontakt" className="bg-neutral-950 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 uppercase tracking-[0.3em] text-red-500">Kontakt</p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Bereit für dein Fahrzeug?
          </h2>

          <p className="mb-8 text-lg text-gray-400">
            Schreib uns für Service, Reparaturen, Reifenwechsel oder professionelle Fahrzeugaufbereitung.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>📍 Mythenstrasse 22, 8840 Einsiedeln</p>
            <p>📞 079 949 41 65</p>
            <p>✉️ sumaj.florian@icloud.com</p>
          </div>

          <a
            href="https://wa.me/41799494165"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-green-500 px-8 py-4 font-bold text-white transition hover:scale-105"
          >
            Direkt per WhatsApp schreiben
          </a>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Mythenstrasse+22+8840+Einsiedeln"
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-[450px] overflow-hidden rounded-2xl border border-white/10 bg-black group"
        >
          <img
            src="/map.png"
            alt="Standort Sumaj Racing"
            className="h-full w-full object-cover grayscale invert brightness-75 contrast-125 transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-red-950/40" />

          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-red-500/60 bg-black shadow-[0_0_40px_rgba(239,68,68,0.45)]">
              <img src="/logo.png" alt="Sumaj Racing Logo" className="h-12 w-auto" />
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-black/80 px-5 py-3 text-center backdrop-blur">
              <p className="font-bold text-white">Sumaj Racing</p>
              <p className="text-sm text-gray-400">
                Mythenstrasse 22, Einsiedeln
              </p>
            </div>
          </div>

          <div className="absolute bottom-5 right-5 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition group-hover:bg-red-700">
            Route öffnen
          </div>
        </a>
      </div>
    </section>
  );
}