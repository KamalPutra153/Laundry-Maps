import Head from "next/head";
import localFont from "next/font/local";
import Images from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Service } from "@/components/service";
import { Advantage } from "@/components/advantage";
import { Mainhero } from "@/components/mainhero";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>CIPTIM LAUNDRY</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Mainhero />
      <Advantage />
      <Service />
      <Footer />
    </>
  );
}
