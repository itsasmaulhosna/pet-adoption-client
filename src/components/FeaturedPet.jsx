
import Link from "next/link";
import { FaPaw } from "react-icons/fa";

import PetCard from "./PetCard";

const FeaturedPet = async () => {
  const res = await fetch("http://localhost:2000/featured", {
    cache: "no-store",
  });

  const pets = await res.json();

  return (
    <section className="mt-20 max-w-7xl mx-auto px-4">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg mb-5">
          <FaPaw className="text-white text-2xl" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Featured
          </span>{" "}
          Pets
        </h1>

        {/* Paragraph */}
        <p className="mt-5 text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed text-base md:text-lg">
          Meet our adorable pets looking for a loving forever home. 
          Discover cute companions, loyal friends, and give a rescued pet 
          a second chance at happiness through adoption.
        </p>

        {/* Button */}
        <Link href="/pet" className="mt-8">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300">
            Explore All Pets
          </button>
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {pets?.map((pet) => (
          <PetCard key={pet._id} pet={pet} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPet;

