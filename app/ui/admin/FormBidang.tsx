"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

export function EditBidangForm({
  params,
  detail,
}: {
  params: { id: string };
  detail: { nama: string };
}) {
  return (
    <div className="w-full rounded-lg border border-gray-200 p-5 shadow">
      <h1 className="mb-5 text-4xl">Edit Bidang {params.id}</h1>
      <form action="">
        <div
          className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2"
          id="wrapper-grid"
        >
          <div className="w-full" id="text-input">
            <div className="mb-4 w-full">
              <label htmlFor="nama" className="mb-2 block">
                Nama Bidang {params.id}
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                defaultValue={detail.nama}
                className="block w-full rounded-md border border-gray-500 p-3 text-sm uppercase text-default-500"
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="nama" className="mb-2 block">
                Tugas Umum Bidang {params.id}
              </label>
              <textarea
                id="nama"
                name="nama"
                rows={2}
                defaultValue={detail.nama}
                className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
              ></textarea>
            </div>
          </div>

          <div className="w-full" id="images-input">
            <div className="mb-4 w-full">
              <label htmlFor="card" className="mb-2 block">
                Foto Card Bidang {params.id}
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
            <div>
              <label htmlFor="intro" className="mb-2 block">
                Foto Intro Bidang {params.id}
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
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export function EditAnggotaForm({
  params,
  detail,
}: {
  params: { id: string };
  detail: { nama: string };
}) {
  return (
    <div className="w-full rounded-lg border border-gray-200 p-5 shadow">
      <h1 className="mb-5 text-4xl">Anggota Bidang {params.id}</h1>

      <form action={""}>
        <div className="mb-4 grid w-full grid-cols-2 gap-5" id="koor">
          <div className="mb-2">
            <label htmlFor="nama" className="mb-2 block">
              Nama Koordinator
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              defaultValue={detail.nama}
              className="block w-full rounded-md border border-gray-500 p-3 text-sm uppercase text-default-500"
            />
          </div>
          <div>
            <label htmlFor="fotoKoor" className="mb-2 block">
              Foto Koordinator
            </label>
            <div className="w-full rounded-md border border-gray-500 p-3 text-sm text-default-500">
              <input
                type="file"
                className="block w-full"
                id="fotoKoor"
                name="fotoKoor"
              />
            </div>
          </div>
        </div>

        <div className="mb-4 grid w-full grid-cols-2 gap-5" id="anggota">
          <div>
            <label htmlFor="nama" className="mb-2 block">
              Nama Anggota
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              defaultValue={detail.nama}
              className="block w-full rounded-md border border-gray-500 p-3 text-sm uppercase text-default-500"
            />
          </div>
          <div>
            <label htmlFor="fotoAnggota1" className="mb-2 block">
              Foto Anggota
            </label>
            <div className="w-full rounded-md border border-gray-500 p-3 text-sm text-default-500">
              <input
                type="file"
                className="block w-full"
                id="fotoAnggota1"
                name="fotoAnggota1"
              />
            </div>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export function AddAnggotaForm({ params }: { params: { id: string } }) {
  return (
    <div className="w-full rounded-lg border border-gray-200 p-5 shadow">
      <h1 className="mb-5 text-4xl">Tambah Anggota Bidang {params.id}</h1>
      <form action="">
        <div className="mb-4 w-full">
          <label htmlFor="nama" className="mb-2 block">
            Nama Anggota
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
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
