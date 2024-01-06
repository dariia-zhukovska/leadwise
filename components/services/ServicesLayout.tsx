import ServiceItem from "./serviceItem/ServiceItem";
import Image from "next/image";

import servicesData from "@app/api/servicesData.json";
import styles from "./styles.module.scss";
import Button from "@components/common/common-buttons/Button";
import Link from "next/link";
import { CALENDLY_LINK } from "@app/helpers/mockedData";

const ServicesLayout = () => {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.background}></div>
      {servicesData.map((service) => (
        <ServiceItem
          key={service.id}
          title={service.title}
          description={service.subtitle}
          slug={service.slug}
        />
      ))}
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
            <span style={{ color: "#7D56E7" }}> services</span>
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

export default ServicesLayout;
