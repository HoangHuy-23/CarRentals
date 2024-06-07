"use client";
import { locations } from "@/constants";
import { SearchLocationProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";

const SearchLocation = ({ selected, setSelected }: SearchLocationProps) => {
  const [query, setQuery] = useState("");

  const filterLocation =
    query === ""
      ? locations
      : locations.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-location min-w-56">
      <Combobox value={selected} onChange={setSelected} name="location">
        <div className="relative w-full">
          <Combobox.Input
            className="search-location__input"
            placeholder="Location"
            displayValue={(location: string) => location}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Combobox.Button className="absolute top-[10px] right-4">
            <Image
              src="/model-icon.png"
              width={18}
              height={18}
              alt="location logo"
            />
          </Combobox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="search-location__options z-20">
              {filterLocation.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative search-location__option ${
                      active ? "bg-blue-600 text-white" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchLocation;
