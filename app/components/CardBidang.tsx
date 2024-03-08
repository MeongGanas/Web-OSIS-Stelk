"use client";
import Link from "next/link";

const CardBidang = ({ url, name }: { name: string; url: string }) => {
  return (
    <Link
      href={""}
      className="relative rounded-md overflow-hidden hover:scale-105 transition duration-200 min-h-32"
    >
      <div className="bg-black bg-opacity-70 w-full h-full absolute"></div>
      <img src={url} alt={name} loading="eager" />
      <h1 className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white text-xl">
        {name}
      </h1>
    </Link>
  );
};

export default CardBidang;
