import Reveal from "@/app/components/Reveal";
import Link from "next/link";

export default function JoinUs() {
  return (
    <div className="shapebg1">
      <div className="container text-center pt-40 pb-20">
        <Reveal>
          <h1 className="font-bold text-xl md:text-3xl text-white mb-10">
            Banyak pengalaman dan koneksi yang bisa kalian dapatkan dengan
            mengikuti kepengurusan OSIS.
          </h1>
        </Reveal>
        <Link href={""} className="text-lg md:text-2xl font-bold text-white">
          Ayo Join Sekarang!
        </Link>
      </div>
    </div>
  );
}
