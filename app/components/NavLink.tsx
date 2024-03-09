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
      } hover:text-primary bg-transparent px-0 transition duration-150 text-sm font-bold w-fit block text-left uppercase`}
      disableAnimation={true}
    >
      <Link href={to} className="px-5">
        {name}
      </Link>
    </Button>
  );
};

export default NavLink;
