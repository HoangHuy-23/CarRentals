"use client";

import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { formatPriceToK } from "@/utils";

type Props = {
  price: number;
  setPrice: (price: number) => void;
};
export function FilterPrice({ price, setPrice }: Props) {
  const [value, setValue] = useState(3000000);

  return (
    <div className="flex flex-col gap-3 py-2">
      <Slider
        value={[price]}
        defaultValue={[3000000]}
        min={500000}
        max={3000000}
        step={500000}
        className={cn("w-[100%]")}
        onValueChange={(val) => {
          setValue(val[0]);
          setPrice(val[0]);
        }}
      />
      <span className="border rounded-sm px-2 py-2">
        From under {formatPriceToK(value)}/day
      </span>
    </div>
  );
}
