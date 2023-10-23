import Image from "next/image";
import styles from "./styles.module.scss";
import Button from "@components/common/common-buttons/Button";

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Lead Wise</h1>
      <p className={styles.subTitle}>
        B2B Lead Generation Agency for Software development, NFT and Blockchain
        Services
      </p>
      <div className={styles.bookCall}>
        <Button
          size={"M"}
          variant={"primary"}
          state={"default"}
          placeholder={"Book a Call"}
        />
        <Image
          src={"/assets/images/main-picture.png"}
          alt={"main-picture"}
          width={560}
          height={364}
        />
      </div>
    </div>
  );
};

export default MainPage;
