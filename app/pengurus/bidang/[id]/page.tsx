"use client";
import { useParams } from "next/navigation";
import HomePengurus from "../../../ui/pengurus/home";
import TugasUmum from "../../../ui/pengurus/tugas";
import Proker from "@/app/ui/pengurus/proker";

const Bidang = () => {
  const { id } = useParams();

  return (
    <>
      <HomePengurus
        name={`bidang ${id}`}
        namaBidang="KEIMANAN DAN KETAKWAAN KEPADA TUHAN YANG MAHA ESA"
      />
      <Proker />
    </>
  );
};

export default Bidang;
