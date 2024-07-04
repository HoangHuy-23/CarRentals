import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AvatarIcon } from "@radix-ui/react-icons";
import {
  ChevronDown,
  ChevronRight,
  CreditCard,
  Dot,
  Heart,
  Luggage,
  Map,
  MapPin,
  Share,
  ShieldCheck,
  Star,
  UserRound,
} from "lucide-react";
import React from "react";

export default function page({ params }: { params: { id: string } }) {
  return (
    <div className="container">
      car id {params.id}
      {/* component-1 */}
      <div>
        {/* image */}
        <div className="grid grid-cols-[4fr_2fr]">
          <AspectRatio ratio={10 / 6} className="my-2 mx-2">
            <img
              src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/honda_civic_rs_2024/p/g/2024/05/03/03/McROHHlvgP70SSSRZZkvGQ.jpg"
              alt=""
              className="rounded-md w-full h-full object-cover"
            />
          </AspectRatio>
          <div className="gird grid-cols-1">
            <AspectRatio ratio={12 / 5} className="my-2 mx-2">
              <img
                src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/honda_civic_rs_2024/p/g/2024/05/03/03/McROHHlvgP70SSSRZZkvGQ.jpg"
                alt=""
                className="rounded-md w-full h-full object-cover"
              />
            </AspectRatio>
            <AspectRatio ratio={12 / 5} className="my-2 mx-2">
              <img
                src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/honda_civic_rs_2024/p/g/2024/05/03/03/McROHHlvgP70SSSRZZkvGQ.jpg"
                alt=""
                className="rounded-md w-full h-full object-cover"
              />
            </AspectRatio>
            <AspectRatio ratio={12 / 5} className="my-2 mx-2">
              <img
                src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/honda_civic_rs_2024/p/g/2024/05/03/03/McROHHlvgP70SSSRZZkvGQ.jpg"
                alt=""
                className="rounded-md w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
        <div className="grid grid-cols-[4fr_2fr] mb-8">
          {/* contetn left */}
          <div className="px-2 flex flex-col gap-8">
            <div>
              <div className="flex justify-between">
                <h1 className="text-3xl font-bold font-sans">
                  HONDA CIVIC RS 2024
                </h1>
                <div className="flex gap-1">
                  <div className="border rounded-full px-2 py-2 flex items-center justify-center">
                    <Share />
                  </div>
                  <div className="border rounded-full px-2 py-2 flex items-center justify-center">
                    <Heart />
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
                <span className="text-sm flex justify-center items-center">
                  <Star
                    className="float-start text-yellow-500"
                    width={20}
                    height={20}
                  />
                  5.0
                </span>
                <Dot />
                <span className="text-sm flex justify-center items-center">
                  <Luggage
                    className="float-start text-blue-500"
                    width={20}
                    height={20}
                  />{" "}
                  7 trips
                </span>
                <Dot />
                <span>Ward 1, Ho Chi Minh City</span>
              </div>
              <div id="card-content" className="flex gap-2 my-2">
                <div className="bg-blue-200 rounded-full flex items-center justify-center text-sm h-6 p-1">
                  Automatic
                </div>
                <span className="bg-blue-200 rounded-full flex items-center justify-center text-sm h-6 p-1">
                  Free delivery
                </span>
              </div>
            </div>
            <Separator />
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-semibold">Dac diem</h1>
              <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                  <UserRound />
                  <div className="flex flex-col">
                    <span>So ghe</span>
                    <span>5 cho</span>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <UserRound />
                  <div className="flex flex-col">
                    <span>So ghe</span>
                    <span>5 cho</span>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <UserRound />
                  <div className="flex flex-col">
                    <span>So ghe</span>
                    <span>5 cho</span>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <UserRound />
                  <div className="flex flex-col">
                    <span>So ghe</span>
                    <span>5 cho</span>
                  </div>
                </div>
              </div>
            </div>
            <Separator />
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-semibold">Mo ta</h1>
              <div>
                <p>Honda Civic RS 2024 bản full</p>
                <p>- Đầy đủ options</p>
                <p>- Dán phim cách nhiệt 3M Crystalline chính hãng siêu mát.</p>
                <p>- Đầy đủ options</p>
                <p>- Dán phim cách nhiệt 3M Crystalline chính hãng siêu mát.</p>
                <p>- Đầy đủ options</p>
                <p>- Dán phim cách nhiệt 3M Crystalline chính hãng siêu mát.</p>
              </div>
            </div>
            <Separator />
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-semibold">Giay to thue xe</h1>
              <div className="bg-blue-100 rounded-md p-4 gap-4 flex flex-col relative">
                <div className="absolute bg-blue-500 w-2 rounded-l-md h-full top-0 left-0"></div>
                <div>Chon 1 trong 2 hinh thuc</div>
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

            <Separator />
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-semibold">Tai san thue chap</h1>
              <div className="bg-blue-100 rounded-md p-4 gap-4 flex flex-col relative">
                <div className="absolute bg-blue-500 w-2 rounded-l-md h-full top-0 left-0"></div>
                <div>
                  Không yêu cầu khách thuê thế chấp Tiền mặt hoặc Xe máy
                </div>
              </div>
            </div>

            <Separator />
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-semibold">Vi tri xe</h1>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <MapPin />
                  <span>Quan 1, TP, Ho Chi Minh</span>
                </div>
                <div className="flex gap-2">
                  <Map />
                  <span>Xem ban do</span>
                  <ChevronRight />
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Địa chỉ cụ thể sẽ được hiển thị sau khi đặt cọc
              </p>
            </div>

            <Separator />
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-semibold">Chu xe</h1>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <AvatarIcon width={50} height={50} />
                  <div>
                    <h1>Hoang Huy</h1>
                    <div className="flex">
                      <span className="text-sm flex justify-center items-center">
                        <Star
                          className="float-start text-yellow-500"
                          width={14}
                          height={14}
                        />
                        5.0
                      </span>
                      <Dot />
                      <span className="text-sm flex justify-center items-center">
                        <Luggage
                          className="float-start text-blue-500"
                          width={14}
                          height={14}
                        />{" "}
                        7 trips
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-gray-500">Ti le phan hoi</h1>
                    <h1>100%</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-gray-500">Thoi gian phan hoi</h1>
                    <h1>5 phut</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-gray-500">Ti le dong y</h1>
                    <h1>100%</h1>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-600 bg-blue-200 rounded-md p-2">
                Chủ xe 5* có thời gian phản hồi nhanh chóng, tỉ lệ đồng ý cao,
                mức giá cạnh tranh & dịch vụ nhận được nhiều đánh giá tốt từ
                khách hàng.
              </div>
            </div>
          </div>

          {/* content right */}
          <div className="mx-2 flex flex-col gap-4">
            {/* bao hiem */}
            <div className="border rounded-md flex gap-2 items-start">
              <ShieldCheck
                width={40}
                height={40}
                className="text-blue-500 align-top"
              />
              <div>
                <h1 className="text-blue-500 font-semibold">
                  Bao hiem thue xe
                </h1>
                <p className="text-sm text-gray-500">
                  Chuyen xe co mua bao hiem, khach thue boi thuong toi da
                  2.000.000 vnd cho truong hop su co ngoai y muon
                </p>
                <p className="text-sm font-semibold">Xem chi tiet</p>
              </div>
            </div>
            {/* rent box */}
            <div className="bg-blue-50 rounded-md px-6 py-4 flex flex-col gap-4">
              <div>
                {" "}
                <h4 className="text-3xl font-semibold">
                  1.323K <span> /day</span>
                </h4>
              </div>
              <div className="border rounded-md flex">
                <div className="flex flex-col p-3 w-full">
                  <label htmlFor="">Nhan xe</label>
                  <div className="flex justify-between">
                    <span>04/04/2024</span>
                    <span>21:00</span>
                  </div>
                </div>
                <Separator orientation="vertical" className="" />
                <div className="flex flex-col p-3 w-full">
                  <label htmlFor="">Tra xe</label>
                  <div className="flex justify-between">
                    <span>04/04/2024</span>
                    <span>21:00</span>
                  </div>
                </div>
              </div>
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
                  <span>1 377 600d /ngay</span>
                </div>
                <div className="flex justify-between">
                  <span>Bao hiem thue xe</span>
                  <span>137 600d /ngay</span>
                </div>
              </div>
              <Separator />
              <div>
                <div className="flex justify-between">
                  <span>Tong cong </span>
                  <span>1 513 200d x 1 ngay</span>
                </div>
              </div>
              <Separator />
              <div className="flex flex-col gap-2">
                <div className="flex justify-between font-bold">
                  <span>Thanh tien </span>
                  <span>1 513 200d</span>
                </div>
                <Button className="bg-blue-500 text-white hover:bg-blue-300 w-full">
                  Chon thue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
