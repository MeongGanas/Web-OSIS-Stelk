"use client";
import { useParams } from "next/navigation";
import HomePengurus from "./home";
import TugasUmum from "./tugas";

interface Bidang {
  id: Number;
  name: String;
}

export default function Pengurus({ bidangs }: { bidangs: Array<Bidang> }) {
  const { id } = useParams();
  const detailBidang = bidangs.filter((bidang) => bidang.id === Number(id))[0];

  return (
    <>
      <HomePengurus name={`Bidang ${id}`} namaBidang={detailBidang.name} />
      <TugasUmum />
    </>
  );
}
