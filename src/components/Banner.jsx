"use client";

import Image from "next/image";
import { FaArrowRight, FaPaw } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-[#06142E] via-[#0B1F3A] to-[#10254A]">

      {/* BACKGROUND BLUR EFFECTS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="relative z-10">
          
          <p className="text-pink-400 font-semibold mb-4 tracking-[4px] uppercase animate-pulse">
            Find Your Perfect Companion 🐾
          </p>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-white">
            Give a Pet a{" "}
            <span className="bg-gradient-to-r from-blue-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
              Loving Home
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">
            Welcome to PetNest — a trusted platform where loving families connect with adorable pets waiting for a forever home.
          </p>

          {/* BUTTON */}
          <button className="mt-8 group px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-blue-500 text-white font-semibold text-lg flex items-center gap-3 shadow-2xl hover:scale-105 transition-all duration-300">
            Adopt Now
            <span className="group-hover:translate-x-1 transition duration-300">
              <FaArrowRight />
            </span>
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-center">

          {/* FLOATING BADGE */}
          <div className="absolute top-5 right-2 lg:right-10 animate-float z-20">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-2xl shadow-2xl">
              
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center text-white shadow-lg">
                <FaPaw />
              </div>

              <div>
                <h3 className="text-white font-bold">1000+ Pets</h3>
                <p className="text-gray-300 text-sm">Ready for Adoption</p>
              </div>

            </div>
          </div>

          {/* IMAGE + GLOW */}
          <div className="relative animate-float hover:scale-105 transition duration-500">

            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-blue-500/30 blur-3xl rounded-full animate-pulse"></div>

            <Image
              src="/images/banner.jpg"
              alt="Pet Banner"
              width={520}
              height={520}
              priority
              className="relative z-10 w-[340px] lg:w-[520px] h-[340px] lg:h-[520px] rounded-full object-cover border-[10px] border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            />

          </div>

        </div>
      </div>

      {/* CUSTOM FLOAT ANIMATION */}
      <style jsx>{`
        .animate-float {
          animation: floatUpDown 3.5s ease-in-out infinite;
        }

        @keyframes floatUpDown {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-14px);
          }
        }
      `}</style>

    </section>
  );
};

export default Banner;