"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatDate, formatDateToString } from "@/utils";
import { CalendarRange } from "lucide-react";
import { useState } from "react";

type Props = {
  pickUpDate: Date;
  setPickUpDate: (pickUpDate: Date) => void;
  dropOffDate: Date;
  setDropOffDate: (dropOffDate: Date) => void;
};

export function DialogDateTime({
  pickUpDate,
  setPickUpDate,
  dropOffDate,
  setDropOffDate,
}: Props) {
  const [pickDate, setPickDate] = useState(pickUpDate);
  const [dropDate, setDropDate] = useState(dropOffDate);

  const [errorPick, setErrorPick] = useState(false);
  const [errorDrop, setErrorDrop] = useState(false);

  const [open, setOpen] = useState(false);

  const handleSave = () => {
    const today = new Date();

    if (pickDate < today) {
      setErrorPick(true);
      return;
    }
    if ((dropDate.getTime() - pickDate.getTime()) / 86400000 < 1) {
      setErrorDrop(true);
      return;
    }
    setPickUpDate(pickDate);
    setDropOffDate(dropDate);
    localStorage.setItem("pick-up-date-car", formatDateToString(pickDate));
    localStorage.setItem("drop-off-date-car", formatDateToString(dropDate));
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <CalendarRange className="float-start mr-2" />{" "}
          {formatDate(pickUpDate)} - {formatDate(dropOffDate)}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit date</DialogTitle>
          <DialogDescription>
            Make changes to your date here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-5 items-center  gap-4">
            <Label htmlFor="pick" className="text-right col-span-2">
              Pick-up Date
            </Label>
            <Input
              id="pick"
              type="datetime-local"
              defaultValue={formatDateToString(pickDate)}
              className={`w-full col-span-3 h-[40px] p-2 bg-white border-[1px] outline-none rounded-md cursor-pointer text-sm hover:bg-slate-100 font-normal ${
                errorPick ? "border-red-600" : ""
              }`}
              onChange={(e) => {
                const value = e.target.value;
                setPickDate(new Date(value));
                const pick = new Date(value);
                const today = new Date();
                if (pick < today) {
                  setErrorPick(true);
                } else {
                  setErrorPick(false);
                }
              }}
            />
          </div>
          <div className="grid grid-cols-5 justify-start gap-4">
            <Label htmlFor="drop" className="text-right col-span-2">
              Drop-off Date
            </Label>
            <Input
              id="drop"
              type="datetime-local"
              defaultValue={formatDateToString(dropDate)}
              className={`w-full col-span-3 h-[40px] p-2 bg-white border-[1px] outline-none rounded-md cursor-pointer text-sm hover:bg-slate-100 font-normal ${
                errorDrop ? "border-red-600" : ""
              }`}
              onChange={(e) => {
                const value = e.target.value;
                setDropDate(new Date(value));
                const pick = new Date(pickUpDate);
                const drop = new Date(value);
                if ((drop.getTime() - pick.getTime()) / 86400000 < 1) {
                  setErrorDrop(true);
                } else {
                  setErrorDrop(false);
                }
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
