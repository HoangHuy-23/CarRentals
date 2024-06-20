"use client";

import { CarFilter } from "@/components/CarFilter";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import { SelectOptionSort } from "@/components/SelectOptionSort";
import { CalendarRange, MapPin } from "lucide-react";

const cars = [
  {
    id: 1,
    licensePlate: "",
    company: "Toyota",
    model: "Corolla",
    seats: 4,
    yearOfProduct: 2020,
    transmission: "Automatic",
    fuel: "GAS",
    fuelConsumption: 7,
    description: "sdskjdsjdsdsdsd",
    price: 755,
    address: {
      city: "Tp. Ho Chi Minh",
      district: "Go Vap",
      ward: "P4",
      addressMap: "P4, Go Vap, Tp. Ho Chi Minh",
    },
    terms: "no drunk",
    image: [
      {
        id: 2,
        url: "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/honda_civic_rs_2024/p/g/2024/05/03/03/J21nLm_CG_5Yhmw99_rsPA.jpg",
      },
    ],
    numOfTrip: 2,
    status: "string",
  },
  {
    id: 2,
    licensePlate: "",
    company: "BWM",
    model: "320i",
    seats: 4,
    yearOfProduct: 2020,
    transmission: "Automatic",
    fuel: "GAS",
    fuelConsumption: 7,
    description: "sdskjdsjdsdsdsd",
    price: 1.355,
    address: {
      city: "Tp. Ho Chi Minh",
      district: "Go Vap",
      ward: "P4",
      addressMap: "P4, Go Vap, Tp. Ho Chi Minh",
    },
    terms: "no drunk",
    image: [
      {
        id: 2,
        url: "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/bmw_320i__2013/p/g/2023/02/24/16/3tzuvcW_2ym0eCuolXVKyw.jpg",
      },
    ],
    numOfTrip: 2,
    status: "string",
  },
];

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedCuisines: string[];
  sortOption: string;
};

export default function page() {
  return (
    <div className="container mx-auto flex-1 py-10">
      <div className="flex flex-row justify-center items-center gap-5 mb-10">
        <span>
          <MapPin className="float-start mr-2" /> Tp.Ho Chi Minh
        </span>
        <span>
          <CalendarRange className="float-start mr-2" /> 21:00, 19/06/2024 -
          20:00, 20/06/2024
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-5">
        <div id="filter-list" className="">
          <CarFilter />
        </div>
        <div id="main-content" className="flex flex-col gap-5">
          <div className="w-full flex justify-between">
            <SearchResultInfo total={10} city="Tp.Ho Chi Minh" />
            <div className="flex justify-between flex-col gap-3 lg:flex-row">
              <SelectOptionSort />
            </div>
          </div>
          {cars.map((car) => (
            <SearchResultCard car={car} isfavourite={false} key={car.id} />
          ))}

          <div>Search result</div>
          <div>Pagination</div>
        </div>
      </div>
    </div>
  );
}
