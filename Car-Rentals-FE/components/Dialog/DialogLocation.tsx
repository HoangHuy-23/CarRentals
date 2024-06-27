"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";
import { SearchLocation } from "../SearchBar/SearchLocation";
import { useState } from "react";
import { SearchState } from "@/app/search/page";

type Props = {
  filters: SearchState;
  onFilterChange: (updatedFilters: Partial<SearchState>) => void;
};

export function DialogLocation({ filters, onFilterChange }: Props) {
  const [isEmpty, setIsEmpty] = useState(false);
  const [city, setCity] = useState("");
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    if (city === "") {
      setIsEmpty(true);
      return;
    }
    setOpen(false);
    setCity("");
    setIsEmpty(false);
    onFilterChange({ city });
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <MapPin className="float-start mr-2" /> {filters.city}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit location</DialogTitle>
          <DialogDescription>
            Make changes to your location here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Location
            </Label>
            <SearchLocation
              isEmpty={isEmpty}
              setIsEmpty={setIsEmpty}
              location={city}
              setLocation={setCity}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSave}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
