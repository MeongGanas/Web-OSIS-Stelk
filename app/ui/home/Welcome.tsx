import Reveal from "@/app/ui/Reveal";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: "400", subsets: ["cyrillic"] });

export default function WelcomePage() {
  return (
    <div className="relative min-h-screen pt-20">
      <Reveal>
        <div className="container w-full">
          <div className="w-full py-28 lg:py-52">
            <h3
              className={`text-2xl lg:text-4xl ${raleway.className} antialiased`}
            >
              Welcome
            </h3>
            <h1 className="block text-4xl md:text-5xl xl:text-6xl font-extrabold text-primary ">
              OSIS SMK TELKOM <span className="block">MAKASSAR</span>
            </h1>
          </div>
        </div>
      </Reveal>
      <img
        src="/images/introOsis.png"
        alt="intro"
        className="-z-10 absolute bottom-10 md:bottom-20 lg:bottom-0 right-1/2 translate-x-1/2 xl:right-16 xl:translate-x-16 xl:bottom-16"
        width={600}
        height={600}
      />
      <img
        src="/shapes/Vector 3.svg"
        className="absolute w-full left-0 -bottom-1 md:-bottom-10 lg:-bottom-1/4"
        alt=""
      />
    </div>
  );
}
