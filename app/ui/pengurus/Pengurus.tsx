import { getDetailBidang } from "@/app/lib/data";
import TugasUmum from "./TugasUmum";
import { AnggotaBidangList } from "./Anggota";
import { HomePengurus } from "./HomePengurus";

export default async function PengurusContent({ id }: { id: string }) {
  const bidang = await getDetailBidang(id);
  return (
    <>
      <HomePengurus data={bidang} />
      <TugasUmum />
      {/* <AnggotaBidang /> */}
    </>
  );
}
