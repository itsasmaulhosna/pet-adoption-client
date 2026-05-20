

"use client";

import {
  FaHeart,
  FaHome,
  FaShieldAlt,
  FaPaw,
} from "react-icons/fa";

export default function WhyAdoptPets() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-24">

      <div className="text-center mb-14">

        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
            <FaPaw className="text-white text-2xl" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
          Why{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Adopt
          </span>{" "}
          Pets?
        </h1>

        <p className="mt-5 max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
          Give rescued animals a loving home and create unforgettable memories.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-white dark:bg-[#0B1F3A] rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300">
          <FaHeart className="text-4xl text-pink-500 mb-5" />

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Save Lives
          </h2>

          <p className="text-slate-600 dark:text-slate-300">
            Adoption gives homeless pets a second chance at life.
          </p>
        </div>

        <div className="bg-white dark:bg-[#0B1F3A] rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300">
          <FaHome className="text-4xl text-blue-500 mb-5" />

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Loving Companion
          </h2>

          <p className="text-slate-600 dark:text-slate-300">
            Pets bring joy, loyalty, and emotional support.
          </p>
        </div>

        <div className="bg-white dark:bg-[#0B1F3A] rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300">
          <FaShieldAlt className="text-4xl text-cyan-500 mb-5" />

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Better Future
          </h2>

          <p className="text-slate-600 dark:text-slate-300">
            Every adoption helps build a safer future for pets.
          </p>
        </div>

      </div>

    </section>
  );
}

