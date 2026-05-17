"use client";

import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="
      relative overflow-hidden pt-16 pb-8
      bg-white dark:bg-[#06142E]
      text-gray-700 dark:text-gray-300
      border-t border-gray-200 dark:border-white/10">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        <div className="grid md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              PetNest 🐾
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Connecting loving families with adorable pets.
              Adopt, don’t shop — give a pet a forever home.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h3>

            <div className="space-y-3 text-sm">

              <p className="flex items-center gap-2">
                <FaPhone className="text-pink-500" />
                +880 15518455465
              </p>

              <p className="flex items-center gap-2">
                <FaEnvelope className="text-pink-500" />
                support@petnest.com
              </p>

              <p className="text-gray-600 dark:text-gray-400">
                Dhaka, Bangladesh
              </p>

            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-pink-500 transition">
                <FaFacebookF />
              </a>

              <a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-pink-500 transition">
                <FaInstagram />
              </a>

              <a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-pink-500 transition">
                <FaTwitter />
              </a>

            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 border-t border-gray-200 dark:border-white/10 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} PetNest. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;