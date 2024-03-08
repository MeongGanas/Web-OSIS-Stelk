"use client";
import Link from "next/link";

const CardBidang = ({
  url,
  name,
  to,
}: {
  name: string;
  url: string;
  to: string;
}) => {
  return (
    <Link
      href={to}
      className="relative rounded-md overflow-hidden hover:scale-105 transition duration-200 min-h-32"
    >
      <div className="bg-black bg-opacity-75 w-full h-full absolute"></div>
      <img src={url} alt={name} loading="eager" />
      <h1 className="uppercase absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white text-xl">
        {name}
      </h1>
    </Link>
  );
};

export default CardBidang;
