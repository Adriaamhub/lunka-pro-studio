import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
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
              Get In Touch
            </p>

            <h1 className="text-5xl md:text-7xl font-black">
              Contact
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300 text-transparent bg-clip-text">
                {" "}Lunka Pro Studio
              </span>
            </h1>

            <p className="text-zinc-300 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
              We would love to hear from you.
              Book appointments, ask questions,
              or connect with our beauty studio today.
            </p>

          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">

            {/* Phone */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-10 shadow-2xl"
            >

              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-3xl shadow-lg">
                <FaPhoneAlt />
              </div>

              <h2 className="text-3xl font-bold mt-8">
                Call Us
              </h2>

              <p className="text-zinc-300 mt-4 text-lg">
                081 312 8167
              </p>

            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-10 shadow-2xl"
            >

              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-3xl shadow-lg">
                <FaEnvelope />
              </div>

              <h2 className="text-3xl font-bold mt-8">
                Email
              </h2>

              <p className="text-zinc-300 mt-4 text-lg break-all">
                lunkaprostudio@gmail.com
              </p>

            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-10 shadow-2xl"
            >

              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-3xl shadow-lg">
                <FaMapMarkerAlt />
              </div>

              <h2 className="text-3xl font-bold mt-8">
                Location
              </h2>

              <p className="text-zinc-300 mt-4 text-lg leading-relaxed">
                Mahube Valley Ext 2,
                Mamelodi,
                Pretoria
              </p>

            </motion.div>

          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-24 bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-white/10 rounded-[40px] p-12 backdrop-blur-xl shadow-2xl"
          >

            <h2 className="text-4xl md:text-5xl font-black">
              Ready For Your
              <span className="text-purple-400">
                {" "}Luxury Experience?
              </span>
            </h2>

            <p className="text-zinc-300 mt-6 text-lg max-w-2xl mx-auto">
              Book your appointment today and experience
              premium beauty, wellness, and relaxation services.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">

              <a
                href="https://wa.me/27813128167"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 transition-all duration-300 px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl flex items-center justify-center gap-3"
              >
                <FaWhatsapp />

                WhatsApp Us
              </a>

              <a
                href="mailto:lunkaprostudio@gmail.com"
                className="border border-purple-500 hover:bg-purple-600 transition-all duration-300 px-10 py-5 rounded-2xl text-lg font-bold"
              >
                Send Email
              </a>

            </div>

          </motion.div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Contact;