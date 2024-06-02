"use client";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavLinks = [
  {
    id: "1",
    name: "Become our partner",
    link: "/#",
  },
  {
    id: "2",
    name: "About us",
    link: "/#",
  },
  {
    id: "3",
    name: "Support",
    link: "/#",
  },
  {
    id: "4",
    name: "Sign in",
    link: "/#",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <h1 className="text-3xl font-bold text-blue-600">CarRentals</h1>
        </Link>
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 font-semibold">
            {NavLinks.map((data) => (
              <li key={data.id} className="">
                <a
                  href={data.link}
                  className={`${data.id === "1" ? "text-blue-600" : ""}  `}
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {isOpen && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full max-h-[50vh] bg-gradient-to-b from-white to-blue-50 text-black-100">
            {NavLinks.map(({ id, name, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-2 font-semibold"
              >
                <Link onClick={() => setIsOpen(!isOpen)} href={link}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
