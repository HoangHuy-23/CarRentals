import React, { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Car } from "@/types";
import {
  calculateDaysDifference,
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
  const [daysDifference, setDaysDifference] = useState(
    calculateDaysDifference(pickUpDate, dropOffDate)
  );
  useEffect(() => {
    setDaysDifference(calculateDaysDifference(pickUpDate, dropOffDate));
  }, [pickUpDate, dropOffDate]);
  return (
    <div className="bg-blue-50 rounded-md px-6 py-4 flex flex-col gap-4">
      <div>
        <h4 className="text-3xl font-semibold">
          {formatPriceToK(data?.price || 0)} <span> /ngày</span>
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
          <label htmlFor="">Địa điểm giao nhận xe</label>
          <div className="flex justify-between">
            <span>Quan 1, TP. Ho Chi Minh</span>
            <ChevronDown />
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <div className="flex justify-between">
          <span>Đơn giá thuê </span>
          <span>{formatPrice(data?.price || 0)} đ /ngày</span>
        </div>
        <div className="flex justify-between">
          <span>Bảo hiểm thuê xe</span>
          <span>{calculatorInsurance(data?.price || 0)} đ /ngày</span>
        </div>
      </div>
      <Separator />
      <div>
        <div className="flex justify-between">
          <span>Tổng cộng </span>
          <span>
            {calculatorSumPrice(data?.price || 0, 1)} đ x {daysDifference} ngày
          </span>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between font-bold">
          <span>Thành tiền </span>
          <span>{calculatorSumPrice(data?.price || 0, daysDifference)} đ</span>
        </div>
        <Button className="bg-blue-500 text-white hover:bg-blue-300 w-full">
          Chọn thuê
        </Button>
      </div>
    </div>
  );
}
