"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const seats = [
  {
    id: "5",
    name: "5 seats",
  },
  {
    id: "7",
    name: "7 seats",
  },
];

type Props = {
  seat: string;
  setSeat: (seats: string) => void;
};

export default function FilterSeats({ seat, setSeat }: Props) {
  return (
    <RadioGroup
      value={seat}
      defaultValue="all"
      onValueChange={(value) => {
        setSeat(value);
      }}
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="all" id="r1" />
        <Label htmlFor="r1">All</Label>
      </div>
      {seats.map((seat) => (
        <div className="flex items-center space-x-2" key={seat.id}>
          <RadioGroupItem value={seat.id} id={seat.id} />
          <Label htmlFor="r2">{seat.name}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
