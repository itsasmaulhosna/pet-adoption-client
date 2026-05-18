
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import {
  TextField,
  Input,
  Label,
  FieldError,
  TextArea,
  Button,
} from "@heroui/react";

export default function AddPetPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const pet = Object.fromEntries(formData.entries());

    // include owner email
    pet.ownerEmail = "user@email.com";

    try {
      setLoading(true);

      const res = await fetch("http://localhost:2000/allPets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pet),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Something went wrong");
      }

      toast.success("Pet added successfully 🐾");

      e.target.reset();

      setTimeout(() => {
        router.push("/pet");
      }, 4000);

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-100 dark:from-[#06142E] dark:via-[#0B1F3A] dark:to-[#10254A]">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
          Add Pet 🐾
        </h1>

        <form
          onSubmit={onSubmit}
          className="p-8 space-y-8 bg-white/90 dark:bg-white/10 backdrop-blur-xl border rounded-3xl shadow-2xl"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <TextField name="petName" isRequired className="md:col-span-2">
              <Label>Pet Name</Label>
              <Input placeholder="e.g. Bruno" />
            </TextField>

            <TextField name="species" isRequired>
              <Label>Species</Label>
              <Input placeholder="Dog / Cat / Bird" />
            </TextField>

            <TextField name="breed">
              <Label>Breed</Label>
              <Input placeholder="Golden Retriever" />
            </TextField>

            <TextField name="age">
              <Label>Age</Label>
              <Input type="number" />
            </TextField>

            <TextField name="gender">
              <Label>Gender</Label>
              <Input />
            </TextField>

            <TextField name="imageUrl" isRequired className="md:col-span-2">
              <Label>Image URL</Label>
              <Input type="url" />
            </TextField>

            <TextField name="healthStatus">
              <Label>Health Status</Label>
              <Input />
            </TextField>

            <TextField name="vaccinationStatus">
              <Label>Vaccination Status</Label>
              <Input />
            </TextField>

            <TextField name="location">
              <Label>Location</Label>
              <Input />
            </TextField>

            <TextField name="fee">
              <Label>Adoption Fee</Label>
              <Input type="number" />
            </TextField>

            <TextField name="description" className="md:col-span-2">
              <Label>Description</Label>
              <TextArea />
            </TextField>

          </div>

          <Button
  type="submit"
  disabled={loading}
  className={`
    w-full py-3 rounded-2xl font-bold text-white
    bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700
    transition-all duration-300
    flex items-center justify-center gap-2
    ${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02]"}
  `}
>
  {loading ? (
    <>
      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      Adding Pet...
    </>
  ) : (
    "Add Pet"
  )}
</Button>

        </form>
      </div>
    </div>
  );
}

