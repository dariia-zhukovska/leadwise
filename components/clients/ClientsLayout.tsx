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
          Companies driving revenue with Lead Wise.
        </h2>
        <p className={styles.subTitle}>
          500+ sales leaders, marketers, and founders across industries trust us
          to drive revenue.
        </p>
      </div>

      <div className={styles.bookCall}>
        <div className={styles.partnersContainer}>
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
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>
          Lead Generation services that Win Clients
        </h2>
        <p className={styles.subTitle}>
          You can put all your energy into scaling your business while we set up
          a consistent stream of vetted business leads to your pipeline
        </p>
      </div>
    </div>
  );
};

export default ClientsLayout;
