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
          <SelectLabel>Sắp xếp theo</SelectLabel>
          <SelectItem value="price_low">Giá tăng dần</SelectItem>
          <SelectItem value="price_high">Giá giảm dần</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
