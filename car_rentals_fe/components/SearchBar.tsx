"use client";
import Image from "next/image";
import React, { useState } from "react";
import SearchLocation from "./SearchLocation";
import Selector from "./Selector";
import DateTimePicker from "./DateTimePicker";

const SearchBar = () => {
  const [model1, setModel1] = useState("");
  const [location, setLocation] = useState("");
  return (
    <div className="max-width padding-x pt-24 relative">
      <div className="w-full bg-blue-100 rounded-xl flex justify-center relative">
        <form action="" className="searchbar flex gap-5 mx-6 my-4">
          <div className="searchbar__item relative">
            <SearchLocation selected={location} setSelected={setLocation} />
            {/* <Selector /> */}
          </div>
          <div className="searchbar__item">
            <Image
              src="/model-icon.png"
              width={25}
              height={25}
              className="absolute w-[20px] h-[20px] ml-4"
              alt="car model"
            />
            <input
              type="text"
              name="model"
              value={model1}
              onChange={(e) => {
                setModel1(e.target.value);
              }}
              placeholder="Tigan"
              className="searchbar__input"
            />
          </div>
          <div className="searchbar__item">
            <Image
              src="/model-icon.png"
              width={25}
              height={25}
              className="absolute w-[20px] h-[20px] ml-4"
              alt="car model"
            />
            <input
              type="text"
              name="model"
              value=""
              onChange={() => {}}
              placeholder="Tigan"
              className="searchbar__input"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 px-4 py-3 rounded-3xl text-white font-semibold"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
