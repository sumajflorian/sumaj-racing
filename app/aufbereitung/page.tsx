import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function AufbereitungPage() {
  return (
    <main className="bg-black pt-32 text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-3 uppercase tracking-[0.3em] text-red-500">
          Aufbereitung
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Fahrzeugpflege mit Liebe zum Detail.
        </h1>

        <p className="mb-12 max-w-3xl text-lg text-gray-400">
          Von der gründlichen Innenreinigung bis zur Lackaufbereitung – wir bringen dein Fahrzeug optisch wieder auf ein neues Level.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Innenreinigung", "Sitze, Teppiche, Cockpit, Türfalze und Detailpflege im Innenraum."],
            ["Aussenreinigung", "Schonende Handwäsche, Felgenreinigung und saubere Lackpflege."],
            ["Politur & Versiegelung", "Glanz, Schutz und ein gepflegter Auftritt für dein Fahrzeug."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-red-500"
            >
              <h3 className="mb-4 text-2xl font-bold">{title}</h3>
              <p className="text-gray-400">{text}</p>
            </div>
          ))}
        </div>

        <a
          href="/kontakt"
          className="mt-12 inline-block rounded-xl bg-red-600 px-8 py-4 font-bold transition hover:bg-red-700"
        >
          Anfrage starten
        </a>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}