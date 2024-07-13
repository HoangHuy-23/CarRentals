import { UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";
import seat from "@/public/seat.png";
import transmission from "@/public/transmission.png";
import fuel from "@/public/fuel.png";
import consumption from "@/public/consumption.png";
import { Car } from "@/types";

type Props = {
  data: Car | undefined;
  isLoading: boolean;
  isError: boolean;
};

export default function CarCharacteristics({
  data,
  isLoading,
  isError,
}: Props) {
  const getFuel = () => {
    switch (data?.fuel) {
      case "GASOLINE":
        return "Xăng";
      case "DIESEL":
        return "Dầu";
      default:
        return "Điện";
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">Đặc điểm</h1>
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <Image src={seat} alt="" width={40} height={40} />
          <div className="flex flex-col">
            <span>Số ghế</span>
            <span>{data?.seats} chỗ</span>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Image src={transmission} alt="" width={40} height={40} />
          <div className="flex flex-col">
            <span>Truyền động</span>
            <span>
              {data?.transmission === "MANUAL" ? "Số sàn" : "Số tự động"}
            </span>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Image src={fuel} alt="" width={40} height={40} />
          <div className="flex flex-col">
            <span>Nhiên liệu</span>
            <span>{getFuel()}</span>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Image src={consumption} alt="" width={40} height={40} />
          <div className="flex flex-col">
            <span>NL tiêu hao</span>
            {data?.fuel === "ELECTRIC" ? (
              <span>{data?.fuelConsumption} km/1 lần sạc</span>
            ) : (
              <span>{data?.fuelConsumption} lit/100km</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
