"use client";
import { AddMisi, EditAbout, EditMisi, EditVisi } from "@/app/lib/actions";
import { Misi, PesanKetos } from "@/app/lib/definitions";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

export function IntroForm() {
  return (
    <form
      action=""
      className="h-fit w-full rounded-lg border border-gray-200 p-5 shadow"
    >
      <h1 className="text-4xl">Edit Halaman Intro</h1>
      <div className="my-5 w-full items-center justify-center" id="input-image">
        <label
          htmlFor="dropzone-file"
          className="dark:hover:bg-bray-800 flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <Image
              src="/images/introOsis.png"
              alt="intro"
              className="object-cover"
              width={300}
              height={300}
            />
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export function AboutForm({ about }: { about: string }) {
  const [formState, dispatch] = useFormState(EditAbout, undefined);
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
    <form
      action={dispatch}
      method="POST"
      className="h-fit w-full rounded-lg border border-gray-200 p-5 shadow"
    >
      <h1 className="text-4xl">Edit About</h1>

      <div className="my-5">
        <div>
          <label htmlFor="about" className="mb-2 block">
            About OSIS
          </label>
          <textarea
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
            name="about"
            defaultValue={about}
            id="about"
            cols={30}
            rows={4}
          ></textarea>
        </div>
      </div>

      <Button type="submit">Submit</Button>

      {showMessage && formState && formState.success && (
        <p className="mt-5 text-green-500">{formState.message}</p>
      )}
      {showMessage && formState && !formState.success && (
        <p className="mt-5 text-red-700">{formState.message}</p>
      )}
    </form>
  );
}

export function PesanKetosForm({ pesanketos }: { pesanketos: PesanKetos }) {
  return (
    <form
      action=""
      className="h-fit w-full rounded-lg border border-gray-200 p-5 shadow"
    >
      <h1 className="text-4xl">Edit Halaman Pesan Ketos</h1>
      <div className="my-5">
        <div className="mb-2">
          <label htmlFor="pesan" className="mb-2">
            Pesan Ketos
          </label>
          <textarea
            name="pesan"
            id="pesan"
            defaultValue={pesanketos.pesan}
            cols={30}
            rows={5}
            className="mb-3 w-full text-wrap rounded-md border border-gray-500 p-3 text-default-500"
          ></textarea>
        </div>

        <div className="mb-2">
          <label htmlFor="nama" className="mb-2">
            Nama Ketos
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            defaultValue={pesanketos.nama}
            className="mb-3 w-full text-wrap rounded-md border border-gray-500 p-3 text-default-500"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="periode" className="mb-2">
            Periode
          </label>
          <input
            type="text"
            defaultValue={pesanketos.periode}
            id="periode"
            name="periode"
            className="mb-3 w-full text-wrap rounded-md border border-gray-500 p-3 text-default-500"
          />
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export function AddMisiForm() {
  const [formState, disptach] = useFormState(AddMisi, undefined);
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
    <form
      action={disptach}
      className="h-fit w-full rounded-lg border border-gray-200 p-5 shadow"
    >
      <h1 className="text-4xl">Tambah Misi OSIS</h1>

      <div className="my-5">
        <div>
          <label htmlFor="misiBaru" className="mb-2 block">
            Misi baru
          </label>
          <textarea
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
            name="misiBaru"
            id="misiBaru"
            cols={30}
            rows={4}
          ></textarea>
        </div>
      </div>

      <Button type="submit">Submit</Button>
      {showMessage && formState && formState.success && (
        <p className="mt-5 text-green-500">{formState.message}</p>
      )}
      {showMessage && formState && !formState.success && (
        <p className="mt-5 text-red-700">{formState.message}</p>
      )}
    </form>
  );
}

export function VisiForm({ visi }: { visi: string }) {
  const [formState, dispatch] = useFormState(EditVisi, undefined);
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
    <form
      action={dispatch}
      method="POST"
      className="h-fit w-full rounded-lg border border-gray-200 p-5 shadow"
    >
      <h1 className="text-4xl">Edit Visi</h1>

      <div className="my-5">
        <div>
          <label htmlFor="visi" className="mb-2 block">
            Visi OSIS
          </label>
          <textarea
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
            name="visi"
            id="visi"
            defaultValue={visi}
            cols={30}
            rows={8}
          ></textarea>
        </div>
      </div>

      <Button type="submit">Submit</Button>
      {showMessage && formState && formState.success && (
        <p className="mt-5 text-green-500">{formState.message}</p>
      )}
      {showMessage && formState && !formState.success && (
        <p className="mt-5 text-red-700">{formState.message}</p>
      )}
    </form>
  );
}

export function MisiForm({ misi }: { misi: Array<Misi> }) {
  const [formState, dispatch] = useFormState(EditMisi, undefined);
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
    <form
      action={dispatch}
      method="POST"
      className="h-fit w-full rounded-lg border border-gray-200 p-5 shadow"
    >
      <h1 className="text-4xl">Edit Misi</h1>

      <div className="my-5">
        <div>
          <label className="mb-2 block">Misi OSIS</label>
          <ul>
            {misi.map((m) => (
              <li key={m.id}>
                <textarea
                  defaultValue={m.misi}
                  rows={5}
                  id={`${m.id}`}
                  name="misi"
                  className="mb-3 w-full text-wrap rounded-md border border-gray-500 p-3 text-sm text-default-500"
                ></textarea>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Button type="submit">Submit</Button>

      {showMessage && formState && formState.success && (
        <p className="mt-5 text-green-500">{formState.message}</p>
      )}
      {showMessage && formState && !formState.success && (
        <p className="mt-5 text-red-700">{formState.message}</p>
      )}
    </form>
  );
}
