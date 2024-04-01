"use client";
import { AddEvent, EditEvent } from "@/app/lib/actions";
import { Button } from "@nextui-org/react";
import { useFormState } from "react-dom";
import InputImage from "./InputImage";
import { useEffect, useState } from "react";
import { Events } from "@/app/lib/definitions";
import Image from "next/image";
import { redirect } from "next/navigation";

export function EditEventForm({ data }: { data: Events }) {
  const [formState, dispatch] = useFormState(EditEvent, undefined);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (formState && formState.success) {
      redirect("/dashboard/events");
    } else if (formState && !formState.success) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [formState]);

  return (
    <div className="mx-auto w-full max-w-screen-sm rounded-lg border border-gray-200 p-5 shadow">
      <h1 className="mb-5 text-4xl">Edit Event</h1>
      <form action={dispatch}>
        <div className="mb-4 w-full">
          <label htmlFor="namaEvent" className="mb-2 block">
            Nama Event
          </label>
          <input
            type="text"
            id="namaEvent"
            name="namaEvent"
            required
            defaultValue={data.nama}
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
            required
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
            required
            rows={5}
            defaultValue={data.deskripsi}
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <h3 className="mb-2">Current Image</h3>
          <Image src={data.foto} width={300} height={300} alt="Current image" />
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="image-event" className="mb-2 block">
            Foto Event
          </label>
          <InputImage name="image-event" />
        </div>

        <Button type="submit" name="id" id={`${data.id}`} value={`${data.id}`}>
          Submit
        </Button>

        {showMessage && formState && !formState.success && (
          <p className="mt-5 text-red-700">{formState.message}</p>
        )}
      </form>
    </div>
  );
}

export function AddEventForm() {
  const [formState, dispatch] = useFormState(AddEvent, undefined);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (formState && formState.success) {
      redirect("/dashboard/events");
    } else if (formState && !formState.success) {
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
            required
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
            required
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
            required
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
