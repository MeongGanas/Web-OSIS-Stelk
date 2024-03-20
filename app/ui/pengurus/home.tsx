import { Edit } from "@mui/icons-material";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function HomePengurus({
  name,
  namaBidang,
  admin,
}: {
  name?: String;
  namaBidang?: String;
  admin?: boolean;
}) {
  return (
    <div className="relative mt-40 text-center overflow-hidden">
      <div className="min-h-screen w-full">
        <div className="title mb-10">
          <h1 className="uppercase text-6xl font-extrabold text-primary mb-3">
            {name}
            <Link href={""} className={clsx(admin ? "inline ml-5" : "hidden")}>
              <Edit />
            </Link>
          </h1>
          <h4 className="text-primary text-sm px-10 uppercase">{namaBidang}</h4>
        </div>

        <div className="w-full flex justify-center">
          <div
            className={`items-center justify-center w-full max-w-screen-md ${
              admin ? "flex" : "hidden"
            }`}
            id="input-image"
          >
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <Image
                  src={`/images/${name?.replace(" ", "")}/intro.png`}
                  alt="intro"
                  className="object-cover"
                  width={300}
                  height={300}
                />
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>

        <Image
          src={`/images/${name?.replace(" ", "")}/intro.png`}
          alt={`${name?.replace(" ", "")}`}
          className={`absolute bottom-16 left-1/2 -translate-x-1/2 md:static md:translate-x-0 ${
            admin ? "hidden" : "block"
          }`}
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
