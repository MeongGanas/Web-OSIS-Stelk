import { getDetailBidang } from "@/app/lib/data";
import HomePengurus from "./HomePengurus";
import TugasUmum from "./TugasUmum";
import Anggota from "./Anggota";

export default async function PengurusContent({
  id,
  admin,
}: {
  id: String;
  admin?: boolean;
}) {
  const bidang = await getDetailBidang(id);
  return (
    <>
      <HomePengurus
        admin={admin}
        name={`Bidang ${bidang.id}`}
        namaBidang={bidang.nama}
      />
      <TugasUmum admin={admin} />
      <Anggota />
    </>
  );
}
