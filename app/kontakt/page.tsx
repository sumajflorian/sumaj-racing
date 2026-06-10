import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function KontaktPage() {
  return (
    <main className="bg-black pt-32 text-white">
      <Navbar />
      <Contact />
      <Footer />
      <WhatsappButton />
    </main>
  );
}