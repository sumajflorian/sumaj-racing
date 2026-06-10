export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-2xl border border-white/10 p-8">
          <h3 className="text-4xl font-bold text-red-500">100%</h3>
          <p className="mt-2 text-gray-400">Leidenschaft</p>
        </div>

        <div className="rounded-2xl border border-white/10 p-8">
          <h3 className="text-4xl font-bold text-red-500">24h</h3>
          <p className="mt-2 text-gray-400">Antwortzeit</p>
        </div>

        <div className="rounded-2xl border border-white/10 p-8">
          <h3 className="text-4xl font-bold text-red-500">365</h3>
          <p className="mt-2 text-gray-400">Tage Einsatz</p>
        </div>

        <div className="rounded-2xl border border-white/10 p-8">
          <h3 className="text-4xl font-bold text-red-500">SR</h3>
          <p className="mt-2 text-gray-400">Sumaj Racing</p>
        </div>
      </div>
    </section>
  );
}