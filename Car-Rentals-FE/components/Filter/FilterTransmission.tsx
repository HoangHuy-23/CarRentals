"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const transmissions = [
  {
    id: "MANUAL",
    name: "Số sàn",
  },
  {
    id: "AUTOMATIC",
    name: "Số tự động",
  },
];

type Props = {
  transmission: string;
  setTransmission: (transmission: string) => void;
};

export function FilterTransmission({ transmission, setTransmission }: Props) {
  return (
    <RadioGroup
      value={transmission}
      defaultValue="all"
      onValueChange={(value) => {
        setTransmission(value);
      }}
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="all" id="all" />
        <Label htmlFor="all">Tất cả</Label>
      </div>
      {transmissions.map((transmission) => (
        <div className="flex items-center space-x-2" key={transmission.id}>
          <RadioGroupItem value={transmission.id} id={transmission.id} />
          <Label htmlFor={transmission.id}>{transmission.name}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
