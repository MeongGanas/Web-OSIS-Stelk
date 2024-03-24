import { ContainerReveal } from "@/app/ui/Reveal";

export default function Manfaat() {
  return (
    <div className="relative min-h-screen">
      <div className="shapebg2 h-full w-full">
        <ContainerReveal>
          <div className="container relative flex h-full w-full items-center py-32 text-white">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2">
                <h1 className="mb-10 text-2xl font-extrabold uppercase md:text-3xl">
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
              <div className="relative z-10 mt-10 flex w-full justify-center md:mt-0 md:w-1/2 md:pl-10">
                <img
                  src="/images/manfaat.png"
                  alt=""
                  className="relative z-30 rounded-md"
                />
                <div className="absolute -bottom-5 -right-2 z-20 h-full w-full max-w-80 rounded-md bg-white sm:right-20 md:-right-10 lg:right-20"></div>
              </div>
            </div>
          </div>
        </ContainerReveal>
      </div>
    </div>
  );
}
