import Link from "next/link";
import CardReveal from "../Reveal";

export default function FindUs() {
  return (
    <div className="pt-20 text-center w-full">
      <CardReveal>
        <div className="container mb-10">
          <h1 className="text-4xl mb-2">Find Us</h1>
          <p className="italic text-slate-600">
            Program Kerja kami di salurkan melalui platform berikut.
          </p>
        </div>
      </CardReveal>

      <div className="mb-10">
        <CardReveal>
          <Link href={""} className="findus-link">
            Instagram
          </Link>
        </CardReveal>
      </div>

      <div className="mb-10">
        <CardReveal>
          <Link href={""} className="findus-link">
            Twitter
          </Link>
        </CardReveal>
      </div>

      <div>
        <CardReveal>
          <Link href={""} className="findus-link">
            Youtube
          </Link>
        </CardReveal>
      </div>
    </div>
  );
}
