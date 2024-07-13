"use client";
import { useOwner } from "@/app/hooks/useCar";
import { AvatarIcon } from "@radix-ui/react-icons";
import { Dot, Luggage, Star } from "lucide-react";
import React from "react";
import Avatar from "../Avatar";

type Props = {
  carId: string;
};

export default function CarOwner({ carId }: Props) {
  const { data, isLoading, isError } = useOwner(carId);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">Chủ xe</h1>
      <div className="flex justify-between">
        <div className="flex gap-2 justify-center items-center">
          <Avatar data={data} big={false} />
          <div className="">
            <h1 className="text-xl font-semibold">{data?.fullName}</h1>
            <div className="flex">
              <span className="text-sm flex justify-center items-center">
                <Star
                  className="float-start text-yellow-500"
                  width={14}
                  height={14}
                />
                {data?.ratingScores}
              </span>
              <Dot />
              <span className="text-sm flex justify-center items-center">
                <Luggage
                  className="float-start text-blue-500"
                  width={14}
                  height={14}
                />{" "}
                {data?.numOfTrip} chuyến
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-500">Tỉ lệ phản hồi</h1>
            <h1>100%</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-500">Thời gian phản hồi</h1>
            <h1>5 phút</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-500">Tỉ lệ đòng ý</h1>
            <h1>100%</h1>
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-600 bg-blue-200 rounded-md p-2">
        Chủ xe 5* có thời gian phản hồi nhanh chóng, tỉ lệ đồng ý cao, mức giá
        cạnh tranh & dịch vụ nhận được nhiều đánh giá tốt từ khách hàng.
      </div>
    </div>
  );
}
