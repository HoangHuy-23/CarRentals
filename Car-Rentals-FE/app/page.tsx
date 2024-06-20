"use client";

import Image from "next/image";
import landingImage from "../public/landing1.png";
import appDownloadImage from "../public/appDownload.png";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";
import Hero from "@/components/Hero";
import { SearchLocation } from "@/components/SearchLocation";

export default function Home() {
  const router = useRouter();

  const handleButtonSearch = () => {
    router.push("/search");
  };
  return (
    <>
      {/* Hero */}
      <Hero />
      <div className="container mx-auto flex-1 py-10">
        <div className="flex flex-col gap-12">
          {/* Search */}
          <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 px-2">
            <h1 className="text-5xl font-bold tracking-tighter text-blue-600">
              Let's find your companion
            </h1>
            <span className="text-xl">Car is just a click away!</span>

            <form className="flex items-center justify-center max-md:flex-col w-full relative max-sm:gap-4 gap-6">
              <div className="flex flex-col justify-center items-center max-md:w-full">
                <label
                  htmlFor="pickUpDate"
                  className="text-gray-500 font-semibold text-sm ml-2 self-start"
                >
                  Location
                </label>
                <SearchLocation />
              </div>
              <div className="flex flex-col justify-center items-center max-md:w-full">
                <label
                  htmlFor="pickUpDate"
                  className="text-gray-500 font-semibold text-sm ml-2 self-start"
                >
                  Pick-up Date
                </label>
                <input
                  type="datetime-local"
                  name="pickUpDate"
                  className="w-full h-[40px] p-2 bg-white border-[1px] outline-none rounded-md cursor-pointer text-sm hover:bg-slate-100 font-normal"
                />
              </div>
              <div className="flex flex-col justify-center items-center max-md:w-full">
                <label
                  htmlFor="pickUpDate"
                  className="text-gray-500 font-semibold text-sm ml-2 self-start"
                >
                  Drop-off Date
                </label>
                <input
                  type="datetime-local"
                  name="pickUpDate"
                  className="w-full h-[40px] p-2 bg-white border-[1px] outline-none rounded-md cursor-pointer text-sm hover:bg-slate-100 font-normal"
                />
              </div>
              <Button
                type="button"
                onClick={handleButtonSearch}
                className="bg-blue-500 rounded-lg hover:bg-blue-300 mt-5 h-[40px]"
              >
                Search
              </Button>
            </form>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Image src={landingImage} alt="" className="rounded-xl" />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <span className="font-bold text-3xl tracking-tighter">
                Car rental even faster!
              </span>
              <span>
                Download the CarRentals App for faster ordering and personalized
                recommendations
              </span>
              <Image src={appDownloadImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
