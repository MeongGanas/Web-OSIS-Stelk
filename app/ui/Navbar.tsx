"use client";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import DropdownBidang from "./DropdownBidang";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false);
  const pathname = usePathname().split("/")[1];

  return (
    <div
      id="navbar"
      className="w-full relative z-[9999] px-5 md:px-10 py-7 flex justify-between items-center"
    >
      <div className="flex items-center gap-7 max-w-80">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <img src="/icon/telkom.svg" alt="" />
          </Link>
          <Link href={"/"}>
            <img src="/icon/osis.svg" alt="" />
          </Link>
        </div>
        <h1 className="font-extrabold mt-1 text-wrap">
          OSIS SMK TELKOM MAKASSAR
        </h1>
      </div>
      <div>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-150"
          onClick={() => {
            setActiveNav(!activeNav);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <ul
          className={`${
            activeNav
              ? "block w-full absolute top-full bg-white pb-5  px-5 left-0 scale-100"
              : "absolute top-full w-full left-0 scale-0"
          } md:flex md:static md:scale-100 items-center md:w-full md:h-full gap-10 font-semibold transition-all duration-200`}
        >
          <NavLink name="home" active={pathname === ""} to={"/"} />
          <DropdownBidang active={pathname === "pengurus"} />
          <NavLink
            name="events"
            active={pathname === "events"}
            to={"/events"}
          />
          <NavLink
            name="announcement"
            active={pathname === "announcement"}
            to={"/announcement"}
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
