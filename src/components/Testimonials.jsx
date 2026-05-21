import { motion } from "framer-motion";
import { FaQuoteRight, FaStar } from "react-icons/fa";

function Testimonials() {

  const reviews = [
    {
      name: "Sarah",
      role: "Nail Client",
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
    <section className="relative py-28 px-6 bg-black overflow-hidden text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-purple-600 opacity-20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-pink-500 opacity-20 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-purple-400 uppercase tracking-[5px] text-sm mb-4">
            Testimonials
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Client
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300 text-transparent bg-clip-text">
              {" "}Reviews
            </span>
          </h1>

          <p className="text-zinc-400 text-lg mt-8 max-w-2xl mx-auto">
            Hear what our luxury beauty clients say about
            their unforgettable Lunka Pro Studio experience.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.04,
                y: -10,
              }}
              className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[35px] p-10 overflow-hidden shadow-2xl"
            >

              {/* Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500 opacity-20 blur-[100px] rounded-full"></div>

              {/* Quote Icon */}
              <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-3xl shadow-lg">
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

                {/* User */}
                <div className="mt-10 flex items-center gap-5">

                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-2xl font-black shadow-lg">
                    {item.name.charAt(0)}
                  </div>

                  {/* Info */}
                  <div>

                    <h3 className="text-2xl font-bold text-white">
                      {item.name}
                    </h3>

                    <p className="text-purple-400 text-sm mt-1">
                      {item.role}
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-white/10 rounded-[40px] p-12 backdrop-blur-xl shadow-2xl text-center"
        >

          <h2 className="text-4xl md:text-5xl font-black">
            500+ Happy Clients
          </h2>

          <p className="text-zinc-300 mt-6 text-lg max-w-2xl mx-auto">
            Join hundreds of satisfied clients enjoying
            premium beauty, wellness, and luxury care at
            Lunka Pro Studio.
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default Testimonials;