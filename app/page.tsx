"use client";
import ClientsLayout from "@components/clients/ClientsLayout";
import MainPage from "@components/main-page/MainPage";
import ReachOut from "@components/reach-out-us/ReachOut";
import ServicesLayout from "@components/services/ServicesLayout";
import Ticker from "@components/ticker/Ticker";
import useMediaQuery from "../hooks/useMediaQuery";

import TeamMemberSlider from "@components/team-members-slider/TeamMemberSlider";
import CaseStudySlider from "@components/sliders/case-stydies-slider/CaseStudySlider";

export default function Home() {
  const isMobile = useMediaQuery(768);
  const tickerItems = [
    "Appointments for Mini PC Manufacturer  |  $1.2 deal and $3M pipeline for Retail Non-Broker Agency  |  $1.2 deal and $3M pipeline for Retail Non-Broker Agency  |  Appointments for Mini PC Manufacturer  |  $1.2 deal and $3M pipeline for Retail Non-Broker Agency  |  $1.2 deal and $3M pipeline for Retail Non-Broker Agency  | ",
  ];
  const tickerInterval = 2;

  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;

  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);
  return (
    <>
      <main>
        <MainPage />
        <Ticker items={tickerItems} interval={tickerInterval} />
        <ClientsLayout />
        <ServicesLayout />
        <CaseStudySlider />
        <TeamMemberSlider />

        <ReachOut padding={isMobile ? "40px 20px" : "120px"} />
      </main>
    </>
  );
}
