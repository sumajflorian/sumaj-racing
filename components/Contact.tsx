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

        <form className="rounded-2xl border border-white/10 bg-black p-8">
          <input
            className="mb-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-red-500"
            placeholder="Name"
          />

          <input
            className="mb-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-red-500"
            placeholder="E-Mail"
          />

          <input
            className="mb-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-red-500"
            placeholder="Telefonnummer"
          />

          <textarea
            className="mb-6 h-32 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-red-500"
            placeholder="Worum geht es?"
          />

          <button
            type="button"
            className="w-full rounded-xl bg-red-600 px-6 py-4 font-bold transition hover:bg-red-700"
          >
            Anfrage senden
          </button>
        </form>
      </div>
    </section>
  );
}