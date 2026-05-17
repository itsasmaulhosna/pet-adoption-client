"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";

import {
  FaHome,
  FaPaw,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaSignOutAlt,
  FaMoon,
  FaSun,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const user = true;

  return (
    <nav className="relative z-50 bg-white dark:bg-[#06142E] text-black dark:text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

        {/* LEFT LOGO */}
        <Link href="/" className="flex items-center ">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={75}
            height={75}
          />

          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-pink-500 to-red-400 bg-clip-text text-transparent tracking-wide">
              PetNest
            </h1>

        </Link>

        {/* CENTER MENU */}
        <ul className="hidden md:flex items-center gap-6">

          <li>
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-pink-500 transition"
            >
              <FaHome />
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/pets"
              className="flex items-center gap-2 hover:text-pink-500 transition"
            >
              <FaPaw />
              All Pets
            </Link>
          </li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* THEME TOGGLE */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-200 dark:bg-white/10"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          {/* LOGIN */}
          <Link
            href="/login"
            className="px-3 py-1 rounded-full bg-pink-500 text-white hover:scale-105 transition"
          >
            Login
          </Link>

          {/* DROPDOWN */}
          {user && (
            <div className="relative">

              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-2xl"
              >
                <FaUserCircle />
              </button>

              {/* FLOATING DROPDOWN */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-[#0B1F3A] border border-gray-200 dark:border-white/10 rounded-xl shadow-2xl z-[999]">

                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 dark:hover:bg-white/10"
                  >
                    <FaTachometerAlt />
                    Dashboard
                  </Link>

                  <button className="w-full flex items-center gap-2 px-4 py-3 text-red-500 hover:bg-gray-100 dark:hover:bg-white/10">
                    <FaSignOutAlt />
                    Logout
                  </button>

                </div>
              )}
            </div>
          )}

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link href="/" className="flex items-center gap-2">
            <FaHome /> Home
          </Link>

          <Link href="/pets" className="flex items-center gap-2">
            <FaPaw /> All Pets
          </Link>

          <Link href="/login">Login</Link>
        </div>
      )}
    </nav>
  );
}