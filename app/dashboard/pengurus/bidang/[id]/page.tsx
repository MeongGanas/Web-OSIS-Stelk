import Pengurus from "@/app/ui/pengurus/Pengurus";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <Pengurus id={params.id} admin={true} />
    </>
  );
}
