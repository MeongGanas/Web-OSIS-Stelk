"use client";
import { useParams } from "next/navigation";
import HomePengurus from "../../../ui/pengurus/home";
import TugasUmum from "../../../ui/pengurus/tugas";

const Bidang = () => {
  const { id } = useParams();

  return (
    <>
      <HomePengurus name={`bidang ${id}`} />
      <TugasUmum />
    </>
  );
};

export default Bidang;
