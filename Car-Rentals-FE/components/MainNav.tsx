import Link from "next/link";
import { Button } from "./ui/button";

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
    name: "Log in",
    link: "/#",
  },
];

export default function MainNav() {
  return (
    <span>
      <ul className="flex space-x-2 items-center">
        {NavLinks.map(({ id, name, link }) => (
          <li
            key={id}
            className="px-2 cursor-pointer capitalize py-2 font-semibold text-sm hover:text-blue-500"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </span>
  );
}
