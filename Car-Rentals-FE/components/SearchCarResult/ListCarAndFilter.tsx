"use client";
import { searchCar } from "@/app/actions/CarAction";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CarFilter } from "../Filter/CarFilter";
import SearchCarResult from "./SearchCarResult";
import LocationAndTime from "./LocationAndTime";

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
  price: 3000000,
  seat: "all",
  sort: "price_low",
};

export default function ListCarAndFilter() {
  const searchParams = useSearchParams();
  const location = searchParams.get("location") || "";

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
    <div>
      <LocationAndTime
        filters={searchState}
        onFilterChange={handleFilterChange}
      />
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
