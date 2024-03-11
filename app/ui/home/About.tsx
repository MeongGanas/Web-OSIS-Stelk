import Reveal from "@/app/ui/Reveal";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

const AboutUs = () => {
  return (
    <div className="bg-primary">
      <Reveal>
        <div className="container w-full py-20 h-full flex items-center text-white">
          <div>
            <h1 className="text-2xl font-extrabold uppercase mb-10">
              About Us
            </h1>
            <div className="flex flex-wrap justify-evenly items-center ml-5">
              <div className="w-full lg:w-1/2 pr-5">
                <h2 className={`text-2xl mb-5 ${satisfy.className}`}>Visi</h2>
                <p>
                  Menjadikan OSIS SMK Telkom Makassar sebagai wadah yang
                  menampung segala aspirasi, bakat, potensi dan kreativitas
                  dengan pemanfaatn Ilmu Pengetahuan dan Teknologi (IPTEK),
                  serta berakhlak mulia berlandaskan pancasila dengan
                  mengedepankan Iman dan Taqwa (IMTAQ).
                </p>
              </div>
              <div className="w-full lg:w-1/2 overflow-hidden text-black flex items-center justify-center rounded-md mt-5 md:mt-0">
                <img src="/images/raker.jpg" alt="" />
              </div>
            </div>
            <div className="flex flex-wrap mt-10 justify-evenly items-center">
              <div className="w-full lg:w-1/2 pl-5 lg:order-2">
                <h2 className={`text-2xl mb-3 ${satisfy.className}`}>Misi</h2>
                <ol className="pl-5 list-decimal text-sm md:text-base">
                  <li>
                    Mengutamakan keimanan dan ketakwaan kepada Tuhan Yang Maha
                    Esa, dan mengimplementasikan asas-asas Pancasila di berbagai
                    aspek kegiatan.
                  </li>
                  <li>
                    Menjadikan Pengurus OSIS sebagai penghubung koordinasi yang
                    terbuka dan bertanggung jawab dalam meningkatkan komunikasi
                    di setiap komponen OSIS.
                  </li>
                  <li>
                    Menciptakan program kerja dan kegiatan yang efektif
                    berdasarkan aspirasi serta kebutuhan SMK Telkom Makassar
                    dengan kolaborasi antara pihak internal dan eksternal OSIS.
                  </li>
                  <li>
                    Meningkatkan kinerja dan kualitas ekstrakurikuler sekolah
                    guna membentuk siswa/i kompeten dan progresif.
                  </li>
                  <li>
                    Mengoptimalkan fungsi sosial media sebagai sarana informatif
                    berbasis online.
                  </li>
                  <li>
                    Mengembangkan program kerja berkelanjutan OSIS periode
                    sebelumnya dengan kreativitas baru.
                  </li>
                </ol>
              </div>
              <div className="w-full lg:w-1/2 bg-white h-fit overflow-hidden lg:order-1 text-black flex items-center justify-center rounded-md mt-5 md:mt-0">
                <img src="/images/raker.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default AboutUs;
