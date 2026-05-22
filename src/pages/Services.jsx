import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* Images */
import polyNails from "../assets/lunka/poly nails.jpeg";
import luxuryMakeup from "../assets/lunka/luxury makeup.jpeg";
import massage from "../assets/lunka/massage.jpeg";
/* Extra Images */
import enhancementsImg from "../assets/lunka/ENH1.jpeg";
import extrasImg from "../assets/lunka/ENH 2.jpeg";
import mobileImg from "../assets/lunka/MOBILE SERVICES.jpeg";

function Services() {

  const categories = [

    {
      title: "Manicure",
      image: polyNails,
      services: [
        { name: "Buff & Shine", price: "R90" },
        { name: "Rubberbase Overlay", price: "R150" },
        { name: "Polygel Overlay", price: "R180" },
      ],
    },

    {
      title: "Pedicure",
      image: luxuryMakeup,
      services: [
        { name: "Gel Polish Pedicure", price: "R130" },
        { name: "Rubberbase Pedicure", price: "R140" },
        { name: "Polygel Pedicure", price: "R160" },
        { name: "Full Pedicure", price: "R300" },
      ],
    },

   {
  title: "Enhancements",
  image: enhancementsImg,
      services: [
        { name: "Polygel Short", price: "R200" },
        { name: "Polygel Medium", price: "R220" },
        { name: "Polygel Long", price: "R240" },
        { name: "Soft Gel Short", price: "R220" },
        { name: "Soft Gel Medium", price: "R240" },
      ],
    },

    {
  title: "Extras",
  image: extrasImg,
      services: [
        { name: "Solid Colour", price: "+R20" },
        { name: "French Design", price: "+R20" },
        { name: "Nail Art (Per Nail)", price: "+R5 - R10" },
        { name: "Soak-Off (Lunka)", price: "R60" },
        { name: "Soak-Off (Foreign)", price: "R80" },
        { name: "Nail Repair (Per Nail)", price: "+R40" },
        { name: "Fill In (Enhancements)", price: "R200" },
        { name: "Fill In (Overlays)", price: "R130 - R160" },
      ],
    },

    {
      title: "Body Treatments",
      image: massage,
      services: [
        { name: "Foot Massage (15 mins)", price: "R100" },
        { name: "Back, Neck & Shoulder (45 mins)", price: "R220" },
        { name: "Full Body (90 mins)", price: "R340" },
      ],
    },

    {
  title: "Mobile Services",
  image: mobileImg,
      services: [
        { name: "Mahube", price: "+R90" },
        { name: "Mamelodi", price: "+R120" },
        { name: "Zone 1 (Outside Mamelodi)", price: "R150+" },
      ],
    },

  ];

  return (

    <div className="bg-black text-white min-h-screen overflow-hidden">

      <Navbar />

      {/* PAGE */}
      <section className="relative pt-40 pb-28 px-6">

        {/* Glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600/20 blur-[150px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/20 blur-[150px] rounded-full"></div>

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-24">

            <p className="text-purple-400 uppercase tracking-[6px] text-sm mb-5">
              Luxury Beauty Services
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight">

              Our Premium

              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300 bg-clip-text text-transparent">
                {" "}Price List
              </span>

            </h1>

            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-8"></div>

          </div>

          {/* Categories */}
          <div className="grid md:grid-cols-2 gap-10">

            {categories.map((category, index) => (

              <div
                key={index}
                className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
              >

                {/* Image */}
                <div className="relative h-[260px] overflow-hidden">

                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover object-center opacity-80 group-hover:scale-110 transition-all duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                  {/* Content */}
                  <div className="absolute bottom-8 left-8">

                    <p className="text-purple-400 uppercase tracking-[4px] text-sm">
                      Lunka Pro Studio
                    </p>

                    <h2 className="text-4xl font-black text-white mt-3">
                      {category.title}
                    </h2>

                  </div>

                </div>

                {/* Service List */}
                <div className="p-8 space-y-5">

                  {category.services.map((service, idx) => (

                    <div
                      key={idx}
                      className="flex items-center justify-between border-b border-white/10 pb-4"
                    >

                      <p className="text-zinc-300 text-lg">
                        {service.name}
                      </p>

                      <p className="text-xl font-bold text-white">
                        {service.price}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

          {/* Notes */}
          <div className="mt-20 bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-2xl">

            <h3 className="text-3xl font-black text-white mb-6">
              Important Notes
            </h3>

            <div className="space-y-4 text-zinc-300 text-lg">

              <p>
                • Fill ins are only done after 2-3 weeks.
              </p>

              <p>
                • Foreign fill ins are not allowed.
              </p>

              <p>
                • Prices listed under manicure and enhancements exclude colour gel & nail art.
              </p>

              <p>
                • Zone 1 refers to areas within a 20km radius of Mahube.
              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>

  );
}

export default Services;