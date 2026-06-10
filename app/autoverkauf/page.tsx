import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

const cars = [
  {
    name: "Jaguar XK8 Cabriolet",
    year: "1998",
    km: "48'000 km",
    motor: "4.0 V8",
    power: "284 PS",
    price: "CHF 25'800.-",
    image: "/jaguar.jpg",
  },
  {
    name: "Skoda Fabia 1.2 TSI",
    year: "2011",
    km: "148'000 km",
    motor: "1.2 TSI",
    power: "105 PS",
    price: "CHF 4'900.-",
    image: "/skoda.jpg",
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
              className="group overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 transition duration-300 hover:-translate-y-2 hover:border-red-500"
            >
              {/* Hochformat Bild */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute left-6 top-6 rounded-2xl bg-red-600 px-5 py-3 text-lg font-black shadow-lg">
                  {car.price}
                </div>

                <div className="absolute bottom-6 left-6">
                  <p className="mb-2 text-sm uppercase tracking-[0.3em] text-red-500">
                    Sumaj Racing
                  </p>

                  <h2 className="text-3xl font-black uppercase">
                    {car.name}
                  </h2>
                </div>
              </div>

              {/* Fahrzeugdaten */}
              <div className="p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Jahrgang
                    </p>
                    <p className="mt-1 font-bold">{car.year}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Kilometer
                    </p>
                    <p className="mt-1 font-bold">{car.km}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Motor
                    </p>
                    <p className="mt-1 font-bold">{car.power}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Preis
                    </p>
                    <p className="mt-1 font-bold text-red-500">
                      {car.price}
                    </p>
                  </div>
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