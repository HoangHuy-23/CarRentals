"use client";
import Link from "next/link";
import React from "react";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <div className="border-b-2 border-b-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold tracking-tighter text-blue-500"
        >
          CarRentals
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
}
