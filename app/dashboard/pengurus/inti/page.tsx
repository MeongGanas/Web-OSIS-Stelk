import {
  AddAnggotaForm,
  EditAnggotaForm,
  EditIntiForm,
} from "@/app/ui/admin/FormInti";

export default function Inti() {
  return (
    <div className="container mb-20 pt-32">
      <div className="mb-5">
        <EditIntiForm />
      </div>
      <div className="mb-5">
        <EditAnggotaForm />
      </div>
      <AddAnggotaForm />
    </div>
  );
}
