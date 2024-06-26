"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function FilterTransmission() {
  return (
    <RadioGroup defaultValue="all">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="all" id="r1" />
        <Label htmlFor="r1">All</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="manual" id="r2" />
        <Label htmlFor="r2">Manual</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="automatic" id="r3" />
        <Label htmlFor="r3">Automatic</Label>
      </div>
    </RadioGroup>
  );
}
