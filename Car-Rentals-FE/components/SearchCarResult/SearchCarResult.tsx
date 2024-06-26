"use client";
import React from "react";
import SearchResultInfo from "./SearchResultInfo";
import SearchResultCard from "./SearchResultCard";
import PaginationSelector from "./PaginationSelector";
import { Car } from "@/types";

type Props = {
  data: Car[];
};

export default function SearchCarResult(props: Props) {
  return (
    <div id="main-content" className="flex flex-col gap-5">
      {props.data.map((car) => (
        <SearchResultCard car={car} isfavourite={false} key={car.id} />
      ))}

      <PaginationSelector page={1} pages={1} onPageChange={() => {}} />
    </div>
  );
}
