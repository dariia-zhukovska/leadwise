import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import clsx from "clsx";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBar = ({ isOpen, onClose }: IProps) => {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const closeMenu = () => {
    setServicesDropdownOpen(false);
    onClose();
  };

  return (
    <div className={`${styles.mobileSidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.closeButton} onClick={closeMenu}>
        <span>&times;</span>
      </div>
      <nav>
        <div className={styles.serviseTitle} onClick={toggleServicesDropdown}>
          Services
          <Image
            src={"/assets/images/icons/dropdown.svg"}
            alt={"lang"}
            width={24}
            height={24}
            className={clsx(styles.icon, {
              [styles.flipped]: servicesDropdownOpen,
            })}
          />
        </div>
        {servicesDropdownOpen && (
          <div className={styles.dropdownContent}>
            <Link href="/services/appointment-settings" onClick={closeMenu}>
              Appointment Settings
            </Link>
            <Link href="/services/demand-generation" onClick={closeMenu}>
              Demand Generation
            </Link>
            <Link href="/services/email-outreach" onClick={closeMenu}>
              Cold Email Outreach
            </Link>
            <Link href="/services/linkedin-marketing" onClick={closeMenu}>
              LinkedIn Marketing
            </Link>
          </div>
        )}
        <Link
          href="/case-studies"
          onClick={closeMenu}
          className={styles.menuItem}
        >
          Case Studies
        </Link>
        <Link href="/blog" onClick={closeMenu} className={styles.menuItem}>
          Blog
        </Link>

        <Link href="/about-us" onClick={closeMenu} className={styles.menuItem}>
          About Us
        </Link>
      </nav>
      <div className={styles.elipse}></div>
    </div>
  );
};

export default SideBar;
