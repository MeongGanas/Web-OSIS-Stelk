"use client";
import { Button } from "@nextui-org/react";
import clsx from "clsx";
import Link from "next/link";

export default function NavLink({
  name,
  pathname,
  to,
  setActiveNav,
}: {
  name: string;
  pathname: string;
  to: string;
  setActiveNav: Function;
}) {
  return (
    <Button
      className="block w-fit bg-transparent px-0 text-left text-sm font-bold uppercase transition duration-150 hover:text-primary"
      disableAnimation={true}
      onClick={() => setActiveNav(false)}
    >
      <Link
        href={to}
        className={clsx("px-5", { "text-primary": pathname === to })}
      >
        {name}
      </Link>
    </Button>
  );
}
