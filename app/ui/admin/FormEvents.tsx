import { Button } from "@nextui-org/react";

export function EditEventForm() {
  return (
    <div className="w-full rounded-lg border border-gray-200 p-5 shadow">
      <h1 className="mb-5 text-4xl">Edit Event</h1>
      <form action="">
        <div className="mb-4 w-full">
          <label htmlFor="namaEvent" className="mb-2 block">
            Nama Event
          </label>
          <input
            type="text"
            id="namaEvent"
            name="namaEvent"
            className="block w-full rounded-md border border-gray-500 p-3 text-sm uppercase text-default-500"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="desc" className="mb-2 block">
            Deskripsi Event
          </label>
          <textarea
            id="desc"
            name="desc"
            rows={2}
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
          ></textarea>
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="image" className="mb-2 block">
            Foto Event
          </label>
          <div className="w-full rounded-md border border-gray-500 p-3 text-sm text-default-500">
            <input
              type="file"
              className="block w-full"
              id="image"
              name="image"
            />
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export function AddEventForm() {
  return (
    <div className="w-full rounded-lg border border-gray-200 p-5 shadow">
      <h1 className="mb-5 text-4xl">Tambah Event</h1>
      <form action="">
        <div className="mb-4 w-full">
          <label htmlFor="namaEvent" className="mb-2 block">
            Nama Event
          </label>
          <input
            type="text"
            id="namaEvent"
            name="namaEvent"
            className="block w-full max-w-sm rounded-md border border-gray-500 p-3 text-sm text-default-500"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="image" className="mb-2 block">
            Foto Event
          </label>
          <div className="w-full max-w-sm rounded-md border border-gray-500 p-3 text-sm text-default-500">
            <input
              type="file"
              className="block w-full"
              id="image"
              name="image"
            />
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
