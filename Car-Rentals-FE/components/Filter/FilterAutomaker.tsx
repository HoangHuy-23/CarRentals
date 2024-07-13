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

type Props = {
  automaker: string;
  setAutomaker: (automaker: string) => void;
};

export default function FilterAutomaker({ automaker, setAutomaker }: Props) {
  return (
    <RadioGroup
      value={automaker}
      defaultValue="all"
      onValueChange={(value) => {
        setAutomaker(value);
      }}
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="all" id="r1" />
        <Label htmlFor="r1">Tất cả</Label>
      </div>
      {makers.map((maker) => (
        <div className="flex items-center space-x-2" key={maker.name}>
          <RadioGroupItem value={maker.name} id={maker.name} />
          {/* <Image src={maker.logo} alt="" width={10} height={10} /> */}
          <img src={maker.logo} alt="" className="w-6 h-6" />
          <Label htmlFor="r2">{maker.name}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
