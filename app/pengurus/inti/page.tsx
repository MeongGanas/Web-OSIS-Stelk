"use client";
import Anggota from "@/app/ui/pengurus/Anggota";
import HomePengurus from "../../ui/pengurus/HomePengurus";
import TugasUmum from "../../ui/pengurus/TugasUmum";

export default function Bidang() {
  return (
    <>
      <HomePengurus name={"Inti OSIS"} />
      <TugasUmum />
      <Anggota />
    </>
  );
}
