"use client";
import { RootState } from "@/redux/store";
import { PickUpLocation } from "@/types";
import {
  calculateDaysDifference,
  calculatorRentalFee,
  calculatorVAT,
  formatDateToStringType2,
  formatPrice,
} from "@/utils";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type Props = {
  isSuccess: boolean;
};

export default function BookingSuccess({ isSuccess }: Props) {
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.auth);
  const { selectedCar, startDate, endDate, pickUpLocation } = useSelector(
    (state: RootState) => state.booking
  );

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
  return (
    <div className={`${isSuccess ? "flex" : "hidden"} flex-col w-full my-6`}>
      <h1 className="text-left w-full text-2xl font-semibold">Cám ơn bạn!</h1>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-xl font-medium">Thông tin đơn thuê</h1>
        <img
          src={selectedCar?.carImages.at(0)?.urlImage}
          alt=""
          className="w-[70%] rounded-md"
        />
        <div className="w-full gap-2 flex flex-col">
          <p className="text-lg font-medium text-left w-full">Người thuê</p>
          <div className="w-full flex justify-between">
            <p>Họ và tên:</p>
            <p>{user?.fullName}</p>
          </div>
          <div className="w-full flex justify-between">
            <p>Số điện thoại:</p>
            <p>{user?.phone}</p>
          </div>
        </div>
        <div className="w-full gap-2 flex flex-col">
          <p className="text-lg font-medium text-left w-full">Chủ xe</p>
          <div className="w-full flex justify-between">
            <p>Họ và tên:</p>
            <p>Nguyễn Hoàng Huy</p>
          </div>
          <div className="w-full flex justify-between">
            <p>Số điện thoại:</p>
            <p>0362026128</p>
          </div>
        </div>
        <div className="w-full gap-2 flex flex-col">
          <p className="text-lg font-medium text-left w-full">Hợp đồng</p>
          <div className="w-full flex justify-between">
            <p>Loại xe</p>
            <p>
              {selectedCar?.company} {selectedCar?.model}{" "}
              {selectedCar?.yearOfProduction}
            </p>
          </div>
          <div className="w-full flex justify-between">
            <p>Ngày nhận:</p>
            <p>{formatDateToStringType2(new Date(startDate as string))}</p>
          </div>
          <div className="w-full flex justify-between">
            <p>Ngày trả:</p>
            <p>{formatDateToStringType2(new Date(endDate as string))}</p>
          </div>
          <div className="w-full flex justify-between">
            <p>Vị trí nhận xe:</p>
            {pickUpLocation === PickUpLocation.CAR_ADDRESS ? (
              <p className="">
                {selectedCar?.address.ward}, {selectedCar?.address.city}
              </p>
            ) : (
              <p className="">
                {user?.addresses.at(0)?.street},{" "}
                {user?.addresses.at(0)?.district}, {user?.addresses.at(0)?.ward}
                , {user?.addresses.at(0)?.city}
              </p>
            )}
          </div>
        </div>
        <div className="w-full ">
          <div className="flex justify-between ">
            <span className="font-semibold">Tiền cọc:</span>
            <span>500.000 đ</span>
          </div>
          <span className="text-sm">
            Tiền cọc sẽ không được hoàn lại nếu hủy chuyến. Tiền cọc sẽ được
            hoàn lại khi trả xe.
          </span>
        </div>
        <div className="w-full ">
          <div className="flex justify-between ">
            <span className="font-semibold">Tổng cộng tiền thuê xe:</span>
            <span>{formatPrice(rentalFee + calculatorVAT(rentalFee))} đ</span>
          </div>
          <span className="text-sm">Thu khi nhận xe.</span>
        </div>
      </div>

      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => router.push("/")}
      >
        Trang chủ
      </button>
    </div>
  );
}
