export default function Proker() {
  return (
    <div className="min-h-screen py-40 bg-primary text-white">
      <div className="container">
        <div className="w-full text-center mb-10">
          <h1 className="text-4xl font-extrabold mb-5">Program Kerja</h1>
          <p className="text-sm italic text-slate-50">
            Adapula program kerja yang kami jalankan sebagai berikut.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center">
          <div className="p-5">
            <h1 className="text-2xl font-bold mb-2">Isra Mi’raj</h1>
            <p className="text-sm text-justify text-slate-50">
              Kegiatan ini akan dirangkaikan dengan beberapa kegiatan seperti,
              membaca sholawat bersama, pembacaan ayat suci Al-Quran dan
              mendengarkan ceramah dari Ustadz atau Guru.
            </p>
          </div>
          <div className="p-5">
            <h1 className="text-2xl font-bold mb-2">Semarak Ramadhan</h1>
            <p className="text-sm text-justify text-slate-50">
              Kegiatan ini berisi kegiatan seperti, mempelajari materi-materi
              keislaman seperti cara berwudhu dan bertayamum yang benar,
              mendalami Al-Quran, mendengarkan ceramah, serta tambahan ice
              breaking.
            </p>
          </div>
          <div className="p-5">
            <h1 className="text-2xl font-bold mb-2">Perayaan Paskah</h1>
            <p className="text-sm text-justify">
              Kegiatan ini akan dirangkaikan dengan beberapa kegiatan seperti,
              beribadah dan games dengan konsep tema paskah seperti mencari
              telur, jalan obor, Cerdas Cermat Alkitab (CCA), dan sebagainya.
            </p>
          </div>
          <div className="p-5">
            <h1 className="text-2xl font-bold mb-2">
              Maulid Nabi Muhammad SAW
            </h1>
            <p className="text-sm text-justify">
              kegiatan ini akan ada ceramah dari Ustadz atau guru, serta akan
              membaca sholawat bersama, lomba bakul antar kelas, dan juga makan
              bersama teman dan guru untuk masing-masing kelas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
