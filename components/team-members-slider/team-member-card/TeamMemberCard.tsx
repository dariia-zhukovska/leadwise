import Image from "next/image";
import styles from "./styles.module.scss";

interface IProps {
  image: string;
  memberName: string;
  memberDescription: string;
}

const TeamMemberCard = ({ image, memberName, memberDescription }: IProps) => {
  return (
    <div className={styles.cardWrapper}>
      <Image src={image} alt="team-member-image" width={380} height={510} />
      <div className={styles.memberDetails}>
        <h5 className={styles.memberName}>{memberName}</h5>
        <p className={styles.memberDescription}>{memberDescription}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
