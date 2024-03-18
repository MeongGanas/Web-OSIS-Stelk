export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="pt-32 px-5 md:px-10">
      <h1 className="text-3xl">Edit Halaman Bidang {params.id}</h1>
    </main>
  );
}
