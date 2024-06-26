"use client";
import { CalendarRange, MapPin } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function LocationDate() {
  const searchParams = useSearchParams();

  const location = searchParams.get("location");
  const pickUpDate = searchParams.get("pickUpDate");
  const dropOffDate = searchParams.get("dropOffDate");
  return (
    <div className="flex flex-row justify-center items-center gap-5 mb-10">
      <span>
        <MapPin className="float-start mr-2" /> {location}
      </span>
      <span>
        <CalendarRange className="float-start mr-2" /> {pickUpDate} -{" "}
        {dropOffDate}
      </span>
    </div>
  );
}
