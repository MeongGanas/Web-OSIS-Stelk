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
            className={`w-full py-28 block ${
              admin ? "lg:py-36" : "lg:py-52"
            } xl:flex xl:items-center`}
          >
            <div className="w-full xl:w-1/2">
              <h3
                className={`text-2xl lg:text-4xl ${raleway.className} antialiased`}
              >
                Welcome
              </h3>
              <div className="block text-4xl md:text-5xl xl:text-6xl font-extrabold text-primary">
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
              className={`items-center justify-center w-full xl:w-1/2 ${
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
          "-z-10 absolute bottom-10 md:bottom-20 lg:bottom-0 right-1/2 translate-x-1/2 xl:right-16 xl:translate-x-16 xl:bottom-16",
          { "hidden w-0": admin }
        )}
        width={600}
        height={600}
      />
      <Image
        src="/shapes/Vector 3.svg"
        className="absolute w-full left-0 -bottom-1 md:-bottom-10 lg:-bottom-1/4"
        alt="shape"
        width={1000}
        height={400}
      />
    </div>
  );
}
