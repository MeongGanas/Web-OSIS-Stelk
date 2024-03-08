"use client";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./components/Navbar";
import React from "react";

const MainApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-x-hidden w-full max-w-screen-xl">
      <NextUIProvider>
        <div className="overflow-x-hidden w-full max-w-screen-2xl">
          <Navbar />
          <main className="-mt-28">{children}</main>
        </div>
      </NextUIProvider>
    </div>
  );
};

export default MainApp;
