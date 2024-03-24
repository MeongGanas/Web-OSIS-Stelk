import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./Providers";
import MyNavbar from "./ui/navbar/Navbar";
import { poppins } from "./ui/fonts";
import { getAllBidang } from "./lib/data";

export const metadata: Metadata = {
  title: "OSIS STELK - Official Website",
  description: "Website OSIS SMK Telkom Makassar",
  icons: {
    icon: "/icon/icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bidangs = await getAllBidang();

  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Providers>
          <MyNavbar bidangs={bidangs} />
          <main className="-mt-28 w-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
