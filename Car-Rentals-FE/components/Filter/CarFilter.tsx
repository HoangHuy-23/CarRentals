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
import { FilterFuelConsumption } from "./FilterFuelConsumption";

export function CarFilter() {
  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <Button
          className="text-blue-500 font-bold bg-white hover:bg-slate-50"
          type="reset"
        >
          Reset all
        </Button>
        <div className="flex justify-between flex-col gap-3 lg:flex-row">
          <SelectOptionSort />
        </div>
      </div>

      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Transmission</AccordionTrigger>
          <AccordionContent>
            <FilterTransmission />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Automaker</AccordionTrigger>
          <AccordionContent>
            <FilterAutomaker />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Fuel</AccordionTrigger>
          <AccordionContent>
            <FilterFuel />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Number of seats</AccordionTrigger>
          <AccordionContent>
            <FilterSeats />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
            <FilterFuelConsumption />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
