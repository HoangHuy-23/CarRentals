"use client";

import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

type Props = {
  price: number;
  setPrice: (price: number) => void;
};
export function FilterPrice({ price, setPrice }: Props) {
  const [value, setValue] = useState(3000);

  return (
    <div className="flex flex-col gap-3 py-2">
      <Slider
        value={[price]}
        defaultValue={[3000]}
        min={500}
        max={3000}
        step={500}
        className={cn("w-[100%]")}
        onValueChange={(val) => {
          setValue(val[0]);
          setPrice(val[0]);
        }}
      />
      <span className="border rounded-sm px-2 py-2">
        From under {price.toLocaleString()}k/day
      </span>
    </div>
  );
}
