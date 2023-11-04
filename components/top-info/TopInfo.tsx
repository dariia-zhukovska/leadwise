import Button from "@components/common/common-buttons/Button";
import Image from "next/image";
import styles from "./styles.module.scss";
import MonumentExtendedBold from "next/font/local";
import clsx from "clsx";

const monumentExtended = MonumentExtendedBold({
  src: "../../styles/fonts/MonumentExtended-Regular.otf",
});

interface IProps {
  mainTitle: string;
  subtitle: string;
  description: string;
  buttonPlaceholder: string;
  imageSrc: string;
}

const TopInfo = ({
  mainTitle,
  subtitle,
  description,
  buttonPlaceholder,
  imageSrc,
}: IProps) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerInfo}>
        <h3 className={clsx(styles.serviceTitle, monumentExtended.className)}>
          {mainTitle}
        </h3>

        <h1 className={styles.serviceSubtitle}>{subtitle}</h1>
        <span className={styles.serviceDescription}>{description}</span>
        <Button
          size={"S"}
          variant={"primary"}
          state={"default"}
          placeholder={buttonPlaceholder}
        />
      </div>
      <Image
        src={imageSrc}
        alt={"service-item-title"}
        width={627}
        height={417}
      />
    </div>
  );
};

export default TopInfo;
