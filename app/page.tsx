"use client";
import ClientsLayout from "@components/clients/ClientsLayout";
import MainPage from "@components/main-page/MainPage";
import ReachOut from "@components/reach-out-us/ReachOut";
import ServicesLayout from "@components/services/ServicesLayout";
import TeamMemberSlider from "@components/team-members-slider/TeamMemberSlider";
import Ticker from "@components/ticker/Ticker";

export default function Home() {
  const tickerItems = [
    "Appointments for Mini PC Manufacturer  |  $1.2 deal and $3M pipeline for Retail Non-Broker Agency  |  $1.2 deal and $3M pipeline for Retail Non-Broker Agency  |  Appointments for Mini PC Manufacturer  |  $1.2 deal and $3M pipeline for Retail Non-Broker Agency  |  $1.2 deal and $3M pipeline for Retail Non-Broker Agency  | ",
  ];
  const tickerInterval = 2;
  return (
    <main>
      <MainPage />
      <Ticker items={tickerItems} interval={tickerInterval} />
      <ClientsLayout />
      <ServicesLayout />
      {/* <TeamMemberSlider /> */}
      <ReachOut padding="120px" />
    </main>
  );
}
