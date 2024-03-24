import Link from "next/link";
import CardReveal from "../Reveal";
import clsx from "clsx";
import { Add, Delete } from "@mui/icons-material";

export default function FindUs({ isAdmin }: { isAdmin?: boolean }) {
  const platforms = ["youtube", "instagram", "twitter"];
  return (
    <div className="w-full pt-20 text-center">
      <CardReveal>
        <div className="container mb-10">
          <h1 className="mb-2 text-4xl">Find Us</h1>
          <p className="italic text-slate-600">
            Program Kerja kami di salurkan melalui platform berikut.
          </p>
        </div>
      </CardReveal>

      {platforms &&
        platforms.map((platform) => (
          <div className="mb-10" key={platform}>
            <CardReveal>
              <div className="findus-link">
                <Link href={""} className="inline">
                  {platform}
                </Link>
                <Link
                  href={"/dashboard/home/delete-platform"}
                  className={clsx(isAdmin ? "ml-2 inline" : "hidden")}
                >
                  <Delete />
                </Link>
              </div>
            </CardReveal>
          </div>
        ))}

      <div className={clsx(isAdmin ? "block" : "hidden")}>
        <CardReveal>
          <Link href={"/dashboard/home/add-platform"} className="findus-link">
            <Add />
          </Link>
        </CardReveal>
      </div>
    </div>
  );
}
