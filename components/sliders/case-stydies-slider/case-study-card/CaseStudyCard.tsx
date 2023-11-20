"use client";

import Button from "@components/common/common-buttons/Button";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import useMediaQuery from "@hooks/useMediaQuery";

interface IProps {
  casePicture: string;
  cardTitle: string;
  data: string;
  time: string;
  slug: string;
  cardDescription: string;
}

const CaseStudyCard = ({
  casePicture,
  cardTitle,
  data,
  time,
  slug,
  cardDescription,
}: IProps) => {
  const isMobile = useMediaQuery(768);
  const onCardClick = () => {
    window.location.href = `/case-studies/${slug}`;
  };

  return (
    <div className={styles.wrapper} onClick={onCardClick}>
      <Image
        src={casePicture}
        alt={"item-image"}
        width={544}
        height={306}
        loading="lazy"
      />
      <div className={styles.description}>
        <div className={styles.tags}>
          <div className={styles.date}>{data}</div>
          <div className={styles.time}>{time}</div>
        </div>
        <div className={styles.textData}>
          <h2 className={styles.title}>{cardTitle}</h2>
          <p className={styles.description}>{cardDescription}</p>
        </div>
        <Link href={`/case-studies/${slug}`}>
          <Button
            size={isMobile ? "S" : "M"}
            variant={"link"}
            state={"default"}
            placeholder={"Read more"}
          />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
