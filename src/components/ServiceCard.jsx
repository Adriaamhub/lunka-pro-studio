function ServiceCard({ title, image, price }) {
  return (
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover"
      />

      <div className="p-6">

        <h2 className="text-3xl font-bold text-white">
          {title}
        </h2>

        <p className="text-purple-400 mt-3 text-xl">
          {price}
        </p>

        <button className="mt-5 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-2xl w-full">
          Book Now
        </button>

      </div>

    </div>
  );
}

export default ServiceCard;