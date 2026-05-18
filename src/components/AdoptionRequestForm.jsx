"use client";

import { useState } from "react";
import {
  FaHeart,
  FaPaw,
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";
import toast from "react-hot-toast";

const inputClass =
  "w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a1020] px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition";

export default function AdoptionRequestForm({ pet }) {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      setLoading(true);

      console.log(data);

      toast.success("Adoption request sent!");
      e.target.reset();
    } catch (err) {
      toast.error(err.message || "Failed to submit");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      rounded-2xl border
      border-gray-200 dark:border-white/10
      bg-white dark:bg-[#0d1528]/90
      p-6 lg:p-8 shadow-xl
      transition
      "
    >
      {/* HEADER */}
      <div className="flex items-center gap-2 mb-1">
        <FaHeart className="text-rose-500" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Request to Adopt {pet.petName}
        </h2>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Fill out this form and the owner will review your request.
      </p>

      {/* FORM */}
      <form onSubmit={onSubmit} className="space-y-4">

        {/* PET NAME */}
        <div>
          <label className="text-sm text-gray-700 dark:text-gray-300 mb-2 block">
            Pet Name
          </label>
          <div className="relative">
            <FaPaw className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              name="petName"
              defaultValue={pet.petName}
              readOnly
              className={`${inputClass} pl-11 opacity-80 cursor-not-allowed`}
            />
          </div>
        </div>

        {/* NAME */}
        <div>
          <label className="text-sm text-gray-700 dark:text-gray-300 mb-2 block">
            Your Name
          </label>
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              name="applicantName"
              placeholder="Your full name"
              required
              className={`${inputClass} pl-11`}
            />
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm text-gray-700 dark:text-gray-300 mb-2 block">
            Your Email
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              name="applicantEmail"
              type="email"
              placeholder="you@email.com"
              required
              className={`${inputClass} pl-11`}
            />
          </div>
        </div>

        {/* DATE */}
        <div>
          <label className="text-sm text-gray-700 dark:text-gray-300 mb-2 block">
            Preferred Pickup Date
          </label>
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
          <label className="text-sm text-gray-700 dark:text-gray-300 mb-2 block">
            Message to Owner
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="I want to adopt this pet."
            className={inputClass}
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full py-3.5 rounded-xl font-semibold text-white
            bg-gradient-to-r from-rose-500 via-pink-500 to-cyan-500
            hover:opacity-90 transition
            disabled:opacity-60
          "
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>

      </form>
    </div>
  );
}