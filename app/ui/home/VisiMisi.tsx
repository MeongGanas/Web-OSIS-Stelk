import { getVisiMisi } from "@/app/lib/data";
import { ContainerReveal } from "../Reveal";
import Link from "next/link";
import { Edit } from "@mui/icons-material";
import clsx from "clsx";

export default async function VisiMisi({ admin }: { admin?: boolean }) {
  const visiMisi = await getVisiMisi();

  return (
    <div className="bg-primary py-20 relative z-[999] text-white">
      <ContainerReveal>
        <div className="container mb-10">
          <h1 className="text-4xl font-extabold">About Us</h1>
        </div>
      </ContainerReveal>
      <div className=" w-full flex justify-center">
        <div className="max-w-screen-lg container text-center">
          <ContainerReveal>
            <div id="visi" className="mb-10">
              <h1 className="text-2xl mb-5">
                Visi{" "}
                <span className={clsx("font-bold", { "mr-5": admin })}>
                  OSIS STELK
                </span>
                <Link href={""} className={clsx(admin ? "inline" : "hidden")}>
                  <Edit />
                </Link>
              </h1>
              <p className="text-slate-50 text-sm">{visiMisi.visi}</p>
            </div>
          </ContainerReveal>

          <ContainerReveal>
            <div id="misi">
              <h1 className="text-2xl mb-5">
                Misi{" "}
                <span className={clsx("font-bold", { "mr-5": admin })}>
                  OSIS STELK
                </span>
                <Link href={""} className={clsx(admin ? "inline" : "hidden")}>
                  <Edit />
                </Link>
              </h1>
              <ol className="list-decimal ml-5 text-justify">
                {visiMisi.misi &&
                  visiMisi.misi.map((misi: string, i: number) => (
                    <li className="mb-2 text-slate-50 text-sm" key={i}>
                      {misi}
                    </li>
                  ))}
              </ol>
            </div>
          </ContainerReveal>
        </div>
      </div>
    </div>
  );
}
