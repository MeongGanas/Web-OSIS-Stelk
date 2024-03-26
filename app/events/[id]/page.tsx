import Carousel from "@/app/ui/event/carousel";
import { CalendarMonth } from "@mui/icons-material";

export default function EventDetail({ params }: { params: { id: number } }) {
  const images = [
    "/images/bukber.jpg",
    "/images/bukber.jpg",
    "/images/bukber.jpg",
  ];

  return (
    <div className="container w-full max-w-screen-lg py-32">
      <h1 className="text-center text-4xl font-bold text-primary">
        Buka Bersama
      </h1>
      <div className="flex w-full justify-center px-5">
        <Carousel images={images} />
      </div>
      <div>
        <p className="mb-5 flex items-center gap-2">
          <CalendarMonth />
          <span>23-03-2024</span>
        </p>
        <p className="mb-2 text-default-500">
          OSIS SMK TELKOM Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Distinctio, veritatis veniam ipsam amet neque temporibus
          aspernatur commodi delectus, debitis officiis repudiandae fuga,
          molestias odio consequatur aliquam animi! Dolor, veniam iure.
        </p>
        <p className="mb-2 text-default-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sed
          eveniet perferendis nihil dignissimos dolorum recusandae vero expedita
          sint mollitia hic amet repellat veniam placeat at suscipit
          exercitationem, voluptate dolores?
        </p>
      </div>
    </div>
  );
}
