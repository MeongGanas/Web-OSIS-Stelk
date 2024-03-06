"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      id="navbar"
      className="w-full relative z-[9999] px-5 md:px-10 py-7 flex justify-between items-center"
    >
      <div className="flex items-center gap-7 max-w-80">
        <div className="flex items-center gap-2">
          <Link href={"#home"}>
            <img src="/icon/telkom.svg" alt="" />
          </Link>
          <Link href={"#home"}>
            <img src="/icon/osis.svg" alt="" />
          </Link>
        </div>
        <h1 className="font-extrabold mt-1 text-wrap">
          OSIS SMK TELKOM MAKASSAR
        </h1>
      </div>
      <div className="relative">
        <button className="block md:hidden"></button>
        <ul className="hidden md:flex gap-10 font-semibold">
          <li className="hover:text-primary transition duration-150 text-sm">
            <Link href={"#"}>HOME</Link>
          </li>
          <li className="hover:text-primary transition duration-150 text-sm">
            <Link href={"#"}>BIDANG</Link>
          </li>
          <li className="hover:text-primary transition duration-150 text-sm">
            <Link href={"#"}>EVENTS</Link>
          </li>
          <li className="hover:text-primary transition duration-150 text-sm">
            <Link href={"#"}>ANNOUNCEMENT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
