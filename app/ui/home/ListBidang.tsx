import CardBidang from "@/app/components/CardBidang";
import Reveal from "@/app/components/Reveal";

const ListBidang = () => {
  return (
    <Reveal>
      <div className="container py-20 w-full min-h-screen flex items-center">
        <div className="w-full">
          <div className="w-full flex justify-center">
            <div className="w-full text-center max-w-screen-sm">
              <h1 className="text-2xl mb-5 md:text-4xl font-extrabold text-primary">
                Bidang
              </h1>
              <p className="text-wrap">
                OSIS SMK Telkom Makassar terbagi menjadi 10 bidang agar dapat
                fokus menjalankan program kerja dan tugas masing-masing
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-5 sm:grid-cols-3 xl:grid-cols-5 gap-5">
            <CardBidang name="Bidang 1" url="/images/bidang1.JPG" />
            <CardBidang name="Bidang 2" url="/images/bidang2.JPG" />
            <CardBidang name="Bidang 3" url="/images/bidang3.JPG" />
            <CardBidang name="Bidang 4" url="/images/bidang4.JPG" />
            <CardBidang name="Bidang 5" url="/images/bidang5.JPG" />
            <CardBidang name="Bidang 6" url="/images/bidang6.JPG" />
            <CardBidang name="Bidang 7" url="/images/bidang7.JPG" />
            <CardBidang name="Bidang 8" url="/images/bidang8.JPG" />
            <CardBidang name="Bidang 9" url="/images/bidang9.JPG" />
            <CardBidang name="Bidang 10" url="/images/bidang10.JPG" />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ListBidang;
