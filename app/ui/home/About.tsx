import { Satisfy } from "next/font/google";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

const AboutUs = () => {
  return (
    <div className="relative min-h-screen">
      <div className="w-full shapebg h-full">
        <div className="container w-full h-full flex items-center relative py-40 text-white">
          <div>
            <h1 className="text-2xl font-extrabold uppercase mb-10">
              About Us
            </h1>
            <div className="flex flex-wrap justify-evenly">
              <div className="w-full sm:w-1/2 md:w-1/3">
                <h2 className={`text-2xl mb-3 ${satisfy.className}`}>Visi</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vitae praesent odio
                  dictum vivamus. Non lorem integer mollis urna. Fringilla in
                  cras tellus ultricies. Varius nibh ac ultrices donec ultrices
                  scelerisque.
                </p>
              </div>
              <div className="w-full md:w-1/2 bg-white text-black flex items-center justify-center rounded-md mt-5 md:mt-0">
                <h1>Foto Bersama</h1>
              </div>
            </div>
            <div className="flex flex-wrap mt-10 justify-evenly">
              <div className="w-full sm:w-1/2 md:w-1/3">
                <h2 className={`text-2xl mb-3 ${satisfy.className}`}>Misi</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vitae praesent odio
                  dictum vivamus. Non lorem integer mollis urna. Fringilla in
                  cras tellus ultricies. Varius nibh ac ultrices donec ultrices
                  scelerisque.
                </p>
              </div>
              <div className="w-full md:w-1/2 bg-white text-black flex items-center justify-center rounded-md mt-5 md:mt-0">
                <h1>Foto Bersama</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
