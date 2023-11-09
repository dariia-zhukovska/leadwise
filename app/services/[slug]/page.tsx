"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./styles.module.scss";
import Button from "@components/common/common-buttons/Button";
import { useRouter } from "next/navigation";

import serviceDetails from "@app/api/serviceDetails.json";
import TopInfo from "@components/top-info/TopInfo";
import PerfectMatch from "@components/perfect-match/PerfectMatch";
import Facts from "@components/facts/Facts";
import { ServiceItem } from "@interfaces/interfaces";
import ReachOut from "@components/reach-out-us/ReachOut";

interface Iprops {
  data: ServiceItem[];
}

const ServiceItem = ({ data }: Iprops) => {
  // const router = useRouter();

  const urlParts = window.location.pathname.split("/");

  const serviceItemSlug = urlParts[urlParts.length - 1];

  return (
    <main className={styles.mainWrapper}>
      {serviceDetails?.map((item) => {
        if (serviceItemSlug === item.slug) {
          return (
            <>
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
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <PerfectMatch />
              <div className={styles.facts}>
                <Facts />
              </div>
            </>
          );
        }
        return null;
      })}

      <ReachOut />
    </main>
  );
};

// export async function getData() {
//   const data = require("@app/api/serviceDetails.json");

//   return {
//     props: {
//       data,
//     },
//   };
// }

export default ServiceItem;
