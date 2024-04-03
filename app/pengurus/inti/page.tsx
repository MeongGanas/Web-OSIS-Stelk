import { AnggotaBidang } from "@/app/ui/pengurus/Anggota";
import { HomeInti } from "../../ui/pengurus/HomePengurus";
import TugasUmum from "../../ui/pengurus/TugasUmum";
import { getAllAnggotaInti, getIntiData } from "@/app/lib/data";

export default async function Inti() {
  const inti = await getIntiData();
  // const Anggota = await getAllAnggotaInti();
  return (
    <>
      <HomeInti data={inti} />
      <TugasUmum />
      {/* <AnggotaInti anggota /> */}
    </>
  );
}
