import { Instagram } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export default function TugasUmum({ admin }: { admin?: boolean }) {
  return (
    <div className="bg-primary">
      <div className="container py-28 md:pt-0">
        <div className="mb-10 w-full text-center text-white">
          <h1 className="mb-5 text-4xl font-extrabold">Tugas Umum</h1>
          <p className="text-sm">
            Mengawasi kerja setiap bidang dan koordinasi kegiatan bersama dengan
            guru dan pimpinan sekolah.
          </p>
        </div>
        <div className="block items-center justify-center gap-5 md:flex">
          <div className="mb-5 flex w-full justify-center md:mb-0 md:w-fit">
            <Image
              src={"/images/intiosis/ketos.png"}
              width={200}
              height={60}
              alt="ketos"
              className="max-w-sm"
            />
          </div>
          <div className="w-full px-5 text-white md:w-fit">
            <h2 className="mb-2">Ketua OSIS</h2>
            <h1 className="text-4xl italic">Narisyah Aqila</h1>
            <span className="my-5 block h-1 w-32 rounded-md bg-white"></span>
            <Link href={""}>
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
