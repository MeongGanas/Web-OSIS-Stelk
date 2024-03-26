import { Instagram } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export default function CardAnggota() {
  return (
    <div className="">
      <div className="relative px-5">
        <div className="absolute bottom-0 left-0 right-0 top-16 -z-[99] w-full rounded-md bg-primary"></div>
        <Image
          src={"/images/intiosis/waketos.png"}
          width={250}
          height={60}
          alt="waketos"
        />
      </div>
      <div className="px-5 py-2">
        <h1 className="mb-2 mt-1 text-xl italic text-primary">Nabil</h1>
        <h3 className="font-bold text-primary">Wakil Ketua OSIS 1</h3>
        <span className="my-2 block h-1 w-32 rounded-md bg-primary"></span>
        <Link href={""}>
          <Instagram />
        </Link>
      </div>
    </div>
  );
}
