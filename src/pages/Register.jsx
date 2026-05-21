import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-6 py-20 text-white">

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-pink-500 opacity-20 blur-[150px] rounded-full"></div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl"
      >

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center p-14 bg-gradient-to-br from-purple-900/40 to-pink-900/30 border-r border-white/10">

          <p className="text-purple-400 uppercase tracking-[5px] text-sm mb-5">
            Welcome To
          </p>

          <h1 className="text-6xl font-black leading-tight">
            Lunka
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300 text-transparent bg-clip-text">
              {" "}Pro Studio
            </span>
          </h1>

          <p className="text-zinc-300 text-lg mt-8 leading-relaxed">
            Create your account and enjoy luxury beauty
            appointments, premium wellness services,
            and exclusive client experiences.
          </p>

          {/* Features */}
          <div className="space-y-5 mt-12">

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-2xl">
                <FaUserPlus />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Premium Membership
                </h3>

                <p className="text-zinc-400 text-sm mt-1">
                  Access exclusive beauty experiences
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-2xl">
                ✨
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Luxury Services
                </h3>

                <p className="text-zinc-400 text-sm mt-1">
                  Nails, makeup, massage & wellness
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="p-8 md:p-14">

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >

            <p className="text-purple-400 uppercase tracking-[4px] text-sm mb-4">
              Create Account
            </p>

            <h2 className="text-5xl font-black">
              Register
            </h2>

            <p className="text-zinc-400 mt-4">
              Join Lunka Pro Studio today.
            </p>

            {/* FORM */}
            <form className="space-y-6 mt-10">

              {/* Full Name */}
              <div>
                <label className="block mb-3 text-zinc-300">
                  Full Name
                </label>

                <div className="flex items-center gap-4 bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4">

                  <FaUser className="text-purple-400 text-xl" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="bg-transparent outline-none w-full text-white"
                  />

                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-3 text-zinc-300">
                  Email Address
                </label>

                <div className="flex items-center gap-4 bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4">

                  <FaEnvelope className="text-purple-400 text-xl" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent outline-none w-full text-white"
                  />

                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block mb-3 text-zinc-300">
                  Password
                </label>

                <div className="flex items-center gap-4 bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4">

                  <FaLock className="text-purple-400 text-xl" />

                  <input
                    type="password"
                    placeholder="Create password"
                    className="bg-transparent outline-none w-full text-white"
                  />

                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-[1.02] transition-all duration-300 py-5 rounded-2xl text-lg font-bold shadow-[0_10px_40px_rgba(168,85,247,0.4)]"
              >
                Create Account
              </button>

            </form>

            {/* Bottom */}
            <p className="text-zinc-400 text-center mt-8">
              Already have an account?{" "}

              <Link
                to="/login"
                className="text-purple-400 hover:text-pink-400 transition-all"
              >
                Login
              </Link>

            </p>

          </motion.div>

        </div>

      </motion.div>

    </div>
  );
}

export default Register;