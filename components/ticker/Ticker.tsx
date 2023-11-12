"yse client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface IProps {
  items: string[];
  interval: number;
}

const Ticker = ({ items, interval }: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [items, interval]);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Clients&rsquo; results:</span>{" "}
      <div className={styles.wrapper}>
        <div className={styles.ticker}>
          <span> {items[currentIndex]}</span>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
