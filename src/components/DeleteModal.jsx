"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaPaw } from "react-icons/fa";

export function DeleteModal({ pet }) {
  const { _id, petName } = pet;
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:2000/allPets/${_id}`, {
        method: "DELETE",
      });

      router.push("/pet");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AlertDialog>
      
      <Button
        className="
      flex items-center justify-center gap-2
       h-11
      bg-gray-100 dark:bg-white/5
      px-14 rounded-xl
      text-sm font-medium
      hover:bg-gray-200 dark:hover:bg-white/10
      transition
    "
      >
        <TrashBin />
        Delete
      </Button>

      <AlertDialog.Backdrop className="backdrop-blur-sm bg-black/40">
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white dark:bg-[#0d1528]">

            <AlertDialog.CloseTrigger />

            {/* HEADER */}
            <AlertDialog.Header className="text-center space-y-2 p-6">
              <div className="flex justify-center text-pink-500 text-3xl">
                <FaPaw />
              </div>

              {/* ❌ NO PINK SPAN HERE */}
              <AlertDialog.Heading className="text-xl font-semibold text-gray-800 dark:text-white">
                Delete <span className="text-gray-900 dark:text-white">{petName}</span>?
              </AlertDialog.Heading>

              <p className="text-sm text-gray-500">
                This action is permanent and cannot be undone
              </p>
            </AlertDialog.Header>

            {/* BODY */}
            <AlertDialog.Body className="text-center text-gray-600 dark:text-gray-300 px-4">
              Once deleted, all pet information will be removed permanently.
            </AlertDialog.Body>

            {/* FOOTER */}
            <AlertDialog.Footer className="flex gap-3 p-4">

              <Button
                slot="close"
                className="
                  flex-1
                  bg-gray-100 dark:bg-white/5
                  rounded-xl py-2 text-sm
                  hover:bg-gray-200 dark:hover:bg-white/10
                  transition
                "
              >
                Cancel
              </Button>

              <Button
                onClick={handleDelete}
                slot="close"
                className="
                  flex-1
                  bg-gray-100 dark:bg-white/5
                  rounded-xl py-2 text-sm
                  text-red-500
                  hover:bg-red-50 dark:hover:bg-red-500/10
                  transition
                "
              >
                <TrashBin />
                Delete
              </Button>

            </AlertDialog.Footer>

          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}