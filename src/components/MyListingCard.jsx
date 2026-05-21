"use client";

import Image from "next/image";
import Link from "next/link";

import { FaEye } from "react-icons/fa";

import { EditModal } from "@/components/EditModal";
import {DeleteModal }from "@/components/DeleteModal";
import AdoptionRequestModal from "@/components/AdoptionRequestModal";

export default function MyListingCard({ pet }) {
  return (
    <div className=
      {`group rounded-3xl overflow-hidden
      bg-white dark:bg-[#0d1528]
      shadow-lg border border-gray-100 dark:border-white/10
    `}>

      {/* IMAGE */}
      <div className="relative">
        <Image
          src={pet.imageUrl}
          alt={pet.petName}
          width={500}
          height={300}
          className="h-56 w-full object-cover"
        />

        <div className=
          {`absolute top-3 right-3
          px-3 py-1 text-xs text-white
          bg-gradient-to-r from-pink-500 to-cyan-500
          rounded-full
        `}>
          {pet.species}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">

        {/* TITLE */}
        <div className="flex justify-between mb-2">
          <h2 className="font-bold text-lg group-hover:text-pink-500">
            {pet.petName}
          </h2>

          <span className="text-cyan-500 font-bold">
            $ {pet.fee}
          </span>
        </div>

        {/* BUTTON GRID (STRICT EQUAL SIZE) */}
        <div className=
          {`grid grid-cols-2
          gap-3
          mt-4
          items-stretch
        `}>

          {/* REQUEST (ADOPTION FORM) */}
          
<div className="w-full">
  <AdoptionRequestModal pet={pet} />
</div>



          {/* EDIT */}
          <div className="w-full">
            <EditModal pet={pet} />
          </div>

          {/* VIEW */}
          <Link
            href={`/pet/${pet._id}`}
            className=
              {`flex items-center justify-center gap-2
              w-full h-full
              bg-gray-100 dark:bg-white/5
              rounded-xl py-2 text-sm
              hover:bg-gray-200 dark:hover:bg-white/10
              transition
            `}
          >
            <FaEye />
            View
          </Link>

          {/* DELETE */}
          <div className="w-full">
            <DeleteModal pet={pet} />
          </div>

        </div>

      </div>
    </div>
  );
}