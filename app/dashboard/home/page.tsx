import { getVisiMisi } from "@/app/lib/data";
import { AboutForm, IntroForm, PesanKetosForm } from "@/app/ui/admin/FormHome";

export default async function Dashboard() {
  const visiMisi = await getVisiMisi();
  return (
    <div className="container grid grid-cols-1 gap-5 pb-20 pt-32 md:grid-cols-2">
      <IntroForm />
      <PesanKetosForm />
      <AboutForm visiMisi={visiMisi} />
    </div>
  );
}
