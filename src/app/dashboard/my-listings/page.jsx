"use client";

import { useEffect, useState } from "react";
import { FaPaw, FaHeart, FaCheckCircle } from "react-icons/fa";
import MyListingCard from "@/components/MyListingCard";

export default function MyListings() {

  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:2000/allPets")
      .then(res => res.json())
      .then(data => setPets(data))
      .finally(() => setLoading(false));
  }, []);

  const total = pets.length;
  const adopted = pets.filter(p => p.isAdopted).length;
  const available = total - adopted;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10">

      {/* HEADER */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white">
            <FaPaw />
          </div>

          <h1 className="text-3xl font-bold">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              Listings
            </span>
          </h1>
        </div>

        <p className="text-gray-500 max-w-xl">
          Manage your pets, track adoption, and update listings.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

        <div className="p-5 rounded-2xl bg-white dark:bg-[#0d1528] shadow">
          <div className="flex justify-between">
            <div>
              <p>Total Listings</p>
              <h2 className="text-pink-500 text-3xl font-bold">{total}</h2>
            </div>
            <FaPaw className="text-pink-500 text-2xl" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#0d1528] shadow">
          <div className="flex justify-between">
            <div>
              <p>Available</p>
              <h2 className="text-cyan-500 text-3xl font-bold">{available}</h2>
            </div>
            <FaHeart className="text-cyan-500 text-2xl" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#0d1528] shadow">
          <div className="flex justify-between">
            <div>
              <p>Adopted</p>
              <h2 className="text-green-500 text-3xl font-bold">{adopted}</h2>
            </div>
            <FaCheckCircle className="text-green-500 text-2xl" />
          </div>
        </div>

      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {pets.map(pet => (
          <MyListingCard key={pet._id} pet={pet} />
        ))}

      </div>

    </div>
  );
}