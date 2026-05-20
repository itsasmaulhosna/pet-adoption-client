"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { FaEye, FaTrash, FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function MyRequestPage() {

  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const load = async () => {

      if (!user?.id) return;

      try {

        const res = await fetch(
          `http://localhost:2000/adoption-request/${user.id}`
        );

        const data = await res.json();

        setRequests(data || []);

      } catch (err) {
        toast.error("Failed to load requests");
      } finally {
        setLoading(false);
      }
    };

    load();

  }, [user?.id]);

  // CANCEL REQUEST (UI ONLY FOR NOW)
  const handleCancel = async (id) => {

    const ok = confirm("Are you sure you want to cancel?");

    if (!ok) return;

    try {

      await fetch(`http://localhost:2000/adoption-request/${id}`, {
        method: "DELETE",
      });

      setRequests((prev) => prev.filter((r) => r._id !== id));

      toast.success("Request cancelled");

    } catch {
      toast.error("Failed to cancel");
    }

  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-12 w-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">

      {/* HEADER */}
      <div className="text-center mb-10">

        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white flex items-center justify-center gap-2">
          <FaHeart className="text-pink-500" />
          My Adoption Requests
        </h1>

        <p className="text-gray-500 mt-2">
          All your pet adoption requests in one place
        </p>

      </div>

      {/* EMPTY */}
      {requests.length === 0 ? (
        <p className="text-center text-gray-500">
          No Requests Found
        </p>
      ) : (

        <div className="grid gap-6">

          {requests.map((r) => (

            <div
              key={r._id}
              className="
                flex flex-col md:flex-row
                bg-white dark:bg-[#0d1528]
                rounded-3xl
                shadow-xl
                overflow-hidden
                border border-gray-100 dark:border-white/10
                hover:scale-[1.01]
                transition-all duration-300
              "
            >

              {/* IMAGE (BIGGER NOW) */}
              <div className="relative w-full md:w-[360px] h-[260px]">

                <Image
                  src={r.petImage}
                  alt={r.petName}
                  fill
                  className="object-cover"
                />

              </div>

              {/* CONTENT */}
              <div className="flex-1 p-6 flex flex-col justify-between">

                <div>

                  {/* NAME (COLOR + GRADIENT) */}
                  <h2 className="
                    text-3xl font-bold
                    bg-gradient-to-r from-pink-500 via-rose-500 to-cyan-500
                    bg-clip-text text-transparent
                  ">
                    {r.petName}
                  </h2>

                  {/* INFO */}
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">

                    <div>
                      <p className="text-gray-500">Request Date</p>
                      <p className="font-semibold">
                        {new Date(r.requestDate).toDateString()}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500">Pickup Date</p>
                      <p className="font-semibold">{r.pickupDate}</p>
                    </div>

                    <div>
                      <p className="text-gray-500">Status</p>
                      <span className="
                        inline-block px-3 py-1 rounded-full text-xs font-semibold
                        bg-yellow-100 text-yellow-700
                      ">
                        {r.status}
                      </span>
                    </div>

                  </div>

                </div>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-3 mt-6">

                  {/* VIEW */}
                  <button
                    onClick={() => router.push(`/pet/${r.petId}`)}
                    className="
                      flex items-center gap-2
                      px-5 py-2.5
                      rounded-xl
                      bg-gradient-to-r from-pink-500 to-rose-500
                      text-white
                      hover:opacity-90
                      transition-all
                    "
                  >
                    <FaEye />
                    View Details
                  </button>

                  {/* CANCEL */}
                  <button
                    onClick={() => handleCancel(r._id)}
                    className="
                      flex items-center gap-2
                      px-5 py-2.5
                      rounded-xl
                      border border-red-500
                      text-red-500
                      hover:bg-red-500
                      hover:text-white
                      transition-all
                    "
                  >
                    <FaTrash />
                    Cancel
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}