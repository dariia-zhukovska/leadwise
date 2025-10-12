import Image from "next/image";
import styles from "./styles.module.scss";
import useMediaQuery from "@hooks/useMediaQuery";

interface IProps {
  ceoImgLarge: string;
  companyLogo: string;
  ceoImgSmall: string;
  ceoName: string;
  ceoTitle: string;
  feedbackDescription: string;
}

const FeedbackCard = ({
  ceoImgLarge,
  companyLogo,
  ceoImgSmall,
  ceoName,
  ceoTitle,
  feedbackDescription,
}: IProps) => {
  const isMobile = useMediaQuery(1200);

  return (
    <div className={styles.cardWrapper}>
      {isMobile ? (
        <>
          <div className={styles.ceoSmallInfo}>
            <Image
              src={ceoImgSmall}
              alt={ceoName}
              width={60}
              height={60}
              className={styles.ceoAvatar}
            />
            <div>
              <h5 className={styles.ceoName}>{ceoName}</h5>
              <p className={styles.ceoTitle}>{ceoTitle}</p>
            </div>
          </div>
          <div className={styles.mobileTopSection}>
            <Image
              src={ceoImgLarge}
              alt="CEO"
              width={350}
              height={476}
              className={styles.ceoImgMobile}
            />
            <Image
              src={companyLogo}
              alt="Company Logo"
              width={60}
              height={60}
              className={styles.companyLogoMobile}
            />
          </div>

          <p className={styles.feedbackDescription}>{feedbackDescription}</p>
        </>
      ) : (
        <>
          <div className={styles.leftWrapper}>
            <Image
              src={companyLogo}
              alt="Company Logo"
              width={200}
              height={200}
              className={styles.companyLogo}
            />
            <Image
              src={ceoImgLarge}
              alt="CEO"
              width={488}
              height={366}
              className={styles.ceoImg}
            />
          </div>
          <div className={styles.rightWrapper}>
            <div className={styles.feedbackDetails}>
              <p className={styles.feedbackDescription}>
                {feedbackDescription}
              </p>
              <div>___</div>
              <div className={styles.titleData}>
                <Image
                  src={ceoImgSmall}
                  alt={ceoName}
                  width={60}
                  height={60}
                  className={styles.ceoAvatar}
                />
                <div>
                  <h5 className={styles.ceoName}>{ceoName}</h5>
                  <p className={styles.ceoTitle}>{ceoTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FeedbackCard;
