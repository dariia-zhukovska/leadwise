"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";

import serviceDetails from "@app/api/serviceDetails.json";
import TopInfo from "@components/top-info/TopInfo";
import PerfectMatch from "@components/perfect-match/PerfectMatch";
import Facts from "@components/facts/Facts";
// import { ServiceItem } from "@interfaces/interfaces";
import ReachOut from "@components/reach-out-us/ReachOut";
import TeamMemberSlider from "@components/sliders/team-members-slider/TeamMemberSlider";
import useMediaQuery from "@hooks/useMediaQuery";
import FaQ from "@components/faq/FaQ";

const ServiceItem = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery(768);

  return (
    <main className={styles.mainWrapper}>
      {serviceDetails?.map((item) => {
        if (pathname === `/services/${item.slug}`) {
          return (
            <div className={styles.slugContainer} key={item.id}>
              <TopInfo
                mainTitle={item.mainTitle}
                subtitle={item.subtitle}
                description={item.description}
                buttonPlaceholder={"Let's book you up"}
                imageSrc={item.mainImg}
                key={item.id}
              />
              <div className={styles.servicesItemsContainer}>
                <div className={styles.itemWrapper}>
                  <h2 className={styles.serviceItemTitle}>
                    {item.secondaryTitle}
                  </h2>
                  <span className={styles.serviceItemDescription}>
                    {item.secondarySubtitle}
                  </span>
                </div>
                <ul className={styles.servicesList}>
                  {item.cards.map((card) => (
                    <li className={styles.serviceListItem} key={card.cardId}>
                      <div className={styles.serviceItemDetails}>
                        <h1 className={styles.cardTitle}>{card.cardTitle}</h1>
                        <span className={styles.subtitle}>
                          {card.cardDescription}
                        </span>
                        <ul className={styles.cardList}>
                          {card["cardItems"].map((item) => (
                            <li className={styles.cardItem} key={item.id}>
                              {item.text}
                            </li>
                          ))}
                          <li className={styles.cardItem}></li>
                        </ul>
                      </div>
                      <Image
                        src={card.cardImg}
                        alt={"card-image"}
                        width={410}
                        height={412}
                        loading="lazy"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <PerfectMatch />
            </div>
          );
        }

        return null;
      })}
      <div className={styles.facts}>
        <Facts />
      </div>
      <FaQ />
      <TeamMemberSlider />
      <ReachOut padding={isMobile ? "40px 20px" : "120px"} />
    </main>
  );
};

export default ServiceItem;
