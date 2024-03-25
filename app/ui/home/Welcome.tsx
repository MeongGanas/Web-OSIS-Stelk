import { ContainerReveal } from "@/app/ui/Reveal";
import Image from "next/image";
import { raleway } from "../fonts";
import Link from "next/link";
import { Edit } from "@mui/icons-material";
import clsx from "clsx";

export default async function WelcomePage({ admin }: { admin?: boolean }) {
  return (
    <div className="relative min-h-screen">
      <ContainerReveal>
        <div className="container w-full">
          <div
            className={`block w-full py-28 ${
              admin ? "lg:py-36" : "lg:py-52"
            } xl:flex xl:items-center`}
          >
            <div className="w-full xl:w-1/2">
              <h3
                className={`text-2xl lg:text-4xl ${raleway.className} antialiased`}
              >
                Welcome
              </h3>
              <div className="block text-5xl font-extrabold text-primary md:text-6xl">
                <h1>OSIS SMK TELKOM</h1>
                <span className="block">
                  MAKASSAR{" "}
                  <Link href={""} className={clsx(admin ? "inline" : "hidden")}>
                    <Edit />
                  </Link>
                </span>
              </div>
            </div>
            <div
              className={`w-full items-center justify-center xl:w-1/2 ${
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
                    src="/images/introOsis.png"
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
        </div>
      </ContainerReveal>
      <Image
        src="/images/introOsis.png"
        alt="intro"
        className={clsx(
          "absolute bottom-10 right-1/2 -z-10 translate-x-1/2 md:bottom-20 lg:bottom-0 xl:bottom-16 xl:right-16 xl:translate-x-16",
          { "hidden w-0": admin },
        )}
        width={600}
        height={600}
      />
      <Image
        src="/shapes/Vector 3.svg"
        className="absolute -bottom-1 left-0 w-full md:-bottom-10 lg:-bottom-1/4"
        alt="shape"
        width={1000}
        height={400}
      />
    </div>
  );
}
