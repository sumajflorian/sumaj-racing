import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-3 uppercase tracking-[0.3em] text-red-500">Sumaj Racing</p>
        <h2 className="mb-12 text-4xl font-bold md:text-5xl">
          Garage & Fahrzeugaufbereitung in Einsiedeln
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Über uns", "Lerne das Team hinter Sumaj Racing kennen.", "/ueber-uns"],
            ["Leistungen", "Service, Reparaturen, Reifenservice und MFK-Vorbereitung.", "/leistungen"],
            ["Aufbereitung", "Innenreinigung, Aussenpflege, Politur und Versiegelung.", "/aufbereitung"],
          ].map(([title, text, link]) => (
            <a
              key={title}
              href={link}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-red-500"
            >
              <h3 className="mb-4 text-2xl font-bold">{title}</h3>
              <p className="text-gray-400">{text}</p>
            </a>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}