export default function Services() {
  return (
    <section id="leistungen" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="mb-12 text-5xl font-bold">
        Unsere Leistungen
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          "Service & Reparaturen",
          "Reifenservice",
          "MFK Vorbereitung",
          "Innenreinigung",
          "Aussenaufbereitung",
          "Politur & Versiegelung",
        ].map((service) => (
          <div
            key={service}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-red-500"
          >
            <h3 className="text-2xl font-bold">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}