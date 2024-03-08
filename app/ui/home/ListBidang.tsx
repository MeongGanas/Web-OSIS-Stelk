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
            <CardBidang
              name="Bidang 1"
              url="/images/bidang1.JPG"
              to="/pengurus/bidang-1"
            />
            <CardBidang
              name="Bidang 2"
              url="/images/bidang2.JPG"
              to="/pengurus/bidang-2"
            />
            <CardBidang
              name="Bidang 3"
              url="/images/bidang3.JPG"
              to="/pengurus/bidang-3"
            />
            <CardBidang
              name="Bidang 4"
              url="/images/bidang4.JPG"
              to="/pengurus/bidang-4"
            />
            <CardBidang
              name="Bidang 5"
              url="/images/bidang5.JPG"
              to="/pengurus/bidang-5"
            />
            <CardBidang
              name="Bidang 6"
              url="/images/bidang6.JPG"
              to="/pengurus/bidang-6"
            />
            <CardBidang
              name="Bidang 7"
              url="/images/bidang7.JPG"
              to="/pengurus/bidang-7"
            />
            <CardBidang
              name="Bidang 8"
              url="/images/bidang8.JPG"
              to="/pengurus/bidang-8"
            />
            <CardBidang
              name="Bidang 9"
              url="/images/bidang9.JPG"
              to="/pengurus/bidang-9"
            />
            <CardBidang
              name="Bidang 10"
              url="/images/bidang10.JPG"
              to="/pengurus/bidang-10"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ListBidang;
