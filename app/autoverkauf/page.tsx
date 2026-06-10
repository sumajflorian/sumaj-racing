import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

const cars = [
  {
    name: "Jaguar XK8 Cabriolet",
    year: "1998",
    km: "48'000 km",
    power: "4.0 V8",
    price: "CHF 25'800.-",
    image: "/jaguar.jpg",
  },
  {
    name: "Skoda Fabia 1.2 TSI",
    year: "Jahrgang folgt",
    km: "148'000 km",
    power: "1.2 TSI",
    price: "CHF 4'900.-",
    image: "/skoda.jpg",
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
          Ausgewählte Fahrzeuge direkt von Sumaj Racing. Gepflegte Fahrzeuge,
          transparente Angaben und persönliche Beratung.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {cars.map((car) => (
            <div
              key={car.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 transition hover:-translate-y-1 hover:border-red-500"
            >
              <div className="relative h-96 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover opacity-90 grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5 rounded-xl bg-red-600 px-5 py-3 text-xl font-black">
                  {car.price}
                </div>
              </div>

              <div className="p-8">
                <p className="mb-3 uppercase tracking-[0.3em] text-red-500">
                  Fahrzeug
                </p>

                <h2 className="mb-6 text-3xl font-bold">{car.name}</h2>

                <div className="mb-8 grid grid-cols-2 gap-4 text-gray-300">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-gray-500">Jahrgang</p>
                    <p className="font-bold">{car.year}</p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-gray-500">Kilometer</p>
                    <p className="font-bold">{car.km}</p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-gray-500">Motor</p>
                    <p className="font-bold">{car.power}</p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-gray-500">Preis</p>
                    <p className="font-bold text-red-500">{car.price}</p>
                  </div>
                </div>

                <a
                  href="/kontakt"
                  className="inline-block rounded-xl bg-red-600 px-6 py-3 font-bold transition hover:bg-red-700"
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