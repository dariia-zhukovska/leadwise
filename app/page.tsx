"use client";
import ClientsLayout from "@components/clients/ClientsLayout";
import MainPage from "@components/main-page/MainPage";
import ReachOut from "@components/reach-out-us/ReachOut";
import ServicesLayout from "@components/services/ServicesLayout";
// import TeamMemberSlider from "@components/team-members-slider/TeamMemberSlider";
import Ticker from "@components/ticker/Ticker";
import useMediaQuery from "../hooks/useMediaQuery";
import Head from "next/head";
import CommonSlider from "@components/common/slider/Slider";
import TeamMemberSlider from "@components/team-members-slider/TeamMemberSlider";

export default function Home() {
  const isMobile = useMediaQuery(768);
  const tickerItems = [
    "Appointments for Mini PC Manufacturer  |  $1.2 deal and $3M pipeline for Retail Non-Broker Agency  |  $1.2 deal and $3M pipeline for Retail Non-Broker Agency  |  Appointments for Mini PC Manufacturer  |  $1.2 deal and $3M pipeline for Retail Non-Broker Agency  |  $1.2 deal and $3M pipeline for Retail Non-Broker Agency  | ",
  ];
  const tickerInterval = 2;
  return (
    <>
      <main>
        {/*   <Head>
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head> */}
        <MainPage />
        <Ticker items={tickerItems} interval={tickerInterval} />
        <ClientsLayout />
        <ServicesLayout />
        <TeamMemberSlider />

        <ReachOut padding={isMobile ? "40px 20px" : "120px"} />
      </main>
    </>
  );
}
