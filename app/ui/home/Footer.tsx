"use client";
import { FacebookOutlined, Instagram, YouTube } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="v bg-slate-950 px-5 py-32">
      <div className="flex w-full flex-wrap justify-evenly text-white">
        <div className="mb-10 w-full max-w-sm sm:mb-0">
          <div className="-ml-3 mb-3 flex items-center">
            <Image
              src={"/icon/osisputih.png"}
              width={55}
              height={55}
              alt="logo-osis"
            />
            <h1 className="text-2xl">About Us</h1>
          </div>
          <p className="text-slate-50">
            Organisasi yang bekerja sama untuk melakukan kegiatan-kegiatan yang
            telah kami susun.
          </p>
        </div>
        <div className="mt-2 w-full max-w-sm">
          <h1 className="mb-3 text-2xl">Contact Us</h1>
          <div className="text-slate-50">
            <p className="mb-3">osisstelkmks@gmail.com</p>
            <ul className="flex gap-5">
              <li className="transition duration-200 hover:-translate-y-1">
                <Link href={""}>
                  <Instagram />
                </Link>
              </li>
              <li className="transition duration-200 hover:-translate-y-1">
                <Link href={""}>
                  <FacebookOutlined />
                </Link>
              </li>
              <li className="transition duration-200 hover:-translate-y-1">
                <Link href={""}>
                  <YouTube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
