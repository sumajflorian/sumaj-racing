export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <img
          src="/logo.png"
          alt="Sumaj Racing Logo"
<<<<<<< HEAD
          className="h-30 w-auto"
=======
          className="h-30 w-auto"
>>>>>>> 6dac16070956c16e0f91bf665919409132c099c5
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
