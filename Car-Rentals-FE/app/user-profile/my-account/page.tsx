import { CloudUpload, Luggage, Pencil, Star } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-8">
      {/* card 1 */}
      <div className="bg-white rounded-xl flex flex-col px-5 py-5">
        {/* header */}
        <div className="flex justify-between items-center">
          <span className="text-2xl font-semibold flex">
            Account Info <Pencil className="mx-2 text-xl border rounded-full" />
          </span>
          <div className="border rounded-md flex px-4 py-4 items-end">
            <Luggage className="text-blue-500" width={30} height={30} />
            <span className="text-blue-500 font-bold text-xl mx-1">0</span>
            <span>trip</span>
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col sm:flex-row gap-8 py-4">
          {/* left */}
          <div className="flex flex-col justify-between items-center w-1/3">
            <div className="bg-blue-300 text-7xl px-8 py-6 text-white rounded-full border">
              H
            </div>
            <h1 className="font-semibold">Huy Nguyen</h1>
            <div className="text-sm text-gray-500">Create at: 03/06/2024</div>
            <div className="flex px-2 py-2 border rounded-md justify-center">
              <Star className="text-yellow-500" />
              <span className="mx-2 font-bold">0 start</span>
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col w-full gap-4">
            {/* dob */}
            <div className="border rounded-md bg-neutral-100 flex flex-col px-4 gap-4 py-4">
              <div className="flex justify-between">
                <p className="text-sm">Date of birth</p>
                <p>--/--/--</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm">Gender</p>
                <p>Male</p>
              </div>
            </div>
            {/* contact */}
            <div className="flex flex-col gap-4 py-4">
              <div className="flex justify-between">
                <p className="text-sm">Phone</p>
                <p>--/--/--</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm">Email</p>
                <p>--/--/--</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm">Facebook</p>
                <p>--/--/--</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm">Google</p>
                <p>--/--/--</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* card 2 */}
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
            <form
              action=""
              method="post"
              className="flex flex-col w-full gap-3"
            >
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
    </div>
  );
}
