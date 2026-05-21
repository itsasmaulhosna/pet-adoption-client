"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  FaCheck,
  FaTimes,
  FaExclamationTriangle,
  FaPaw,
} from "react-icons/fa";

export default function AdoptionRequestModal({ pet, onUpdate }) {
  const [open, setOpen] = useState(false);
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadRequest = async () => {
    const res = await fetch(
      `http://localhost:2000/adoption-request/pet/${pet._id}`
    );
    const data = await res.json();
    setRequest(data);
  };

  const openModal = async () => {
    setOpen(true);
    await loadRequest();
  };

  const approve = async () => {
    setLoading(true);

    await fetch(`http://localhost:2000/adoption/approve/${pet._id}`, {
      method: "PATCH",
    });

    toast.success("Adopted Successfully 🎉");
    setOpen(false);
    onUpdate();

    setLoading(false);
  };

  const cancel = async () => {
    setLoading(true);

    await fetch(`http://localhost:2000/adoption/cancel/${pet._id}`, {
      method: "PATCH",
    });

    toast("Cancelled");
    setOpen(false);
    onUpdate();

    setLoading(false);
  };

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={openModal}
        className="px-3 py-2 rounded-xl bg-gray-100 dark:bg-white/5 hover:scale-105 transition"
      >
        Request
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">

          {/* BACKDROP */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* MODAL BOX */}
          <div className="relative w-[92%] max-w-md rounded-3xl shadow-2xl bg-white dark:bg-[#0b1224] overflow-hidden">

            {/* TOP HEADER */}
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-5 text-white relative">

              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-4 text-white text-xl font-bold"
              >
                ✕
              </button>

              <div className="flex items-center gap-3">
                <FaPaw className="text-2xl" />

                <div>
                  <h2 className="text-xl font-bold">
                    Adoption Request
                  </h2>

                  <p className="text-sm opacity-90">
                    Review pet adoption details
                  </p>
                </div>
              </div>
            </div>

            {/* BODY */}
            <div className="p-6 space-y-4">

              {/* ❌ NO REQUEST */}
              {!request ? (
                <div className="text-center py-8">

                  <FaExclamationTriangle className="text-yellow-500 text-5xl mx-auto mb-3" />

                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    No Request Found
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    No adoption request has been made for this pet yet.
                  </p>

                </div>

              ) : (
                <>
                  {/* PET NAME HIGHLIGHT */}
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                      {request.petName}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Requested by user
                    </p>
                  </div>

                  {/* INFO BOX */}
                  <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4 space-y-2 text-sm">

                    <p>
                      <span className="font-semibold">👤 Name:</span>{" "}
                      {request.requesterName}
                    </p>

                    <p>
                      <span className="font-semibold">📧 Email:</span>{" "}
                      {request.requesterEmail}
                    </p>

                    <p>
                      <span className="font-semibold">📌 Status:</span>{" "}
                      <span className="text-yellow-500 font-bold">
                        {request.status}
                      </span>
                    </p>

                  </div>

                  {/* ACTION BUTTONS */}
                  {request.status?.toLowerCase() === "pending"  && (
                    <div className="flex gap-3 pt-2">

                      {/* APPROVE */}
                      <button
                        onClick={approve}
                        disabled={loading}
                        className="
                          flex-1 py-2 rounded-xl text-white font-bold
                          bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
                          hover:scale-[1.02] transition
                        "
                      >
                        <FaCheck className="inline mr-1" />
                        Approve
                      </button>

                      {/* CANCEL */}
                      <button
                        onClick={cancel}
                        disabled={loading}
                        className="
                          flex-1 py-2 rounded-xl text-white font-bold
                          bg-red-500 hover:bg-red-600 transition
                        "
                      >
                        <FaTimes className="inline mr-1" />
                        Cancel
                      </button>

                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}