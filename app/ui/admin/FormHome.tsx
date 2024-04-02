"use client";
import {
  AddMisi,
  EditAbout,
  EditIntro,
  EditMisi,
  EditPesanKetos,
  EditVisi,
} from "@/app/lib/actions";
import { Misi, PesanKetos } from "@/app/lib/definitions";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import InputImage from "./InputImage";
import Image from "next/image";
import { Submit } from "@/app/Button";

export function IntroForm({ currentImage }: { currentImage: string }) {
  const [formState, dispatch] = useFormState(EditIntro, undefined);
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
      className="mx-auto h-fit w-full max-w-screen-sm rounded-lg border border-gray-200 p-5 shadow"
    >
      <h1 className="mb-5 text-4xl">Edit Halaman Intro</h1>

      <h3>Current Image</h3>
      <Image src={currentImage} width={200} height={200} alt="currentimg" />

      <div className="my-5 w-full items-center justify-center" id="input-image">
        <label htmlFor="image-intro" className="mb-2 block">
          Foto Halaman Intro
        </label>
        <InputImage name="image-intro" />
      </div>

      <Submit name="Submit" />

      {showMessage && formState && formState.success && (
        <p className="mt-5 text-green-500">{formState.message}</p>
      )}
      {showMessage && formState && !formState.success && (
        <p className="mt-5 text-red-700">{formState.message}</p>
      )}
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
      className="mx-auto h-fit w-full max-w-screen-sm rounded-lg border border-gray-200 p-5 shadow"
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
            required
            cols={30}
            rows={4}
          ></textarea>
        </div>
      </div>

      <Submit name="Submit" />

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
  const [formState, dispatch] = useFormState(EditPesanKetos, undefined);
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
      className="mx-auto h-fit w-full max-w-screen-sm rounded-lg border border-gray-200 p-5 shadow"
    >
      <h1 className="text-4xl">Edit Halaman Sambutan Ketos</h1>
      <div className="my-5">
        <div className="mb-2">
          <label htmlFor="pesan" className="mb-2 block">
            Sambutan Ketos
          </label>
          <textarea
            name="pesan"
            required
            id="pesan"
            defaultValue={pesanketos.pesan}
            cols={30}
            rows={5}
            className="mb-3 w-full text-wrap rounded-md border border-gray-500 p-3 text-default-500"
          ></textarea>
        </div>

        <div className="mb-2">
          <label htmlFor="nama" className="mb-2 block">
            Nama Ketos
          </label>
          <input
            required
            type="text"
            id="nama"
            name="nama"
            defaultValue={pesanketos.nama}
            className="mb-3 w-full text-wrap rounded-md border border-gray-500 p-3 text-default-500"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="periode" className="mb-2 block">
            Periode
          </label>
          <input
            type="text"
            defaultValue={pesanketos.periode}
            id="periode"
            required
            name="periode"
            className="mb-3 w-full text-wrap rounded-md border border-gray-500 p-3 text-default-500"
          />
        </div>
        <h3>Current Image</h3>
        {pesanketos.image && (
          <Image
            src={pesanketos.image}
            width={200}
            height={200}
            alt="currentimg"
          />
        )}
        <div
          className="my-5 w-full items-center justify-center"
          id="input-image"
        >
          <label htmlFor="image-sambutan" className="mb-2 block">
            Foto Sambutan Ketos
          </label>
          <InputImage name="image-sambutan" />
        </div>
      </div>

      <Submit name="Submit" />

      {showMessage && formState && formState.success && (
        <p className="mt-5 text-green-500">{formState.message}</p>
      )}
      {showMessage && formState && !formState.success && (
        <p className="mt-5 text-red-700">{formState.message}</p>
      )}
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
      className="mx-auto h-fit w-full max-w-screen-sm rounded-lg border border-gray-200 p-5 shadow"
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
            required
            cols={30}
            rows={4}
          ></textarea>
        </div>
      </div>

      <Submit name="Submit" />

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
      className="mx-auto h-fit w-full max-w-screen-sm rounded-lg border border-gray-200 p-5 shadow"
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
            required
            defaultValue={visi}
            cols={30}
            rows={8}
          ></textarea>
        </div>
      </div>

      <Submit name="Submit" />

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
      className="mx-auto h-fit w-full max-w-screen-sm rounded-lg border border-gray-200 p-5 shadow"
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
                  name={`misi-${m.id}`}
                  className="mb-3 w-full text-wrap rounded-md border border-gray-500 p-3 text-sm text-default-500"
                ></textarea>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Submit name="Submit" />

      {showMessage && formState && formState.success && (
        <p className="mt-5 text-green-500">{formState.message}</p>
      )}
      {showMessage && formState && !formState.success && (
        <p className="mt-5 text-red-700">{formState.message}</p>
      )}
    </form>
  );
}
