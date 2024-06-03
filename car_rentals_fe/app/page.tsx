"use client";
import { Hero, ListCar, NavBar, SearchBar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <SearchBar />
      <ListCar />
    </main>
  );
}
