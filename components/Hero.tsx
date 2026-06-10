export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <p className="mb-4 uppercase tracking-[0.45em] text-red-500">
          Garage & Fahrzeugaufbereitung
        </p>

        <h1 className="mb-6 max-w-5xl text-5xl font-black uppercase leading-none md:text-8xl">
          Leidenschaft für perfekte Fahrzeuge
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-gray-300 md:text-xl">
          Sumaj Racing steht für saubere Arbeit, ehrliche Beratung und
          professionelle Fahrzeugpflege in Einsiedeln.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#kontakt"
            className="rounded-xl bg-red-600 px-8 py-4 text-center font-bold transition hover:bg-red-700"
          >
            Anfrage starten
          </a>

          <a
            href="#leistungen"
            className="rounded-xl border border-white/40 px-8 py-4 text-center font-bold transition hover:bg-white hover:text-black"
          >
            Leistungen ansehen
          </a>
        </div>
      </div>
    </section>
  );
}