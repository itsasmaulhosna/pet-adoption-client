
"use client";

import { useState } from "react";
import {
  TextField,
  Input,
  Label,
  FieldError,
  TextArea,
  Button,
} from "@heroui/react";
import { object } from "better-auth";
import { GiConsoleController } from "react-icons/gi";
import Link from "next/link";

export default function AddPetPage() {
  const [formData, setFormData] = useState({
    ownerEmail: "user@email.com", // replace with real auth user
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const pet = Object.fromEntries(formData.entries());

    console.log(pet);

    const res = await fetch("http://localhost:2000/allPets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet), 
    });

    const data = await res.json();
    console.log(data);
  };



  return (
    <div
      className="
      min-h-screen p-6

      bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-100
      dark:from-[#06142E] dark:via-[#0B1F3A] dark:to-[#10254A]
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
          Add Pet 🐾
        </h1>

        {/* FORM CARD */}
        <form
          onSubmit={onSubmit}
          className="
          p-8 space-y-8

          bg-white/90 dark:bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-3xl
          shadow-2xl
          "
        >

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* PET NAME */}
            <TextField name="petName" isRequired className="md:col-span-2">
              <Label>Pet Name</Label>
              <Input placeholder="e.g. Bruno" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* SPECIES */}
            <TextField name="species" isRequired>
              <Label>Species</Label>
              <Input placeholder="Dog / Cat / Bird" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* BREED */}
            <TextField name="breed">
              <Label>Breed</Label>
              <Input placeholder="Golden Retriever" className="rounded-2xl" />
            </TextField>

            {/* AGE */}
            <TextField name="age">
              <Label>Age</Label>
              <Input type="number" placeholder="2 years" className="rounded-2xl" />
            </TextField>

            {/* GENDER */}
            <TextField name="gender">
              <Label>Gender</Label>
              <Input placeholder="Male / Female" className="rounded-2xl" />
            </TextField>

            {/* IMAGE URL */}
            <TextField name="imageUrl" isRequired className="md:col-span-2">
              <Label>Image URL</Label>
              <Input
                type="url"
                placeholder="https://imgbb.com/your-image"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>

            {/* HEALTH STATUS */}
            <TextField name="healthStatus">
              <Label>Health Status</Label>
              <Input placeholder="Healthy / Minor issue" className="rounded-2xl" />
            </TextField>

            {/* VACCINATION */}
            <TextField name="vaccinationStatus">
              <Label>Vaccination Status</Label>
              <Input placeholder="Fully vaccinated" className="rounded-2xl" />
            </TextField>

            {/* LOCATION */}
            <TextField name="location">
              <Label>Location</Label>
              <Input placeholder="Dhaka, Bangladesh" className="rounded-2xl" />
            </TextField>

            {/* ADOPTION FEE */}
            <TextField name="fee">
              <Label>Adoption Fee</Label>
              <Input type="number" placeholder="5000 BDT" className="rounded-2xl" />
            </TextField>

            {/* OWNER EMAIL (READ ONLY) */}
            <TextField name="ownerEmail" className="md:col-span-2">
              <Label>Owner Email</Label>
              <Input
                value={formData.ownerEmail}
                readOnly
                className="
                  rounded-2xl
                  bg-gray-100 dark:bg-white/5
                  cursor-not-allowed
                "
              />
            </TextField>

            {/* DESCRIPTION */}
            <TextField name="description" className="md:col-span-2">
              <Label>Description</Label>
              <TextArea
                placeholder="Write about the pet..."
                className="rounded-3xl"
              />
            </TextField>

          </div>

          {/* SUBMIT BUTTON */}
          <Button type="submit" className=" w-full py-3 rounded-2xl font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 hover:scale-[1.02] transition-all duration-300 " > Add Pet </Button>


        </form>
      </div>
    </div>
  );
}

