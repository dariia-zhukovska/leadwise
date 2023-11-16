"use client";
import React from "react";
import Slider from "react-slick";
import styles from "./styles.module.scss";
import PrevArrow from "./arrows/PrevArrow";
import NextArrow from "./arrows/NextArrow";

interface IProps {
  children: React.ReactNode;
  title?: string;
  isMembers?: boolean;
}

const CommonSlider = ({ children, title, isMembers }: IProps) => {
  const numOfSlides = isMembers ? 3 : 1;
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
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className={styles.relative}>
      <h2 className={styles.title}> {title} </h2>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default CommonSlider;
