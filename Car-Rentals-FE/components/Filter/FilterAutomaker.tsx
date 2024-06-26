"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

const makers = [
  {
    name: "Toyota",
    logo: "https://image.similarpng.com/very-thumbnail/2020/09/Toyota-logo-icon-on-transparent--PNG.png",
  },
];

export default function FilterAutomaker() {
  return (
    <RadioGroup defaultValue="all">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="all" id="r1" />
        <Label htmlFor="r1">All</Label>
      </div>
      {makers.map((maker) => (
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={maker.name} id={maker.name} />
          {/* <Image src={maker.logo} alt="" width={10} height={10} /> */}
          <img src={maker.logo} alt="" className="w-6 h-6" />
          <Label htmlFor="r2">{maker.name}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
