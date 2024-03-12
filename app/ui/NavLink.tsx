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
      className="hover:text-primary bg-transparent px-0 transition duration-150 text-sm font-bold w-fit block text-left uppercase"
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
