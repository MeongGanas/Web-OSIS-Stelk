import { EditButton } from "@/app/Button";
import Image from "next/image";

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
    <div className="relative overflow-hidden text-center">
      <div className="w-full py-40">
        <div className="title mb-10 pb-40 md:pb-0">
          <h1 className="mb-3 text-6xl font-extrabold uppercase text-primary">
            {name}
            <div className={`${admin ? "block" : "hidden"}`}>
              <EditButton data="id" />
            </div>
          </h1>
          <h4 className="px-10 text-sm uppercase text-primary">{namaBidang}</h4>
        </div>

        <div className="flex w-full justify-center">
          <div
            className={`w-full max-w-screen-md items-center justify-center ${
              admin ? "flex" : "hidden"
            }`}
            id="input-image"
          >
            <label
              htmlFor="dropzone-file"
              className="dark:hover:bg-bray-800 flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <svg
                  className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
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
          className={`absolute bottom-16 left-1/2 w-full -translate-x-1/2 md:static md:translate-x-0 ${
            admin ? "hidden" : "block"
          }`}
          width={1300}
          height={500}
        />

        <img
          src="/shapes/Vector 3.png"
          className="absolute bottom-0 left-0 max-h-60 w-full"
          alt="shape"
        />
      </div>
    </div>
  );
}
