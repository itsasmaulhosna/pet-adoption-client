"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

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
  FaChevronDown,
} from "react-icons/fa";

import { LuLogIn } from "react-icons/lu";

import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const pathname = usePathname();

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

          {/* LOGO */}
          <Link href="/" className="flex items-center ">

            <Image
              src="/images/logo.png"
              alt="logo"
              width={80}
              height={80}
              className="object-cover"
            />

            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-pink-500 to-red-400 bg-clip-text text-transparent tracking-wide">
              PetNest
            </h1>

          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 font-medium">

            <li>
              <Link
                href="/"
                className={`flex items-center gap-2 transition-all duration-300 ${
                  pathname === "/"
                    ? "text-pink-500"
                    : "hover:text-pink-500"
                }`}
              >
                <FaHome />
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/pet"
                className={`flex items-center gap-2 transition-all duration-300 ${
                  pathname === "/pet"
                    ? "text-pink-500"
                    : "hover:text-pink-500"
                }`}
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
              className="
                w-10 h-10 rounded-full
                flex items-center justify-center
                bg-gray-200 dark:bg-white/10
                hover:scale-110
                transition-all duration-300
              "
            >
              {isDark ? <FaMoon /> : <FaSun />}
            </button>

            {/* LOGIN BUTTON */}
            {!user && (
              <Link
                href="/login"
                className={`hidden sm:flex items-center gap-2 transition-all duration-300 ${
                  pathname === "/login"
                    ? "text-pink-500"
                    : "hover:text-pink-500"
                }`}
              >
                <LuLogIn />
                Login
              </Link>
            )}

            {/* DROPDOWN */}
            <div className="relative">

              {/* USER EXISTS */}
              {user ? (
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="
                    flex items-center gap-2
                    px-2 py-1 rounded-full
                    hover:bg-gray-100 dark:hover:bg-white/10
                    transition-all duration-300
                  "
                >

                  <Image
                    src={
                      user?.image ||
                      "https://i.ibb.co/4pDNDk1/avatar.png"
                    }
                    alt="user"
                    width={42}
                    height={42}
                    className="
                      w-[42px] h-[42px]
                      rounded-full
                      object-cover
                      border-2 border-pink-500
                    "
                  />

                  <FaChevronDown
                    className={`transition duration-300 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>
              ) : (
                <Link
                  href="/login"
                  className="
                    hidden md:flex
                    px-5 py-2 rounded-full
                    text-white font-semibold
                    bg-gradient-to-r from-blue-400 via-pink-500 to-red-400
                    shadow-lg hover:scale-105 transition-all duration-300
                  "
                >
                  Get Started
                </Link>
              )}

              {/* DROPDOWN MENU */}
              {dropdownOpen && user && (
                <div
                  className="
                    absolute right-0 top-14
                    w-64
                    bg-white dark:bg-[#0B1F3A]
                    border border-gray-200 dark:border-white/10
                    rounded-2xl shadow-2xl
                    overflow-hidden
                    z-[9999]
                  "
                >

                  {/* USER INFO */}
                  <div className="px-5 py-4 border-b border-gray-200 dark:border-white/10">

                    <div className="flex items-center gap-3">

                      <Image
                        src={
                          user?.image ||
                          "https://i.ibb.co/4pDNDk1/avatar.png"
                        }
                        alt="user"
                        width={45}
                        height={45}
                        className="
                          w-[45px] h-[45px]
                          rounded-full
                          object-cover
                        "
                      />

                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">
                          {user?.name}
                        </h3>

                        <p className="text-xs text-gray-500">
                          {user?.email}
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* DASHBOARD */}
                  <Link
                    href="/dashboard"
                    onClick={() => setDropdownOpen(false)}
                    className="
                      flex items-center gap-3 px-5 py-4
                      hover:bg-gray-100 dark:hover:bg-white/10
                      transition-all duration-300
                    "
                  >
                    <FaTachometerAlt />
                    Dashboard
                  </Link>

                  {/* LOGOUT */}
                  <button
                    onClick={async () => {
                      await authClient.signOut({
                        fetchOptions: {
                          onSuccess: () => {
                            window.location.href = "/";
                          },
                        },
                      });
                    }}
                    className="
                      w-full flex items-center gap-3 px-5 py-4
                      text-red-500
                      hover:bg-gray-100 dark:hover:bg-white/10
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
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 transition-all duration-300 ${
                pathname === "/"
                  ? "text-pink-500"
                  : "hover:text-pink-500"
              }`}
            >
              <FaHome />
              Home
            </Link>

            <Link
              href="/pet"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 transition-all duration-300 ${
                pathname === "/pet"
                  ? "text-pink-500"
                  : "hover:text-pink-500"
              }`}
            >
              <FaPaw />
              All Pets
            </Link>

            {!user && (
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 transition-all duration-300 ${
                  pathname === "/login"
                    ? "text-pink-500"
                    : "hover:text-pink-500"
                }`}
              >
                <FaUserCircle />
                Login
              </Link>
            )}

            {/* MOBILE USER */}
            {user && (
              <>
                <div className="flex items-center gap-3 pt-2">

                  <Image
                    src={
                      user?.image ||
                      "https://i.ibb.co/4pDNDk1/avatar.png"
                    }
                    alt="user"
                    width={45}
                    height={45}
                    className="
                      w-[45px] h-[45px]
                      rounded-full
                      object-cover
                      border-2 border-pink-500
                    "
                  />

                  <div>
                    <h3 className="font-semibold">
                      {user?.name}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {user?.email}
                    </p>
                  </div>

                </div>

                {/* DASHBOARD */}
                <Link
                  href="/dashboard"
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex items-center gap-3
                    hover:text-pink-500
                    transition-all duration-300
                  "
                >
                  <FaTachometerAlt />
                  Dashboard
                </Link>

                {/* LOGOUT */}
                <button
                  onClick={async () => {
                    await authClient.signOut({
                      fetchOptions: {
                        onSuccess: () => {
                          window.location.href = "/";
                        },
                      },
                    });
                  }}
                  className="
                    flex items-center gap-3
                    text-red-500
                  "
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </>
            )}

          </div>

        </div>
      )}

    </nav>
  );
}