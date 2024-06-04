"use client";
import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const DateTimePicker = () => {
  return (
    <>
      <div>
        <Datetime
          className="w-60 appearance-none shadow border rounded py-3 px-2 text-gray-600"
          value={new Date()}
          input={true}
        />
      </div>
    </>
  );
};

export default DateTimePicker;
