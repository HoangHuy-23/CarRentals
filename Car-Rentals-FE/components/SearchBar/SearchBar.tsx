"use client";
import { useRouter } from "next/navigation";
import { SearchLocation } from "./SearchLocation";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

let now = new Date();
let tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);

export default function SearchBar() {
  const router = useRouter();

  const [location, setLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");

  const [errorLocation, setErrorLocation] = useState(false);
  const [errorPick, setErrorPick] = useState(false);
  const [errorDrop, setErrorDrop] = useState(false);

  useEffect(() => {
    now = new Date();
    now.setHours(now.getHours() + 1);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(tomorrow.getHours() + 1);
    setPickUpDate(formatDate(now));
    setDropOffDate(formatDate(tomorrow));
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
          pickUpDate
        )}&dropOffDate=${encodeURIComponent(dropOffDate)}`
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
            <input
              key="pick"
              type="datetime-local"
              name="pickUpDate"
              defaultValue={formatDate(now)}
              className={`w-full h-[40px] p-2 bg-white border-[1px] outline-none rounded-md cursor-pointer text-sm hover:bg-slate-100 font-normal ${
                errorPick ? "border-red-600" : ""
              }`}
              onChange={(e) => {
                const value = e.target.value;
                setPickUpDate(value);
                const pick = new Date(value);
                const today = new Date();
                if (pick < today) {
                  setErrorPick(true);
                } else {
                  setErrorPick(false);
                }
              }}
            />
          </div>
          <div className="flex flex-col justify-center items-center max-md:w-full">
            <label
              htmlFor="pickUpDate"
              className="text-gray-500 font-semibold text-sm ml-2 self-start"
            >
              Drop-off Date
            </label>
            <input
              type="datetime-local"
              name="dropOffDate"
              defaultValue={formatDate(tomorrow)}
              key="drop"
              className={`w-full h-[40px] p-2 bg-white border-[1px] outline-none rounded-md cursor-pointer text-sm hover:bg-slate-100 font-normal ${
                errorDrop ? "border-red-600" : ""
              }`}
              onChange={(e) => {
                const value = e.target.value;
                setDropOffDate(value);
                const pick = new Date(pickUpDate);
                const drop = new Date(value);
                if ((drop.getTime() - pick.getTime()) / 86400000 < 1) {
                  setErrorDrop(true);
                } else {
                  setErrorDrop(false);
                }
              }}
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
