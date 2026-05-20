"use client";

import Image from "next/image";
import { FaArrowRight, FaPaw } from "react-icons/fa";

export default function Banner() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center
      bg-gradient-to-br from-white via-slate-100 to-slate-200
      dark:from-[#06142E] dark:via-[#0B1F3A] dark:to-[#10254A]
      transition-colors duration-500">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT */}
        <div className="relative z-10">

          <p className="text-pink-500 dark:text-pink-400 font-semibold mb-4 tracking-[4px] uppercase">
            Find Your Perfect Companion 🐾
          </p>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight
            text-gray-900 dark:text-white">
            Give a Pet a{" "}
            <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-red-400 bg-clip-text text-transparent">
              Loving Home
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            Welcome to PetNest — a trusted platform where loving families connect with adorable pets waiting for a forever home.
          </p>

          <button className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-blue-500 text-white flex items-center gap-3 hover:scale-105 transition">
            Adopt Now
            <FaArrowRight />
          </button>

        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          {/* BADGE */}
          <div className="absolute top-5 right-2 lg:right-10 animate-bounce z-20">
            <div className="flex items-center gap-3 bg-white/20 dark:bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-2xl">
              <FaPaw className="text-pink-400" />
              <div>
                <h3 className="text-gray-900 dark:text-white font-bold">
                  1000+ Pets
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Ready for Adoption
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative animate-[float_4s_ease-in-out_infinite] hover:scale-105 transition">

            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-blue-500/30 blur-3xl rounded-full animate-pulse"></div>

            <Image
              src="/images/banner.jpg"
              alt="Pet Banner"
              width={500}
              height={500}
              priority
              className="relative z-10 w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] rounded-full object-cover border-[8px] border-white/20 shadow-2xl"
            />

          </div>

        </div>
      </div>

      {/* FLOAT ANIMATION */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

    </section>
  );
}