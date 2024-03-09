import { Button } from "@nextui-org/react";
import Link from "next/link";

const NavLink = ({
  name,
  active,
  to,
}: {
  name: string;
  active: boolean;
  to: string;
}) => {
  return (
    <Button
      className={`${
        active ? "text-primary" : "text-black"
      } hover:text-primary bg-transparent transition duration-150 text-sm font-bold w-fit px-0 block text-left`}
    >
      <Link href={to} className="uppercase">
        {name}
      </Link>
    </Button>
  );
};

export default NavLink;
