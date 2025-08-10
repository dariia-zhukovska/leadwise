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
  const isMobile = useMediaQuery(768);
  return (
    <div className={styles.cardWrapper}>
      <Image
        src={ceoImgLarge}
        alt="team-feedback-image"
        width={0}
        height={0}
        // width={isMobile ? 350 : 379}
        // height={isMobile ? 476 : 510}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        loading="lazy"
      />
      <Image
        src={ceoImgSmall}
        alt="team-feedback-image"
        width={0}
        height={0}
        // width={isMobile ? 350 : 379}
        // height={isMobile ? 476 : 510}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        loading="lazy"
      />
      <div className={styles.feedbackDetails}>
        <h5 className={styles.feedbackName}>{ceoName}</h5>
        <p className={styles.feedbackDescription}>{feedbackDescription}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
