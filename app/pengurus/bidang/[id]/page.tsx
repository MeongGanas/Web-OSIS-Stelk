import { getDetailBidang } from "@/app/libs/data";
import { Suspense } from "react";
import Pengurus from "@/app/ui/pengurus/pengurus";

export default async function Page() {
  const bidangs = await getDetailBidang();

  return (
    <Suspense fallback={<div className="py-40">Loading...</div>}>
      <Pengurus bidangs={bidangs} />
    </Suspense>
  );
}
