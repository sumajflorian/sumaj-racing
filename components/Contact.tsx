export default function Contact() {
  return (
    <section id="kontakt" className="bg-neutral-950 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 uppercase tracking-[0.3em] text-red-500">
            Kontakt
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Bereit für dein Fahrzeug?
          </h2>

          <p className="mb-8 text-lg text-gray-400">
            Schreib uns für Service, Reparaturen, Reifenwechsel oder
            professionelle Fahrzeugaufbereitung.
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

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black grayscale invert">
  <iframe
    src="https://www.google.com/maps?q=Mythenstrasse%2022%2C%208840%20Einsiedeln%2C%20Schweiz&output=embed"
    width="100%"
    height="450"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
      </div>
    </section>
  );
}