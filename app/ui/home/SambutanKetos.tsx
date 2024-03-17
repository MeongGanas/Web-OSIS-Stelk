import { ContainerReveal } from "@/app/ui/Reveal";
import Image from "next/image";

export default function SambutanKetos() {
  return (
    <div className="container w-full min-h-screen flex items-center translate-y-[8%]">
      <ContainerReveal>
        <div className="flex items-center flex-wrap">
          <div className="w-full order-2 flex justify-center md:order-1 md:w-1/2">
            <Image
              src="/images/sambutanketos.png"
              className="max-w-full"
              height={500}
              width={500}
              alt="ketos"
            />
          </div>
          <div className="w-full order-1 md:order-2 md:w-1/2">
            <h1 className="text-primary mb-5 font-extrabold text-2xl md:text-4xl">
              Pesan Ketua OSIS
            </h1>
            <p className="mb-10">
              &quot;Halo teman-teman! OSIS SMK Telkom Makassar merupakan tempat
              bagi siswa(i) agar dapat berkontribusi dan berpatisipasi secara
              aktif dalam mewujudkan Visi dan Misi SMK Telkom Makassar, melalui
              kreatifitas dan kerja sama yang baik dalam melaksanakan berbagai
              program kerja.{" "}
              <span className="block mt-2">
                Kami akan selalu berusaha yang terbaik dalam mengemban amanah
                yang telah diberikan. Mari bersama-sama melangkah menuju
                kesuksesan!&quot;
              </span>
            </p>
            <h2 className="text-primary mb-2 font-bold text-xl md:text-2xl">
              Narisyah Aqila
            </h2>
            <h4>
              Ketua OSIS Periode <span className="italic">2023/2024</span>
            </h4>
          </div>
        </div>
      </ContainerReveal>
    </div>
  );
}
