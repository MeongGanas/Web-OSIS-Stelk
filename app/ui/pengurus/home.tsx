import Image from "next/image";

export default function HomePengurus({
  name,
  namaBidang,
}: {
  name?: String;
  namaBidang?: String;
}) {
  return (
    <div className="relative mt-40 text-center overflow-hidden flex justify-center">
      <div className="min-h-screen">
        <h1 className="uppercase text-6xl font-extrabold text-primary mb-3">
          {name}
        </h1>
        <h4 className="text-primary text-sm px-10 uppercase">{namaBidang}</h4>
        <Image
          src={`/images/${name?.replace(" ", "")}/intro.png`}
          alt={`${name?.replace(" ", "")}`}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          width={1300}
          height={500}
        />
        <img
          src="/shapes/Vector 3.png"
          className="absolute w-full left-0 bottom-0 lg:-bottom-1/3"
          alt=""
        />
      </div>
    </div>
  );
}
