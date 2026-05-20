
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
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

import { LuLogIn } from "react-icons/lu";
import { authClient } from "@/lib/auth-client";



export default function Navbar() {
  
  const {data:session,error}=authClient.useSession()
  const user =session?.user;
  console.log(user)
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-[#06142E]/90 backdrop-blur-xl shadow-md border-b border-gray-200 dark:border-white/10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* LEFT LOGO */}
          <Link href="/" className="flex items-center gap-2">

            <Image
              src="/images/logo.png"
              alt="logo"
              width={60}
              height={60}
              className="object-cover"
            />

            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-pink-500 to-red-400 bg-clip-text text-transparent tracking-wide">
              PetNest
            </h1>

          </Link>

          {/* CENTER MENU */}
          <ul className="hidden md:flex items-center gap-8 font-medium">

            <li>
              <Link
                href="/"
                className="flex items-center gap-2 hover:text-pink-500 transition-all duration-300"
              >
                <FaHome />
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/pet"
                className="flex items-center gap-2 hover:text-pink-500 transition-all duration-300"
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
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>


              <Link
                href="/login"
                className="flex items-center gap-2 hover:text-pink-500 transition-all duration-300"
              >
                <LuLogIn />

                Login
              </Link>


            {/* GET STARTED BUTTON */}
            <div className="relative hidden sm:block">

              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="
                px-5 py-2 rounded-full
                text-white font-semibold
                
bg-gradient-to-r from-blue-400 via-pink-500 to-red-400 

                shadow-lg hover:scale-105 transition-all duration-300
                "
              >
                Get Started
              </button>

              {/* DROPDOWN */}
              {dropdownOpen && (
                <div
                  className="
                  absolute right-0 mt-3 w-52
                  bg-white dark:bg-[#0B1F3A]
                  border border-gray-200 dark:border-white/10
                  rounded-2xl shadow-2xl overflow-hidden z-[999]
                  "
                >

                  <Link
                    href="/dashboard"
                    className="
                    flex items-center gap-3 px-5 py-4
                    hover:bg-gray-100 dark:hover:bg-white/10
                    transition-all duration-300
                    "
                  >
                    <FaTachometerAlt />
                    Dashboard
                  </Link>

                  <button
                    className="
                    w-full flex items-center gap-3 px-5 py-4
                    text-red-500 hover:bg-gray-100 dark:hover:bg-white/10
                    transition-all duration-300
                    "
                  >
                    <FaSignOutAlt />
                    Logout
                  </button>

                </div>
              )}

            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-5 pt-3 bg-white dark:bg-[#06142E] border-t border-gray-200 dark:border-white/10">

          <div className="flex flex-col gap-5">

            <Link
              href="/"
              className="flex items-center gap-3 hover:text-pink-500 transition-all duration-300"
            >
              <FaHome />
              Home
            </Link>

            <Link
              href="/pet"
              className="flex items-center gap-3 hover:text-pink-500 transition-all duration-300"
            >
              <FaPaw />
              All Pets
            </Link>

            <Link
              href="/login"
              className="flex items-center gap-3 hover:text-pink-500 transition-all duration-300"
            >
              <FaUserCircle />
              Login
            </Link>

            {/* MOBILE GET STARTED */}
            <div className="pt-2">

              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="
                w-full py-3 rounded-full
                text-white font-semibold
                bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                shadow-lg
                "
              >
                Get Started
              </button>

              {/* MOBILE DROPDOWN */}
              {dropdownOpen && (
                <div
                  className="
                  mt-3 bg-white dark:bg-[#0B1F3A]
                  border border-gray-200 dark:border-white/10
                  rounded-2xl shadow-2xl overflow-hidden
                  "
                >

                  <Link
                    href="/dashboard"
                    className="
                    flex items-center gap-3 px-5 py-4
                    hover:bg-gray-100 dark:hover:bg-white/10
                    transition-all duration-300
                    "
                  >
                    <FaTachometerAlt />
                    Dashboard
                  </Link>

                  <button
                    className="
                    w-full flex items-center gap-3 px-5 py-4
                    text-red-500 hover:bg-gray-100 dark:hover:bg-white/10
                    transition-all duration-300
                    "
                  >
                    <FaSignOutAlt />
                    Logout
                  </button>

                </div>
              )}

            </div>

          </div>

        </div>
      )}

    </nav>
  );
}