"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import Button from "@components/common/common-buttons/Button";
import MonumentExtendedBold from "next/font/local";
import clsx from "clsx";
import Link from "next/link";
import { CALENDLY_LINK } from "@app/helpers/mockedData";

const monumentExtended = MonumentExtendedBold({
  src: "../../styles/fonts/MonumentExtended-Regular.otf",
});

const MainPage = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <div className={styles.wrapper}>
      <h1 className={clsx(styles.title, monumentExtended.className)}>
        Lead Wise
      </h1>
      <p className={styles.subTitle}>
        B2B Lead Generation Agency for Software development, NFT and Blockchain
        Services
      </p>
      <div className={styles.bookCall}>
        <Link href={CALENDLY_LINK}>
          <Button
            size={isMobile ? "S" : "M"}
            variant={"primary"}
            state={"default"}
            placeholder={"Book a Call"}
          />
        </Link>

        <Image
          src={"/assets/images/main-picture.png"}
          alt={"main-picture"}
          // width={560}
          // height={364}
          width={347}
          height={226}
        />
      </div>
    </div>
  );
};

export default MainPage;
