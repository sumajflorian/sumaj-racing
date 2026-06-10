export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <img
          src="/logo.png"
          alt="Sumaj Racing Logo"
          className="h-14 w-auto"
        />

        <div className="hidden gap-8 text-sm font-semibold uppercase tracking-wide md:flex">
          <a href="#leistungen" className="hover:text-red-500">
            Leistungen
          </a>
          <a href="#aufbereitung" className="hover:text-red-500">
            Aufbereitung
          </a>
          <a href="#kontakt" className="hover:text-red-500">
            Kontakt
          </a>
        </div>
      </div>
    </nav>
  );
}