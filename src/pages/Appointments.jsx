import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppointmentForm from "../components/AppointmentForm";
import { motion } from "framer-motion";
import {
  FaCalendarCheck,
  FaClock,
  FaStar,
  FaSpa,
} from "react-icons/fa";

function Appointments() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO SECTION */}
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

            <p className="text-purple-400 uppercase tracking-[5px] text-sm mb-4">
              Luxury Booking Experience
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Book Your
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300 text-transparent bg-clip-text">
                {" "}Appointment
              </span>
            </h1>

            <p className="text-zinc-300 text-lg leading-relaxed mt-8 max-w-2xl">
              Reserve your premium beauty experience today.
              Enjoy luxury nail artistry, makeup, massage,
              wellness treatments, and professional beauty care.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-6"
              >

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-3xl shadow-lg">
                  <FaCalendarCheck />
                </div>

                <h2 className="text-2xl font-bold mt-6">
                  Easy Booking
                </h2>

                <p className="text-zinc-400 mt-3">
                  Fast and simple appointment scheduling.
                </p>

              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-6"
              >

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-3xl shadow-lg">
                  <FaClock />
                </div>

                <h2 className="text-2xl font-bold mt-6">
                  Flexible Times
                </h2>

                <p className="text-zinc-400 mt-3">
                  Choose the best time for your visit.
                </p>

              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-6"
              >

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-3xl shadow-lg">
                  <FaStar />
                </div>

                <h2 className="text-2xl font-bold mt-6">
                  Premium Service
                </h2>

                <p className="text-zinc-400 mt-3">
                  Experience luxury beauty treatments.
                </p>

              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-6"
              >

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center text-3xl shadow-lg">
                  <FaSpa />
                </div>

                <h2 className="text-2xl font-bold mt-6">
                  Wellness Care
                </h2>

                <p className="text-zinc-400 mt-3">
                  Relaxation and beauty in one place.
                </p>

              </motion.div>

            </div>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-10 shadow-2xl">

              {/* Top */}
              <div className="mb-10">

                <p className="text-purple-400 uppercase tracking-[4px] text-sm mb-3">
                  Appointment Form
                </p>

                <h2 className="text-4xl font-black">
                  Reserve Your Spot
                </h2>

                <p className="text-zinc-400 mt-4">
                  Fill in your details below to schedule your appointment.
                </p>

              </div>

              {/* Form */}
              <AppointmentForm />

            </div>

          </motion.div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Appointments;