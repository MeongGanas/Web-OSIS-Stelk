import { getDetailBidang } from "@/app/libs/data";
import HomePengurus from "./home";
import TugasUmum from "./tugas";

interface Bidang {
  id: Number;
  name: String;
}

export default async function Pengurus({ id }: { id: String }) {
  const bidang = await getDetailBidang(id);
  return (
    <>
      <HomePengurus name={`Bidang ${bidang.id}`} namaBidang={bidang.name} />
      <TugasUmum />
    </>
  );
}
