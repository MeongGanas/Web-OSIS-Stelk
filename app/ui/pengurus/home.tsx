const HomePengurus = ({
  name,
  namaBidang,
}: {
  name: string;
  namaBidang?: string;
}) => {
  return (
    <div className="relative text-center overflow-hidden flex justify-center">
      <div>
        <h1 className="uppercase text-6xl font-extrabold text-primary">
          {name}
        </h1>
        <h4>{namaBidang}</h4>
        <img src={`/images/${name.replace(" ", "")}/intro.png`} alt="" />
        <img
          src="/shapes/Vector 3.svg"
          className="absolute w-full left-0 -bottom-1/3"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomePengurus;
