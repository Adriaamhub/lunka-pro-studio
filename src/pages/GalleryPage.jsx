import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

/* Images */
import nail1 from "../assets/lunka/ln1.jpeg";
import nail2 from "../assets/lunka/ln2.jpeg";
import makeup from "../assets/lunka/MK.jpeg";
import massage from "../assets/lunka/MASSGE 2.jpeg";
import spa from "../assets/lunka/WhatsApp Image 2026-05-21 at 15.00.58.jpeg";
import beauty from "../assets/lunka/WhatsApp Image 2026-05-21 at 15.00.59 (1).jpeg";

function GalleryPage() {

  const gallery = [
    {
      image: nail1,
      title: "Luxury Nails",
      subtitle: "Elegant nail artistry",
    },
    {
      image: nail2,
      title: "Premium Designs",
      subtitle: "Luxury nail perfection",
    },
    {
      image: makeup,
      title: "Makeup Studio",
      subtitle: "Beauty & glamour",
    },
    {
      image: massage,
      title: "Massage Therapy",
      subtitle: "Relaxation & wellness",
    },
    {
      image: spa,
      title: "Spa Experience",
      subtitle: "Luxury self-care",
    },
    {
      image: beauty,
      title: "Beauty Lounge",
      subtitle: "Premium beauty care",
    },
  ];

  return (

    <div className="bg-black text-white min-h-screen overflow-hidden">

      <Navbar />

      {/* PREMIUM GALLERY */}
      <section className="relative pt-40 pb-28 px-6">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600/20 blur-[150px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/20 blur-[150px] rounded-full"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >

            <p className="text-purple-400 uppercase tracking-[6px] text-sm mb-5">
              Luxury Collection
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight">

              Beauty

              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300 bg-clip-text text-transparent">
                {" "}Gallery
              </span>

            </h1>

            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-8"></div>

          </motion.div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {gallery.map((item, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  rotateY: 90,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  rotateY: 0,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  rotateY: 4,
                }}
                className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
              >

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                {/* Image */}
                <div className="relative overflow-hidden h-[520px]">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center opacity-85 group-hover:scale-110 transition-all duration-700"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                  {/* Blend Overlay */}
                  <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay"></div>

                  {/* Floating Border */}
                  <div className="absolute inset-4 rounded-[30px] border border-white/10"></div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.8,
                    }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 left-0 right-0 p-8"
                  >

                    <p className="text-purple-400 uppercase tracking-[5px] text-sm mb-3">
                      Lunka Pro Studio
                    </p>

                    <h2 className="text-4xl font-black text-white">
                      {item.title}
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4"></div>

                    <p className="text-zinc-300 mt-5 text-lg">
                      {item.subtitle}
                    </p>

                  </motion.div>

                </div>

              </motion.div>

            ))}

          </div>

          {/* Bottom Luxury Banner */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative mt-24 overflow-hidden rounded-[45px] border border-white/10 bg-white/5 backdrop-blur-2xl p-14 text-center shadow-[0_20px_100px_rgba(0,0,0,0.7)]"
          >

            {/* Glow */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/20 blur-[140px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/20 blur-[140px] rounded-full"></div>

            <div className="relative z-10">

              <p className="text-purple-400 uppercase tracking-[6px] text-sm mb-5">
                Luxury Beauty
              </p>

              <h2 className="text-4xl md:text-6xl font-black leading-tight">

                Elegant Beauty
                <br />

                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300 bg-clip-text text-transparent">
                  Perfected
                </span>

              </h2>

              <p className="text-zinc-300 mt-8 text-lg max-w-3xl mx-auto leading-relaxed">
                Discover premium beauty experiences,
                luxury wellness, nail artistry,
                makeup perfection, and unforgettable self-care.
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      <Footer />

    </div>

  );
}

export default GalleryPage;