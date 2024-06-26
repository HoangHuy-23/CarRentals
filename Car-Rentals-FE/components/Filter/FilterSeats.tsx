"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const seats = [
  {
    id: "4",
    name: "4 seats",
  },
  {
    id: "7",
    name: "7 seats",
  },
];

export default function FilterSeats() {
  return (
    <RadioGroup defaultValue="all">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="all" id="r1" />
        <Label htmlFor="r1">All</Label>
      </div>
      {seats.map((seat) => (
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={seat.id} id={seat.id} />
          <Label htmlFor="r2">{seat.name}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
