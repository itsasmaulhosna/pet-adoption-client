
"use client";

import { Button } from "@heroui/react";
import { FaTrash, FaTimes } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";

export function RequestCancel({ requestId, onSuccess }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCancel = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:2000/adoption-request/${requestId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success("Request cancelled");

        onSuccess?.(requestId);
        setOpen(false);
      } else {
        toast.error("Failed to cancel request");
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* TRIGGER BUTTON */}
      <Button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl"
      >
        <FaTrash />
        Cancel
      </Button>

      {/* OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* MODAL CARD */}
          <div className="relative w-[92%] sm:w-[420px] bg-white dark:bg-[#0d1528] rounded-2xl shadow-2xl p-6 animate-in zoom-in-95">

            {/* CLOSE BUTTON (TOP RIGHT) */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <FaTimes />
            </button>

            {/* HEADER */}
            <div className="flex items-center gap-2 mb-4">
              <FaTrash className="text-red-500" />
              <h2 className="text-lg font-bold">
                Cancel this request?
              </h2>
            </div>

            {/* BODY */}
            <p className="text-gray-500 text-sm mb-6">
              This action cannot be undone. Your adoption request will be permanently removed.
            </p>

            {/* ACTIONS */}
            <div className="flex justify-end gap-3">
              <Button
                variant="flat"
                onClick={() => setOpen(false)}
              >
                No
              </Button>

              <Button
                color="danger"
                isLoading={loading}
                onClick={handleCancel}
              >
                Yes, Cancel
              </Button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}