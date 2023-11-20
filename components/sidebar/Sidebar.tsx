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
  return (
    <div className={`${styles.mobileSidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.closeButton} onClick={onClose}>
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
            <Link href="/services/appointment-settings" onClick={onClose}>
              Appointment Settings
            </Link>
            <Link href="/services/demand-generation" onClick={onClose}>
              Demand Generation
            </Link>
            <Link href="/services/email-outreach" onClick={onClose}>
              Cold Email Outreach
            </Link>
            <Link href="/services/linkedin-marketing" onClick={onClose}>
              LinkedIn Marketing
            </Link>
          </div>
        )}
        <Link href="/case-studies" onClick={onClose}>
          Case Studies
        </Link>
        {/* <Link href="/blog" onClick={onClose}>
          Blog
        </Link> */}
        <Link href="/about-us" onClick={onClose}>
          About Us
        </Link>
      </nav>
      <div className={styles.elipse}></div>
    </div>
  );
};

export default SideBar;
