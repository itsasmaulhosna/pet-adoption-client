"use client";

import { useEffect, useState } from "react";
import { FaPaw, FaHeart, FaCheckCircle } from "react-icons/fa";
import MyListingCard from "@/components/MyListingCard";

export default function MyListings() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const fetchPets = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allPets`);
      const data = await res.json();

      setPets(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  
  const total = pets.length;
  const adopted = pets.filter((p) => p.isAdopted).length;
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
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white">
            <FaPaw />
          </div>

          <h1 className="text-3xl font-bold">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              Listings
            </span>
          </h1>
        </div>

        <p className="text-gray-500">
          Manage pets, approve adoption requests, and track status.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">

        {/* TOTAL */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#0d1528] shadow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Total Listings</p>
              <h2 className="text-3xl font-bold text-pink-500">{total}</h2>
            </div>
            <FaPaw className="text-pink-500 text-2xl" />
          </div>
        </div>

        {/* AVAILABLE */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#0d1528] shadow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Available</p>
              <h2 className="text-3xl font-bold text-cyan-500">{available}</h2>
            </div>
            <FaHeart className="text-cyan-500 text-2xl" />
          </div>
        </div>

        {/* ADOPTED */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#0d1528] shadow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Adopted</p>
              <h2 className="text-3xl font-bold text-green-500">{adopted}</h2>
            </div>
            <FaCheckCircle className="text-green-500 text-2xl" />
          </div>
        </div>

      </div>

      {/* GRID */}
      {pets.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">
          No pets found 🐾
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {pets.map((pet) => (
            <MyListingCard
              key={pet._id}
              pet={pet}
              onUpdate={fetchPets}   
            />
          ))}

        </div>
      )}
    </div>
  );
}