"use client";

import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.scss";
import Button from "@components/common/common-buttons/Button";
import ServiceDropdown from "./dropdown-services/ServiceDropdown";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { CALENDLY_LINK } from "@app/helpers/mockedData";
import useMediaQuery from "@hooks/useMediaQuery";
import SideBar from "@components/sidebar/Sidebar";
import { useState } from "react";

const navItems = [
  { id: 1, name: "Case Studies", slug: "case-studies" },
  // { id: 2, name: "Blog", slug: "blog" },
  { id: 3, name: "About Us", slug: "about-us" },
];

const Nav = () => {
  const pathname = usePathname();
  const isTablet = useMediaQuery(1025);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className={styles.header}>
      <Link href={"/"} className={styles.logoWrapper}>
        <Image
          src={"/assets/images/svg/logo.svg"}
          alt={"logo"}
          width={68}
          height={40}
          className={styles.logo}
          loading="lazy"
        />
      </Link>
      {!isTablet ? (
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
      ) : (
        <>
          <div className={styles.burgerMenu} onClick={toggleSidebar}></div>
          <SideBar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </>
      )}
    </nav>
  );
};

export default Nav;
