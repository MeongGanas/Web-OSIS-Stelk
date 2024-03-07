import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: "400", subsets: ["cyrillic"] });

const WelcomePage = () => {
  return (
    <div className="container w-full flex flex-wrap pt-20 md:items-center lg:items-start translate-y-1/4">
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
      <img
        src="/images/introOsis.png"
        alt="intro"
        className="translate-y-[10%] md:translate-y-[17%] lg:translate-y-0 -z-10 w-full md:w-1/2"
      />
    </div>
  );
};

export default WelcomePage;
