import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.scss";
import Button from "@components/common/common-buttons/Button";

const Nav = () => {
  return (
    <nav className={styles.header}>
      <Link href={"/"} className={styles.logoWrapper}>
        <Image
          src={"/public/assets/images/svg/logo.svg"}
          alt={"logo"}
          width={68}
          height={40}
          className={styles.logo}
        />
      </Link>
      <div className={styles.navWrapper}>
        <Link href={"/services"}>Services</Link>
        <Link href={"/case-studies"}>Case Studies</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/about-us"}>About Us</Link>
        <Link href={"/"}>
          <Button
            size={"S"}
            variant={"primary"}
            state={"default"}
            placeholder={"Book a Call"}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
