import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="relative overflow-hidden bg-black text-white border-t border-white/10">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-purple-600/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-pink-500/20 blur-[140px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <h1 className="text-4xl font-black">

              <span className="text-white">
                Lunka
              </span>

              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                {" "}Pro
              </span>

            </h1>

            <p className="text-zinc-400 mt-6 leading-relaxed">
              Premium beauty, luxury nails,
              makeup artistry, wellness,
              and unforgettable self-care experiences.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://wa.me/27813128167"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h2 className="text-2xl font-bold mb-6">
              Quick Links
            </h2>

            <div className="flex flex-col gap-4 text-zinc-400">

              <Link
                to="/"
                className="hover:text-purple-400 transition-all duration-300"
              >
                Home
              </Link>

              <Link
                to="/services"
                className="hover:text-purple-400 transition-all duration-300"
              >
                Services
              </Link>

              <Link
                to="/gallery"
                className="hover:text-purple-400 transition-all duration-300"
              >
                Gallery
              </Link>

              <Link
                to="/pricing"
                className="hover:text-purple-400 transition-all duration-300"
              >
                Pricing
              </Link>

              <Link
                to="/appointments"
                className="hover:text-purple-400 transition-all duration-300"
              >
                Book Appointment
              </Link>

            </div>

          </div>

          {/* Services */}
          <div>

            <h2 className="text-2xl font-bold mb-6">
              Services
            </h2>

            <div className="flex flex-col gap-4 text-zinc-400">

              <p className="hover:text-purple-400 transition-all duration-300 cursor-pointer">
                Luxury Nails
              </p>

              <p className="hover:text-purple-400 transition-all duration-300 cursor-pointer">
                Makeup Artistry
              </p>

              <p className="hover:text-purple-400 transition-all duration-300 cursor-pointer">
                Massage Therapy
              </p>

              <p className="hover:text-purple-400 transition-all duration-300 cursor-pointer">
                Beauty Wellness
              </p>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h2 className="text-2xl font-bold mb-6">
              Contact
            </h2>

            <div className="space-y-5 text-zinc-400">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <FaPhoneAlt className="text-purple-400" />
                </div>

                <div>
                  <p className="text-white font-semibold">
                    Phone
                  </p>

                  <p>
                    081 312 8167
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <FaEnvelope className="text-pink-400" />
                </div>

                <div>
                  <p className="text-white font-semibold">
                    Email
                  </p>

                  <p>
                    lunkaprostudio@gmail.com
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-yellow-400" />
                </div>

                <div>
                  <p className="text-white font-semibold">
                    Location
                  </p>

                  <p>
                    Mahube Valley Ext 2,
                    Mamelodi, Pretoria
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 my-12"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-zinc-500 text-center md:text-left">
            © 2026 Lunka Pro Studio. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-zinc-500 text-sm">

            <p className="hover:text-purple-400 transition-all duration-300 cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-purple-400 transition-all duration-300 cursor-pointer">
              Terms & Conditions
            </p>

          </div>

        </div>

      </div>

    </footer>

  );
}

export default Footer;