import ServiceItem from "./serviceItem/ServiceItem";
import Image from "next/image";

import servicesData from "@app/api/servicesData.json";
import styles from "./styles.module.scss";
import Button from "@components/common/common-buttons/Button";

const ServicesLayout = () => {
  return (
    <div className={styles.servicesContainer}>
      {servicesData.map((service) => (
        <ServiceItem
          key={service.id}
          title={service.title}
          description={service.subtitle}
          onClick={() => console.log(service.title)}
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
          />
          <p className={styles.description}>
            Unleash your sales potential with our marketing
            <span style={{ color: "#7D56E7" }}>services</span>
          </p>
        </div>
        <Button
          size={"S"}
          variant={"primary"}
          state={"default"}
          onClick={() => console.log("call")}
          placeholder={"Book a Call"}
        />
      </div>
    </div>
  );
};

export default ServicesLayout;
