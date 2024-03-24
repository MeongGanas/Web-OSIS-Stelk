import Link from "next/link";
import CardReveal from "../Reveal";

export default function JoinUs() {
  return (
    <div className="shapebg1">
      <div className="container pb-20 pt-40 text-center">
        <CardReveal>
          <h1 className="mb-10 text-xl font-bold text-white md:text-3xl">
            Banyak pengalaman dan koneksi yang bisa kalian dapatkan dengan
            mengikuti kepengurusan OSIS.
          </h1>
        </CardReveal>
        <CardReveal>
          <Link href={""} className="text-lg font-bold text-white md:text-2xl">
            Ayo Join Sekarang!
          </Link>
        </CardReveal>
      </div>
    </div>
  );
}
