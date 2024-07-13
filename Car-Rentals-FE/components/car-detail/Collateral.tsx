import { Car } from "@/types";
import React from "react";

type Props = {
  data: Car | undefined;
  isLoading: boolean;
  isError: boolean;
};

export default function Collateral({ data, isLoading, isError }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">Tài sản thế chấp</h1>
      <div className="bg-blue-100 rounded-md p-4 gap-4 flex flex-col relative">
        <div className="absolute bg-blue-500 w-2 rounded-l-md h-full top-0 left-0"></div>
        {data?.mortgage ? (
          <div>Không yêu cầu khách thuê thế chấp Tiền mặt hoặc Xe máy</div>
        ) : (
          <div>
            15 triệu (tiền mặt/chuyển khoản cho chủ xe khi nhận xe) hoặc Xe máy
            (kèm cà vẹt gốc) giá trị 15 triệu
          </div>
        )}
      </div>
    </div>
  );
}
