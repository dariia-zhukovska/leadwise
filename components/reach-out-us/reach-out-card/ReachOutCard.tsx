"use client";

import Button from "@components/common/common-buttons/Button";
import styles from "./styles.module.scss";
import Link from "next/link";

interface IProps {
  title: string;
  description: string;
}

const ReachOutCard = ({ title, description }: IProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
       <Link href={"https://calendly.com/dariia-zhukovska/30min"}> <Button
        size={"S"}
        variant={"primary"}
        state={"default"}
        onClick={() => console.log("call")}
        placeholder={"Book a Call"}
      /></Link>
     
    </div>
  );
};

export default ReachOutCard;
