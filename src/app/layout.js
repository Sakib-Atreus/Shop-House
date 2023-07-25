import Navbar from "@/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Slider from "@/Slider/Slider";
import Footer from "@/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shop House",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://freepngimg.com/download/shopping/158223-photos-mall-shopping-store-free-clipart-hq.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shop House</title>
      </head>

      <body className={inter.className}>
        <Navbar></Navbar>
        <Slider></Slider>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
