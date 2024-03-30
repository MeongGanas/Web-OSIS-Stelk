import { getAbout, getPesanKetos } from "@/app/lib/data";
import {
  AboutForm,
  AddMisiForm,
  IntroForm,
  MisiForm,
  PesanKetosForm,
  VisiForm,
} from "@/app/ui/admin/FormHome";

export default async function Dashboard() {
  const { about, visi, misi } = await getAbout();
  const pesanketos = await getPesanKetos();

  return (
    <div className="container grid grid-cols-1 gap-5 pb-20 pt-32 md:grid-cols-2">
      <IntroForm />
      <PesanKetosForm pesanketos={pesanketos} />
      <AboutForm about={about} />
      <VisiForm visi={visi} />
      <MisiForm misi={misi} />
      <AddMisiForm />
    </div>
  );
}
