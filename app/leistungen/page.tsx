import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function LeistungenPage() {
  return (
    <main className="bg-black pt-32 text-white">
      <Navbar />
      <Services />
      <Footer />
      <WhatsappButton />
    </main>
  );
}