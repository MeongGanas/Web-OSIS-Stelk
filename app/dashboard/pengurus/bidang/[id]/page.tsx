import PengurusContent from "@/app/ui/pengurus/Pengurus";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <PengurusContent id={params.id} admin={true} />
    </>
  );
}
