import Reveal from "@/app/components/Reveal";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: "400", subsets: ["cyrillic"] });

const WelcomePage = () => {
  return (
    <div className="relative w-full">
      <Reveal>
        <div className="container min-h-screen md:pt-20 w-full flex flex-wrap md:items-center pt-44">
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
              className="-z-10 relative bottom-0 w-full md:max-w-md lg:max-w-xl xl:max-w-screen-sm"
            />
          </div>
        </div>
      </Reveal>
      <img
        src="/shapes/Vector 3.svg"
        className="absolute w-full -bottom-1 lg:-bottom-1/4 xl:-bottom-1/3"
        alt=""
      />
    </div>
  );
};

export default WelcomePage;
