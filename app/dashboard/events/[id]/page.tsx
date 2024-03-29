import { EditEventForm } from "@/app/ui/admin/FormEvents";

export default function EditEvent({ params }: { params: { id: string } }) {
  return (
    <div className="container pb-20 pt-32">
      <EditEventForm />
    </div>
  );
}
