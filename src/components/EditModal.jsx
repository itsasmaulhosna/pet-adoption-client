
"use client";

import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextArea, TextField} from "@heroui/react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";

export function EditModal({pet}) {
const { _id,petName,imageUrl,species,gender,breed,age,location,fee,healthStatus,vaccinationStatus,ownerEmail,description} = pet;
    const [loading, setLoading] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const pet = Object.fromEntries(formData.entries());
    
        // include owner email
        pet.ownerEmail = "user@email.com";
    
        try {
          setLoading(true);
    
          const res = await fetch(`http://localhost:2000/allPets/${_id}`, {
            method: "PATCH",
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
    <Modal>
      
            <Modal.Trigger>
    <button
      className="
        flex items-center gap-2
        px-5 py-2 rounded-full
        bg-gradient-to-r from-cyan-500 to-blue-600
        text-white font-semibold
        hover:scale-105 transition
        shadow-lg
      "
    >
      <FaEdit />
      Edit Pet Info
    </button>
  </Modal.Trigger>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaEdit  className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Pet Information</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                          onSubmit={onSubmit}
                          className="p-8 space-y-8 bg-white/90 dark:bg-white/10 backdrop-blur-xl border rounded-3xl shadow-2xl"
                        >
                
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                            <TextField defaultValue={petName} name="petName" isRequired className="md:col-span-2">
                              <Label>Pet Name</Label>
                              <Input placeholder="e.g. Bruno" />
                            </TextField>
                
                            <TextField defaultValue={species} name="species" isRequired>
                              <Label>Species</Label>
                              <Input placeholder="Dog / Cat / Bird" />
                            </TextField>
                
                            <TextField defaultValue={breed} name="breed">
                              <Label>Breed</Label>
                              <Input placeholder="Golden Retriever" />
                            </TextField>
                
                            <TextField defaultValue={age} name="age">
                              <Label>Age</Label>
                              <Input type="number" />
                            </TextField>
                
                            <TextField defaultValue={gender} name="gender">
                              <Label>Gender</Label>
                              <Input />
                            </TextField>
                
                            <TextField defaultValue={imageUrl} name="imageUrl" isRequired className="md:col-span-2">
                              <Label>Image URL</Label>
                              <Input type="url" />
                            </TextField>
                
                            <TextField defaultValue={healthStatus} name="healthStatus">
                              <Label>Health Status</Label>
                              <Input />
                            </TextField>
                
                            <TextField defaultValue={vaccinationStatus} name="vaccinationStatus">
                              <Label>Vaccination Status</Label>
                              <Input />
                            </TextField>
                
                            <TextField defaultValue={location} name="location">
                              <Label>Location</Label>
                              <Input />
                            </TextField>
                
                            <TextField defaultValue={fee} name="fee">
                              <Label>Adoption Fee</Label>
                              <Input type="number" />
                            </TextField>
                
                            <TextField defaultValue={description} name="description" className="md:col-span-2">
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
                    "Edit Pet"
                  )}
                </Button>
                
                        </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
} 