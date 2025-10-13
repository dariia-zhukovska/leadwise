"use client";
import ClientsLayout from "@components/clients/ClientsLayout";
import MainPage from "@components/main-page/MainPage";
import ReachOut from "@components/reach-out-us/ReachOut";
import ServicesLayout from "@components/services/ServicesLayout";
import Ticker from "@components/ticker/Ticker";
import useMediaQuery from "../hooks/useMediaQuery";

import TeamMemberSlider from "@components/sliders/team-members-slider/TeamMemberSlider";
import CaseStudySlider from "@components/sliders/case-stydies-slider/CaseStudySlider";
import FaQ from "@components/faq/FaQ";
import GoogleAnalytics from "@analitics/GoogleAnalitics";
import FeedbackSlider from "@components/sliders/feedback-slider/FeedbackSlider";

export default function Home() {
  const isMobile = useMediaQuery(768);
  const tickerItems = [
    "52 appointments in 4 months and a chock-full pipeline for AI and Blockchain company | HC strategy for a Blockchain company brought 35+ appointments and 144% KPI | 20+ appointments and 120% KPIs: How LeadWise helped FreshTech expand and grow | 100% KPI performance for a Roofing Application and 25+ appointments in 3 month ",
  ];
  const tickerInterval = 2;

  return (
    <>
      <main>
        <GoogleAnalytics />
        <MainPage />
        <Ticker items={tickerItems} interval={tickerInterval} />
        <ClientsLayout />
        <ServicesLayout />
        {/* <FeedbackSlider /> */}
        <CaseStudySlider />
        <TeamMemberSlider />
        <FaQ />
        <ReachOut padding={isMobile ? "40px 20px" : "120px"} />
      </main>
    </>
  );
}
