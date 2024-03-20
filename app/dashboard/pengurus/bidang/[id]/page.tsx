import Pengurus from "@/app/ui/pengurus/pengurus";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <Pengurus id={params.id} admin={true} />
    </>
  );
}
