"use client";

import WelcomePage from "./ui/home/Welcome";
import AboutUs from "./ui/home/About";
import ListBidang from "./ui/home/ListBidang";
import SambutanKetos from "./ui/home/SambutanKetos";
import Manfaat from "./ui/home/Manfaat";
import AboutUs2 from "./ui/home/AboutUs2";
import FindUs from "./ui/home/FindUs";
import JoinUs from "./ui/home/JoinUs";
import Copyright from "./ui/home/Copyright";

export default function Home() {
  return (
    <>
      <WelcomePage />

      <AboutUs2 />

      <ListBidang />

      <SambutanKetos />

      <Manfaat />

      <FindUs />

      <JoinUs />

      <Copyright />
    </>
  );
}
