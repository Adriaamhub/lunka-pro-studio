import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    
      {/* Spacer */}
      <div className="h-28"></div>

      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-2xl text-white">

        {/* Premium Bottom Line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

          {/* Animated Logo */}
          <Link to="/">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 cursor-pointer"
            >

              {/* Logo Image */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="relative"
              >

                {/* Glow */}
                <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-40 rounded-full"></div>

                <img
                  src={logo}
                  alt="Lunka Pro Studio"
                  className="relative w-16 h-16 object-cover rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.5)]"
                />

              </motion.div>

              {/* Text */}
              <div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl md:text-3xl font-black tracking-wide text-white"
                >
                  Lunka
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xs text-purple-400 tracking-[4px] uppercase"
                >
                  Pro Studio
                </motion.p>

              </div>

            </motion.div>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-lg">

            <Link
              to="/"
              className="relative hover:text-purple-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>

            <Link
              to="/services"
              className="relative hover:text-purple-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
            </Link>

            <Link
              to="/gallery"
              className="relative hover:text-purple-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Gallery
            </Link>

            <Link
              to="/pricing"
              className="relative hover:text-purple-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Pricing
            </Link>

            <Link
              to="/appointments"
              className="relative hover:text-purple-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Book
            </Link>

            <Link
              to="/contact"
              className="relative hover:text-purple-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>

          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center gap-4">

            <a
              href="https://wa.me/27813128167"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:scale-105"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <Link to="/appointments">
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-2xl font-bold shadow-[0_10px_30px_rgba(168,85,247,0.4)]">
                Book Now
              </button>
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Extra Glow Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/70 to-transparent"></div>

        {/* Mobile Menu */}
        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-8 space-y-6 text-lg"
          >

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-purple-400"
            >
              Home
            </Link>

            <Link
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-purple-400"
            >
              Services
            </Link>

            <Link
              to="/gallery"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-purple-400"
            >
              Gallery
            </Link>

            <Link
              to="/pricing"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-purple-400"
            >
              Pricing
            </Link>

            <Link
              to="/appointments"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-purple-400"
            >
              Book Appointment
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-purple-400"
            >
              Contact
            </Link>

            {/* Mobile Buttons */}
            <div className="pt-4 flex flex-col gap-4">

              <a
                href="https://wa.me/27813128167"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 py-4 rounded-2xl text-center font-bold flex items-center justify-center gap-3"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

              <Link to="/appointments">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-4 rounded-2xl font-bold">
                  Book Now
                </button>
              </Link>

            </div>

          </motion.div>

        )}

      </nav>

    </>
  );
}

export default Navbar;