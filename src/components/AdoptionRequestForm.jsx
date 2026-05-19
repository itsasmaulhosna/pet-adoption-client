"use client";

import { useState } from "react";
import {
  FaHeart,
  FaPaw,
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const inputClass =
  "w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a1020] px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 outline-none";

export default function AdoptionRequestForm({ pet }) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      setLoading(true);

      console.log(data);

      toast.success("Adoption request sent!");
      setSubmitted(true);
      e.target.reset();

    } catch (err) {
      toast.error(err.message || "Failed to submit");

    } finally {
      setLoading(false);
    }
  };

  // SUCCESS UI
  if (submitted) {
    return (
      <div className="rounded-2xl border p-10 text-center bg-white dark:bg-[#0d1528] shadow-xl">
        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />

        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          Request Sent Successfully!
        </h2>

        <p className="text-gray-500 mt-2">
          Your adoption request for <b>{pet.petName}</b> is now under review.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border p-6 lg:p-8 shadow-xl bg-white dark:bg-[#0d1528]/90">

      {/* HEADER */}
      <div className="flex items-center gap-2 mb-1">
        <FaHeart className="text-rose-500" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Request to Adopt {pet.petName}
        </h2>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        Fill out this form and the owner will review your request.
      </p>

      <form onSubmit={onSubmit} className="space-y-4">

        {/* PET NAME */}
        <div>
          <label className="text-sm mb-2 block">Pet Name</label>
          <div className="relative">
            <FaPaw className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              defaultValue={pet.petName}
              readOnly
              className={`${inputClass} pl-11 opacity-80 cursor-not-allowed`}
            />
          </div>
        </div>

        {/* USER NAME */}
        <div>
          <label className="text-sm mb-2 block">Your Name</label>
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={user?.name || ""}
              readOnly
              className={`${inputClass} pl-11 opacity-80 cursor-not-allowed`}
            />
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm mb-2 block">Your Email</label>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={user?.email || ""}
              readOnly
              className={`${inputClass} pl-11 opacity-80 cursor-not-allowed`}
            />
          </div>
        </div>

        {/* DATE */}
        <div>
          <label className="text-sm mb-2 block">Preferred Pickup Date</label>
          <div className="relative">
            <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              name="pickupDate"
              type="date"
              required
              className={`${inputClass} pl-11`}
            />
          </div>
        </div>

        {/* MESSAGE */}
        <div>
          <textarea
            name="message"
            rows={4}
            placeholder="I want to adopt this pet."
            className={inputClass}
          />
        </div>

        {/* BUTTON WITH SPINNER */}
        <button
          disabled={loading}
          className="
            w-full py-3.5 rounded-xl font-semibold text-white
            bg-gradient-to-r from-rose-500 via-pink-500 to-cyan-500
            disabled:opacity-60 flex items-center justify-center gap-2
          "
        >
          {loading ? (
            <>
              <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Submitting...
            </>
          ) : (
            `Adopt ${pet.petName}`
          )}
        </button>

      </form>
    </div>
  );
}