import Image from "next/image";
import styles from "./styles.module.scss";
import useMediaQuery from "@hooks/useMediaQuery";

interface IProps {
  image: string;
  memberName: string;
  memberDescription: string;
}

const TeamMemberCard = ({ image, memberName, memberDescription }: IProps) => {
  const isMobile = useMediaQuery(768);
  return (
    <div className={styles.cardWrapper}>
      <Image
        src={image}
        alt="team-member-image"
        width={0}
        height={0}
        // width={isMobile ? 350 : 379}
        // height={isMobile ? 476 : 510}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        loading="lazy"
      />
      <div className={styles.memberDetails}>
        <h5 className={styles.memberName}>{memberName}</h5>
        <p className={styles.memberDescription}>{memberDescription}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
