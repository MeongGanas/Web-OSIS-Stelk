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
      className={clsx(
        "block h-fit w-fit bg-transparent px-5 text-left font-bold uppercase transition duration-150 hover:text-primary",
        { "text-primary": pathname === to },
      )}
      disableAnimation={true}
      href={to}
      as={Link}
      onClick={() => setActiveNav(false)}
    >
      {name}
    </Button>
  );
}
