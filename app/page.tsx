import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

const cards = [
  {
    title: "Garage",
    text: "Service, Reparaturen, Reifenservice und MFK-Vorbereitung.",
    link: "/leistungen",
  },
  {
    title: "Aufbereitung",
    text: "Innenreinigung, Aussenpflege, Politur und Versiegelung.",
    link: "/aufbereitung",
  },
  {
    title: "Kontakt",
    text: "Direkt anfragen und Termin vereinbaren.",
    link: "/kontakt",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-3 uppercase tracking-[0.3em] text-red-500">
          Sumaj Racing
        </p>

        <h2 className="mb-6 max-w-4xl text-4xl font-bold md:text-5xl">
          Alles rund um dein Fahrzeug – sauber, ehrlich und mit Leidenschaft.
        </h2>

        <p className="mb-12 max-w-3xl text-lg text-gray-400">
          Von Garagearbeiten bis zur professionellen Fahrzeugaufbereitung:
          Sumaj Racing verbindet handwerkliche Arbeit mit Liebe zum Detail.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.link}
              className="group relative h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-neutral-950"
            >
              <img
                src="/hero.jpg"
                alt={card.title}
                className="h-full w-full object-cover opacity-50 grayscale transition duration-700 group-hover:scale-110 group-hover:opacity-70 group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">
                  Sumaj Racing
                </p>

                <h3 className="mb-4 text-4xl font-black uppercase">
                  {card.title}
                </h3>

                <p className="mb-6 text-gray-300">{card.text}</p>

                <span className="inline-block rounded-xl border border-white/30 px-5 py-3 text-sm font-bold transition group-hover:border-red-500 group-hover:bg-red-600">
                  Mehr erfahren
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}