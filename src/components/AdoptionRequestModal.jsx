
"use client";

import { useState } from "react";
import { FaHeart, FaTimes } from "react-icons/fa";

import AdoptionRequestForm from "@/components/AdoptionRequestForm";

export default function AdoptionRequestModal({ pet }) {

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="
          flex items-center justify-center gap-2
          w-full h-full
          bg-gray-100 dark:bg-white/5
          rounded-xl py-2 text-sm
          hover:bg-gray-200 dark:hover:bg-white/10
          transition
        "
      >
        <FaHeart />
        Request
      </button>

      {/* MODAL */}
      {open && (

        <div className="fixed inset-0 z-[9999] flex items-center justify-center">

          {/* BACKDROP */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* MODAL CONTENT */}
          <div className="
            relative
            w-[95%]
            max-w-2xl
            max-h-[90vh]
            overflow-y-auto
            bg-white dark:bg-[#0d1528]
            rounded-3xl
            shadow-2xl
            p-6
          ">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute top-4 right-4
                text-gray-500 hover:text-red-500
                text-xl
              "
            >
              <FaTimes />
            </button>

            {/* REAL FORM */}
            <AdoptionRequestForm pet={pet} />

          </div>
        </div>
      )}
    </>
  );
}

