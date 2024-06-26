"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const fuels = [
  {
    name: "GAS",
  },
  {
    name: "Electric",
  },
];

export default function FilterFuel() {
  return (
    <RadioGroup defaultValue="all">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="all" id="r1" />
        <Label htmlFor="r1">All</Label>
      </div>
      {fuels.map((fuel) => (
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={fuel.name} id={fuel.name} />
          <Label htmlFor="r2">{fuel.name}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
