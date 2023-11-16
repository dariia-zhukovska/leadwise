"use client";
import React from "react";
import Slider from "react-slick";
import styles from "./styles.module.scss";
import Head from "next/head";
import TeamMemberCard from "@components/team-members-slider/team-member-card/TeamMemberCard";
import membersList from "@app/api/membersList.json";
import PrevArrow from "./arrows/PrevArrow";
import NextArrow from "./arrows/NextArrow";

interface IProps {
  children: React.ReactNode;
  title?: string;
  isMembers?: boolean;
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CommonSlider = ({ children, title, isMembers }: IProps) => {
  const numOfSlides = isMembers ? 3 : 1;
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: numOfSlides,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => console.log("next")} />,
    prevArrow: <PrevArrow onClick={() => console.log("prev")} />,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
    // afterChange: current => {
    //   setProgress(100 / (data.length - slideToShow + 1) * (current + 1));
    //   console.log(sliderToShow);

    // }
  };

  return (
    <div className={styles.relative}>
      <h2 className={styles.title}> {title} </h2>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default CommonSlider;
