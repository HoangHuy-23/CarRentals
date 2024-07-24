"use client";

import { CloudUpload, Pencil, X } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { formatDayToString } from "@/utils";
import { Label } from "../ui/label";
import Image from "next/image";
import NoImage from "@/public/no-image.jpg";
import { useUploadDriverLicense } from "@/app/hooks/useUser";
import { DriverLicenseReq } from "@/types";
import useAuth from "@/app/hooks/useAuth";

export default function DriverLicense() {
  const handleChangeFileToUrl = (file: File): string => {
    const imageUrl = URL.createObjectURL(file);
    return imageUrl;
  };
  const { mutate, isPending, isError } = useUploadDriverLicense();

  const { user } = useAuth();
  const license = user?.driverLicense;

  const [isEdit, setIsEdit] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [code, setCode] = useState<string>(license?.code || "");
  const [fullName, setFullName] = useState<string>(license?.fullName || "");
  const [dob, setDob] = useState<string>(
    (user?.dob as unknown as string) || ""
  );
  const [image, setImage] = useState<string>(license?.urlImage || "");
  const [file, setFile] = useState<File>();

  useEffect(() => {
    if (license) {
      setCode(license.code);
      setFullName(license.fullName);
      setDob(license.dob as unknown as string);
      setImage(license.urlImage);
    }
  }, [user]);

  const handleBtnEdit = () => {
    setIsEdit(true);
  };

  const handleBtnCancel = () => {
    setIsEdit(false);
    if (license) {
      setCode(license.code);
      setFullName(license.fullName);
      setDob(license.dob as unknown as string);
      setImage(license.urlImage);
    }
  };

  const handleBtnSave = () => {
    setIsSaving(true);
    const req: DriverLicenseReq = {
      code: code,
      fullName: fullName,
      dob: new Date(dob),
      image: file || null,
      status: "PENDING",
    };
    mutate(req);
    console.log(code, fullName, dob);
  };

  useEffect(() => {
    if (!isPending && isSaving) {
      setIsSaving(false); // Nếu không còn pending và đang trong quá trình save, đặt isSaving thành false
      setIsEdit(false); // Đặt setIsEdit(false) ở đây để ngừng chế độ chỉnh sửa
    }
  }, [isPending, isSaving]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFile(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
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
              {isPending ? (
                <span>Pending...</span>
              ) : (
                <span className="font-bold px-2">Lưu</span>
              )}
              {/* <Pencil width={16} height={16} /> */}
            </Button>
          </div>
        )}
      </div>
      {/* content */}
      <div className="flex flex-col sm:flex-row gap-8 py-4">
        {/* left */}
        <div className="flex flex-col w-[50%]">
          <h1 className="font-semibold mb-2">Hình ảnh</h1>
          <div
            className={`flex justify-center items-center h-full relative border rounded-lg`}
          >
            <img alt="" src={image || ""} className="absolute w-full"></img>

            <input
              disabled={!isEdit}
              type="file"
              className={`block h-full w-full absolute opacity-0 z-10   ${
                isEdit ? "cursor-pointer" : "cursor-not-allowed"
              } `}
              onChange={(e) => {
                //setImage(e.target.value);
                handleImageChange(e);
                console.log(image);
              }}
            />
            {image !== "" && isEdit && (
              <CloudUpload className="text-blue-500 z-0" />
            )}
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col items-start w-[50%] gap-4">
          <h1 className="font-semibold">Thông tin chung</h1>
          <form action="" method="post" className="flex flex-col w-full gap-3">
            <div className="flex flex-col gap-2">
              <Label htmlFor="code">Số GPLX</Label>
              <Input
                type="text"
                id="code"
                placeholder="Nhập số GPLX đã cấp"
                disabled={!isEdit}
                className="h-[40px] px-2 rounded-md"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Họ và tên</Label>
              <Input
                type="text"
                id="name"
                placeholder="Nhập đầy đủ họ tên"
                disabled={!isEdit}
                className="h-[40px] px-2 rounded-md"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="code">Ngày sinh</Label>
              <Input
                type="date"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                }}
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
