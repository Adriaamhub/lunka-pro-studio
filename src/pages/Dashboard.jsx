import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  FaCalendarCheck,
  FaMoneyBillWave,
  FaUsers,
  FaChartLine,
  FaStar,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative pt-40 pb-20 px-6">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[150px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500 opacity-20 blur-[150px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-between gap-10"
          >

            <div>

              <p className="text-purple-400 uppercase tracking-[5px] text-sm mb-4">
                Beauty Studio Analytics
              </p>

              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Luxury
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300 text-transparent bg-clip-text">
                  {" "}Dashboard
                </span>
              </h1>

              <p className="text-zinc-300 text-lg mt-6 max-w-2xl">
                Monitor appointments, revenue, client growth,
                and studio performance in real time.
              </p>

            </div>

            {/* Floating Status Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-8 shadow-2xl w-full md:w-[350px]"
            >

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-3xl">
                  <FaChartLine />
                </div>

                <div>

                  <h2 className="text-3xl font-black">
                    +32%
                  </h2>

                  <p className="text-zinc-400">
                    Monthly Growth
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">

            {/* Appointments */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-gradient-to-b from-zinc-900 to-black border border-white/10 rounded-[35px] p-10 shadow-2xl"
            >

              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-4xl shadow-lg">
                <FaCalendarCheck />
              </div>

              <h2 className="text-6xl font-black mt-8">
                25
              </h2>

              <p className="text-zinc-400 mt-3 text-xl">
                Appointments
              </p>

              <div className="w-full h-2 bg-zinc-800 rounded-full mt-8 overflow-hidden">
                <div className="w-[70%] h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              </div>

            </motion.div>

            {/* Revenue */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-gradient-to-b from-zinc-900 to-black border border-white/10 rounded-[35px] p-10 shadow-2xl"
            >

              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-4xl shadow-lg">
                <FaMoneyBillWave />
              </div>

              <h2 className="text-6xl font-black mt-8">
                R12K
              </h2>

              <p className="text-zinc-400 mt-3 text-xl">
                Revenue
              </p>

              <div className="w-full h-2 bg-zinc-800 rounded-full mt-8 overflow-hidden">
                <div className="w-[85%] h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
              </div>

            </motion.div>

            {/* Clients */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-gradient-to-b from-zinc-900 to-black border border-white/10 rounded-[35px] p-10 shadow-2xl"
            >

              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-4xl shadow-lg">
                <FaUsers />
              </div>

              <h2 className="text-6xl font-black mt-8">
                100+
              </h2>

              <p className="text-zinc-400 mt-3 text-xl">
                Clients
              </p>

              <div className="w-full h-2 bg-zinc-800 rounded-full mt-8 overflow-hidden">
                <div className="w-[90%] h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              </div>

            </motion.div>

          </div>

          {/* Bottom Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">

            {/* Performance */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-10 shadow-2xl"
            >

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-3xl">
                  <FaStar />
                </div>

                <div>

                  <h2 className="text-3xl font-bold">
                    Client Satisfaction
                  </h2>

                  <p className="text-zinc-400 mt-2">
                    98% Positive Reviews
                  </p>

                </div>

              </div>

              <div className="mt-8 w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                <div className="w-[98%] h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              </div>

            </motion.div>

            {/* Daily Bookings */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-10 shadow-2xl"
            >

              <h2 className="text-3xl font-bold">
                Today's Schedule
              </h2>

              <div className="mt-8 space-y-5">

                <div className="flex items-center justify-between bg-zinc-900 rounded-2xl p-5">
                  <p>Nail Appointment</p>
                  <span className="text-purple-400">
                    09:00 AM
                  </span>
                </div>

                <div className="flex items-center justify-between bg-zinc-900 rounded-2xl p-5">
                  <p>Massage Session</p>
                  <span className="text-pink-400">
                    12:30 PM
                  </span>
                </div>

                <div className="flex items-center justify-between bg-zinc-900 rounded-2xl p-5">
                  <p>Makeup Booking</p>
                  <span className="text-yellow-400">
                    03:00 PM
                  </span>
                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Dashboard;