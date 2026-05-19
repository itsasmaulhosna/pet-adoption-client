
"use client";

export default function LoadingSpinner() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">

        <span className="
          w-14 h-14
          border-4 border-pink-500
          border-t-transparent
          rounded-full
          animate-spin
        " />

        <p className="text-gray-500 text-lg">
          Loading pets...
        </p>

      </div>
    </div>
  );
}

