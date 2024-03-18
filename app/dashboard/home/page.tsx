import Copyright from "@/app/ui/home/Copyright";
import FindUs from "@/app/ui/home/FindUs";
import JoinUs from "@/app/ui/home/JoinUs";
import ListBidang from "@/app/ui/home/ListBidang";
import Manfaat from "@/app/ui/home/Manfaat";
import SambutanKetos from "@/app/ui/home/SambutanKetos";
import VisiMisi from "@/app/ui/home/VisiMisi";
import WelcomePage from "@/app/ui/home/Welcome";

export default function Page() {
  return (
    <div className="pt-20">
      <WelcomePage />
      <VisiMisi />
      <ListBidang />
      <SambutanKetos />
      <Manfaat />
      <FindUs isAdmin={true} />
      <JoinUs />
      <Copyright />
    </div>
  );
}
