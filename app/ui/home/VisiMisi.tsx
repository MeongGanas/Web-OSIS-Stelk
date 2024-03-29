import { getVisiMisi } from "@/app/lib/data";
import { ContainerReveal } from "../Reveal";

export default async function VisiMisi() {
  const visiMisi = await getVisiMisi();

  return (
    <div className="relative z-[999] bg-primary py-20 text-white">
      <ContainerReveal>
        <div className="container mb-10 max-w-screen-lg">
          <h1 className="mb-4 text-center text-4xl font-extrabold uppercase">
            About Osis stelk
          </h1>
          <p className="text-center text-sm">
            OSIS | Organisasi Siswa Intra Sekolah adalah organisasi yang bekerja
            sama untuk melakukan kegiatan-kegiatan yang telah disusun dan
            disepakati bersama.
          </p>
        </div>
      </ContainerReveal>
      <div className="flex w-full justify-center">
        <div className="container max-w-screen-lg text-center">
          <ContainerReveal>
            <div id="visi" className="mb-10">
              <h1 className="mb-5 text-2xl">Visi OSIS Stelk</h1>
              <p className="text-sm text-slate-50">{visiMisi.visi}</p>
            </div>
          </ContainerReveal>

          <ContainerReveal>
            <div id="misi">
              <h1 className="mb-5 text-2xl">Misi OSIS Stelk</h1>
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
