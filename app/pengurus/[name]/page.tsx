"use client";
import { useParams } from "next/navigation";
import HomePengurus from "../../ui/pengurus/home";
import TugasUmum from "../../ui/pengurus/tugas";

const Bidang = () => {
  const { name } = useParams();

  return (
    <div className="py-40">
      <HomePengurus name={name.toString().replace("-", " ")} />
      <TugasUmum />
    </div>
  );
};

export default Bidang;
