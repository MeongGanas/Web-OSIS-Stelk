"use client";

import WelcomePage from "./ui/home/Welcome";
import AboutUs from "./ui/home/About";
import ListBidang from "./ui/home/ListBidang";
import SambutanKetos from "./ui/home/SambutanKetos";
import Manfaat from "./ui/home/Manfaat";

export default function Home() {
  return (
    <>
      <WelcomePage />

      <AboutUs />

      <ListBidang />

      <SambutanKetos />

      <Manfaat />
    </>
  );
}
