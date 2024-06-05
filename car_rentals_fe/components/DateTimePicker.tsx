"use client";
import Image from "next/image";
import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const DateTimePicker = () => {
  const [selected, setSelected] = useState(new Date());
  const handleDateChange = (date: any) => {
    if (date && date.toDate) {
      setSelected(date.toDate());
    } else {
      setSelected(date);
    }
  };
  return (
    <div className="search-location">
      <div className="relative w-full">
        <Image
          src="/model-icon.png"
          width={20}
          height={20}
          className="absolute top-[14px] z-10 ml-4"
          alt="location logo"
        />
        <Datetime
          className="search-location__input text-gray-600 font-medium"
          value={selected}
          input={true}
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
};

export default DateTimePicker;
