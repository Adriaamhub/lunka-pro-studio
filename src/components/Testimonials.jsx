import { motion } from "framer-motion";
import { FaQuoteRight, FaStar } from "react-icons/fa";

function Testimonials() {

  const reviews = [
    {
      name: "Sarah",
      role: "Luxury Nail Client",
      review:
        "Best nail experience ever. The luxury atmosphere and professionalism were absolutely amazing.",
    },
    {
      name: "Amanda",
      role: "Makeup Client",
      review:
        "Luxury and professionalism at its finest. I felt beautiful and confident after my appointment.",
    },
    {
      name: "Jessica",
      role: "Spa Client",
      review:
        "Amazing makeup and massage services. Truly relaxing, elegant, and worth every moment.",
    },
  ];

  return (

    <section className="relative py-32 px-6 bg-black overflow-hidden text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/20 blur-[150px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <p className="text-purple-400 uppercase tracking-[6px] text-sm mb-5">
            Testimonials
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight">

            What Our Clients

            <br />

            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300 bg-clip-text text-transparent">
              Say About Us
            </span>

          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-8"></div>

          <p className="text-zinc-400 text-lg md:text-xl mt-10 max-w-3xl mx-auto leading-relaxed">
            Experience premium beauty, luxury wellness,
            and unforgettable self-care moments at
            Lunka Pro Studio.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
            >

              {/* Premium Glow */}
              <div className="absolute top-0 right-0 w-52 h-52 bg-purple-500/20 blur-[120px] rounded-full"></div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10"></div>

              <div className="relative z-10">

                {/* Quote Icon */}
                <div className="w-18 h-18 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-3xl shadow-[0_10px_40px_rgba(168,85,247,0.5)]">

                  <FaQuoteRight />

                </div>

                {/* Stars */}
                <div className="flex gap-2 mt-8 text-yellow-400 text-lg">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>

                {/* Review */}
                <p className="text-zinc-300 text-lg leading-relaxed italic mt-8">
                  "{item.review}"
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/10 my-8"></div>

                {/* User */}
                <div className="flex items-center gap-5">

                  {/* Avatar */}
                  <div className="relative">

                    {/* Glow */}
                    <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-50 rounded-full"></div>

                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-2xl font-black shadow-xl">
                      {item.name.charAt(0)}
                    </div>

                  </div>

                  {/* Info */}
                  <div>

                    <h3 className="text-2xl font-bold text-white">
                      {item.name}
                    </h3>

                    <p className="text-purple-400 text-sm mt-1 tracking-wide">
                      {item.role}
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Luxury Banner */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative mt-28 overflow-hidden rounded-[45px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_100px_rgba(0,0,0,0.6)]"
        >

          {/* Glow */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/20 blur-[140px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/20 blur-[140px] rounded-full"></div>

          <div className="relative z-10 px-10 py-16 md:px-20 text-center">

            <h2 className="text-4xl md:text-6xl font-black leading-tight">

              500+ Happy Clients

            </h2>

            <p className="text-zinc-300 mt-8 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Join hundreds of satisfied clients enjoying
              premium beauty, luxury wellness,
              and unforgettable care at
              Lunka Pro Studio.
            </p>

            {/* Small Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

                <h3 className="text-4xl font-black text-purple-400">
                  5★
                </h3>

                <p className="text-zinc-300 mt-3">
                  Client Rating
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

                <h3 className="text-4xl font-black text-pink-400">
                  4+
                </h3>

                <p className="text-zinc-300 mt-3">
                  Premium Services
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

                <h3 className="text-4xl font-black text-yellow-400">
                  100%
                </h3>

                <p className="text-zinc-300 mt-3">
                  Luxury Experience
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );
}

export default Testimonials;