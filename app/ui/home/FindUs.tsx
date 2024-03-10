import Reveal from "@/app/components/Reveal";
import Link from "next/link";

export default function FindUs() {
  return (
    <div className="pt-20 text-center w-full">
      <Reveal>
        <div className="mb-10">
          <h1 className="text-4xl mb-2">Find Us</h1>
          <p className="italic text-slate-600">
            Program Kerja kami di salurkan melalui platform berikut.
          </p>
        </div>
      </Reveal>

      <div className="mb-10">
        <Reveal>
          <Link href={""} className="findus-link">
            Instagram
          </Link>
        </Reveal>
      </div>

      <div className="mb-10">
        <Reveal>
          <Link href={""} className="findus-link">
            Twitter
          </Link>
        </Reveal>
      </div>

      <div>
        <Reveal>
          <Link href={""} className="findus-link">
            Youtube
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
