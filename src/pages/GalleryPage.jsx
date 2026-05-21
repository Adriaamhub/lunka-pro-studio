import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/* Images */
import nail1 from "../assets/gallery/nail6.jpg";
import nail2 from "../assets/gallery/nail7.jpg";
import makeup from "../assets/gallery/makeup.webp";
import massage from "../assets/gallery/massage2.jpg";
import spa from "../assets/gallery/spa.jpg";
import beauty from "../assets/gallery/beaty.avif";

function GalleryPage() {

  const slides = [nail1, nail2, makeup, massage];

  const [current, setCurrent] = useState(0);

  /* Auto Slider */
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6">

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[150px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500 opacity-20 blur-[150px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="text-purple-400 uppercase tracking-[5px] text-sm mb-5">
              Luxury Beauty Collection
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Our Premium
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300 text-transparent bg-clip-text">
                {" "}Gallery
              </span>
            </h1>

            <p className="mt-8 text-zinc-300 text-lg leading-relaxed max-w-xl">
              Explore our luxurious beauty treatments,
              elegant nail artistry, makeup perfection,
              spa therapy, and wellness experiences.
            </p>

            {/* Side Cards */}
            <div className="grid grid-cols-2 gap-5 mt-12">

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:scale-105 transition-all duration-300">

                <h2 className="text-4xl font-black text-purple-400">
                  500+
                </h2>

                <p className="text-zinc-300 mt-2">
                  Happy Clients
                </p>

              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:scale-105 transition-all duration-300">

                <h2 className="text-4xl font-black text-pink-400">
                  5★
                </h2>

                <p className="text-zinc-300 mt-2">
                  Luxury Experience
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SLIDER */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div className="relative overflow-hidden rounded-[40px] h-[650px] border border-white/10 shadow-2xl">

              <img
                src={slides[current]}
                alt="Beauty"
                className="w-full h-full object-cover transition-all duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6">

                <h3 className="text-3xl font-bold text-white">
                  Luxury Beauty Studio
                </h3>

                <p className="text-zinc-300 mt-3">
                  Nails • Makeup • Spa • Massage • Wellness
                </p>

              </div>

            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-purple-500 scale-125"
                      : "bg-zinc-700"
                  }`}
                ></button>
              ))}
            </div>

          </motion.div>

        </div>

      </section>

      {/* IMAGE GRID */}
      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-[35px] group"
            >

              <img
                src={nail1}
                alt="Nails"
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-8 left-8">
                <h2 className="text-3xl font-bold">
                  Nail Artistry
                </h2>

                <p className="text-zinc-300 mt-2">
                  Premium nail designs
                </p>
              </div>

            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-[35px] group"
            >

              <img
                src={makeup}
                alt="Makeup"
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-8 left-8">
                <h2 className="text-3xl font-bold">
                  Makeup Studio
                </h2>

                <p className="text-zinc-300 mt-2">
                  Glamour & beauty perfection
                </p>
              </div>

            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-[35px] group"
            >

              <img
                src={massage}
                alt="Massage"
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-8 left-8">
                <h2 className="text-3xl font-bold">
                  Spa Therapy
                </h2>

                <p className="text-zinc-300 mt-2">
                  Relaxation & wellness care
                </p>
              </div>

            </motion.div>

          </div>

          {/* Bottom Gallery */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">

            <motion.img
              whileHover={{ scale: 1.02 }}
              src={spa}
              alt="Spa"
              className="rounded-[35px] h-[400px] w-full object-cover"
            />

            <motion.img
              whileHover={{ scale: 1.02 }}
              src={beauty}
              alt="Beauty"
              className="rounded-[35px] h-[400px] w-full object-cover"
            />

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default GalleryPage;