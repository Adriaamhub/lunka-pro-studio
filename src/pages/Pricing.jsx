import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  FaGem,
  FaSpa,
  FaPaintBrush,
  FaCrown,
} from "react-icons/fa";

function Pricing() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-24 px-6">

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[150px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500 opacity-20 blur-[150px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="text-purple-400 uppercase tracking-[5px] text-sm mb-4">
              Luxury Beauty Pricing
            </p>

            <h1 className="text-5xl md:text-7xl font-black">
              Premium
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300 text-transparent bg-clip-text">
                {" "}Services
              </span>
            </h1>

            <p className="text-zinc-300 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
              Discover our premium beauty treatments,
              luxury wellness experiences, and elegant
              beauty services designed for you.
            </p>

          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">

            {/* Nails */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative bg-gradient-to-b from-zinc-900 to-black border border-white/10 rounded-[40px] p-10 shadow-2xl overflow-hidden"
            >

              {/* Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600 opacity-20 blur-[100px] rounded-full"></div>

              <div className="relative z-10">

                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-4xl shadow-lg">
                  <FaGem />
                </div>

                <h2 className="text-3xl font-black mt-8">
                  Polygel Nails
                </h2>

                <p className="text-zinc-400 mt-4">
                  Elegant premium nail artistry
                </p>

                <div className="mt-10">
                  <span className="text-6xl font-black">
                    R300
                  </span>
                </div>

                <button className="mt-10 w-full bg-gradient-to-r from-purple-600 to-pink-500 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(168,85,247,0.4)]">
                  Book Now
                </button>

              </div>

            </motion.div>

            {/* Makeup */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative bg-gradient-to-b from-zinc-900 to-black border border-pink-500 rounded-[40px] p-10 shadow-2xl overflow-hidden scale-105"
            >

              {/* Popular Badge */}
              <div className="absolute top-5 right-5 bg-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                Most Popular
              </div>

              <div className="absolute top-0 left-0 w-40 h-40 bg-pink-500 opacity-20 blur-[100px] rounded-full"></div>

              <div className="relative z-10">

                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-4xl shadow-lg">
                  <FaPaintBrush />
                </div>

                <h2 className="text-3xl font-black mt-8">
                  Luxury Makeup
                </h2>

                <p className="text-zinc-400 mt-4">
                  Glamorous professional beauty looks
                </p>

                <div className="mt-10">
                  <span className="text-6xl font-black">
                    R500
                  </span>
                </div>

                <button className="mt-10 w-full bg-gradient-to-r from-pink-500 to-rose-500 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(244,114,182,0.4)]">
                  Book Now
                </button>

              </div>

            </motion.div>

            {/* Massage */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative bg-gradient-to-b from-zinc-900 to-black border border-white/10 rounded-[40px] p-10 shadow-2xl overflow-hidden"
            >

              <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-500 opacity-20 blur-[100px] rounded-full"></div>

              <div className="relative z-10">

                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center text-4xl shadow-lg">
                  <FaSpa />
                </div>

                <h2 className="text-3xl font-black mt-8">
                  Massage Therapy
                </h2>

                <p className="text-zinc-400 mt-4">
                  Relaxation & wellness treatment
                </p>

                <div className="mt-10">
                  <span className="text-6xl font-black">
                    R450
                  </span>
                </div>

                <button className="mt-10 w-full bg-gradient-to-r from-green-400 to-emerald-500 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(74,222,128,0.4)]">
                  Book Now
                </button>

              </div>

            </motion.div>

          </div>

          {/* Premium Banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-24 bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-white/10 rounded-[40px] p-12 backdrop-blur-xl shadow-2xl"
          >

            <div className="flex flex-col md:flex-row items-center justify-between gap-10">

              <div className="text-left">

                <p className="text-purple-400 uppercase tracking-[4px] text-sm mb-4">
                  VIP Experience
                </p>

                <h2 className="text-4xl md:text-5xl font-black">
                  Premium Beauty Package
                </h2>

                <p className="text-zinc-300 mt-5 text-lg max-w-2xl">
                  Get exclusive luxury beauty treatments,
                  priority appointments, and premium wellness care.
                </p>

              </div>

              <div className="text-center">

                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-5xl shadow-2xl mx-auto">
                  <FaCrown />
                </div>

                <h3 className="text-5xl font-black mt-6">
                  R999
                </h3>

                <p className="text-zinc-400 mt-2">
                  VIP Package
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Pricing;