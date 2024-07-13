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
import { ArrowDown, ArrowRight, Pencil } from "lucide-react";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Calendar } from "../ui/calendar";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { SelectTime } from "./SelectTime";
import {
  calculateDaysDifference,
  formatDateToString,
  formatDateToStringType1,
  formatDayToString,
  formatTimeToString,
  updateDateWithTime,
} from "@/utils";

type Props = {
  setPickUpDate: (pickUpDate: Date) => void;
  setDropOffDate: (dropOffDate: Date) => void;
};

export default function DialogDateTimeRentBox({
  setPickUpDate,
  setDropOffDate,
}: Props) {
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

  const [startTime, setStartTime] = useState<string>(
    formatTimeToString(pickUpDate)
  );
  const [endTime, setEndTime] = useState<string>(
    formatTimeToString(dropOffDate)
  );

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
      const pick = updateDateWithTime(date.from, startTime);
      const drop = updateDateWithTime(date.to, endTime);
      setDate({ from: pick, to: drop });
      if (date.from < today) {
        setErrorPick(true);
        return;
      }
      if ((date.to.getTime() - date.from.getTime()) / 86400000 < 1) {
        setErrorDrop(true);
        return;
      }
      setPickUpDate(pick);
      setDropOffDate(drop);
      localStorage.setItem("pick-up-date-car", formatDateToString(date.from));
      localStorage.setItem("drop-off-date-car", formatDateToString(date.to));
      setOpen(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="border rounded-md flex cursor-pointer bg-white">
          <div className="flex flex-col p-3 w-full">
            <p className="text-start">Nhận xe</p>
            <div className="flex justify-between">
              <span>{formatDayToString(pickUpDate || new Date())}</span>
              <span>{formatTimeToString(pickUpDate || new Date())}</span>
            </div>
          </div>
          <Separator orientation="vertical" className="" />
          <div className="flex flex-col p-3 w-full">
            <p className="text-start">Trả xe</p>
            <div className="flex justify-between">
              <span>{formatDayToString(dropOffDate || new Date())}</span>
              <span>{formatTimeToString(dropOffDate || new Date())}</span>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[535px]">
        <DialogHeader>
          <DialogTitle className="text-center">Thời gian</DialogTitle>
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
            <span>Số ngày thuê: {daysDifference} ngày</span>
          </div>
          <Button
            type="button"
            className="bg-blue-500 hover:bg-blue-300"
            onClick={handleSave}
          >
            Lưu
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
