import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  sort: string;
  setSort: (sort: string) => void;
};

export function SelectOptionSort({ sort, setSort }: Props) {
  return (
    <Select
      value={sort}
      onValueChange={(value) => {
        setSort(value);
      }}
      defaultValue="price_low"
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort by</SelectLabel>
          <SelectItem value="price_low">Price Low</SelectItem>
          <SelectItem value="price_high">Price High</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
