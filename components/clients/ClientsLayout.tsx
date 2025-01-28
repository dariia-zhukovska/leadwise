import Image from "next/image";
import styles from "./styles.module.scss";
import Button from "@components/common/common-buttons/Button";
import { partnerIcons } from "@app/helpers/mockedData";

const ClientsLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>
          Companies driving revenue with LeadWise.
        </h2>
        <p className={styles.subTitle}>
          20+ sales leaders, marketers, and founders across industries trust us
          to drive revenue.
        </p>
      </div>

      <div className={styles.bookCall}>
        {/* <div className={styles.partnersContainer}>
          {partnerIcons.map((icon, index) => (
            <Image
              key={index}
              src={icon}
              alt={`Partner ${index + 1}`}
              width={100}
              height={50}
              loading="lazy"
            />
          ))}
        </div> */}
      </div>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Lead Generation Solutions:</h2>
        <p className={styles.subTitle}>
          Attract high-value clients with our proven lead generation solutions.
          Our tailored strategies ensure client acquisition and sustainable
          growth.
        </p>
      </div>
    </div>
  );
};

export default ClientsLayout;
