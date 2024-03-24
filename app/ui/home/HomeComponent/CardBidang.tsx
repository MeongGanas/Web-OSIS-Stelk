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
      className="relative min-h-32 overflow-hidden rounded-md transition duration-200 hover:scale-105"
    >
      <Image
        src={url}
        alt={name}
        width={200}
        height={200}
        className="h-full w-full"
      />
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl uppercase text-white">
        {name}
      </h1>
    </Link>
  );
}
