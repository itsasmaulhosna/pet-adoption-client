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

// 👉 if you already have spinner component
import LoadingSpinner from "@/components/LoadingSpinner";

const inputClass =
  "w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a1020] px-4 py-3 outline-none";

export default function AdoptionRequestForm({ pet }) {

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const adoptionInfo = {
      petId: pet._id,
      petName: pet.petName,
      petImage: pet.imageUrl,
      userId: user?.id,
      requesterName: user?.name,
      requesterEmail: user?.email,
      requestDate: new Date(),
      pickupDate: formData.get("pickupDate"),
      message: formData.get("message"),
      status: "Pending",
    };

    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:2000/adoption-request",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(adoptionInfo),
        }
      );

      const data = await res.json();

      if (data.insertedId) {
        toast.success("Adoption request sent!");
        setSubmitted(true);
        form.reset();
      } else {
        toast.error("Failed to send request");
      }

    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // SUCCESS STATE UI
  // =========================
  if (submitted) {
    return (
      <div className="p-10 text-center border rounded-2xl shadow-xl bg-white dark:bg-[#0d1528]">

        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Request Sent Successfully 🎉
        </h2>

        <p className="text-gray-500 mt-2">
          Your adoption request for <b>{pet.petName}</b> is now under review.
        </p>

      </div>
    );
  }

  // =========================
  // FORM UI
  // =========================
  return (
    <div className="p-6 lg:p-8 border rounded-2xl shadow-xl bg-white dark:bg-[#0d1528]">

      {/* HEADER */}
      <div className="mb-6">

        <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
          <FaHeart className="text-pink-500" />
          Request to Adopt {pet.petName}
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          Fill out the form below to send an adoption request. The pet owner will review your request shortly.
        </p>

      </div>

      <form onSubmit={onSubmit} className="space-y-4">

        {/* PET NAME */}
        <div>
          <label className="text-sm text-gray-600">Pet Name</label>
          <input
            value={pet.petName}
            readOnly
            placeholder="Pet Name"
            className={inputClass}
          />
        </div>

        {/* USER NAME */}
        <div>
          <label className="text-sm text-gray-600">Your Name</label>
          <input
            value={user?.name || ""}
            readOnly
            placeholder="Your Name"
            className={inputClass}
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm text-gray-600">Email Address</label>
          <input
            value={user?.email || ""}
            readOnly
            placeholder="Email Address"
            className={inputClass}
          />
        </div>

        {/* PICKUP DATE */}
        <div>
          <label className="text-sm text-gray-600">Preferred Pickup Date</label>
          <input
            type="date"
            name="pickupDate"
            required
            className={inputClass}
          />
        </div>

        {/* MESSAGE */}
        <div>
          <textarea
            name="message"
            rows={4}
            placeholder="Write a short message why you want to adopt this pet..."
            className={inputClass}
          />
        </div>

        {/* BUTTON */}
        <button
          disabled={loading}
          className="
            w-full py-3 rounded-xl
            font-semibold text-white
            bg-gradient-to-r from-pink-500 via-rose-500 to-cyan-500
            flex items-center justify-center gap-2
            disabled:opacity-60
          "
        >

          {loading ? (
            <>
              <LoadingSpinner />
              Submitting...
            </>
          ) : (
            "Request Adoption"
          )}

        </button>

      </form>
    </div>
  );
}
