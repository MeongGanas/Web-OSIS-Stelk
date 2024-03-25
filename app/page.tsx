import WelcomePage from "./ui/home/Welcome";
import ListBidang from "./ui/home/ListBidang";
import SambutanKetos from "./ui/home/SambutanKetos";
import Manfaat from "./ui/home/Manfaat";
import JoinUs from "./ui/home/JoinUs";
import VisiMisi from "./ui/home/VisiMisi";
import Events from "./ui/home/Events";

export default async function Home() {
  return (
    <div className="pt-20">
      <WelcomePage />

      <VisiMisi />

      <ListBidang />

      <SambutanKetos />

      <Manfaat />

      <Events />

      <JoinUs />
    </div>
  );
}
