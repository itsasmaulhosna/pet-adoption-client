
import PetCard from "@/components/PetCard";

const AllPetsPage = async () => {
  const res = await fetch("http://localhost:2000/allPets", {
    cache: "no-store",
  });

  const pets = await res.json();

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
      <div className="max-w-7xl mx-auto text-center mb-14">

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
         {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet} />
        ))} 
      </div>
    </div>
  );
};

export default AllPetsPage;

