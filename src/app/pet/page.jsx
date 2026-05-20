
"use client";

import { useEffect, useMemo, useState } from "react";

import PetCard from "@/components/PetCard";
import LoadingSpinner from "@/components/LoadingSpinner";

import { FaSearch } from "react-icons/fa";

export default function AllPetsPage() {

  const [pets, setPets] = useState([]);

  const [search, setSearch] = useState("");

  const [breedFilter, setBreedFilter] = useState("");

  const [loading, setLoading] = useState(true);

  // FETCH PETS
  useEffect(() => {

    fetch("http://localhost:2000/allPets")
      .then((res) => res.json())
      .then((data) => setPets(data))
      .finally(() => setLoading(false));

  }, []);

  // UNIQUE BREEDS
  const breeds = [...new Set(
    pets.map((p) => p.breed).filter(Boolean)
  )];

  // FILTERED PETS
  const filteredPets = useMemo(() => {

    let filtered = pets.filter((pet) => {

      const nameMatch = pet.petName
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const breedMatch = breedFilter
        ? pet.breed === breedFilter
        : true;

      return nameMatch && breedMatch;

    });

    // FULL MATCH FIRST
    filtered.sort((a, b) => {

      const aExact = a.petName
        ?.toLowerCase()
        .startsWith(search.toLowerCase());

      const bExact = b.petName
        ?.toLowerCase()
        .startsWith(search.toLowerCase());

      return bExact - aExact;

    });

    return filtered;

  }, [pets, search, breedFilter]);

  // LOADING
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div
      className="
      min-h-screen

      bg-gradient-to-br
      from-slate-100 via-blue-50 to-cyan-100

      dark:from-[#06142E]
      dark:via-[#0B1F3A]
      dark:to-[#10254A]

      px-5 py-10
      "
    >

      {/* HEADING */}
      <div className="max-w-7xl mx-auto text-center mb-10">

        <h1
          className="
          text-4xl md:text-5xl
          font-extrabold

          bg-gradient-to-r
          from-cyan-500 via-blue-600 to-indigo-700

          bg-clip-text text-transparent
          "
        >
          Find Your Perfect Pet 🐾
        </h1>

        <p
          className="
          mt-4 max-w-2xl mx-auto
          text-gray-600 dark:text-gray-300
          "
        >
          Explore adorable pets waiting for a loving home.
          Adopt your new best friend today.
        </p>

      </div>

      {/* SEARCH + FILTER */}
      <div className="
        max-w-5xl mx-auto
        flex flex-col md:flex-row
        gap-4
        mb-12
      ">

        {/* SEARCH */}
        <div className="relative flex-1">

          <FaSearch
            className="
              absolute left-4 top-1/2
              -translate-y-1/2
              text-gray-400
            "
          />

          <input
            type="text"
            placeholder="Search pet by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full h-14
              rounded-2xl
              pl-12 pr-4
              bg-white dark:bg-[#0d1528]
              border border-gray-200 dark:border-white/10
              shadow-lg
              outline-none
              focus:ring-2 focus:ring-cyan-500
            "
          />

        </div>

        {/* DROPDOWN */}
        <select
          value={breedFilter}
          onChange={(e) => setBreedFilter(e.target.value)}
          className="
            h-14 px-5
            rounded-2xl
            bg-white dark:bg-[#0d1528]
            border border-gray-200 dark:border-white/10
            shadow-lg
            outline-none
            min-w-[220px]
          "
        >

          <option value="">
            All Breeds
          </option>

          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}

        </select>

      </div>

      {/* PET GRID */}
      <div
        className="
        max-w-7xl mx-auto

        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3

        gap-8
        "
      >

        {filteredPets.length > 0 ? (

          filteredPets.map((pet) => (
            <PetCard key={pet._id} pet={pet} />
          ))

        ) : (

          <div
            className="
            col-span-full
            text-center
            text-gray-500
            py-20
          "
          >
            No pets found 🐾
          </div>

        )}

      </div>

    </div>
  );
}

