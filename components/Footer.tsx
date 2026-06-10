export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img
            src="/logo.png"
            alt="Sumaj Racing Logo"
            className="mb-6 h-20 w-auto"
          />

          <p className="max-w-md text-gray-400">
            Sumaj Racing steht für Garage, Fahrzeugaufbereitung und ehrliche
            Arbeit mit Leidenschaft für jedes Fahrzeug.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            Kontakt
          </h3>

          <div className="space-y-2 text-gray-400">
            <p>Mythenstrasse 22</p>
            <p>8840 Einsiedeln</p>
            <p>079 949 41 65</p>
            <p>sumaj.florian@icloud.com</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            Seiten
          </h3>

          <div className="space-y-2 text-gray-400">
            <p>
              <a href="/ueber-uns" className="hover:text-red-500">
                Über uns
              </a>
            </p>
            <p>
              <a href="/leistungen" className="hover:text-red-500">
                Leistungen
              </a>
            </p>
            <p>
              <a href="/aufbereitung" className="hover:text-red-500">
                Aufbereitung
              </a>
            </p>
            <p>
              <a href="/kontakt" className="hover:text-red-500">
                Kontakt
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Sumaj Racing. Alle Rechte vorbehalten.</p>
        <p>Garage & Fahrzeugaufbereitung in Einsiedeln</p>
      </div>
    </footer>
  );
}