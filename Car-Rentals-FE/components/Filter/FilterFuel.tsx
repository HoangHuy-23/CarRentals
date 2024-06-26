"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const fuels = [
  {
    id: "GAS",
    name: "Gas",
  },
  {
    id: "ELECTRIC",
    name: "Electric",
  },
];

type Props = {
  fuel: string;
  setFuel: (fuel: string) => void;
};

export default function FilterFuel({ fuel, setFuel }: Props) {
  return (
    <RadioGroup
      value={fuel}
      defaultValue="all"
      onValueChange={(value) => {
        setFuel(value);
      }}
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="all" id="all" />
        <Label htmlFor="all">All</Label>
      </div>
      {fuels.map((fuel) => (
        <div className="flex items-center space-x-2" key={fuel.id}>
          <RadioGroupItem value={fuel.id} id={fuel.id} />
          <Label htmlFor={fuel.id}>{fuel.name}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
