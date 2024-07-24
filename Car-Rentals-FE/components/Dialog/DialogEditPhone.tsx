"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";
import { Input } from "../ui/input";

import { useUpdateUser } from "@/app/hooks/useUser";
import { User } from "@/types";
import useAuth from "@/app/hooks/useAuth";

export default function DialogEditPhone() {
  const { user } = useAuth();
  const { mutate, isPending, isError } = useUpdateUser();

  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState(user?.phone);

  useEffect(() => {
    if (isOpen) {
      setPhone(user?.phone);
    }
  }, [isOpen, user]);

  const handleSave = () => {
    if (user && user.id !== undefined) {
      const req: User = {
        ...user,
        phone: user.phone,
      };
      mutate(req);
      setIsOpen(false);
    } else {
      console.error("Phone number update error");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="link" className="ml-2 px-1 py-1">
          <Pencil width={16} height={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit phone</DialogTitle>
        </DialogHeader>
        <Input
          id="name"
          placeholder="Input phone"
          className=""
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <DialogFooter>
          <Button
            type="button"
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-300"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
