"use client";

import { Anggota } from "@/app/lib/definitions";
import { Button, Select, SelectItem } from "@nextui-org/react";
import InputImage from "./InputImage";
import { useFormState } from "react-dom";
import { AddAnggota, EditAnggota } from "@/app/lib/actions";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { jabatanBidang } from "@/app/lib/placeholder-data";
import Image from "next/image";

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
                required
                className="block w-full rounded-md border border-gray-500 p-3 text-sm uppercase text-default-500"
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="tugas" className="mb-2 block">
                Tugas Umum Bidang {params.id}
              </label>
              <textarea
                id="tugas"
                name="tugas"
                rows={2}
                defaultValue={detail.nama}
                required
                className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
              ></textarea>
            </div>
          </div>

          <div className="w-full" id="images-input">
            <div className="mb-4 w-full">
              <label htmlFor="card" className="mb-2 block">
                Foto Card Bidang {params.id}
              </label>
              <InputImage name="card" />
            </div>
            <div>
              <label htmlFor="intro" className="mb-2 block">
                Foto Intro Bidang {params.id}
              </label>
              <InputImage name="intro" />
            </div>
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export function EditAnggotaForm({ data }: { data: Anggota }) {
  const [formState, dispatch] = useFormState(EditAnggota, undefined);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (formState && formState.success) {
      redirect(`/dashboard/pengurus/bidang/${data.idbidang}`);
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
      <h1 className="mb-5 text-4xl">Edit Anggota</h1>

      <form action={dispatch}>
        <div className="mb-4" id="koor">
          <div className="mb-2">
            <label htmlFor="nama" className="mb-2 block">
              Nama Anggota
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              required
              defaultValue={data.nama}
              className="block w-full rounded-md border border-gray-500 p-3 text-sm  text-default-500"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="jabatan" className="mb-2 block">
              Jabatan Anggota
            </label>
            <Select
              label="Pilih Jabatan"
              radius="sm"
              className="w-full rounded-md border border-gray-500"
              name="jabatan"
              id="jabatan"
              defaultSelectedKeys={data.jabatan === "Koordinator" ? "0" : "1"}
            >
              {jabatanBidang.map((jabatan, index) => (
                <SelectItem key={index} value={jabatan}>
                  {jabatan}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div className="mb-4">
            <h1 className="mb-2">Current Image</h1>
            <Image src={data.image} width={200} height={200} alt={data.nama} />
          </div>

          <div>
            <label htmlFor="image-anggota" className="mb-2 block">
              Foto Anggota
            </label>
            <InputImage name="image-anggota" />
          </div>
        </div>
        <Button type="submit" name="id" value={`${data.id}-${data.idbidang}`}>
          Submit
        </Button>

        {showMessage && formState && !formState.success && (
          <p className="mt-5 text-red-700">{formState.message}</p>
        )}
      </form>
    </div>
  );
}

export function AddAnggotaForm({ id }: { id: string }) {
  const [formState, dispatch] = useFormState(AddAnggota, undefined);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (formState && formState.success) {
      redirect(`/dashboard/pengurus/bidang/${id}`);
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
      <h1 className="mb-5 text-4xl">Tambah Anggota Bidang {id}</h1>
      <form action={dispatch}>
        <div className="mb-4 w-full">
          <label htmlFor="nama" className="mb-2 block">
            Nama Anggota
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            required
            className="block w-full rounded-md border border-gray-500 p-3 text-sm text-default-500"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="jabatan" className="mb-2 block">
            Jabatan Anggota
          </label>
          <Select
            label="Pilih Jabatan"
            radius="sm"
            className="w-full rounded-md border border-gray-500"
            name="jabatan"
            id="jabatan"
          >
            {jabatanBidang.map((jabatan) => (
              <SelectItem key={jabatan} value={jabatan}>
                {jabatan}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="image-anggota" className="mb-2 block">
            Foto Anggota
          </label>
          <InputImage name="image-anggota" />
        </div>

        <Button type="submit" name="id" value={id}>
          Submit
        </Button>

        {showMessage && formState && !formState.success && (
          <p className="mt-5 text-red-700">{formState.message}</p>
        )}
      </form>
    </div>
  );
}
