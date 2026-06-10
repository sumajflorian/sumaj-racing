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
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />

      {/* Roter Glow */}
      <div className="absolute left-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-red-600/20 blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <p className="mb-4 uppercase tracking-[0.45em] text-red-500">
          Garage & Fahrzeugaufbereitung
        </p>

        <h1 className="relative mb-8 max-w-5xl text-5xl font-black uppercase leading-none md:text-8xl">
          <span className="absolute -left-2 top-2 text-red-600/20 blur-sm">
            Leidenschaft für perfekte Fahrzeuge
          </span>

          <span className="relative">
            Leidenschaft für perfekte Fahrzeuge
          </span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-gray-300 md:text-xl">
          Sumaj Racing steht für saubere Arbeit, ehrliche Beratung und
          professionelle Fahrzeugpflege in Einsiedeln.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="/kontakt"
            className="rounded-xl bg-red-600 px-8 py-4 text-center font-bold transition hover:scale-105 hover:bg-red-700"
          >
            Anfrage starten
          </a>

          <a
            href="/leistungen"
            className="rounded-xl border border-white/30 px-8 py-4 text-center font-bold transition hover:border-white hover:bg-white hover:text-black"
          >
            Leistungen ansehen
          </a>
        </div>

        {/* Statistik Karten */}
        <div className="mt-20 grid max-w-4xl gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <h3 className="text-3xl font-black text-red-500">100%</h3>
            <p className="text-sm text-gray-400">Leidenschaft</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <h3 className="text-3xl font-black text-red-500">24h</h3>
            <p className="text-sm text-gray-400">Antwortzeit</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <h3 className="text-3xl font-black text-red-500">365</h3>
            <p className="text-sm text-gray-400">Tage Einsatz</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <h3 className="text-3xl font-black text-red-500">SR</h3>
            <p className="text-sm text-gray-400">Sumaj Racing</p>
          </div>
        </div>
      </div>
    </section>
  );
}