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
    <li
      className={`${
        active ? "text-primary" : "text-black"
      } mb-5 md:mb-0 hover:text-primary transition duration-150 text-sm`}
    >
      <Link href={to} className="uppercase">
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
