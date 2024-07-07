import React, { useState } from "react";
import { Separator } from "../ui/separator";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Car } from "@/types";
import {
  calculatorInsurance,
  calculatorSumPrice,
  formatPrice,
  formatPriceToK,
} from "@/utils";
import DialogDateTimeRentBox from "../Dialog/DialogDateTimeRentBox";

type Props = {
  data: Car | undefined;
  isLoading: boolean;
  isError: boolean;
};

export default function RentBox({ data, isLoading, isError }: Props) {
  const [pickUpDate, setPickUpDate] = useState(
    new Date(localStorage.getItem("pick-up-date-car") as string)
  );
  const [dropOffDate, setDropOffDate] = useState(
    new Date(localStorage.getItem("drop-off-date-car") as string)
  );
  return (
    <div className="bg-blue-50 rounded-md px-6 py-4 flex flex-col gap-4">
      <div>
        <h4 className="text-3xl font-semibold">
          {formatPriceToK(data?.price || 0)} <span> /day</span>
        </h4>
      </div>
      <DialogDateTimeRentBox
        pickUpDate={pickUpDate}
        setPickUpDate={setPickUpDate}
        dropOffDate={dropOffDate}
        setDropOffDate={setDropOffDate}
      />
      <div className="border rounded-md flex">
        <div className="flex flex-col p-3 w-full">
          <label htmlFor="">Dia diem giao nhan xe</label>
          <div className="flex justify-between">
            <span>Quan 1, TP. Ho Chi Minh</span>
            <ChevronDown />
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <div className="flex justify-between">
          <span>Don gia thue </span>
          <span>{formatPrice(data?.price || 0)} d /ngay</span>
        </div>
        <div className="flex justify-between">
          <span>Bao hiem thue xe</span>
          <span>{calculatorInsurance(data?.price || 0)} d /ngay</span>
        </div>
      </div>
      <Separator />
      <div>
        <div className="flex justify-between">
          <span>Tong cong </span>
          <span>{calculatorSumPrice(data?.price || 0)} d x 1 ngay</span>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between font-bold">
          <span>Thanh tien </span>
          <span>{calculatorSumPrice(data?.price || 0)} d</span>
        </div>
        <Button className="bg-blue-500 text-white hover:bg-blue-300 w-full">
          Chon thue
        </Button>
      </div>
    </div>
  );
}
