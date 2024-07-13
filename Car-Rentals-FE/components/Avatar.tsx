import { User } from "@/types";
import React, { useEffect, useState } from "react";

type Props = {
  data: User | undefined;
  big: boolean;
};
export default function Avatar({ data, big }: Props) {
  const paddingClass = `${big ? "w-32 h-32" : "w-16 h-16"}`;
  const textClass = `${big ? "text-6xl" : "text-3xl"}`;

  const [imageExists, setImageExists] = useState<boolean | null>(null);

  useEffect(() => {
    const checkImageExists = async (url: string) => {
      if (url !== null) {
        setImageExists(true);
      } else setImageExists(false);
    };

    checkImageExists(data?.avatar || "");
  }, [data?.avatar]);
  return (
    <>
      {imageExists ? (
        <img
          src={data?.avatar}
          className={`${paddingClass} rounded-full border object-cover`}
        ></img>
      ) : (
        <div
          className={`bg-blue-300 w- ${paddingClass} text-white rounded-full border relative flex justify-center items-center`}
        >
          <span className={`absolute ${textClass} `}>
            {data?.fullName.charAt(0)}
          </span>
        </div>
      )}
    </>
  );
}
