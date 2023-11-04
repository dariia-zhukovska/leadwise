"use client";

import React from "react";
import styles from "./styles.module.scss";
import Button from "@components/common/common-buttons/Button";

interface IProps {
  title: string;
  description: string;
  onClick: () => void;
  isPopular?: boolean;
}

const ServiceItem = ({ title, description, onClick, isPopular }: IProps) => {
  return (
    <div className={styles.serviceItemWrapper}>
      <div className={styles.serviseItemTop}>
        {isPopular && <span className={styles.popular}>Most Popular</span>}
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <Button
        size={"S"}
        variant={"link"}
        state={"default"}
        onClick={() => onClick}
        placeholder={"Read more"}
      />
    </div>
  );
};

export default ServiceItem;
