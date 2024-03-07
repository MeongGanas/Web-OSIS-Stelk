import Reveal from "@/app/components/Reveal";

const SambutanKetos = () => {
  return (
    <div className="container w-full min-h-screen flex items-center translate-y-[8%]">
      <Reveal>
        <div className="flex items-center flex-wrap">
          <div className="w-full order-2 flex justify-center md:order-1 md:w-1/2">
            <img
              src="/images/sambutanketos.png"
              className="max-w-full"
              height={500}
              alt=""
            />
          </div>
          <div className="w-full order-1 md:order-2 md:w-1/2">
            <h1 className="text-primary mb-5 font-extrabold text-2xl md:text-4xl">
              Pesan Ketua OSIS
            </h1>
            <p className="mb-10">
              Lorem ipsum dolor sit amet consectetur. Vitae praesent odio dictum
              vivamus. Non lorem integer mollis urna. Fringilla in cras tellus
              ultricies. Varius nibh ac ultrices donec ultrices scelerisque.
            </p>
            <h2 className="text-primary mb-2 font-bold text-xl md:text-2xl">
              Narisyah Aqila
            </h2>
            <h4>Ketua OSIS Periode 2023/2024</h4>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default SambutanKetos;
