export default function Page({ params }: { params: { data: string } }) {
  return (
    <form action="">
      <h1>Edit {params.data}</h1>
    </form>
  );
}
