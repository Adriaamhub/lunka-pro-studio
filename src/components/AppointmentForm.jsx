function AppointmentForm() {

  const sendWhatsApp = () => {

    const phone = "27813128167";

    const message =
      "Hello Lunka Pro Studio, I would like to book an appointment.";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <div className="bg-zinc-900 p-8 rounded-3xl">

      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-4 rounded-xl bg-black mb-5"
      />

      <input
        type="date"
        className="w-full p-4 rounded-xl bg-black mb-5"
      />

      <select className="w-full p-4 rounded-xl bg-black mb-5">

        <option>Polygel Nails</option>

        <option>Luxury Makeup</option>

        <option>Massage Therapy</option>

      </select>

      <button
        onClick={sendWhatsApp}
        className="bg-green-500 hover:bg-green-600 w-full py-4 rounded-2xl text-white font-bold"
      >
        Book via WhatsApp
      </button>

    </div>
  );
}

export default AppointmentForm;