"use client";
import { FilterTransmission } from "./FilterTransmission";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Checkbox } from "../ui/checkbox";
import { SelectOptionSort } from "./SelectOptionSort";
import { Button } from "../ui/button";
import FilterAutomaker from "./FilterAutomaker";
import FilterFuel from "./FilterFuel";
import FilterSeats from "./FilterSeats";
import { FilterPrice } from "./FilterPrice";
import { useEffect, useState } from "react";
import { SearchState } from "../SearchCarResult/ListCarAndFilter";

interface CarFilterProps {
  filters: SearchState;
  onFilterChange: (updatedFilters: Partial<SearchState>) => void;
}

export function CarFilter({ filters, onFilterChange }: CarFilterProps) {
  const handleResetAll = () => {
    onFilterChange({
      transmission: "all",
      automaker: "all",
      fuel: "all",
      seat: "all",
      price: 3000000,
      sort: "price_low",
    });
  };
  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <Button
          className="text-blue-500 font-bold bg-white hover:bg-slate-50"
          type="reset"
          onClick={handleResetAll}
        >
          Đặt lại
        </Button>
      </div>

      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Truyền động</AccordionTrigger>
          <AccordionContent>
            <FilterTransmission
              transmission={filters.transmission}
              setTransmission={(transmission) =>
                onFilterChange({ transmission })
              }
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Hãng xe</AccordionTrigger>
          <AccordionContent>
            <FilterAutomaker
              automaker={filters.automaker}
              setAutomaker={(automaker) => onFilterChange({ automaker })}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Nhiên liệu</AccordionTrigger>
          <AccordionContent>
            <FilterFuel
              fuel={filters.fuel}
              setFuel={(fuel) => onFilterChange({ fuel })}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Số chỗ</AccordionTrigger>
          <AccordionContent>
            <FilterSeats
              seat={filters.seat}
              setSeat={(seat) => onFilterChange({ seat })}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Giá</AccordionTrigger>
          <AccordionContent>
            <FilterPrice
              price={filters.price}
              setPrice={(price) => onFilterChange({ price })}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
