import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin } from "lucide-react";
import React from "react";

type Props = {
  isContactInfo: boolean;
  carId: string;
};

export default function page({ isContactInfo, carId }: Props) {
  return (
    <div className="flex flex-col w-full my-6">
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
              14h00, 19/07/2024 đến 18h00, 21/07/2024
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <MapPin className="text-blue-500" width={34} height={34} />
          <div className="flex flex-col">
            <p className="text-gray-500 text-sm font-semibold">
              Nhận xe tại vị trí
            </p>
            <p className="font-medium text-base">
              120/23 Trần Bình Trọng, P.2, Q.5, Hồ Chí Minh,
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 ">
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Phí thuê xe:</span>
          <span>2.650.000 đ</span>
        </div>
        <Separator />
      </div>
      <div className="mt-6">
        <div className="font-semibold mb-4">Giảm giá</div>
        <div className="flex justify-between mb-4">
          <span className="">Khuyến mãi:</span>
          <span className="text-red-500">-450.000 đ</span>
        </div>
        <Separator />
      </div>
      <div className="mt-6 ">
        <div className="flex justify-between mb-6">
          <span className="font-semibold">Thuế VAT:</span>
          <span>212.000 đ</span>
        </div>
        <div className="flex justify-between mb-6">
          <span className="font-semibold">Tổng cộng tiền thuê:</span>
          <span>2.212.000 đ</span>
        </div>
        <div className="mb-6">
          <div className="flex justify-between ">
            <span className="font-semibold">Tiền cọc:</span>
            <span>500.000 đ</span>
          </div>
          <span className="text-sm">
            Tiền cọc sẽ không được hoàn lại nếu hủy chuyến.
          </span>
        </div>
        <div className="mb-6">
          <div className="flex justify-between ">
            <span className="font-semibold">Tài sản thế chấp:</span>
            <span>5.000.000 đ</span>
          </div>
          <span className="text-sm">
            Thanh toán sau khi nhận và kiểm tra xe, không nhận cọc xe máy.
          </span>
        </div>
      </div>
      <Button className="bg-blue-500 hover:bg-blue-300">Xác nhận</Button>
    </div>
  );
}
