import Reveal from "@/app/components/Reveal";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: "400", subsets: ["cyrillic"] });

const WelcomePage = () => {
  return (
    <div className="translate-y-1/4 sm:translate-y-1/4">
      <Reveal>
        <div className="container min-h-screen md:pt-20 w-full flex flex-wrap md:items-center lg:items-start">
          <div className="w-full md:w-1/2 lg:pt-10">
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
              className="-z-10 w-full"
            />
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default WelcomePage;
