"use client";

import { useAuthContext } from "@/app/contexts/authContext";
import { CloudUpload, Pencil, X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export default function DriverLicense() {
  const { user } = useAuthContext();
  const license = user?.driverLicense;

  const [isEdit, setIsEdit] = useState(false);

  const handleBtnEdit = () => {
    setIsEdit(true);
  };

  const handleBtnCancel = () => {
    setIsEdit(false);
  };

  const handleBtnSave = () => {
    setIsEdit(false);
  };

  return (
    <div className="bg-white rounded-xl flex flex-col px-5 py-5">
      {/* header */}
      <div className="flex justify-between items-center">
        <span className="text-2xl font-semibold flex">Giấy phép lái xe</span>
        {!isEdit ? (
          <Button
            onClick={handleBtnEdit}
            className="bg-white hover:bg-slate-50 text-black"
          >
            <span className="font-bold px-2">Chỉnh sửa</span>
            <Pencil width={16} height={16} />
          </Button>
        ) : (
          <div className="flex  gap-2">
            <Button
              onClick={handleBtnCancel}
              className="bg-red-200 hover:bg-red-50 text-black"
            >
              <span className="font-bold px-2">Hủy</span>
              <X width={16} height={16} />
            </Button>

            <Button
              onClick={handleBtnSave}
              className="bg-blue-500 hover:bg-blue-300 text-white"
            >
              <span className="font-bold px-2">Lưu</span>
              {/* <Pencil width={16} height={16} /> */}
            </Button>
          </div>
        )}
      </div>
      {/* content */}
      <div className="flex flex-col sm:flex-row gap-8 py-4">
        {/* left */}
        <div className="flex flex-col w-[50%]">
          <h1 className="font-semibold">Hình ảnh</h1>
          <div className="flex justify-center items-center h-full relative border rounded-lg">
            <CloudUpload className="text-blue-500" />
            <input
              disabled={!isEdit}
              type="file"
              className="block h-full w-full absolute opacity-0 cursor-pointer"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col items-start w-[50%] gap-4">
          <h1 className="font-semibold">Thông tin chung</h1>
          <form action="" method="post" className="flex flex-col w-full gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="code">Số GPLX</label>
              <input
                type="text"
                id="code"
                placeholder="Nhập số GPLX đã cấp"
                disabled={!isEdit}
                className="h-[40px] px-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Họ và tên</label>
              <input
                type="text"
                id="name"
                placeholder="Nhập đầy đủ họ tên"
                disabled={!isEdit}
                className="h-[40px] px-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="code">Ngày sinh</label>
              <input
                type="date"
                defaultValue="01/01/1970"
                disabled={!isEdit}
                className="h-[40px] px-2 rounded-md"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
