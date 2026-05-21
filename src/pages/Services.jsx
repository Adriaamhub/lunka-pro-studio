import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

/* Import Images */
import polyNails from "../assets/lunka/poly nails.jpeg";
import luxuryMakeup from "../assets/lunka/luxury makeup.jpeg";
import massage from "../assets/lunka/massage.jpeg";

function Services() {

  const services = [
    {
      title: "Polygel Nails",
      image: polyNails,
      price: "R300"
    },
    {
      title: "Luxury Makeup",
      image: luxuryMakeup,
      price: "R500"
    },
    {
      title: "Massage Therapy",
      image: massage,
      price: "R450"
    }
  ];

  return (

    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold text-center mb-10">
          Our Services
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <ServiceCard
              key={index}
              title={service.title}
              image={service.image}
              price={service.price}
            />

          ))}

        </div>

      </div>

      <Footer />

    </div>

  );
}

export default Services;