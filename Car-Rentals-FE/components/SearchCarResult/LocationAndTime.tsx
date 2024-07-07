"use client";
import React, { useState } from "react";
import { DialogLocation } from "../Dialog/DialogLocation";
import { DialogDateTime } from "../Dialog/DialogDateTime";
import { SearchState } from "./ListCarAndFilter";
import { useSearchParams } from "next/navigation";

interface CarFilterProps {
  filters: SearchState;
  onFilterChange: (updatedFilters: Partial<SearchState>) => void;
}

export default function LocationAndTime({
  filters,
  onFilterChange,
}: CarFilterProps) {
  const searchParams = useSearchParams();
  const [pickUpDate, setPickUpDate] = useState(
    new Date(searchParams.get("pickUpDate") as string)
  );
  const [dropOffDate, setDropOffDate] = useState(
    new Date(searchParams.get("dropOffDate") as string)
  );
  return (
    <div className="flex items-center justify-center py-10">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 border rounded-lg p-4">
        <DialogLocation filters={filters} onFilterChange={onFilterChange} />
        <DialogDateTime
          pickUpDate={pickUpDate}
          setPickUpDate={setPickUpDate}
          dropOffDate={dropOffDate}
          setDropOffDate={setDropOffDate}
        />
      </div>
    </div>
  );
}
