"use client";
import Link from "next/link";
import { Bidang } from "@/app/lib/definitions";
import { useState } from "react";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import DropdownBidang from "./DropdownBidang";
import Image from "next/image";
import { Logout } from "@/app/lib/actions";
import { Button } from "@nextui-org/react";

export default function Navbar({ bidangs }: { bidangs: Array<Bidang> }) {
  const [activeNav, setActiveNav] = useState(false);
  const pathname = usePathname();
  const isInDashboard = pathname.startsWith("/dashboard");

  return (
    <div
      id="navbar"
      className="relative z-[9999] flex w-full items-center justify-between bg-white px-5 py-7 md:px-10"
    >
      <div className="flex max-w-80 items-center gap-7">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <Image src="/icon/telkom.svg" alt="" width={60} height={60} />
          </Link>
          <Link href={"/"}>
            <Image src="/icon/osis.svg" alt="" width={45} height={45} />
          </Link>
        </div>
        <h1 className="mt-1 text-wrap font-extrabold text-black">
          OSIS SMK TELKOM MAKASSAR
        </h1>
      </div>
      <div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 transition duration-150 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          onClick={() => {
            setActiveNav(!activeNav);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
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
              ? "absolute left-0 top-full block w-full scale-100 bg-white px-5 pb-5 shadow-md"
              : "absolute left-0 top-full w-full scale-0"
          } items-center gap-10 font-semibold transition-all duration-200 md:static md:flex md:h-full md:w-full md:scale-100 md:shadow-none`}
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
          <form
            action={Logout}
            className={`${isInDashboard ? "block" : "hidden"}`}
          >
            <Button
              type="submit"
              className="bg-transparent px-5 font-semibold uppercase transition duration-200 hover:text-primary"
            >
              Logout
            </Button>
          </form>
        </ul>
      </div>
    </div>
  );
}
