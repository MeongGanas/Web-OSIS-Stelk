import Reveal from "../Reveal";

export default function VisiMisi() {
  return (
    <div className="bg-primary py-20 relative z-[999] text-white">
      <Reveal>
        <div className="container mb-10">
          <h1 className="text-4xl font-extabold">About Us</h1>
        </div>
      </Reveal>
      <div className=" w-full flex justify-center">
        <div className="max-w-screen-lg container text-center">
          <Reveal>
            <div id="visi" className="mb-10">
              <h1 className="text-2xl mb-5">
                Visi <span className="font-bold">OSIS STELK</span>
              </h1>
              <p className="text-slate-50 text-sm">
                Menjadikan OSIS SMK Telkom Makassar sebagai wadah yang menampung
                segala aspirasi, bakat, potensi dan kreativitas dengan
                pemanfaatn Ilmu Pengetahuan dan Teknologi (IPTEK), serta
                berakhlak mulia berlandaskan pancasila dengan mengedepankan Iman
                dan Taqwa (IMTAQ).
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div id="misi">
              <h1 className="text-2xl mb-5">
                Misi <span className="font-bold">OSIS STELK</span>
              </h1>
              <ol className="list-decimal ml-5 text-justify">
                <li className="mb-2 text-slate-50 text-sm">
                  Mengutamakan keimanan dan ketakwaan kepada Tuhan Yang Maha
                  Esa, dan mengimplementasikan asas-asas Pancasila di berbagai
                  aspek kegiatan.
                </li>
                <li className="mb-2 text-slate-50 text-sm">
                  Menjadikan Pengurus OSIS sebagai penghubung koordinasi yang
                  terbuka dan bertanggung jawab dalam meningkatkan komunikasi di
                  setiap komponen OSIS.
                </li>
                <li className="mb-2 text-slate-50 text-sm">
                  Menciptakan program kerja dan kegiatan yang efektif
                  berdasarkan aspirasi serta kebutuhan SMK Telkom Makassar
                  dengan kolaborasi antara pihak internal dan eksternal OSIS.
                </li>
                <li className="mb-2 text-slate-50 text-sm">
                  Meningkatkan kinerja dan kualitas ekstrakurikuler sekolah guna
                  membentuk siswa/i kompeten dan progresif.
                </li>
                <li className="mb-2 text-slate-50 text-sm">
                  Mengoptimalkan fungsi sosial media sebagai sarana informatif
                  berbasis online.
                </li>
                <li className="mb-2 text-slate-50 text-sm">
                  Mengembangkan program kerja berkelanjutan OSIS periode
                  sebelumnya dengan kreativitas baru.
                </li>
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
