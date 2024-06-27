"use client";

import { CarFilter } from "@/components/Filter/CarFilter";
import SearchCarResult from "@/components/SearchCarResult/SearchCarResult";
import { useMutation, useQuery } from "@tanstack/react-query";
import { searchCar } from "../actions/CarAction";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CalendarRange } from "lucide-react";
import { DialogLocation } from "@/components/Dialog/DialogLocation";
import { DialogDateTime } from "@/components/Dialog/DialogDateTime";

export type SearchState = {
  page: number;
  city: string;
  automaker: string;
  fuel: string;
  transmission: string;
  price: number;
  seat: string;
  sort: string;
};

const initialSearchState: SearchState = {
  page: 1,
  city: "",
  automaker: "all",
  fuel: "all",
  transmission: "all",
  price: 3000,
  seat: "all",
  sort: "price_low",
};

export default function page() {
  const searchParams = useSearchParams();
  const location = searchParams.get("location") || "";

  const pickUpDate = new Date(searchParams.get("pickUpDate") as string);
  const dropOffDate = new Date(searchParams.get("dropOffDate") as string);

  const [searchState, setSearchState] = useState<SearchState>({
    ...initialSearchState,
    city: location,
  });

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["searchCar", searchState],
    queryFn: () => searchCar(searchState),
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, [searchState, refetch]);

  const handleFilterChange = (updatedFilters: Partial<SearchState>) => {
    setSearchState((prevState) => ({
      ...prevState,
      ...updatedFilters,
    }));
  };

  return (
    <div className="container mx-auto flex-1 py-10">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-10">
        <DialogLocation
          filters={searchState}
          onFilterChange={handleFilterChange}
        />
        <DialogDateTime pickUpDate={pickUpDate} dropOffDate={dropOffDate} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-5">
        <div id="filter-list" className="">
          <CarFilter
            filters={searchState}
            onFilterChange={handleFilterChange}
          />
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <SearchCarResult
            data={data?.data}
            pagination={data?.pagination}
            filters={searchState}
            onFilterChange={handleFilterChange}
          />
        )}
      </div>
    </div>
  );
}
