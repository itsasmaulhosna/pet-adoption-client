import Image from "next/image";
import { notFound } from "next/navigation";
import AdoptionRequestForm from "@/components/AdoptionRequestForm";
import {
  FaPaw,
  FaDna,
  FaBirthdayCake,
  FaVenusMars,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaHeartbeat,
  FaSyringe,
  FaEdit,
} from "react-icons/fa";
import { EditModal } from "@/components/EditModal";

export default async function PetDetailsPage({ params }) {
  const { id } =await params;

  const res = await fetch(`http://localhost:2000/allPets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) notFound();

  const pet = await res.json();

  const infoItems = [
    { label: "Species", value: pet.species, icon: FaPaw },
    { label: "Breed", value: pet.breed, icon: FaDna },
    { label: "Age", value: pet.age ? `${pet.age} years` : "—", icon: FaBirthdayCake },
    { label: "Gender", value: pet.gender, icon: FaVenusMars },
    { label: "Location", value: pet.location, icon: FaMapMarkerAlt },
    { label: "Fee", value: `৳ ${pet.fee}`, icon: FaMoneyBillWave },
    { label: "Health", value: pet.healthStatus, icon: FaHeartbeat },
    { label: "Vaccinated", value: pet.vaccinationStatus, icon: FaSyringe },
  ];

  const aboutText = `
    ${pet.petName} is a lovable companion looking for a caring home.
    This pet is friendly, well-behaved, and adapts quickly to new environments.
    With proper care and love, ${pet.petName} will become a loyal member of your family.
  `;

  return (
    <div className="min-h-screen px-4 py-10 lg:px-8 bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-100 dark:from-[#050b18] dark:via-[#06142E] dark:to-[#0B1F3A]">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* IMAGE */}
          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src={pet.imageUrl}
              alt={pet.petName}
              fill
              priority
              className="object-cover"
            />

            <span className="absolute top-4 left-4 px-4 py-1 rounded-full text-sm font-semibold bg-green-500 text-white">
              Available
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {pet.petName}
          </h1>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400">
              {pet.species}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-gray-700 dark:text-gray-300">
              {pet.breed}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-gray-700 dark:text-gray-300">
              {pet.gender}
            </span>
          </div>

          {/* INFO GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {infoItems.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="p-4 rounded-xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10"
              >
                <Icon className="text-cyan-500 mb-2" />
                <p className="text-xs text-gray-500">{label}</p>
                <p className="font-semibold text-gray-800 dark:text-white">
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* ABOUT (NO CARD) */}
          <div className="space-y-3">

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              About {pet.petName}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {aboutText}
            </p>

            {/* EDIT BUTTON */}
            <EditModal pet={pet}/>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="lg:sticky lg:top-24 h-fit">
          <AdoptionRequestForm pet={pet} />
        </div>

      </div>
    </div>
  );
}