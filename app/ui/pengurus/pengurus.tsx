import { getDetailBidang } from "@/app/lib/data";
import HomePengurus from "./home";
import TugasUmum from "./tugas";

export default async function Pengurus({
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
    </>
  );
}
