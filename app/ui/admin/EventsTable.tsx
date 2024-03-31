"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Events } from "@/app/lib/definitions";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { DeleteEvent } from "@/app/lib/actions";

export default function EventsTable({ events }: { events: Array<Events> }) {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn className="text-center">Nama</TableColumn>
        <TableColumn className="text-center">Tanggal</TableColumn>
        <TableColumn className="text-center">Deskripsi</TableColumn>
        <TableColumn className="text-center">Foto</TableColumn>
        <TableColumn className="text-center">Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {events &&
          events.map((event) => (
            <TableRow key="1">
              <TableCell className="min-w-40 text-center">
                {event.nama}
              </TableCell>
              <TableCell className="min-w-40 text-center">
                {event.tanggal.split("-").reverse().join("-")}
              </TableCell>
              <TableCell className="min-w-96 text-center">
                {event.deskripsi}
              </TableCell>
              <TableCell className="min-w-40 text-center">
                <Link href={event.foto} className="text-blue-600 underline">
                  foto
                </Link>
              </TableCell>
              <TableCell className="min-w-40 text-center">
                <Button
                  as={Link}
                  href={`/dashboard/events/${event.id}`}
                  className="bg-transparent text-blue-700 underline"
                >
                  Edit
                </Button>
                <Button
                  className="bg-transparent text-red-700 underline"
                  onClick={() => DeleteEvent(event.id)}
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
