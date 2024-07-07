import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { ArrowDown, ArrowRight, Pencil } from "lucide-react";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Calendar } from "../ui/calendar";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { SelectTime } from "./SelectTime";
import {
  formatDateToStringType1,
  formatDayToString,
  formatTimeToString,
} from "@/utils";

type Props = {
  pickUpDate: Date;
  setPickUpDate: (pickUpDate: Date) => void;
  dropOffDate: Date;
  setDropOffDate: (dropOffDate: Date) => void;
};

export default function DialogDateTimeRentBox({
  pickUpDate,
  setPickUpDate,
  dropOffDate,
  setDropOffDate,
}: Props) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: pickUpDate,
    to: dropOffDate,
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border rounded-md flex cursor-pointer bg-white">
          <div className="flex flex-col p-3 w-full">
            <p className="text-start">Nhan xe</p>
            <div className="flex justify-between">
              <span>{formatDayToString(date?.from || new Date())}</span>
              <span>{formatTimeToString(date?.from || new Date())}</span>
            </div>
          </div>
          <Separator orientation="vertical" className="" />
          <div className="flex flex-col p-3 w-full">
            <p className="text-start">Tra xe</p>
            <div className="flex justify-between">
              <span>{formatDayToString(date?.to || new Date())}</span>
              <span>{formatTimeToString(date?.to || new Date())}</span>
            </div>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[535px]">
        <DialogHeader>
          <DialogTitle className="text-center">Time</DialogTitle>
        </DialogHeader>
        <div id="date" className="flex items-center justify-center">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </div>
        <div
          id="time"
          className="flex justify-between items-center flex-col sm:flex-row w-full"
        >
          <SelectTime date={pickUpDate} setDate={setPickUpDate} />
          <ArrowRight className="sm:block hidden m-2 rounded-full border p-1" />
          <ArrowDown className="block sm:hidden m-2 rounded-full border p-1" />
          <SelectTime date={dropOffDate} setDate={setDropOffDate} />
        </div>
        <DialogFooter className="sm:justify-between sm:flex-row flex-col gap-2 items-center">
          <div className="flex flex-col text-sm">
            <span>
              {formatDateToStringType1(date?.from || new Date())} -{" "}
              {formatDateToStringType1(date?.to || new Date())}
            </span>
            <span>So ngay thue: 26 ngay</span>
          </div>
          <Button type="submit" className="bg-blue-500 hover:bg-blue-300">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
