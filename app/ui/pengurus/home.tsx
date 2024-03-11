export default function HomePengurus({
  name,
  namaBidang,
}: {
  name?: string;
  namaBidang?: string;
}) {
  return (
    <div className="relative mt-40 text-center overflow-hidden flex justify-center">
      <div className="min-h-[500px]">
        <h1 className="uppercase text-6xl font-extrabold text-primary">
          {name}
        </h1>
        <h4>{namaBidang}</h4>
        <img
          src={`/images/${name?.replace(" ", "")}/intro.png`}
          alt=""
          className="absolute bottom-16 left-1/2 -translate-x-1/2 md:static md:translate-x-0"
        />
        <img
          src="/shapes/Vector 3.png"
          className="absolute w-full left-0 bottom-0 md:-bottom-1/3"
          alt=""
        />
      </div>
    </div>
  );
}
