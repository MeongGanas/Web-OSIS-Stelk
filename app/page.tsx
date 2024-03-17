import WelcomePage from "./ui/home/Welcome";
import ListBidang from "./ui/home/ListBidang";
import SambutanKetos from "./ui/home/SambutanKetos";
import Manfaat from "./ui/home/Manfaat";
import FindUs from "./ui/home/FindUs";
import JoinUs from "./ui/home/JoinUs";
import Copyright from "./ui/home/Copyright";
import VisiMisi from "./ui/home/VisiMisi";

export default async function Home() {
  return (
    <div className="pt-20">
      <WelcomePage />

      <VisiMisi />

      <ListBidang />

      <SambutanKetos />

      <Manfaat />

      <FindUs />

      <JoinUs />

      <Copyright />
    </div>
  );
}
