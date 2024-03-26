import { CalendarMonth } from "@mui/icons-material";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import { CardRevealBottom } from "../../Reveal";

export default function CardEvent() {
  return (
    <CardRevealBottom>
      <Card shadow="sm" isPressable className="w-full">
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="none"
            width="100%"
            alt="bukber"
            className="h-[200px] w-full object-cover"
            src={"/images/bukber.jpg"}
          />
        </CardBody>
        <CardFooter className="text-small">
          <div className="w-full text-center">
            <b className="mb-3 text-xl">Buka Bersama</b>
            <p className="my-2 text-default-500">
              Buka Puasa bersama kelas X dan forum orang tua murid.
            </p>
            <div className="mb-3 flex items-center justify-center gap-2 text-default-500">
              <CalendarMonth />
              <p>23-05-2024</p>
            </div>
            <Link href={""} className="text-blue-700 underline">
              Lihat Detail
            </Link>
          </div>
        </CardFooter>
      </Card>
    </CardRevealBottom>
  );
}
