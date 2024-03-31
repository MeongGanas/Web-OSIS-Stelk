"use server";

import { getAllEvents } from "@/app/lib/data";
import EventsTable from "./EventsTable";

export default async function EventsList() {
  const events = await getAllEvents();
  return <EventsTable events={events} />;
}
