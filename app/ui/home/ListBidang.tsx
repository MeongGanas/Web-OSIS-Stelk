import { getAllBidang } from "@/app/lib/data";
import CardReveal from "../Reveal";
import CardBidang from "./HomeComponent/CardBidang";

export default async function ListBidang() {
  const bidangs = await getAllBidang();

  return (
    <div className="container py-20 w-full flex items-center">
      <div className="w-full">
        <div className="w-full flex justify-center">
          <CardReveal>
            <div className="w-full text-center max-w-screen-sm">
              <h1 className="text-2xl mb-5 md:text-4xl font-extrabold text-primary">
                Bidang
              </h1>
              <p className="text-wrap text-slate-600 italic text-sm">
                OSIS SMK Telkom Makassar terbagi menjadi 10 bidang agar dapat
                fokus menjalankan program kerja dan tugas masing-masing
              </p>
            </div>
          </CardReveal>
        </div>
        <div className="grid grid-cols-1 mt-5 sm:grid-cols-3 xl:grid-cols-5 gap-5">
          {bidangs.map((bidang) => (
            <CardBidang
              name={`bidang ${bidang.id}`}
              url={`/images/bidang${bidang.id}/BIDANG ${bidang.id}.svg`}
              to={`/pengurus/bidang/${bidang.id}`}
              key={bidang.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
