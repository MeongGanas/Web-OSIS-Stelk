"use client";
import { useParams } from "next/navigation";
import HomePengurus from "../../ui/pengurus/home";
import TugasUmum from "../../ui/pengurus/tugas";

const Bidang = () => {
  const { name } = useParams();

  return (
    <>
      <HomePengurus name={name.toString().replace("-", " ")} />
      <TugasUmum />
    </>
  );
};

export default Bidang;
