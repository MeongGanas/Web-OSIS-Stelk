import CardReveal from "../../CardReveal";

export default function CardMisi({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <CardReveal>
      <div className="p-5 rounded-md flex items-center min-h-56 glass hover:scale-105 transition duration-150 text-black">
        <div>
          <h1 className="text-2xl mb-2">{title}</h1>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </CardReveal>
  );
}
