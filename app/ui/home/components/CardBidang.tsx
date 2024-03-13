"use client";
import Image from "next/image";
import Link from "next/link";

export default function CardBidang({
  url,
  name,
  to,
}: {
  name: string;
  url: string;
  to: string;
}) {
  return (
    <Link
      href={to}
      className="relative rounded-md overflow-hidden hover:scale-105 transition duration-200 min-h-32"
    >
      <Image
        src={url}
        alt={name}
        width={200}
        height={200}
        className="w-full h-full"
      />
      <h1 className="uppercase absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white text-xl">
        {name}
      </h1>
    </Link>
  );
}
