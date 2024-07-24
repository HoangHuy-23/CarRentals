"use client";
import { useRouter } from "next/navigation";
import { SearchLocation } from "./SearchLocation";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { addHoursAndRoundMinutes, formatDateToString } from "@/utils";
import { SearchDate } from "./SearchDate";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import {
  setEndDate,
  setLocation,
  setStartDate,
} from "@/redux/reducer/bookingSlice";

export default function SearchBar() {
  let now = new Date();
  now = addHoursAndRoundMinutes(now, 2);
  let tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  //const { location, startDate, endDate } = useSelector((state: RootState) => state.booking);

  const [city, setCity] = useState("");
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
    if (city === "") {
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
          city
        )}&pickUpDate=${encodeURIComponent(
          formatDateToString(pickUpDate)
        )}&dropOffDate=${encodeURIComponent(formatDateToString(dropOffDate))}`
      );
      localStorage.setItem("location-car", city);
      dispatch(setLocation(city));
      localStorage.setItem("pick-up-date-car", formatDateToString(pickUpDate));
      dispatch(setStartDate(formatDateToString(pickUpDate)));
      localStorage.setItem(
        "drop-off-date-car",
        formatDateToString(dropOffDate)
      );
      dispatch(setEndDate(formatDateToString(dropOffDate)));
    }
  };
  return (
    <div>
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 px-2">
        <h1 className="text-5xl font-bold tracking-tighter text-blue-600">
          Hãy tìm bạn đồng hành của bạn
        </h1>
        <span className="text-xl">Một chuyến đi tuyệt vời sắp đến rồi!</span>

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
              Địa điểm
            </label>
            <SearchLocation
              location={city}
              setLocation={setCity}
              isEmpty={errorLocation}
              setIsEmpty={setErrorLocation}
            />
          </div>
          <div className="flex flex-col justify-center items-center max-md:w-full">
            <label
              htmlFor="pickUpDate"
              className="text-gray-500 font-semibold text-sm ml-2 self-start"
            >
              Nhận xe
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
              Trả xe
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
            Tìm kiếm
          </Button>
        </form>
      </div>
    </div>
  );
}
