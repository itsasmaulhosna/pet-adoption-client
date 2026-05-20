

"use client";

import { FaHandsHelping } from "react-icons/fa";

export default function PetCommunity() {
  return (
    <section className="mt-24 bg-gradient-to-r from-cyan-500 to-blue-700 py-20">

      <div className="max-w-5xl mx-auto px-4 text-center">

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center animate-bounce">
            <FaHandsHelping className="text-5xl text-white" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Join Our Pet Community
        </h1>

        <p className="mt-5 text-white/90 max-w-2xl mx-auto leading-relaxed text-lg">
          Become part of a caring community helping rescued pets find
          loving homes and better lives every day.
        </p>

        <button className="mt-8 px-8 py-4 rounded-full bg-white text-blue-700 font-bold hover:scale-105 transition-all duration-300 shadow-xl">
          Get Involved
        </button>

      </div>

    </section>
  );
}

