
import Link from "next/link";

import {
  FaHome,
  FaPaw,
  FaSearch,
} from "react-icons/fa";

export default function NotFound() {

  return (
    <div
      className="
      min-h-screen
      flex items-center justify-center
      px-5

      bg-gradient-to-br
      from-slate-100 via-blue-50 to-cyan-100

      dark:from-[#06142E]
      dark:via-[#0B1F3A]
      dark:to-[#10254A]
    "
    >

      <div
        className="
        max-w-2xl w-full
        text-center

        bg-white/80 dark:bg-white/5
        backdrop-blur-xl

        border border-white/20 dark:border-white/10

        rounded-[32px]
        shadow-2xl

        p-10 md:p-16
      "
      >

        {/* ICON */}
        <div
          className="
          mx-auto mb-6

          w-24 h-24
          rounded-full

          flex items-center justify-center

          bg-gradient-to-r
          from-pink-500 via-rose-500 to-cyan-500

          text-white text-4xl
        "
        >
          <FaPaw />
        </div>

        {/* 404 */}
        <h1
          className="
          text-7xl md:text-8xl
          font-extrabold

          bg-gradient-to-r
          from-cyan-500 via-blue-600 to-indigo-700

          bg-clip-text text-transparent
        "
        >
          404
        </h1>

        {/* TITLE */}
        <h2
          className="
          mt-5
          text-3xl md:text-4xl
          font-bold

          text-gray-800 dark:text-white
        "
        >
          Oops! Page Not Found
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
          mt-4
          text-gray-600 dark:text-gray-300
          leading-8
          max-w-xl mx-auto
        "
        >
          Looks like this cute pet wandered away 🐾
          The page you're looking for doesn't exist
          or may have been moved.
        </p>

        {/* BUTTONS */}
        <div
          className="
          mt-10
          flex flex-col sm:flex-row
          items-center justify-center
          gap-4
        "
        >

          {/* HOME BUTTON */}
          <Link
            href="/"
            className="
              flex items-center gap-2

              px-7 py-3
              rounded-2xl

              text-white font-semibold

              bg-gradient-to-r
              from-pink-500 via-rose-500 to-cyan-500

              shadow-lg
              hover:scale-105
              transition-all duration-300
            "
          >
            <FaHome />
            Back To Home
          </Link>

          {/* PET BUTTON */}
          <Link
            href="/pet"
            className="
              flex items-center gap-2

              px-7 py-3
              rounded-2xl

              bg-white dark:bg-white/10
              text-gray-700 dark:text-white

              border border-gray-200 dark:border-white/10

              hover:bg-gray-100
              dark:hover:bg-white/20

              transition-all duration-300
            "
          >
            <FaSearch />
            Browse Pets
          </Link>

        </div>

      </div>

    </div>
  );
}

