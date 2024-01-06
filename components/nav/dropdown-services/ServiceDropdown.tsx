"use client";

import React, { useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Image from "next/image";
import Button from "@components/common/common-buttons/Button";
import { CALENDLY_LINK, services } from "@app/helpers/mockedData";
import Link from "next/link";

const ServiceDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const renderDropdownOptions = () => {
    if (!isOpen) {
      return null;
    }

    return (
      <div className={styles.dropdownOptions}>
        <div className={styles.dropdownOption} onClick={() => setIsOpen(false)}>
          {services.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.id}>
              <div className={styles.dropdownOptionItem}>
                <div className={styles.name}>{service.name}</div>
                <div className={styles.subtitle}>{service.subtitle}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.bookCallItem}>
          <div className={styles.serviseItemTop}>
            <Image
              src={"/assets/images/svg/logo.svg"}
              alt={"logo"}
              width={68}
              height={40}
              className={styles.logo}
              loading="lazy"
            />
            <p className={styles.description}>
              Unleash your sales potential with our marketing
              <span style={{ color: "#7D56E7" }}> Services</span>
            </p>
          </div>
          <Link href={CALENDLY_LINK} target="_blank">
            <Button
              size={"S"}
              variant={"primary"}
              state={"default"}
              onClick={() => console.log("call")}
              placeholder={"Book a Call"}
            />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.serviceDropdown}>
      <div className={styles.selectedService} onClick={toggleDropdown}>
        Services
        <Image
          src={"/assets/images/svg/down.svg"}
          alt={"lang"}
          width={12}
          height={6}
          className={clsx(styles.icon, {
            [styles.flipped]: isOpen,
          })}
          loading="lazy"
        />
      </div>
      {renderDropdownOptions()}
    </div>
  );
};

export default ServiceDropdown;
