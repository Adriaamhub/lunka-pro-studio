import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {

  const phoneNumber = "27813128167";

  const message =
    "Hello Lunka Pro Studio, I would like to make a booking.";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl"
    >
      <FaWhatsapp />
    </button>
  );
}

export default WhatsAppButton;