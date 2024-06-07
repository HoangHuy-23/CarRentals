"use client";
import Image from "next/image";
import React, { useState } from "react";
import SearchLocation from "./SearchLocation";
import Selector from "./Selector";
import DateTimePicker from "./DateTimePicker";

const SearchBar = () => {
  const [pickUpDate, setPickUpDate] = useState("");
  function handleChangePickUpDate(ev: any) {
    if (!ev.target["validity"].valid) return;
    const dt = ev.target["value"] + ":00Z";
    setPickUpDate(dt);
  }
  const [dropOffDate, setDropOffDate] = useState("");
  function handleChangeDropOffDate(ev: any) {
    if (!ev.target["validity"].valid) return;
    const dt = ev.target["value"] + ":00Z";
    setDropOffDate(dt);
  }
  const [location, setLocation] = useState("");
  return (
    <div className="max-width padding-x pt-24 relative">
      <div className="w-full bg-blue-100 rounded-xl flex justify-center relative">
        <form action="" className="searchbar flex gap-5 mx-6 mt-2 mb-6">
          <div className="searchbar__item relative">
            <label className="searchbar__item-title" htmlFor="">
              Location
            </label>
            <SearchLocation selected={location} setSelected={setLocation} />
          </div>
          <div className="searchbar__item">
            <label className="searchbar__item-title" htmlFor="pickupdate">
              Pick-up Date
            </label>
            <input
              type="datetime-local"
              name="pickupdate"
              value={(pickUpDate || "").toString().substring(0, 16)}
              onChange={handleChangePickUpDate}
              className="searchbar__input"
            />
          </div>
          <div className="searchbar__item">
            <label className="searchbar__item-title" htmlFor="dropoffdate">
              Drop-Off Date
            </label>
            <input
              type="datetime-local"
              name="dropoffdate"
              value={(dropOffDate || "").toString().substring(0, 16)}
              onChange={handleChangeDropOffDate}
              className="searchbar__input"
            />
          </div>
        </form>
        <button
          type="submit"
          className="bg-blue-600 px-10 py-1 rounded-3xl text-white font-semibold absolute -bottom-4 hover:bg-blue-500"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
