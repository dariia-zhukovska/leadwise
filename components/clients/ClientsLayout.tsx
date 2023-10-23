import Image from "next/image";
import styles from "./styles.module.scss";
import Button from "@components/common/common-buttons/Button";

const ClientsLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>
          Companies driving revenue with Lead Prime.
        </h2>
        <p className={styles.subTitle}>
          500+ sales leaders, marketers, and founders across industries trust us
          to drive revenue.
        </p>
      </div>

      <div className={styles.bookCall}>
        <Image
          src={"/assets/images/main-picture.png"}
          alt={"main-picture"}
          width={560}
          height={364}
        />
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
