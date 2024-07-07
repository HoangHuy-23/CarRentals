import { CreditCard } from "lucide-react";
import React from "react";

export default function CarRentalDocuments() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">Rental Document</h1>
      <div className="bg-blue-100 rounded-md p-4 gap-4 flex flex-col relative">
        <div className="absolute bg-blue-500 w-2 rounded-l-md h-full top-0 left-0"></div>
        <div>Choose 1 of 2 forms</div>
        <div className="flex gap-2">
          <CreditCard />
          <span>GPLX & CCCD</span>
        </div>
        <div className="flex gap-2">
          <CreditCard />
          <span>GPLX & CCCD</span>
        </div>
      </div>
    </div>
  );
}
