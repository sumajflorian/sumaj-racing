import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function UeberUnsPage() {
  return (
    <main className="bg-black pt-32 text-white">
      <Navbar />
      <About />
      <Footer />
      <WhatsappButton />
    </main>
  );
}