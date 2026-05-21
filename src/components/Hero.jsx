import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";

/* Salon Images */
import nail1 from "../assets/lunka/nail1.jpeg";
import nail2 from "../assets/lunka/nail2.jpeg";
import nail3 from "../assets/lunka/herobeauty2.jpeg";

/* Founders */
import luyanda from "../assets/lunka/luyanda&nkanyezi.jpeg";
import nkanyezi from "../assets/lunka/luyanda&nkanyezi2.jpeg";

function Hero() {

  const images = [nail1, nail2, nail3];

  const [current, setCurrent] = useState(0);

  /* Auto Slide */
  useEffect(() => {

    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(slider);

  }, [images.length]);

  return (

    <section className="relative min-h-screen overflow-hidden bg-black px-6 pt-10 pb-28">

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-purple-700/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-pink-500/20 blur-[150px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-purple-500/40 bg-white/5 backdrop-blur-xl mb-8"
          >

            <FaStar className="text-yellow-400" />

            <span className="text-sm uppercase tracking-[4px] text-zinc-300">
              Premium Beauty Experience
            </span>

          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
          >

            <span className="text-white">
              Luxury Nails
            </span>

            <br />

            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300 bg-clip-text text-transparent">
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
            className="flex flex-col sm:flex-row gap-5 mt-12"
          >

            <Link to="/appointments">

              <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition-all duration-300 px-10 py-5 rounded-2xl text-white text-lg font-bold shadow-[0_10px_40px_rgba(168,85,247,0.4)]">
                Book Appointment
              </button>

            </Link>

            <Link to="/services">

              <button className="border border-purple-500/50 bg-white/5 backdrop-blur-xl hover:bg-purple-600 transition-all duration-300 px-10 py-5 rounded-2xl text-white text-lg font-semibold">
                Explore Services
              </button>

            </Link>

          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16"
          >

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">

              <h2 className="text-4xl font-black text-purple-400">
                500+
              </h2>

              <p className="text-zinc-300 mt-3">
                Happy Clients
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">

              <h2 className="text-4xl font-black text-pink-400">
                5★
              </h2>

              <p className="text-zinc-300 mt-3">
                Luxury Experience
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">

              <h2 className="text-4xl font-black text-yellow-400">
                4+
              </h2>

              <p className="text-zinc-300 mt-3">
                Premium Services
              </p>

            </div>

          </motion.div>

        </div>

        {/* RIGHT IMAGE CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded-[50px]"></div>

          {/* Main Card */}
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-4 shadow-2xl">

            {/* Image */}
            <div className="relative overflow-hidden rounded-[32px] h-[420px] w-full max-w-[430px]">

              <img
                src={images[current]}
                alt="Beauty"
                className="w-full h-full object-cover object-center opacity-90 transition-all duration-700 scale-105 hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Blend */}
              <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay"></div>

              {/* Floating Text */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-5">

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
                  className={`transition-all duration-300 ${
                    current === index
                      ? "w-10 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      : "w-3 h-3 rounded-full bg-zinc-700"
                  }`}
                ></button>

              ))}

            </div>

          </div>

        </motion.div>

        {/* FOUNDERS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="lg:col-span-2 mt-8"
        >

          <div className="grid md:grid-cols-2 gap-8">

            {/* Founder 1 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-[45px] border border-white/10 bg-black/30 backdrop-blur-2xl shadow-2xl"
            >

              {/* Premium Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-[140px] rounded-full"></div>

              {/* Image Container */}
              <div className="relative h-[700px] overflow-hidden">

                {/* Image */}
                <img
                  src={luyanda}
                  alt="Luyanda"
                  className="w-full h-full object-cover object-center opacity-80 scale-105 hover:scale-110 transition-all duration-700"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* Purple Blend */}
                <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-10">

                  <p className="text-purple-400 uppercase tracking-[5px] text-sm">
                    Founders
                  </p>

                  <h3 className="text-5xl font-black text-white mt-3">
                    Luyanda & Nkanyezi
                  </h3>

                  <div className="w-24 h-1 bg-purple-500 rounded-full mt-4"></div>

                  <p className="text-zinc-300 mt-6 leading-relaxed text-lg">
                    Luxury beauty specialist and creative visionary behind
                    Lunka Pro Studio.
                  </p>

                </div>

              </div>

            </motion.div>

            {/* Founder 2 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-[45px] border border-white/10 bg-black/30 backdrop-blur-2xl shadow-2xl"
            >

              {/* Premium Glow */}
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 blur-[140px] rounded-full"></div>

              {/* Image Container */}
              <div className="relative h-[700px] overflow-hidden">

                {/* Image */}
                <img
                  src={nkanyezi}
                  alt="Nkanyezi"
                  className="w-full h-full object-cover object-center opacity-80 scale-105 hover:scale-110 transition-all duration-700"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* Pink Blend */}
                <div className="absolute inset-0 bg-pink-500/10 mix-blend-overlay"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-10">

                  <p className="text-pink-400 uppercase tracking-[5px] text-sm">
                    Founders
                  </p>

                  <h3 className="text-5xl font-black text-white mt-3">
                    Luyanda & Nkanyezi
                  </h3>

                  <div className="w-24 h-1 bg-pink-500 rounded-full mt-4"></div>

                  <p className="text-zinc-300 mt-6 leading-relaxed text-lg">
                    Beauty entrepreneur focused on luxury wellness
                    and premium client care.
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>

  );
}

export default Hero;