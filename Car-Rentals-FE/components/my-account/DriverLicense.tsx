"use client";

import { useAuthContext } from "@/app/contexts/authContext";
import { CloudUpload, Pencil } from "lucide-react";

export default function DriverLicense() {
  const { user } = useAuthContext();
  const license = user?.driverLicense;
  return (
    <div className="bg-white rounded-xl flex flex-col px-5 py-5">
      {/* header */}
      <div className="flex justify-between items-center">
        <span className="text-2xl font-semibold flex">Driver License</span>
        <div className="border rounded-md flex px-4 py-2 items-center">
          <span className="font-bold px-2">Edit</span>
          <Pencil width={16} height={16} />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col sm:flex-row gap-8 py-4">
        {/* left */}
        <div className="flex flex-col w-[50%]">
          <h1 className="font-semibold">Photo</h1>
          <div className="flex justify-center items-center h-full">
            <CloudUpload className="text-blue-500" />
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col items-start w-[50%] gap-4">
          <h1 className="font-semibold">Info</h1>
          <form action="" method="post" className="flex flex-col w-full gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="code">Code</label>
              <input
                type="text"
                id="code"
                placeholder="Input code license"
                disabled
                className="h-[40px] px-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Full name</label>
              <input
                type="text"
                id="name"
                placeholder="Input full name"
                disabled
                className="h-[40px] px-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="code">Date of birth</label>
              <input
                type="date"
                defaultValue="01/01/1970"
                disabled
                className="h-[40px] px-2 rounded-md"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
