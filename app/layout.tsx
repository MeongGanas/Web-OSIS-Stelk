import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import MyNavbar from "./components/Navbar";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OSIS STELK - Official Website",
  description: "Website OSIS SMK Telkom Makassar",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Providers>
          <div className="overflow-x-hidden w-full">
            <MyNavbar />
            <main className="-mt-28 w-full">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
