import { MouseEventHandler } from "react";
import styles from "./styles.module.scss";
import { BsChevronRight } from "react-icons/bs";
interface IProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const NextArrow = ({ onClick }: IProps) => {
  return (
    <div className={styles.nextArrowCotainer} onClick={onClick}>
      <div className={styles.nextButton}>
        <BsChevronRight />
      </div>
    </div>
  );
};

export default NextArrow;
