"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";

const frameworks = [
  {
    value: "Ha Noi",
    label: "Ha Noi",
  },
  {
    value: "TP. Ho Chi Minh",
    label: "TP. Ho Chi Minh",
  },
  {
    value: "Da Nang",
    label: "Da Nang",
  },
  {
    value: "Can Tho",
    label: "Can Tho",
  },
  {
    value: "astro",
    label: "Phu Quoc",
  },
];

type Props = {
  location: string;
  setLocation: (location: string) => void;
  isEmpty: boolean;
  setIsEmpty: (isEmpty: boolean) => void;
};

export function SearchLocation({
  location,
  setLocation,
  isEmpty,
  setIsEmpty,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(location);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-full min-w-52 h-[40px] justify-between text-sm font-normal ${
            isEmpty ? "border-red-500" : ""
          }`}
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Chọn địa điểm của bạn"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Tìm địa điểm..." className="h-9 text-sm" />
          <CommandList>
            <CommandEmpty>Không tìm thấy địa điểm.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    setLocation(framework.label);
                    setIsEmpty(false);
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
