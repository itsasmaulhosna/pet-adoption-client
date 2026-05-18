
import Image from "next/image";
import Link from "next/link";

import {
  FaMapMarkerAlt,
  FaMars,
  FaVenus,
  FaPaw,
  FaMoneyBillWave,
  FaEye,
} from "react-icons/fa";

const PetCard = ({ pet }) => {

  const {
    _id,
    petName,
    imageUrl,
    species,
    gender,
    breed,
    age,
    location,
    fee,
  } = pet;

  return (
    <div
      className="
      group
      overflow-hidden

      rounded-3xl

      bg-white/80 dark:bg-white/10
      backdrop-blur-xl

      border border-gray-200 dark:border-white/10

      shadow-xl hover:shadow-2xl

      transition-all duration-500
      hover:-translate-y-2
      "
    >

      {/* IMAGE */}
      <div className="relative h-64 overflow-hidden">

        <Image
          src={imageUrl}
          alt={petName}
          fill
          className="
          object-cover
          group-hover:scale-110
          transition-transform duration-700
          "
        />

        {/* SPECIES BADGE */}
        <div
          className="
          absolute top-4 left-4

          px-4 py-1 rounded-full

          text-sm font-semibold text-white

          bg-gradient-to-r
          from-cyan-500 via-blue-600 to-indigo-700

          shadow-lg
          "
        >
          {species}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-5">

        {/* PET NAME */}
        <h2
          className="
          text-2xl font-bold

          text-gray-800 dark:text-white

          group-hover:text-cyan-500
          dark:group-hover:text-cyan-400

          transition-colors duration-300
          "
        >
          {petName}
        </h2>

        {/* BREED AGE GENDER */}
        <div className="flex flex-wrap items-center gap-3">

          {/* BREED */}
          <div
            className="
            px-3 py-1 rounded-full

            bg-cyan-100 dark:bg-cyan-500/10

            text-cyan-700 dark:text-cyan-300

            text-sm font-medium
            "
          >
            <span className="font-semibold">Breed:</span> {breed}
          </div>

          {/* AGE */}
          <div
            className="
            px-3 py-1 rounded-full

            bg-pink-100 dark:bg-pink-500/10

            text-pink-700 dark:text-pink-300

            text-sm font-medium
            "
          >
            <span className="font-semibold">Age:</span> {age}
          </div>

          {/* GENDER */}
          <div
            className="
            flex items-center gap-2

            px-3 py-1 rounded-full

            bg-indigo-100 dark:bg-indigo-500/10

            text-indigo-700 dark:text-indigo-300

            text-sm font-medium
            "
          >
            {gender === "Male" ? <FaMars /> : <FaVenus />}

            {gender}
          </div>
        </div>

        {/* LOCATION + FEE */}
        <div className="flex items-center justify-between gap-4">

          {/* LOCATION */}
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">

            <FaMapMarkerAlt className="text-cyan-500" />

            <span className="text-sm">
              {location}
            </span>
          </div>

          {/* FEE */}
          <div className="flex items-center gap-2">

            <FaMoneyBillWave className="text-green-500" />

            <span
              className="
              text-lg font-bold

              bg-gradient-to-r
              from-cyan-500 to-blue-700

              bg-clip-text text-transparent
              "
            >
              $ {fee}
            </span>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-3 pt-2">

          {/* VIEW DETAILS */}
          <Link
            href={`/allPets/${_id}`}
            className="
            flex-1 flex items-center justify-center gap-2

            py-3 rounded-2xl

            border border-cyan-500

            text-cyan-600 dark:text-cyan-400
            font-semibold

            hover:bg-cyan-500
            hover:text-white

            transition-all duration-300
            "
          >
            <FaEye />

            View Details
          </Link>

          {/* ADOPT NOW */}
          <button
            className="
            flex-1

            py-3 rounded-2xl

            text-white font-semibold

            bg-gradient-to-r
            from-cyan-500 via-blue-600 to-indigo-700

            hover:scale-105

            transition-all duration-300

            shadow-lg
            "
          >
            Adopt Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default PetCard;

