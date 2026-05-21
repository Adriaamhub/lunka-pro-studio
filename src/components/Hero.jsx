import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";

/* Images */
import nail1 from "../assets/nail1.jpg";
import nail2 from "../assets/Premium Beauty Care.jpg";
import nail3 from "../assets/nail3.jpg";

function Hero() {

  const images = [nail1, nail2, nail3];

  const [current, setCurrent] = useState(0);

  /* Auto Slide */
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-6 py-20">

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-purple-700 opacity-20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-pink-500 opacity-20 blur-[140px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Main Container */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center max-w-7xl w-full">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500 bg-white/5 backdrop-blur-md mb-8"
          >
            <FaStar className="text-yellow-400" />

            <span className="text-sm uppercase tracking-[3px] text-zinc-300">
              Premium Beauty Experience
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight"
          >
            <span className="text-white">
              Luxury Nails
            </span>

            <br />

            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300 text-transparent bg-clip-text">
              & Beauty
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-zinc-300 text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            Elevate your beauty with premium nail artistry,
            flawless makeup, relaxing massage therapy,
            and luxury wellness treatments.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-5 mt-12"
          >

            <Link to="/appointments">
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition-all duration-300 px-10 py-5 rounded-2xl text-white text-lg font-bold shadow-[0_10px_40px_rgba(168,85,247,0.4)]">
                Book Appointment
              </button>
            </Link>

            <Link to="/services">
              <button className="border border-purple-500 bg-white/5 backdrop-blur-md hover:bg-purple-600 transition-all duration-300 px-10 py-5 rounded-2xl text-white text-lg font-semibold">
                Explore Services
              </button>
            </Link>

          </motion.div>

        </div>

        {/* RIGHT SIDE CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 shadow-2xl h-[600px]">

            <img
              src={images[current]}
              alt="Beauty Salon"
              className="w-full h-full object-cover transition-all duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6">

              <h3 className="text-2xl font-bold text-white">
                Premium Beauty Care
              </h3>

              <p className="text-zinc-300 mt-2">
                Nails • Makeup • Massage • Wellness
              </p>

            </div>

          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {images.map((_, index) => (
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
  );
}

export default Hero;