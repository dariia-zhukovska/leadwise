import React from "react";
import styles from "./not-found/styles.module.scss";
import Button from "@components/common/common-buttons/Button";
import Link from "next/link";
import MonumentExtendedBold from "next/font/local";

const monumentExtended = MonumentExtendedBold({
  src: "../styles/fonts/MonumentExtended-Regular.otf",
});

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={monumentExtended.className}>404</h1>
      <h2>Page not found</h2>
      <p>Don&rsquo;t worry, it happens to the best of us.</p>
      <Link href={"/"}>
        <Button
          size={"S"}
          variant={"primary"}
          state={"default"}
          placeholder={"To Homepage"}
        />
      </Link>
    </div>
  );
};

export default NotFound;
