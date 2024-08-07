"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatTimeToString } from "@/utils";
import { useState } from "react";

const generateTimeOptions = () => {
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      times.push(
        <SelectItem key={timeString} value={timeString}>
          {timeString}
        </SelectItem>
      );
    }
  }
  return times;
};

const getTimeString = (date: Date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${hour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}`;
};

type Props = {
  time: string;
  setTime: (time: string) => void;
};

export function SelectTime({ time, setTime }: Props) {
  return (
    <Select
      defaultValue="00:00"
      value={time}
      onValueChange={(e) => {
        setTime(e);
      }}
    >
      <SelectTrigger className="w-[215px]">
        <SelectValue placeholder="Select a time" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>{generateTimeOptions()}</SelectGroup>
      </SelectContent>
    </Select>
  );
}
