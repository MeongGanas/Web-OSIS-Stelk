"use client";
import AddEvent from "@/app/lib/actions";
import { Button } from "@nextui-org/react";
import { useFormState } from "react-dom";
import InputImage from "./InputImage";
import { useEffect, useState } from "react";
import { Events } from "@/app/lib/definitions";

export function EditEventForm({ data }: { data: Events }) {
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
            defaultValue={data.nama}
            className="block w-full rounded-md border border-gray-500 p-3 text-sm uppercase text-default-500"
          />
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="tanggalEvent" className="mb-2 block">
            Tanggal Event
          </label>
          <input
            type="date"
            id="tanggalEvent"
            name="tanggalEvent"
            defaultValue={data.tanggal}
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
          />
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="desc" className="mb-2 block">
            Deskripsi Event
          </label>
          <textarea
            id="desc"
            name="desc"
            rows={5}
            defaultValue={data.deskripsi}
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
          ></textarea>
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="image-event" className="mb-2 block">
            Foto Event
          </label>
          <InputImage name="image-event" />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export function AddEventForm() {
  const [formState, dispatch] = useFormState(AddEvent, undefined);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (formState && (formState.success || !formState.success)) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [formState]);

  return (
    <div className="mx-auto w-full max-w-screen-sm rounded-lg border border-gray-200 p-5 shadow">
      <h1 className="mb-5 text-4xl">Tambah Event</h1>
      <form action={dispatch} method="POST">
        <div className="mb-4 w-full">
          <label htmlFor="namaEvent" className="mb-2 block">
            Nama Event
          </label>
          <input
            type="text"
            id="namaEvent"
            name="namaEvent"
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
          />
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="tanggalEvent" className="mb-2 block">
            Tanggal Event
          </label>
          <input
            type="date"
            id="tanggalEvent"
            name="tanggalEvent"
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
          />
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="desc" className="mb-2 block">
            Deskripsi Event
          </label>
          <textarea
            id="desc"
            name="desc"
            rows={5}
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
          ></textarea>
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="image-event" className="mb-2 block">
            Foto Event
          </label>
          <InputImage name="image-event" />
        </div>

        <Button type="submit">Submit</Button>

        {showMessage && formState && !formState.success && (
          <p className="mt-5 text-red-700">{formState.message}</p>
        )}
      </form>
    </div>
  );
}
