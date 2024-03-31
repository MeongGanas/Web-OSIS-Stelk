"use client";
import { getAllEvents } from "@/app/lib/data";
import { Button } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import Link from "next/link";

export default async function EditEvents() {
  const events = await getAllEvents();
  return (
    <div className="container pb-20 pt-32">
      <Button href={"/dashboard/events/add"} as={Link} className="mb-5">
        Tambah Event
      </Button>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn className="text-center">Nama</TableColumn>
          <TableColumn className="text-center">Tanggal</TableColumn>
          <TableColumn className="text-center">Deskripsi</TableColumn>
          <TableColumn className="text-center">Foto</TableColumn>
          <TableColumn className="text-center">Edit</TableColumn>
        </TableHeader>
        <TableBody>
          {events &&
            events.map((event) => (
              <TableRow key="1">
                <TableCell className="min-w-40 text-center">
                  {event.nama}
                </TableCell>
                <TableCell className="min-w-40 text-center">
                  {event.tanggal}
                </TableCell>
                <TableCell className="min-w-96">{event.deskripsi}</TableCell>
                <TableCell className="min-w-40 text-center">
                  {event.foto}
                </TableCell>
                <TableCell className="min-w-40 text-center">
                  <Link
                    href={`/dashboard/events/${event.id}`}
                    className="text-blue-600 underline"
                  >
                    Edit
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
