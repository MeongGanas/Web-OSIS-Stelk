import { getDetailBidang } from "@/app/lib/data";
import HomePengurus from "./HomePengurus";
import TugasUmum from "./TugasUmum";
import Anggota from "./Anggota";

export default async function PengurusContent({
  id,
  admin,
}: {
  id: string;
  admin?: boolean;
}) {
  const bidang = await getDetailBidang(id);
  return (
    <>
      <HomePengurus data={bidang} />
      <TugasUmum />
      <Anggota />
    </>
  );
}
