import { AboutForm, IntroForm, PesanKetosForm } from "@/app/ui/admin/Forms";

export default function Dashboard() {
  return (
    <div className="container grid grid-cols-1 gap-5 pb-20 pt-32 md:grid-cols-2">
      <IntroForm />
      <PesanKetosForm />
      <AboutForm />
    </div>
  );
}
