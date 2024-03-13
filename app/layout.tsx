import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./Providers";
import MyNavbar from "./ui/navbar/Navbar";
import { poppins } from "./ui/fonts";

export const metadata: Metadata = {
  title: "OSIS STELK - Official Website",
  description: "Website OSIS SMK Telkom Makassar",
  icons: {
    icon: "/icon/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
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
