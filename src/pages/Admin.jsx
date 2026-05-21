import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaChartLine,
  FaStar,
  FaCog,
} from "react-icons/fa";

function Admin() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6">

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[150px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500 opacity-20 blur-[150px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-10"
          >

            <div>

              <p className="text-purple-400 uppercase tracking-[5px] text-sm mb-4">
                Luxury Studio Management
              </p>

              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Admin
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300 text-transparent bg-clip-text">
                  {" "}Dashboard
                </span>
              </h1>

              <p className="text-zinc-300 text-lg mt-6 max-w-2xl leading-relaxed">
                Manage appointments, beauty services,
                customers, analytics, and business performance
                in one premium dashboard.
              </p>

            </div>

            {/* Floating Admin Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-8 shadow-2xl w-full lg:w-[350px]"
            >

              <div className="flex items-center gap-5">

                <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-4xl shadow-lg">
                  <FaCog />
                </div>

                <div>

                  <h2 className="text-4xl font-black">
                    Admin
                  </h2>

                  <p className="text-zinc-400 mt-2">
                    Full Studio Control
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

          {/* STAT CARDS */}
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

              <div className="mt-8 w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div className="w-[75%] h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              </div>

            </motion.div>

            {/* Revenue */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-gradient-to-b from-zinc-900 to-black border border-white/10 rounded-[35px] p-10 shadow-2xl"
            >

              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center text-4xl shadow-lg">
                <FaMoneyBillWave />
              </div>

              <h2 className="text-6xl font-black mt-8">
                R12K
              </h2>

              <p className="text-zinc-400 mt-3 text-xl">
                Revenue
              </p>

              <div className="mt-8 w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div className="w-[90%] h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
              </div>

            </motion.div>

            {/* Customers */}
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
                Customers
              </p>

              <div className="mt-8 w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div className="w-[95%] h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              </div>

            </motion.div>

          </div>

          {/* MANAGEMENT SECTION */}
          <div className="grid lg:grid-cols-2 gap-8 mt-12">

            {/* Left Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-10 shadow-2xl"
            >

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-3xl">
                  <FaChartLine />
                </div>

                <div>

                  <h2 className="text-3xl font-bold">
                    Studio Analytics
                  </h2>

                  <p className="text-zinc-400 mt-2">
                    Monitor bookings and performance
                  </p>

                </div>

              </div>

              <div className="mt-10 space-y-5">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Bookings</span>
                    <span>85%</span>
                  </div>

                  <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Revenue</span>
                    <span>90%</span>
                  </div>

                  <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="w-[90%] h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
                  </div>
                </div>

              </div>

            </motion.div>

            {/* Right Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-10 shadow-2xl"
            >

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-3xl">
                  <FaStar />
                </div>

                <div>

                  <h2 className="text-3xl font-bold">
                    Admin Features
                  </h2>

                  <p className="text-zinc-400 mt-2">
                    Manage all studio activities
                  </p>

                </div>

              </div>

              <div className="mt-10 space-y-5">

                <div className="bg-zinc-900 rounded-2xl p-5">
                  Manage Appointments
                </div>

                <div className="bg-zinc-900 rounded-2xl p-5">
                  Update Services & Pricing
                </div>

                <div className="bg-zinc-900 rounded-2xl p-5">
                  Customer Management
                </div>

                <div className="bg-zinc-900 rounded-2xl p-5">
                  Revenue Tracking
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

export default Admin;