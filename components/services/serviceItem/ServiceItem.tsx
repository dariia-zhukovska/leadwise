"use client";

import React from "react";
import styles from "./styles.module.scss";
import Button from "@components/common/common-buttons/Button";
import Link from "next/link";

interface IProps {
  title: string;
  description: string;

  isPopular?: boolean;
  slug: string;
}

const ServiceItem = ({
  title,
  description,

  isPopular,
  slug,
}: IProps) => {
  return (
    <div className={styles.serviceItemWrapper}>
      <div className={styles.serviseItemTop}>
        {isPopular && <span className={styles.popular}>Most Popular</span>}
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <Link href={`/services/${slug}`}>
        <Button
          size={"S"}
          variant={"link"}
          state={"default"}
          placeholder={"Read more"}
        />
      </Link>
    </div>
  );
};

export default ServiceItem;
