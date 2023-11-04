"use client";
import ClientsLayout from "@components/clients/ClientsLayout";
import MainPage from "@components/main-page/MainPage";
import ReachOut from "@components/reach-out-us/ReachOut";
import ServicesLayout from "@components/services/ServicesLayout";
import TeamMemberSlider from "@components/team-members-slider/TeamMemberSlider";

export default function Home() {
  return (
    <main>
      <MainPage />
      <ClientsLayout />
      <ServicesLayout />
      <TeamMemberSlider />
      <ReachOut />
    </main>
  );
}
