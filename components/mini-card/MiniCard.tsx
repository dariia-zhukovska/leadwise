import Button from "@components/common/common-buttons/Button";
import styles from "./styles.module.scss";

interface IProps {
  number: string;
  content: string;
}

const MiniCard = ({ number, content }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.number}>{number}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default MiniCard;
