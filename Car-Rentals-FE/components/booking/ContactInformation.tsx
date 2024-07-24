"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { setBookingStep } from "@/redux/reducer/bookingSlice";
import { RootState } from "@/redux/store";
import { PickUpLocation } from "@/types";
import {
  calculateDaysDifference,
  calculatorRentalFee,
  calculatorVAT,
  formatDateToStringType2,
  formatPrice,
} from "@/utils";
import { Calendar, MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  isContact: boolean;
  carId: string;
  setTotalRent: (totalRent: number) => void;
};

export default function ContactInformation({
  isContact,
  carId,
  setTotalRent,
}: Props) {
  const { startDate, endDate, pickUpLocation, selectedCar } = useSelector(
    (state: RootState) => state.booking
  );
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [rentalFee, setRentalFee] = useState(0);

  useEffect(() => {
    setRentalFee(
      calculatorRentalFee(
        selectedCar?.price || 0,
        calculateDaysDifference(
          new Date(startDate as string),
          new Date(endDate as string)
        )
      )
    );
  }, []);

  const handleConfirm = () => {
    dispatch(setBookingStep(2));
    setTotalRent(rentalFee + calculatorVAT(rentalFee));
  };

  return (
    <div className={`${isContact ? "flex" : "hidden"} flex-col w-full my-6`}>
      <h1 className="text-left w-full text-2xl font-semibold">
        Thông tin hợp đồng
      </h1>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex gap-4 items-center">
          <Calendar className="text-blue-500" width={34} height={34} />
          <div className="flex flex-col">
            <p className="text-gray-500 text-sm font-semibold">
              Thời gian thuê
            </p>
            <p className="font-medium text-base">
              {formatDateToStringType2(new Date(startDate as string))} đến{" "}
              {formatDateToStringType2(new Date(endDate as string))}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <MapPin className="text-blue-500" width={34} height={34} />
          <div className="flex flex-col">
            <p className="text-gray-500 text-sm font-semibold">
              Nhận xe tại vị trí
            </p>
            {pickUpLocation === PickUpLocation.CAR_ADDRESS ? (
              <p className="font-medium text-base">
                {selectedCar?.address.ward}, {selectedCar?.address.city}
              </p>
            ) : (
              <p className="font-medium text-base">
                {user?.addresses.at(0)?.street},{" "}
                {user?.addresses.at(0)?.district}, {user?.addresses.at(0)?.ward}
                , {user?.addresses.at(0)?.city}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-6 ">
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Phí thuê xe:</span>
          <span>{formatPrice(rentalFee)} đ</span>
        </div>
        <Separator />
      </div>
      {/* <div className="mt-6">
        <div className="font-semibold mb-4">Giảm giá</div>
        <div className="flex justify-between mb-4">
          <span className="">Khuyến mãi:</span>
          <span className="text-red-500">-450.000 đ</span>
        </div>
        <Separator />
      </div> */}
      <div className="mt-6 ">
        <div className="flex justify-between mb-6">
          <span className="font-semibold">Thuế VAT:</span>
          <span>{formatPrice(calculatorVAT(rentalFee))} đ</span>
        </div>
        <div className="flex justify-between mb-6">
          <span className="font-semibold">Tổng cộng tiền thuê:</span>
          <span>{formatPrice(rentalFee + calculatorVAT(rentalFee))} đ</span>
        </div>
        <div className="mb-6">
          <div className="flex justify-between ">
            <span className="font-semibold">Tiền cọc:</span>
            <span>500.000 đ</span>
          </div>
          <span className="text-sm">
            Tiền cọc sẽ không được hoàn lại nếu hủy chuyến. Tiền cọc sẽ được
            hoàn lại khi trả xe.
          </span>
        </div>
        {selectedCar?.mortgage && (
          <div className="mb-6">
            <div className="flex justify-between ">
              <span className="font-semibold">Tài sản thế chấp:</span>
              <span>5.000.000 đ</span>
            </div>
            <span className="text-sm">
              Thanh toán sau khi nhận và kiểm tra xe, không nhận cọc xe máy.
            </span>
          </div>
        )}
      </div>
      <Button onClick={handleConfirm} className="bg-blue-500 hover:bg-blue-300">
        Xác nhận
      </Button>
    </div>
  );
}
