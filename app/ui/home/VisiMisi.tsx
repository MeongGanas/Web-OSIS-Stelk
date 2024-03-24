import { getVisiMisi } from "@/app/lib/data";
import { ContainerReveal } from "../Reveal";
import Link from "next/link";
import { Edit } from "@mui/icons-material";
import clsx from "clsx";

export default async function VisiMisi({ admin }: { admin?: boolean }) {
  const visiMisi = await getVisiMisi();

  return (
    <div className="relative z-[999] bg-primary py-20 text-white">
      <ContainerReveal>
        <div className="container mb-10">
          <h1 className="font-extabold text-4xl">About Us</h1>
        </div>
      </ContainerReveal>
      <div className=" flex w-full justify-center">
        <div className="container max-w-screen-lg text-center">
          <ContainerReveal>
            <div id="visi" className="mb-10">
              <h1 className="mb-5 text-2xl">
                Visi{" "}
                <span className={clsx("font-bold", { "mr-5": admin })}>
                  OSIS STELK
                </span>
                <Link href={""} className={clsx(admin ? "inline" : "hidden")}>
                  <Edit />
                </Link>
              </h1>
              <p className="text-sm text-slate-50">{visiMisi.visi}</p>
            </div>
          </ContainerReveal>

          <ContainerReveal>
            <div id="misi">
              <h1 className="mb-5 text-2xl">
                Misi{" "}
                <span className={clsx("font-bold", { "mr-5": admin })}>
                  OSIS STELK
                </span>
                <Link href={""} className={clsx(admin ? "inline" : "hidden")}>
                  <Edit />
                </Link>
              </h1>
              <ol className="ml-5 list-decimal text-justify">
                {visiMisi.misi &&
                  visiMisi.misi.map((misi: string, i: number) => (
                    <li className="mb-2 text-sm text-slate-50" key={i}>
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
