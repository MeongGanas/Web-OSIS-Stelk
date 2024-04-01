"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Anggota } from "@/app/lib/definitions";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { DeleteAnggota } from "@/app/lib/actions";

export default function AnggotaTable({
  anggotas,
}: {
  anggotas: Array<Anggota>;
}) {
  return (
    <Table aria-label="List anggota">
      <TableHeader>
        <TableColumn className="text-center">Nama</TableColumn>
        <TableColumn className="text-center">Jabatan</TableColumn>
        <TableColumn className="text-center">Foto</TableColumn>
        <TableColumn className="text-center">Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {anggotas &&
          anggotas.map((anggota) => (
            <TableRow key="1">
              <TableCell className="min-w-40 text-center">
                {anggota.nama}
              </TableCell>
              <TableCell className="min-w-40 text-center">
                {anggota.jabatan}
              </TableCell>
              <TableCell className="min-w-40 text-center">
                <Link href={anggota.image} className="text-blue-600 underline">
                  foto
                </Link>
              </TableCell>
              <TableCell className="min-w-40 text-center">
                <Button
                  as={Link}
                  href={`/dashboard/pengurus/bidang/${anggota.idBidang}/${anggota.id}`}
                  className="bg-transparent text-blue-700 underline"
                >
                  Edit
                </Button>
                <Button
                  className="bg-transparent text-red-700 underline"
                  onClick={() => DeleteAnggota(anggota.id, anggota.idBidang)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
