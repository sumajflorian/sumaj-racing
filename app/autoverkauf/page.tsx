import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

const cars = [
  {
    name: "Audi RS3 Sportback",
    year: "2015",
    km: "115'000 km",
    power: "367 PS",
    price: "Preis auf Anfrage",
    image: "/hero.jpg",
  },
  {
    name: "Jaguar XK8 Cabriolet",
    year: "1998",
    km: "48'000 km",
    power: "4.0 V8",
    price: "Preis auf Anfrage",
    image: "/hero.jpg",
  },
];

export default function AutoverkaufPage() {
  return (
    <main className="bg-black pt-32 text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-3 uppercase tracking-[0.3em] text-red-500">
          Autoverkauf
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Aktuell verfügbare Fahrzeuge.
        </h1>

        <p className="mb-12 max-w-3xl text-lg text-gray-400">
          Hier findest du Fahrzeuge, die aktuell über Sumaj Racing zum Verkauf
          stehen. Bei Interesse kannst du uns direkt kontaktieren.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {cars.map((car) => (
            <div
              key={car.name}
              className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 transition hover:-translate-y-1 hover:border-red-500"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover opacity-80 grayscale transition duration-700 hover:scale-110 hover:grayscale-0"
                />
              </div>

              <div className="p-8">
                <p className="mb-3 uppercase tracking-[0.3em] text-red-500">
                  Fahrzeug
                </p>

                <h2 className="mb-5 text-3xl font-bold">{car.name}</h2>

                <div className="mb-6 grid grid-cols-2 gap-4 text-gray-300">
                  <p>Jahrgang: {car.year}</p>
                  <p>Kilometer: {car.km}</p>
                  <p>Leistung: {car.power}</p>
                  <p>{car.price}</p>
                </div>

                <a
                  href="/kontakt"
                  className="inline-block rounded-xl bg-red-600 px-6 py-3 font-bold transition hover:bg-red-700"
                >
                  Interesse anmelden
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