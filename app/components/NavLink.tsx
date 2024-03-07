import Link from "next/link";

const NavLink = ({
  pathname,
  name,
  active,
}: {
  pathname: string;
  name: string;
  active: string;
}) => {
  return (
    <li
      className={`${
        pathname === active ? "text-primary" : ""
      } mb-5 md:mb-0 hover:text-primary transition duration-150 text-sm`}
    >
      <Link href={"#"} className="uppercase">
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
