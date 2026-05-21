import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  return (
    <div className="bg-black text-white">

      <Navbar />

      <Hero />

      <Testimonials />

      <Footer />

      <WhatsAppButton />

    </div>
  );
}

export default Home;