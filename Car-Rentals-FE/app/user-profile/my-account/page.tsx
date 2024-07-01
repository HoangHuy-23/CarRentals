import AccountInfo from "@/components/my-account/AccountInfo";
import DriverLicense from "@/components/my-account/DriverLicense";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-8">
      {/* card 1 */}
      <AccountInfo />
      {/* card 2 */}
      <DriverLicense />
    </div>
  );
}
