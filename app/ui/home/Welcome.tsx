import Reveal from "@/app/components/Reveal";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: "400", subsets: ["cyrillic"] });

const WelcomePage = () => {
  return (
    <div className="relative md:pt-20 pt-44">
      <Reveal>
        <div className="container min-h-[600px] w-full flex flex-wrap md:items-center">
          <div className="w-full md:w-1/2">
            <div className="max-w-sm md:max-w-xl">
              <h3 className={`text-2xl lg:text-4xl ${raleway.className}`}>
                Welcome
              </h3>
              <h1 className="block text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary">
                OSIS SMK TELKOM MAKASSAR
              </h1>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/images/introOsis.png"
              alt="intro"
              className="-z-10 absolute bottom-16 right-1/2 translate-x-1/2 sm:static sm:translate-x-0"
            />
          </div>
        </div>
      </Reveal>
      <img
        src="/shapes/Vector 3.svg"
        className="absolute w-full left-0 -bottom-1 md:-bottom-10 lg:-bottom-1/4 xl:-bottom-1/4"
        alt=""
      />
    </div>
  );
};

export default WelcomePage;
