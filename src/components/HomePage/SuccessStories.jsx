

"use client";

import { FaPaw, FaUserFriends } from "react-icons/fa";

export default function SuccessStories() {
  return (
    <section className="bg-slate-50 dark:bg-[#081221] py-20 mt-24">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Success{" "}
            <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
              Stories
            </span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
            Real adoption stories that changed lives forever.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white dark:bg-[#0B1F3A] rounded-3xl p-8 shadow-lg hover:scale-[1.02] transition-all duration-300">

            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
                <FaUserFriends className="text-white text-xl" />
              </div>

              <div>
                <h2 className="font-bold text-xl text-slate-900 dark:text-white">
                  Bella’s Journey
                </h2>

                <p className="text-slate-500 text-sm">
                  Adopted 3 months ago
                </p>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300">
              Bella found a caring family after being rescued from the streets.
            </p>

          </div>

          <div className="bg-white dark:bg-[#0B1F3A] rounded-3xl p-8 shadow-lg hover:scale-[1.02] transition-all duration-300">

            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                <FaPaw className="text-white text-xl" />
              </div>

              <div>
                <h2 className="font-bold text-xl text-slate-900 dark:text-white">
                  Max Found Home
                </h2>

                <p className="text-slate-500 text-sm">
                  Adopted 1 year ago
                </p>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300">
              Max now enjoys a happy and loving life with his forever family.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

