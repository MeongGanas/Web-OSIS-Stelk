import { getDetailBidang } from "@/app/lib/data";
import {
  AddAnggotaForm,
  EditAnggotaForm,
  EditBidangForm,
} from "@/app/ui/admin/FormBidang";

export default async function Bidang({ params }: { params: { id: string } }) {
  const detail = await getDetailBidang(params.id);

  return (
    <div className="container pb-20 pt-32">
      <div className="mb-5">
        <EditBidangForm params={params} detail={detail} />
      </div>
      <div className="mb-5">
        <EditAnggotaForm params={params} detail={detail} />
      </div>
      <AddAnggotaForm params={params} />
    </div>
  );
}
