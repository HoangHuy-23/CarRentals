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
import DialogAddressRentbox from "../Dialog/DialogAddressRentbox";

type Props = {
  data: Car | undefined;
  isLoading: boolean;
  isError: boolean;
};

export default function RentBox({ data, isLoading, isError }: Props) {
  const getStoredDate = (key: string) => {
    const dateStr = localStorage.getItem(key);
    return dateStr ? new Date(dateStr) : new Date();
  };

  const [pickUpDate, setPickUpDate] = useState<Date>(
    getStoredDate("pick-up-date-car")
  );
  const [dropOffDate, setDropOffDate] = useState<Date>(
    getStoredDate("drop-off-date-car")
  );
  const [daysDifference, setDaysDifference] = useState<number>(
    calculateDaysDifference(pickUpDate, dropOffDate)
  );

  useEffect(() => {
    const updatedDaysDifference = calculateDaysDifference(
      new Date(pickUpDate),
      new Date(dropOffDate)
    );
    setDaysDifference(updatedDaysDifference);
    console.log("Pick Up Date:", pickUpDate);
    console.log("Drop Off Date:", dropOffDate);
    console.log("Days Difference:", updatedDaysDifference);
  }, [pickUpDate, dropOffDate]);

  useEffect(() => {
    console.log("Component mounted or dates updated");
  }, []);

  const handlePickUpDateChange = (date: Date) => {
    const newDate = new Date(date);
    setPickUpDate(newDate);
    localStorage.setItem("pick-up-date-car", newDate.toISOString());
  };

  const handleDropOffDateChange = (date: Date) => {
    const newDate = new Date(date);
    setDropOffDate(newDate);
    localStorage.setItem("drop-off-date-car", newDate.toISOString());
  };

  return (
    <div className="bg-blue-50 rounded-md px-6 py-4 flex flex-col gap-4">
      <div>
        <h4 className="text-3xl font-semibold">
          {formatPriceToK(data?.price || 0)} <span> /ngày</span>
        </h4>
      </div>
      <DialogDateTimeRentBox
        //pickUpDate={pickUpDate}
        setPickUpDate={handlePickUpDateChange}
        //dropOffDate={dropOffDate}
        setDropOffDate={handleDropOffDateChange}
      />
      <DialogAddressRentbox data={data} />
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
