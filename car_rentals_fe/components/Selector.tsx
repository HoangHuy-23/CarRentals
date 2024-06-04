"use client";
import React, { useEffect, useState, FC } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { locations } from "@/constants";

const Selector = () => {
  // const [location, setLocation] = useState<Location[] | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="search-location__input relative w-full max-w-xs">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded absolute${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected.length > 25
            ? selected.substring(0, 25) + "..."
            : selected
          : "Select Country"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {locations.map((location) => (
          <li
            key={location}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              location.toLowerCase() === selected.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              location.toLowerCase().startsWith(inputValue) ? "block" : "hidden"
            }`}
            onClick={() => {
              if (location.toLowerCase() !== selected.toLowerCase()) {
                setSelected(location);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
