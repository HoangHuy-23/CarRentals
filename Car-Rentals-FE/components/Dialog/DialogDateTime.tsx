"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  calculateDaysDifference,
  formatDate,
  formatDateToString,
  formatDateToStringType1,
  formatTimeToString,
  updateDateWithTime,
} from "@/utils";
import { ArrowDown, ArrowRight, CalendarRange } from "lucide-react";
import { useEffect, useState } from "react";
import { Calendar } from "../ui/calendar";
import { SelectTime } from "./SelectTime";
import { DateRange } from "react-day-picker";

type Props = {
  pickUpDate: Date;
  setPickUpDate: (pickUpDate: Date) => void;
  dropOffDate: Date;
  setDropOffDate: (dropOffDate: Date) => void;
};

export function DialogDateTime({ setPickUpDate, setDropOffDate }: Props) {
  const getStoredDate = (key: string) => {
    const dateStr = localStorage.getItem(key);
    return dateStr ? new Date(dateStr) : new Date();
  };
  const pickUpDate = new Date(getStoredDate("pick-up-date-car"));
  const dropOffDate = new Date(getStoredDate("drop-off-date-car"));
  const [date, setDate] = useState<DateRange | undefined>({
    from: pickUpDate,
    to: dropOffDate,
  });

  const [startTime, setStartTime] = useState(formatTimeToString(pickUpDate));
  const [endTime, setEndTime] = useState(formatTimeToString(dropOffDate));

  const [daysDifference, setDaysDifference] = useState(
    calculateDaysDifference(pickUpDate, dropOffDate)
  );

  const [errorPick, setErrorPick] = useState(false);
  const [errorDrop, setErrorDrop] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (date?.from && date?.to) {
      const pick = updateDateWithTime(date.from, startTime);
      const drop = updateDateWithTime(date.to, endTime);
      setDate({ from: pick, to: drop });
      setDaysDifference(calculateDaysDifference(date.from, date.to));
    }
  }, [date?.from, date?.to, startTime, endTime]);

  const handleSave = () => {
    const today = new Date();
    if (date?.from && date?.to) {
      updateDateWithTime(date.from, startTime);
      updateDateWithTime(date.to, endTime);
      if (date.from < today) {
        setErrorPick(true);
        return;
      }
      if ((date.to.getTime() - date.from.getTime()) / 86400000 < 1) {
        setErrorDrop(true);
        return;
      }
      setPickUpDate(date.from);
      setDropOffDate(date.to);
      localStorage.setItem("pick-up-date-car", formatDateToString(date.from));
      localStorage.setItem("drop-off-date-car", formatDateToString(date.to));
      setOpen(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <CalendarRange className="float-start mr-2" />{" "}
          {formatDate(pickUpDate)} - {formatDate(dropOffDate)}
        </Button>
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
          <SelectTime time={startTime} setTime={setStartTime} />
          <ArrowRight className="sm:block hidden m-2 rounded-full border p-1" />
          <ArrowDown className="block sm:hidden m-2 rounded-full border p-1" />
          <SelectTime time={endTime} setTime={setEndTime} />
        </div>
        <DialogFooter className="sm:justify-between sm:flex-row flex-col gap-2 items-center">
          <div className="flex flex-col text-sm">
            <span>
              {formatDateToStringType1(date?.from || new Date())} -{" "}
              {formatDateToStringType1(date?.to || new Date())}
            </span>
            <span>So ngay thue: {daysDifference} ngay</span>
          </div>
          <Button
            type="button"
            className="bg-blue-500 hover:bg-blue-300"
            onClick={handleSave}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
