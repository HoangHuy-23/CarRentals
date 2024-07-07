import React from "react";

export default function Collateral() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">Collateral</h1>
      <div className="bg-blue-100 rounded-md p-4 gap-4 flex flex-col relative">
        <div className="absolute bg-blue-500 w-2 rounded-l-md h-full top-0 left-0"></div>
        <div>Do not require tenants to mortgage Cash or Motorbikes</div>
      </div>
    </div>
  );
}
