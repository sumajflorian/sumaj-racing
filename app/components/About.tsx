const team = [
  {
    name: "Florian Sumaj",
    role: "Kundenkontakt & Fahrzeugaufbereitung",
    phone: "079 949 41 65",
    email: "sumaj.florian@icloud.com",
    image: "/team-florian.jpg",
  },
  {
    name: "Enver Sumaj",
    role: "Garage & Reparaturen",
    phone: "Telefon folgt",
    email: "E-Mail folgt",
    image: "/team-enver.jpg",
  },
  {
    name: "Benjamin Sumaj",
    role: "Werkstatt & Unterstützung",
    phone: "Telefon folgt",
    email: "E-Mail folgt",
    image: "/team-benjamin.jpg",
  },
];

export default function About() {
  return (
    <section id="ueber-uns" className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-4xl">
          <p className="mb-3 uppercase tracking-[0.3em] text-red-500">
            Über uns
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Eine Garage mit Leidenschaft, Erfahrung und Liebe zum Detail.
          </h2>

          <p className="text-lg leading-relaxed text-gray-400">
            Sumaj Racing steht für ehrliche Arbeit, persönliche Beratung und
            echte Leidenschaft für Fahrzeuge. Ob Service, Reparaturen,
            Reifenwechsel oder professionelle Fahrzeugaufbereitung – wir nehmen
            uns Zeit für jedes Auto und arbeiten so, als wäre es unser eigenes.
          </p>
        </div>

        <h3 className="mb-8 text-3xl font-bold">Das sind wir</h3>

        <div className="grid gap-6 md:grid-cols-3">
          {team.map((person) => (
            <div
              key={person.name}
              className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 transition hover:-translate-y-1 hover:border-red-500"
            >
              <div className="h-80 overflow-hidden bg-neutral-900">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full object-cover grayscale transition duration-500 hover:scale-105 hover:grayscale-0"
                />
              </div>

              <div className="p-6">
                <p className="mb-1 text-sm uppercase tracking-[0.25em] text-red-500">
                  Team
                </p>

                <h4 className="mb-2 text-2xl font-bold">{person.name}</h4>

                <p className="mb-5 text-gray-400">{person.role}</p>

                <div className="space-y-2 text-sm text-gray-300">
                  <p>📞 {person.phone}</p>
                  <p>✉️ {person.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}