import { ContainerReveal } from "@/app/ui/Reveal";

export default function Manfaat() {
  return (
    <div className="relative min-h-screen">
      <div className="w-full shapebg2 h-full">
        <ContainerReveal>
          <div className="container w-full h-full flex items-center relative py-32 text-white">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2">
                <h1 className="text-2xl md:text-3xl font-extrabold uppercase mb-10">
                  Belajar dan Bekerja Bersama dalam Tim untuk menyukseskan
                  Program Kerja
                </h1>
                <p>
                  Dalam OSIS kita belajar dan bekerja bersama dalam setiap
                  Program Kerja yang telah direncanakan. Mulai dari perencanaan,
                  pembiayaan, pembentukan panitia hingga saat kegiatan
                  berlangsung. Semua juga tidak lepas dibawah bimbingan para
                  guru yang berperan sebagai pendamping pengurus OSIS.
                </p>
              </div>
              <div className="w-full md:pl-10 mt-10 md:mt-0 md:w-1/2 flex justify-center relative z-10">
                <img
                  src="/images/manfaat.png"
                  alt=""
                  className="rounded-md relative z-30"
                />
                <div className="w-full max-w-80 h-full absolute z-20 bg-white -bottom-5 -right-2 sm:right-20 md:-right-10 lg:right-20 rounded-md"></div>
              </div>
            </div>
          </div>
        </ContainerReveal>
      </div>
    </div>
  );
}
