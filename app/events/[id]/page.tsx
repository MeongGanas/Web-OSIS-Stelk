import { getDetailEvent } from "@/app/lib/data";
import { CalendarMonth } from "@mui/icons-material";
import Image from "next/image";

export default async function EventDetail({
  params,
}: {
  params: { id: number };
}) {
  const event = await getDetailEvent(params.id);
  return (
    <div className="container w-full max-w-screen-lg py-32">
      <h1 className="mb-5 text-center text-4xl font-bold text-primary">
        {event.nama}
      </h1>
      <div className="flex w-full justify-center px-5">
        <Image
          src={event.foto}
          alt="bukber"
          width={600}
          height={400}
          className="rounded-md"
        />
      </div>
      <div>
        <p className="mb-5 flex items-center gap-2">
          <CalendarMonth />
          <span>{event.tanggal}</span>
        </p>
        <p className="mb-2 text-default-500">{event.deskripsi}</p>
      </div>
    </div>
  );
}
