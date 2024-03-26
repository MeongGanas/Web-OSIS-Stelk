import Link from "next/link";
import { CardRevealBottom } from "../Reveal";

export default function JoinUs() {
  return (
    <div className="shapebg1">
      <div className="container pb-20 pt-40 text-center">
        <CardRevealBottom>
          <h1 className="mb-10 text-xl font-bold text-white md:text-3xl">
            Banyak pengalaman dan koneksi yang bisa kalian dapatkan dengan
            bergabung di dalam kepengurusan OSIS.
          </h1>
        </CardRevealBottom>
        <CardRevealBottom>
          <Link
            href={""}
            className="text-lg font-bold text-white underline md:text-2xl"
          >
            Ayo Join Sekarang!
          </Link>
        </CardRevealBottom>
      </div>
    </div>

    // <div className="container py-28 text-center">
    //   <CardRevealBottom>
    //     <h1 className="mb-10 text-xl font-bold text-primary md:text-3xl">
    //       Banyak pengalaman dan koneksi yang bisa kalian dapatkan dengan
    //       mengikuti kepengurusan OSIS.
    //     </h1>
    //   </CardRevealBottom>
    //   <CardRevealBottom>
    //     <Link
    //       href={""}
    //       className="text-lg font-bold text-primary underline md:text-2xl"
    //     >
    //       Ayo Join Sekarang!
    //     </Link>
    //   </CardRevealBottom>
    // </div>
  );
}
