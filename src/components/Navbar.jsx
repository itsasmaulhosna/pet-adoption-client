
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import {
  FaHome,
  FaPaw,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const user = true;

  const navLinks = [
    {
      name: "Home",
      href: "/",
      icon: <FaHome />,
    },
    {
      name: "All Pets",
      href: "/pets",
      icon: <FaPaw />,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#06142E]/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LEFT LOGO */}
          <Link href="/" className="flex items-center ">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={75}
              height={75}
              className="object-cover"
            />

            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-pink-500 to-red-400 bg-clip-text text-transparent tracking-wide">
              PetNest
            </h1>
          </Link>

          {/* CENTER NAV */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-gray-200 hover:text-pink-400 transition-all duration-300 font-medium"
              >
                <span className="text-lg">{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center">
            {!user ? (
              <Link href="/login">
                <button className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg">
                  Login
                </button>
              </Link>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-11 h-11 rounded-full bg-gradient-to-r from-[#1E3A8A] to-pink-500 flex items-center justify-center text-white text-xl shadow-lg hover:scale-105 transition"
                >
                  <FaUserCircle />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-[#0B1F3A] rounded-2xl shadow-2xl overflow-hidden border border-white/10">

                    <Link
                      href="/dashboard"
                      className="flex items-center gap-3 px-5 py-4 text-gray-200 hover:bg-white/10 transition"
                    >
                      <FaTachometerAlt className="text-pink-400" />
                      Dashboard
                    </Link>

                    <button className="w-full flex items-center gap-3 px-5 py-4 text-left text-red-400 hover:bg-white/10 transition">
                      <FaSignOutAlt />
                      Logout
                    </button>

                  </div>
                )}
              </div>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden pb-6">
            <div className="flex flex-col gap-4 mt-4 bg-[#0B1F3A] rounded-2xl p-5">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 text-gray-200 hover:text-pink-400 transition"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}

              <Link
                href="/dashboard"
                className="flex items-center gap-3 text-gray-200 hover:text-pink-400 transition"
              >
                <FaTachometerAlt />
                Dashboard
              </Link>

              <button className="flex items-center gap-3 text-red-400">
                <FaSignOutAlt />
                Logout
              </button>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

