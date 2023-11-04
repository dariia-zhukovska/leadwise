"use client";

import Button from "@components/common/common-buttons/Button";
import styles from "./styles.module.scss";

interface IProps {
  title: string;
  description: string;
}

const ReachOutCard = ({ title, description }: IProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <Button
        size={"S"}
        variant={"primary"}
        state={"default"}
        onClick={() => console.log("call")}
        placeholder={"Book a Call"}
      />
    </div>
  );
};

export default ReachOutCard;
