// CommonSlider.tsx
import React from "react";
import Slider from "react-slick";
import styles from "./styles.module.scss";
import Head from "next/head";

interface IProps {
  children: React.ReactNode;
  title?: string;
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const SampleNextArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => (
  <div
    className={`${className} ${styles.redArrow}`}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  />
);

const SamplePrevArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => (
  <div
    className={`${className} ${styles.greenArrow}`}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  />
);

const CommonSlider: React.FC<IProps> = ({ children, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Head>
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
      </Head>
      {/* <h2 className={styles.title}> {title} </h2> */}
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default CommonSlider;
