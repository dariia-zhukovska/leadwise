"use client";

import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.scss";
import Button from "@components/common/common-buttons/Button";
import ServiceDropdown from "./dropdown-services/ServiceDropdown";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { CALENDLY_LINK } from "@app/helpers/mockedData";

const navItems = [
  { id: 2, name: "Case Studies", slug: "case-studies" },
  { id: 3, name: "Blog", slug: "blog" },
  { id: 4, name: "About Us", slug: "about-us" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.header}>
      <Link href={"/"} className={styles.logoWrapper}>
        <Image
          src={"/assets/images/svg/logo.svg"}
          alt={"logo"}
          width={68}
          height={40}
          className={styles.logo}
        />
      </Link>
      <div className={styles.navWrapper}>
        <ServiceDropdown />
        {navItems.map((item) => (
          <Link
            href={`/${item.slug}`}
            key={item.id}
            className={clsx(styles.sidebarItem, {
              [styles.open]: pathname === `/${item.slug}`,
            })}
          >
            {item.name}
          </Link>
        ))}
        <Link href={CALENDLY_LINK}>
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
