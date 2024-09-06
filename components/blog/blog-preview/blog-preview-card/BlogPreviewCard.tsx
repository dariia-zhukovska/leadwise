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
  hashtag: string;
  slug: string;
  cardDescription: string;
}

const BlogPreviewCard = ({
  casePicture,
  cardTitle,
  data,
  time,
  hashtag,
  slug,
  cardDescription,
}: IProps) => {
  const isMobile = useMediaQuery(768);
  const onCardClick = () => {
    window.location.href = `/blog/${slug}`;
  };

  return (
    <div className={styles.wrapper} onClick={onCardClick}>
      <Image
        src={casePicture}
        alt={"item-image"}
        // width={410}
        // height={210}
        sizes="100vw"
        fill={true}
        loading="lazy"
        className={styles.image}
      />
      <div className={styles.description}>
        <div className={styles.tags}>
          <div className={styles.date}>{data}</div>
          <div className={styles.time}>{time}</div>
          <div className={styles.hashtag}>{hashtag}</div>
        </div>
        <div className={styles.textData}>
          <div className={styles.cardTitleLink}>
            <h2 className={styles.title}>{cardTitle}</h2>
            <Link href={`/blog/${slug}`}>
              <Button
                size={isMobile ? "S" : "M"}
                variant={"link"}
                state={"default"}
                placeholder={"Button"}
              />
            </Link>
          </div>
          <p className={styles.description}>{cardDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPreviewCard;
