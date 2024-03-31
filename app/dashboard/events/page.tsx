import EventsList from "@/app/ui/admin/EventsList";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Events() {
  return (
    <div className="container pb-20 pt-32">
      <Button href={"/dashboard/events/add"} as={Link} className="mb-5">
        Tambah Event
      </Button>
      <EventsList />
    </div>
  );
}
