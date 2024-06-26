"use client";

import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export function FilterFuelConsumption() {
  const [value, setValue] = useState(500);

  return (
    <div className="flex flex-col gap-3 py-2">
      <Slider
        defaultValue={[500]}
        min={500}
        max={3000}
        step={500}
        className={cn("w-[100%]")}
        onValueChange={(val) => setValue(val[0])}
      />
      <span className="border rounded-sm px-2 py-2">
        From under {value.toLocaleString()}k/day
      </span>
    </div>
  );
}
