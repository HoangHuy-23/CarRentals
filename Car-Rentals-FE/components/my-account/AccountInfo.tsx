"use client";

import { useAuthContext } from "@/app/contexts/authContext";
import { Link, Luggage, Pencil, Star } from "lucide-react";
import { DialogEditAccount } from "../Dialog/DialogEditAccount";
import DialogEditPhone from "../Dialog/DialogEditPhone";
import DialogEditEmail from "../Dialog/DialogEditEmail";

export default function AccountInfo() {
  const { user } = useAuthContext();
  return (
    <div className="bg-white rounded-xl flex flex-col px-5 py-5">
      {/* header */}
      <div className="flex justify-between items-center">
        <span className="text-2xl font-semibold flex justify-center items-center">
          Account Info
          <DialogEditAccount />
        </span>
        <div className="border rounded-md flex px-4 py-4 items-end">
          <Luggage className="text-blue-500" width={30} height={30} />
          <span className="text-blue-500 font-bold text-xl mx-1">
            {user?.numOfTrip}
          </span>
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
          <h1 className="font-semibold">{user?.fullName}</h1>
          <div className="text-sm text-gray-500">
            Create at: {user?.createAt.toString()}
          </div>
          <div className="flex px-2 py-2 border rounded-md justify-center">
            <Star className="text-yellow-500" />
            <span className="mx-2 font-bold">{user?.ratingScores} start</span>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col w-full gap-4">
          {/* dob */}
          <div className="border rounded-md bg-neutral-100 flex flex-col px-4 gap-4 py-4">
            <div className="flex justify-between">
              <p className="text-sm">Date of birth</p>
              <p>{`${
                user?.dob === null ? "--/--/--" : user?.dob.toString()
              }`}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Gender</p>
              <p>{`${user?.gender ? "Male" : "Female"}`}</p>
            </div>
          </div>
          {/* contact */}
          <div className="flex flex-col gap-4 py-4">
            <div className="flex justify-between">
              <p className="text-sm">Phone</p>
              <div className="flex justify-center items-center">
                <p>{`${user?.phone === null ? "--/--/--" : user?.phone}`}</p>
                <DialogEditPhone />
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Email</p>
              <div className="flex justify-center items-center">
                <p>{`${user?.email === null ? "--/--/--" : user?.email}`}</p>
                <DialogEditEmail />
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Facebook</p>
              <div className="flex justify-center items-center">
                <p>{`${user?.linkFb === null ? "--/--/--" : user?.linkFb}`}</p>
                <Link width={16} height={16} className="ml-2 mr-1" />
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Google</p>
              <div className="flex justify-center items-center">
                <p>{`${user?.linkFb === null ? "--/--/--" : user?.linkFb}`}</p>
                <Link width={16} height={16} className="ml-2 mr-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
