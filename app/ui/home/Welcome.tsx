import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: "400", subsets: ["cyrillic"] });

const WelcomePage = () => {
  return (
    <div className="container w-full flex md:items-center flex-wrap pt-32">
      <div className="w-full md:w-1/2 flex items-center">
        <div className="max-w-lg">
          <h3 className={`text-2xl lg:text-4xl ${raleway.className}`}>
            Welcome
          </h3>
          <h1 className="block text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary">
            OSIS SMK TELKOM MAKASSAR
          </h1>
        </div>
      </div>
      <img
        src="/images/introOsis.svg"
        alt="intro"
        className="translate-y-1/3 sm:translate-y-1/4 md:translate-y-1/3 lg:translate-y-1/4 -z-10 w-full md:w-1/2"
      />
    </div>
  );
};

export default WelcomePage;
