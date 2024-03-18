"use client";
import Link from "next/link";
import { Bidang } from "@/app/libs/definitions";
import { useState } from "react";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import DropdownBidang from "./DropdownBidang";

export default function Navbar({ bidangs }: { bidangs: Array<Bidang> }) {
  const [activeNav, setActiveNav] = useState(false);
  const pathname = usePathname();
  const isInDashboard = pathname.startsWith("/dashboard");

  return (
    <div
      id="navbar"
      className="w-full bg-white relative z-[9999] px-5 md:px-10 py-7 flex justify-between items-center"
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
        <h1 className="font-extrabold text-black mt-1 text-wrap">
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
              ? "block w-full absolute top-full bg-white pb-5 shadow-md px-5 left-0 scale-100"
              : "absolute top-full w-full left-0 scale-0"
          } md:flex md:static md:scale-100 items-center md:w-full md:h-full gap-10 font-semibold transition-all duration-200`}
        >
          <NavLink
            setActiveNav={setActiveNav}
            name="home"
            pathname={pathname}
            to={isInDashboard ? "/dashboard/home" : "/"}
          />
          <DropdownBidang
            pathname={pathname}
            setActiveNav={setActiveNav}
            isInDashboard={isInDashboard}
            bidangs={bidangs}
          />
          <NavLink
            setActiveNav={setActiveNav}
            name="events"
            pathname={pathname}
            to={isInDashboard ? "/dashboard/events" : "/events"}
          />
          <NavLink
            setActiveNav={setActiveNav}
            name="announcement"
            pathname={pathname}
            to={isInDashboard ? "/dashboard/announcement" : "/announcement"}
          />
        </ul>
      </div>
    </div>
  );
}