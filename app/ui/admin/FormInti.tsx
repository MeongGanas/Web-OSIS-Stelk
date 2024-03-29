import { Button } from "@nextui-org/react";

export function EditIntiForm() {
  return (
    <div className="w-full rounded-lg border border-gray-200 p-5 shadow">
      <h1 className="mb-5 text-4xl">Edit Inti OSIS</h1>
      <form action="">
        <div
          className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2"
          id="wrapper-grid"
        >
          <div className="mb-4 w-full">
            <label htmlFor="tugas" className="mb-2 block">
              Tugas Umum Inti
            </label>
            <textarea
              id="tugas"
              name="tugas"
              rows={2}
              className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
            ></textarea>
          </div>
          <div>
            <label htmlFor="intro" className="mb-2 block">
              Foto Intro Inti
            </label>
            <div className="w-full rounded-md border border-gray-500 p-3 text-sm text-default-500">
              <input
                type="file"
                className="block w-full"
                id="fotoAnggota"
                name="fotoAnggota"
              />
            </div>
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export function EditAnggotaForm() {
  return (
    <div className="w-full rounded-lg border border-gray-200 p-5 shadow">
      <h1 className="mb-5 text-4xl">Anggota Inti OSIS</h1>

      <form action={""}>
        <div className="mb-4 grid w-full grid-cols-2 gap-5" id="koor">
          <div className="mb-2">
            <label htmlFor="namaKetua" className="mb-2 block">
              Nama Ketua
            </label>
            <input
              type="text"
              id="namaKetua"
              name="namaKetua"
              className="block w-full rounded-md border border-gray-500 p-3 text-sm uppercase text-default-500"
            />
          </div>
          <div>
            <label htmlFor="fotoKetua" className="mb-2 block">
              Foto Ketua
            </label>
            <div className="w-full rounded-md border border-gray-500 p-3 text-sm text-default-500">
              <input
                type="file"
                className="block w-full"
                id="fotoKetua"
                name="fotoKetua"
              />
            </div>
          </div>
        </div>

        <div className="mb-4 grid w-full grid-cols-2 gap-5" id="anggota">
          <div>
            <label htmlFor="namaWakil" className="mb-2 block">
              Foto Wakil
            </label>
            <input
              type="text"
              id="namaWakil"
              name="namaWakil"
              className="block w-full rounded-md border border-gray-500 p-3 text-sm uppercase text-default-500"
            />
          </div>
          <div>
            <label htmlFor="fotoWakil" className="mb-2 block">
              Foto Wakil
            </label>
            <div className="w-full rounded-md border border-gray-500 p-3 text-sm text-default-500">
              <input
                type="file"
                className="block w-full"
                id="fotoWakil"
                name="fotoWakil"
              />
            </div>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export function AddAnggotaForm() {
  return (
    <div className="w-full rounded-lg border border-gray-200 p-5 shadow">
      <h1 className="mb-5 text-4xl">Tambah Anggota Inti</h1>
      <form action="">
        <div className="mb-4 w-full">
          <label htmlFor="namaAnggota" className="mb-2 block">
            Nama Anggota
          </label>
          <input
            type="text"
            id="namaAnggota"
            name="namaAnggota"
            className="block w-full max-w-sm rounded-md border border-gray-500 p-3 text-sm text-default-500"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="jabatan" className="mb-2 block">
            Jabatan
          </label>
          <input
            type="text"
            id="jabatan"
            name="jabatan"
            className="block w-full max-w-sm rounded-md border border-gray-500 p-3 text-sm text-default-500"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="fotoAnggota" className="mb-2 block">
            Foto Anggota
          </label>
          <div className="w-full max-w-sm rounded-md border border-gray-500 p-3 text-sm text-default-500">
            <input
              type="file"
              className="block w-full"
              id="fotoAnggota"
              name="fotoAnggota"
            />
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
