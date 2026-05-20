
"use client";

import {
  FaBone,
  FaSyringe,
  FaHeart,
} from "react-icons/fa";

export default function PetCareTips() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-24">

      <div className="text-center mb-14">

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
          Pet Care{" "}
          <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Tips
          </span>
        </h1>

        <p className="mt-5 max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
          Helpful tips to keep your furry friends healthy and happy.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-white dark:bg-[#0B1F3A] rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300">
          <FaBone className="text-4xl text-orange-500 mb-5" />

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Healthy Food
          </h2>

          <p className="text-slate-600 dark:text-slate-300">
            Give nutritious food and clean water every day.
          </p>
        </div>

        <div className="bg-white dark:bg-[#0B1F3A] rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300">
          <FaSyringe className="text-4xl text-cyan-500 mb-5" />

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Vaccination
          </h2>

          <p className="text-slate-600 dark:text-slate-300">
            Regular vaccines protect pets from dangerous diseases.
          </p>
        </div>

        <div className="bg-white dark:bg-[#0B1F3A] rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300">
          <FaHeart className="text-4xl text-pink-500 mb-5" />

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Daily Love
          </h2>

          <p className="text-slate-600 dark:text-slate-300">
            Spend quality time to build trust and emotional bonding.
          </p>
        </div>

      </div>

    </section>
  );
}

