import React from "react";
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

export default function DialogEditEmail() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="ml-2 px-1 py-1">
          <Pencil width={16} height={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit email</DialogTitle>
        </DialogHeader>
        <Input id="name" placeholder="Input email" className="" />
        <DialogFooter>
          <Button type="submit" className="bg-blue-500 hover:bg-blue-300">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
