import CardReveal from "../CardReveal";
import CardBidang from "./components/CardBidang";
import Reveal from "@/app/ui/Reveal";

const bidang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function ListBidang() {
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
          {bidang.map((id: number) => (
            <CardBidang
              name={`bidang ${id}`}
              url={`/images/bidang${id}/BIDANG ${id}.svg`}
              to={`/pengurus/bidang/${id}`}
              key={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
