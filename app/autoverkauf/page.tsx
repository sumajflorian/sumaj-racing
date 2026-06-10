import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

const cars = [
  {
    name: "Jaguar XK8 Cabriolet",
    year: "1998",
    km: "48'000 km",
    motor: "4.0 V8",
    ps: "284 PS",
    mfk: "Juni 2024",
    price: "CHF 25'800.-",
    image: "/jaguar.jpg",
    highlights: [
      "Schweizer Fahrzeug",
      "Serviceheft vorhanden",
      "Unfallfrei",
      "Nur 48'000 km",
    ],
  },
  {
    name: "Skoda Fabia 1.2 TSI",
    year: "2011",
    km: "148'000 km",
    motor: "1.2 TSI",
    ps: "105 PS",
    mfk: "Frisch ab MFK",
    price: "CHF 4'900.-",
    image: "/skoda.jpg",
    highlights: [
      "Frisch ab MFK",
      "Bluetooth-Radio",
      "Sitzheizung",
      "Sparsamer 1.2 TSI",
    ],
  },
];

export default function AutoverkaufPage() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-40">
        <p className="mb-3 uppercase tracking-[0.3em] text-red-500">
          Autoverkauf
        </p>

        <h1 className="mb-6 text-5xl font-black uppercase md:text-7xl">
          Aktuelle Fahrzeuge
        </h1>

        <p className="mb-16 max-w-3xl text-lg text-gray-400">
          Entdecke unsere aktuell verfügbaren Fahrzeuge. Gepflegte Autos,
          transparente Angaben und persönliche Beratung direkt von Sumaj Racing.
        </p>

        <div className="grid gap-10 lg:grid-cols-2">
          {cars.map((car) => (
            <div
              key={car.name}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_20px_50px_rgba(255,0,0,0.25)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                <div className="absolute left-6 top-6 rounded-2xl bg-red-600 px-5 py-3 text-lg font-black shadow-lg">
                  {car.price}
                </div>
              </div>

              <div className="p-8">
                <p className="mb-3 uppercase tracking-[0.3em] text-red-500">
                  Fahrzeug
                </p>

                <h2 className="mb-5 text-3xl font-black">{car.name}</h2>

                <div className="mb-8 grid gap-2">
                  {car.highlights.map((highlight) => (
                    <p key={highlight} className="text-sm text-gray-300">
                      <span className="mr-2 text-red-500">✓</span>
                      {highlight}
                    </p>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <InfoBox label="Jahrgang" value={car.year} />
                  <InfoBox label="Kilometer" value={car.km} />
                  <InfoBox label="Motor" value={car.motor} />
                  <InfoBox label="Leistung" value={car.ps} />
                  <InfoBox label="Letzte MFK" value={car.mfk} />
                  <InfoBox label="Preis" value={car.price} highlight />
                </div>

                <a
                  href="/kontakt"
                  className="mt-8 block rounded-2xl bg-red-600 px-6 py-4 text-center font-bold uppercase tracking-wide transition hover:bg-red-700"
                >
                  Fahrzeug anfragen
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}

function InfoBox({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 transition ${
        highlight
          ? "border-red-500/60 bg-red-600/10"
          : "border-white/10 bg-white/5"
      }`}
    >
      <p className="text-xs uppercase tracking-wider text-gray-500">{label}</p>
      <p className={`mt-1 font-bold ${highlight ? "text-red-500" : ""}`}>
        {value}
      </p>
    </div>
  );
}