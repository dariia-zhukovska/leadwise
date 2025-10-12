// "use client";
// import React from "react";
// import clsx from "clsx";
// import Slider from "react-slick";
// import styles from "./styles.module.scss";
// import PrevArrow from "./arrows/PrevArrow";
// import NextArrow from "./arrows/NextArrow";
// import MonumentExtendedBold from "next/font/local";

// interface IProps {
//   children: React.ReactNode;
//   title?: string;
//   isMembers?: boolean;
//   extraTitle?: string;
// }

// const monumentExtended = MonumentExtendedBold({
//   src: "../../../styles/fonts/MonumentExtended-Regular.otf",
// });

// const CommonSlider = ({ children, title, isMembers, extraTitle }: IProps) => {
//   const numOfSlidesLg = isMembers ? 4 : 1;
//   const numOfSlides = isMembers ? 3 : 1;
//   const numOfSlidesMd = isMembers ? 2 : 1;
//   const settings = {
//     arrows: true,
//     dots: false,
//     infinite: true,
//     speed: 900,
//     slidesToShow: numOfSlides,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow onClick={() => console.log("next")} />,
//     prevArrow: <PrevArrow onClick={() => console.log("prev")} />,
//     responsive: [
//       {
//         breakpoint: 1000,
//         settings: { slidesToShow: numOfSlidesMd },
//       },
//       {
//         breakpoint: 710,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <div className={styles.relative}>
//       <h3 className={clsx(styles.serviceTitle, monumentExtended.className)}>
//         {extraTitle}
//       </h3>
//       <h2 className={styles.title}> {title} </h2>
//       <Slider {...settings}>{children}</Slider>
//     </div>
//   );
// };

// export default CommonSlider;
"use client";
import React from "react";
import clsx from "clsx";
import Slider, { Settings } from "react-slick";
import styles from "./styles.module.scss";

import MonumentExtendedBold from "next/font/local";
import NextArrow from "../arrows/NextArrow";
import PrevArrow from "../arrows/PrevArrow";

type Variant = "default" | "testimonial" | "compact";

interface IProps {
  children: React.ReactNode;
  title?: string;
  extraTitle?: string;
  /** якщо це грід членів команди – рахуємо по-іншому */
  isMembers?: boolean;

  /** НОВЕ: контроль зовнішнього вигляду, щоб не ламати інші місця */
  variant?: Variant; // "default" (мінімум стилів), "testimonial" (центрований 1 слайд)
  className?: string; // клас на секцію
  sliderClassName?: string; // клас на <Slider/>
  slideClassName?: string; // клас на кожен slide-контейнер дитини

  /** НОВЕ: тонкий контроль slick-параметрів */
  slidesToShow?: number;
  responsive?: Settings["responsive"];
  centerMode?: boolean;
  centerPadding?: string;
  arrows?: boolean;
}

const monumentExtended = MonumentExtendedBold({
  src: "../../../../styles/fonts/MonumentExtended-Regular.otf",
});

const CommonFeedbackSlider = ({
  children,
  title,
  extraTitle,
  isMembers,
  variant = "default",
  className,
  sliderClassName,
  slideClassName,
  slidesToShow,
  responsive,
  centerMode,
  centerPadding,
  arrows = true,
}: IProps) => {
  // дефолтні значення, що не зламають інші сценарії
  const show = slidesToShow ?? (isMembers ? 4 : 1);

  const baseResponsive = responsive ?? [
    { breakpoint: 1280, settings: { slidesToShow: isMembers ? 3 : 1 } },
    { breakpoint: 1000, settings: { slidesToShow: isMembers ? 2 : 1 } },
    { breakpoint: 710, settings: { slidesToShow: 1 } },
  ];

  const settings: Settings = {
    arrows,
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: show,
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: false,
    // для testimonial центруємо 1 картку, але це можна перевизначити пропсами
    centerMode: centerMode ?? (variant === "testimonial" && !isMembers),
    centerPadding: centerPadding ?? (variant === "testimonial" ? "0px" : "0px"),
    nextArrow: <NextArrow onClick={() => console.log("next")} />,
    prevArrow: <PrevArrow onClick={() => console.log("prev")} />,
    responsive: baseResponsive,
  };

  return (
    <section
      className={clsx(
        styles.sliderSection,
        variant === "testimonial" && styles.variantTestimonial,
        variant === "compact" && styles.variantCompact,
        className
      )}
    >
      {(extraTitle || title) && (
        <div className={styles.header}>
          {!!extraTitle && (
            <p
              className={clsx(styles.serviceTitle, monumentExtended.className)}
            >
              {extraTitle}
            </p>
          )}
          {!!title && <h2 className={styles.title}>{title}</h2>}
        </div>
      )}

      <Slider className={clsx(styles.slick, sliderClassName)} {...settings}>
        {React.Children.map(children, (child) => (
          <div className={clsx(styles.slideContainer, slideClassName)}>
            {child}
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CommonFeedbackSlider;
