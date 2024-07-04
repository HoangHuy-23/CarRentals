"use client";
import React from "react";
import SearchResultInfo from "./SearchResultInfo";
import SearchResultCard from "./SearchResultCard";
import PaginationSelector from "./PaginationSelector";
import { Car, CarSearchResponse } from "@/types";
import { SearchState } from "@/app/search/page";
import { SelectOptionSort } from "../Filter/SelectOptionSort";

type Props = {
  data?: Car[];
  pagination?: {
    total: number;
    page: number;
    pages: number;
  };
  filters: SearchState;
  onFilterChange: (updatedFilters: Partial<SearchState>) => void;
};

export default function SearchCarResult({
  data,
  pagination,
  filters,
  onFilterChange,
}: Props) {
  if (!data || !pagination || data.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <span className="text-5xl font-bold text-gray-300">Not Found</span>
      </div>
    );
  }
  return (
    <div id="main-content" className="flex flex-col gap-5">
      <div className="flex justify-between flex-col gap-3 sm:flex-row">
        <span className="text-xl font-semibold">
          Founded {pagination.total} cars in {filters.city}
        </span>
        <SelectOptionSort
          sort={filters.sort}
          setSort={(sort) => onFilterChange({ sort })}
        />
      </div>

      {data.map((car) => (
        <SearchResultCard
          car={car}
          isfavourite={false}
          key={car.id}
          myFavourite={false}
        />
      ))}

      <PaginationSelector
        page={pagination.page}
        pages={pagination.pages}
        onPageChange={(page) => onFilterChange({ page })}
      />
    </div>
  );
}
