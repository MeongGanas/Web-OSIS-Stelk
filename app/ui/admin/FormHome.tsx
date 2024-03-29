"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export function IntroForm() {
  return (
    <form
      action=""
      className="w-full rounded-lg border border-gray-200 p-5 shadow"
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

export function AboutForm({
  visiMisi,
}: {
  visiMisi: { misi: Array<string>; visi: string };
}) {
  return (
    <form
      action=""
      className="w-full rounded-lg border border-gray-200 p-5 shadow"
    >
      <h1 className="text-4xl">Edit Halaman About</h1>

      <div className="my-5">
        <div>
          <label htmlFor="about-osis" className="mb-2 block">
            About OSIS
          </label>
          <textarea
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
            name="about-osis"
            id="about-osis"
            cols={30}
            rows={2}
          ></textarea>
        </div>
      </div>

      <div className="my-5">
        <div>
          <label htmlFor="visi" className="mb-2 block">
            Visi OSIS
          </label>
          <textarea
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
            name="visi"
            defaultValue={visiMisi.visi}
            id="visi"
            cols={30}
            rows={8}
          ></textarea>
        </div>
      </div>

      <div className="my-5">
        <div>
          <label className="mb-2 block">Misi OSIS</label>
          <ul>
            {visiMisi.misi.map((misi, index) => (
              <li key={index}>
                <textarea
                  defaultValue={misi}
                  rows={5}
                  className="mb-3 w-full text-wrap rounded-md border border-gray-500 p-3 text-sm text-default-500"
                ></textarea>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}

export function PesanKetosForm() {
  return (
    <form
      action=""
      className="w-full rounded-lg border border-gray-200 p-5 shadow"
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
            className="mb-3 w-full text-wrap rounded-md border border-gray-500 p-3 text-default-500"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="periode" className="mb-2">
            Periode
          </label>
          <input
            type="text"
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
