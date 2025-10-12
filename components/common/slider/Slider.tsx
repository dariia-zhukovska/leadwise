"use client";
import React from "react";
import clsx from "clsx";
import Slider from "react-slick";
import styles from "./styles.module.scss";
import PrevArrow from "./arrows/PrevArrow";
import NextArrow from "./arrows/NextArrow";
import MonumentExtendedBold from "next/font/local";

interface IProps {
  children: React.ReactNode;
  title?: string;
  isMembers?: boolean;
  extraTitle?: string;
  isFeedBack?: boolean;
}

const monumentExtended = MonumentExtendedBold({
  src: "../../../styles/fonts/MonumentExtended-Regular.otf",
});

const CommonSlider = ({
  children,
  title,
  isMembers,
  extraTitle,
  isFeedBack,
}: IProps) => {
  const numOfSlidesLg = isMembers ? 4 : 1;
  const numOfSlides = isMembers ? 3 : 1;
  const numOfSlidesMd = isMembers ? 2 : 1;
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: numOfSlides,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => console.log("next")} />,
    prevArrow: <PrevArrow onClick={() => console.log("prev")} />,
    responsive: [
      {
        breakpoint: 1000,
        settings: { slidesToShow: numOfSlidesMd },
      },
      {
        breakpoint: 710,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className={styles.relative}>
      <h3 className={clsx(styles.serviceTitle, monumentExtended.className)}>
        {extraTitle}
      </h3>
      <h2 className={clsx(styles.title, isFeedBack && styles.feedbackTitle)}>
        {title}
      </h2>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default CommonSlider;
