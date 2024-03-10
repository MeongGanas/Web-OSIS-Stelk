import CardMisi from "@/app/components/CardMisi";
import Reveal from "@/app/components/Reveal";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

const AboutUs2 = () => {
  return (
    <div className="bg-primary">
      <Reveal>
        <div className="w-full py-32 h-full flex items-center text-white">
          <div className="container">
            <div className="w-full text-center">
              <h1 className="font-extrabold mb-5 text-center text-4xl">
                Organisasi Siswa Intra Sekolah STELK
              </h1>
              <p className="text-sm text-slate-100 italic">
                Organisasi yang menampung segala aspirasi, bakat, potensi dan
                kreativitas, serta berakhlak mulia.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              <CardMisi
                title="Mengutamakan Keimanan dan ketakwaan"
                desc="Mengutamakan keimanan dan ketakwaan kepada Tuhan Yang Maha
                  Esa, dan mengimplementasikan asas-asas Pancasila di berbagai
                  aspek kegiatan."
              />
              <CardMisi
                title="Terbuka dan Bertanggung Jawab"
                desc="Menjadikan Pengurus OSIS sebagai penghubung koordinasi yang terbuka dan bertanggung jawab dalam meningkatkan komunikasi di setiap komponen OSIS."
              />
              <CardMisi
                title="Menciptakan Kegiatan Yang Efektif"
                desc="Menciptakan program kerja dan kegiatan yang efektif berdasarkan aspirasi serta
                kebutuhan SMK Telkom Makassar dengan kolaborasi antara pihak internal dan eksternal OSIS."
              />
              <CardMisi
                title="Meningkatkan Kinerja dan Kualitas"
                desc="Meningkatkan kinerja dan kualitas ekstrakurikuler sekolah guna membentuk siswa/i kompeten dan progresif."
              />
              <CardMisi
                title="Mengoptimalkan Fungsi Sosial Media"
                desc="Mengoptimalkan fungsi sosial media sebagai sarana informatif berbasis online."
              />
              <CardMisi
                title="Mengembangkan Program Kerja"
                desc="Mengembangkan program kerja berkelanjutan OSIS periode sebelumnya dengan kreativitas baru."
              />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default AboutUs2;
