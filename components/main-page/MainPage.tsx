"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import Button from "@components/common/common-buttons/Button";
import MonumentExtendedBold from "next/font/local";
import clsx from "clsx";
import Link from "next/link";
import { CALENDLY_LINK } from "@app/helpers/mockedData";
import useMediaQuery from "@hooks/useMediaQuery";

const monumentExtended = MonumentExtendedBold({
  src: "../../styles/fonts/MonumentExtended-Regular.otf",
});

const MainPage = () => {
  const isMobile = useMediaQuery(768);
  const isTablet = useMediaQuery(1024);

  return (
    <div className={styles.wrapper}>
      <h1 className={clsx(styles.title, monumentExtended.className)}>
        Lead Wise
      </h1>
      <p className={styles.subTitle}>
        Lead Generation Agency For IT services and IT consulting companies
        operating in Software Development, AI, Blockchain, UI/UX Design, and
        consulting.
      </p>
      <div className={styles.bookCall}>
        <Link href={CALENDLY_LINK} target="_blank">
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
          width={isTablet ? 347 : 560}
          height={isTablet ? 226 : 364}
          loading="lazy"
          // // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // fill
          // layout={"fill"}
        />
      </div>
    </div>
  );
};

export default MainPage;
