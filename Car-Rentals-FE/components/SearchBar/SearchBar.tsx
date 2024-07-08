"use client";
import { useRouter } from "next/navigation";
import { SearchLocation } from "./SearchLocation";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { addHoursAndRoundMinutes, formatDateToString } from "@/utils";
import { SearchDate } from "./SearchDate";

export default function SearchBar() {
  let now = new Date();
  now = addHoursAndRoundMinutes(now, 2);
  let tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);

  const router = useRouter();

  const [location, setLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState(now);
  const [dropOffDate, setDropOffDate] = useState(tomorrow);

  const [errorLocation, setErrorLocation] = useState(false);
  const [errorPick, setErrorPick] = useState(false);
  const [errorDrop, setErrorDrop] = useState(false);

  useEffect(() => {
    now = new Date();
    now = addHoursAndRoundMinutes(now, 2);
    tomorrow.setDate(now.getDate() + 1);
    setPickUpDate(now);
    setDropOffDate(tomorrow);
  }, []);

  const revalidateFrom = () => {
    if (location === "") {
      setErrorLocation(true);
      return false;
    }
    const pick = new Date(pickUpDate);
    const drop = new Date(dropOffDate);
    const today = new Date();
    if (pick < today) {
      setErrorPick(true);
      return false;
    }
    if ((drop.getTime() - pick.getTime()) / 86400000 < 1) {
      setErrorDrop(true);
      return false;
    }
    return true;
  };

  const handleButtonSearch = () => {
    if (revalidateFrom()) {
      router.push(
        `/search?location=${encodeURIComponent(
          location
        )}&pickUpDate=${encodeURIComponent(
          formatDateToString(pickUpDate)
        )}&dropOffDate=${encodeURIComponent(formatDateToString(dropOffDate))}`
      );
      localStorage.setItem("location-car", location);
      localStorage.setItem("pick-up-date-car", formatDateToString(pickUpDate));
      localStorage.setItem(
        "drop-off-date-car",
        formatDateToString(dropOffDate)
      );
    }
  };
  return (
    <div>
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 px-2">
        <h1 className="text-5xl font-bold tracking-tighter text-blue-600">
          Let's find your companion
        </h1>
        <span className="text-xl">Car is just a click away!</span>

        <form
          className="flex items-center justify-center max-md:flex-col w-full relative max-sm:gap-4 gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleButtonSearch();
          }}
        >
          <div className="flex flex-col justify-center items-center max-md:w-full">
            <label
              htmlFor="pickUpDate"
              className="text-gray-500 font-semibold text-sm ml-2 self-start"
            >
              Location
            </label>
            <SearchLocation
              location={location}
              setLocation={setLocation}
              isEmpty={errorLocation}
              setIsEmpty={setErrorLocation}
            />
          </div>
          <div className="flex flex-col justify-center items-center max-md:w-full">
            <label
              htmlFor="pickUpDate"
              className="text-gray-500 font-semibold text-sm ml-2 self-start"
            >
              Pick-up Date
            </label>
            <SearchDate
              pickUpDate={pickUpDate}
              setPickUpDate={setPickUpDate}
              dropOffDate={dropOffDate}
              setDropOffDate={setDropOffDate}
              isPick={true}
            />
          </div>
          <div className="flex flex-col justify-center items-center max-md:w-full">
            <label
              htmlFor="pickUpDate"
              className="text-gray-500 font-semibold text-sm ml-2 self-start"
            >
              Drop-off Date
            </label>
            <SearchDate
              pickUpDate={pickUpDate}
              setPickUpDate={setPickUpDate}
              dropOffDate={dropOffDate}
              setDropOffDate={setDropOffDate}
              isPick={false}
            />
          </div>
          <Button
            type="submit"
            className="bg-blue-500 rounded-lg hover:bg-blue-300 mt-5 h-[40px]"
          >
            Search
          </Button>
        </form>
      </div>
    </div>
  );
}
