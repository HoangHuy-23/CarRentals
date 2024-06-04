"use client";
import { Hero, ListCar, NavBar, SearchBar, Selector } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <SearchBar />
      <ListCar />
      {/* <Selector /> */}
    </main>
  );
}
