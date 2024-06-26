import { CarFilter } from "@/components/Filter/CarFilter";
import LocationDate from "@/components/Search/LocationDate";
import SearchCarResult from "@/components/SearchCarResult/SearchCarResult";

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
      <LocationDate />
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-5">
        <div id="filter-list" className="">
          <CarFilter />
        </div>
        <SearchCarResult data={cars} />
      </div>
    </div>
  );
}
