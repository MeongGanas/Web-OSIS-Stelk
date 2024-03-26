import CardAnggota from "./components/CardAnggota";

export default function Anggota() {
  return (
    <div className="container min-h-screen py-28">
      <div className="mb-10 w-full text-center">
        <h3 className="italic text-primary">Inti OSIS</h3>
        <h1 className="mb-4 text-4xl font-bold italic text-primary">
          Anggota Tim
        </h1>
        <p className="text-primary">
          Terdiri dari 2 Wakil Ketua dan 4 Anggota Inti
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid max-w-screen-lg grid-cols-1 gap-10 md:grid-cols-2">
          <CardAnggota />
          <CardAnggota />
        </div>
      </div>
    </div>
  );
}
